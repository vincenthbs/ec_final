package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(path = "/api/equipos/{id}/formacion")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id) {
        String sql = "SELECT integrante.id as ID, persona.nombre as PERSONA, deporte.nombre as DEPORTE FROM integrante JOIN persona ON integrante.id_persona=persona.id JOIN deporte ON integrante.id_deporte=deporte.id WHERE integrante.id_equipo = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
}
