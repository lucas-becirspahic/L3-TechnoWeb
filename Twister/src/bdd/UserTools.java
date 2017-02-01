package bdd;

import org.json.JSONObject;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import services.Database;
import services.ErrorJSON;
import services.ServicesTools;

public class UserTools {
	
	public static JSONObject createUser(String login, String pwd, String name,
			String pname){
		
		/* arguments nuls */
		if (login == null || pwd == null){
			return ErrorJSON.serviceRefused("Wrong arguments", -1);
		}
		
		try {
			if (ServicesTools.userExists(login)){
				return ErrorJSON.serviceRefused("User already exists", 1);
			}
			/* si l'utilisateur n'existe pas, on l'ajoute */
			else {
				Connection conn = Database.getMySQLConnection();
				String query = "INSERT INTO Users VALUES (" + login + ", " + 
															pwd + " ," + name + " ," +
															pname + ")";
				Statement st = conn.createStatement();
				st.executeUpdate(query);
				ResultSet rs = st.getResultSet();
				
				// vérifie s'il y a une ligne dans le résultat
				rs.close(); st.close(); conn.close();
			}
		}
		catch (Exception e){
			/* dont JSONException */
			
		}	
		/* succès */
		JSONObject ret = new JSONObject();
		return ret;
	}
	
	public static JSONObject login(String login, String pwd){
		JSONObject ret = new JSONObject();
		
		/* arguments nuls */
		if (login == null || pwd == null){
			return ErrorJSON.serviceRefused("Wrong arguments", -1);
		}	
		
		try {
			/* si l'utilisateur n'existe pas, on refuse */
			if (! ServicesTools.userExists(login)){
				return ErrorJSON.serviceRefused("User doesn't exist", 1);
			}
			
			/* l'utilisateur existe 
			 * on vérifie son mot de passe
			 * si correct, on lui attribue une clé de session
			 */
			else {
				if (! ServicesTools.checkPassword(login, pwd)){
					return ErrorJSON.serviceRefused("Incorrect password", 2);
				}
				else {
					int id = ServicesTools.getIdUser(login);
					
					/* vérifier si admin ou pas */
					String key = ServicesTools.insertSession(id, false);
					ret.put("key", key);
				}
			}
		} catch (SQLException e){
			
		} catch (Exception e){
			/* dont JSONException */
			
		}	
		return ret;
	}
	
	public static JSONObject logout(String login){
		JSONObject ret = new JSONObject();
		
		/* arguments nuls */
		if (login == null){
			return ErrorJSON.serviceRefused("Wrong arguments", -1);
		}	
		
		try {
			if (! ServicesTools.userExists(login)){
					return ErrorJSON.serviceRefused("User doesn't exist", 1);
				}
				else {
					int id = ServicesTools.getIdUser(login);
					ServicesTools.removeSession(id);
				}
		} catch (SQLException e){
			
		} catch (Exception e){
			
		}
		return ret;
	}

}