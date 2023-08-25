package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "deportes", path = "deportes")
public interface DeporteRepository extends CrudRepository<Deporte, Long> {
    
}
