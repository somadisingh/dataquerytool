package com.example.reactql.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.reactql.dao.TableInfoRepo;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FetchTableService implements TableInfoService {

    private final TableInfoRepo tableInfoRepo;

    @Autowired
    public FetchTableService(TableInfoRepo tableInfoRepo) {
        this.tableInfoRepo = tableInfoRepo;
    }

    @Override
    public List<String> getAllTableNames() {
        return tableInfoRepo.findAll().stream()
                .map(tableInfo -> tableInfo.getTable_name())
                .collect(Collectors.toList());
    }
}
