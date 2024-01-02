package com.example.reactql.entities;
// for configuring datasource
public class DataSourceConfig {

    private String url;
    private String username;
    private String password;
    private String databasename;

    public DataSourceConfig() {
        super();
    }

    public DataSourceConfig(String url, String username, String password, String databasename) {
        super();
        this.url = url;
        this.username = username;
        this.password = password;
        this.databasename = databasename;

    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUsername() {
        return username;
    }   

    public void setUsername(String username) {
        this.username = username;
    }   

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getdatabasename() {
        return databasename;
    }

    public void setdatabasename(String databasename) {
        this.databasename = databasename;
    }

    @Override
    public String toString() {
        return "DataSourceConfig [url=" + url + ", username=" + username + ", password=" + password + ", databasename="
                + databasename + "]";
    }
    
}
