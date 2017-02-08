package services;

import java.sql.ResultSet;
import java.sql.SQLException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import bdd.BDException;

public class AuthTools {

	public static boolean userExists(String login) throws SQLException{
		boolean exists = false;
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();

		String query = "SELECT id FROM Users WHERE login = \'" + login +"\'";
		st.executeQuery(query);
		ResultSet rs = st.getResultSet();
			
		// vérifie s'il y a une ligne dans le résultat
		exists = rs.next();
		rs.close(); st.close(); conn.close();
		return exists;
	}
	
	public static boolean userExists(int id) throws SQLException{
		boolean exists = false;
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();

		String query = "SELECT login FROM Users WHERE id = " + id;
		st.executeQuery(query);
		ResultSet rs = st.getResultSet();
			
		// vérifie s'il y a une ligne dans le résultat
		exists = rs.next();
		rs.close(); st.close(); conn.close();
		return exists;
	}
	
	public static boolean checkPassword(String login, String pwd) throws SQLException{
		boolean pwd_ok = false;;
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		String query = "SELECT mdp FROM Users WHERE login = \'" + login +"\'";
		st.executeQuery(query);
		ResultSet rs = st.getResultSet();
		
		if (rs.next()){
			String pwdDB = rs.getString("mdp");
			pwd_ok = pwd.equals(pwdDB);
		}
		rs.close(); st.close(); conn.close();
		
		return pwd_ok;
	 
	}
	
	public static int getIdUser(String login) throws SQLException{
		int id = -1; 
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		String query = "SELECT id FROM Users WHERE login = \'" + login +"\'";
		st.executeQuery(query);
		ResultSet rs = st.getResultSet();
		//id = rs.getInt("id");
		if(rs.next()){
			id = rs.getInt("id");
		}

		rs.close(); st.close(); conn.close();
		return id;
	}
	
	public static String getLoginUser(int id) throws SQLException{
		String login = "";
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		String query = "SELECT login FROM Users WHERE id = " + id;
		st.executeQuery(query);
		ResultSet rs = st.getResultSet();
		//id = rs.getInt("id");
		if(rs.next()){
			login = rs.getString("login");
		}

		rs.close(); st.close(); conn.close();
		return login;
	}
	
	/** retourne une clé de session */
	public static String insertSession(int id, boolean admin) throws SQLException{
		
		// true si la clé de session existe déjà
		boolean keyExists;
		String key = "";
		String query;
		
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		do {
			key = Password.generateRandomKey();
			//System.out.println(key);
			query = "SELECT session_key FROM Sessions WHERE session_key = \"" + key + "\"";
			st.executeQuery(query);
			ResultSet rs = st.getResultSet();
			
			// vérifie si la clé existe
			keyExists = rs.next();
			rs.close();
		} while (keyExists);
			
		// on crée une nouvelle session active
		query = "INSERT INTO Sessions VALUES (\"" + key + "\" ," + id + " , NOW(), " + admin + ")";
		st.executeUpdate(query);
		st.close(); conn.close();
		 
		return key;
	}
	
	public static boolean hasSession(int id) throws SQLException{
		boolean exists = false;
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		String query = "SELECT id FROM Sessions WHERE id = " + id;
		ResultSet rs = st.executeQuery(query);
		
		exists = rs.next();
		rs.close(); st.close(); conn.close();
		return exists;
	}
	
	public static boolean removeSession(int id) throws SQLException{
		int success;
		Connection conn = Database.getMySQLConnection();
		Statement st = conn.createStatement();
		
		String query = "DELETE FROM Sessions WHERE id = " + id;
		success = st.executeUpdate(query);
		//System.out.println(success);
		st.close(); conn.close();
		return success == 1;
	}
	
}
