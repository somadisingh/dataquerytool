package com.example.reactql.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TableInfo {
    
    @Id
    private String table_name;

    public TableInfo() {
        super();
    }

    public TableInfo(String table_name) {
        super();
        this.table_name = table_name;
    }

    public String getTable_name() {
        return table_name;
    }

    public void setTable_name(String carriercode) {
        this.table_name = table_name;
    }

    @Override
    public String toString() {
        return "TableInfo [table_name=" + table_name + "]";
    }
}
