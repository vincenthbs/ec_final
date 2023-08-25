package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "equipos", path = "equipos")
public interface EquipoRepository extends CrudRepository<Equipo, Long> {
    
}
