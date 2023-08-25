package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final DeporteRepository repositoryE;
    private final PersonaRepository repositoryM;
    private final EquipoRepository repositoryB;
    private final IntegranteRepository repositoryN;

    @Autowired
    public DatabaseLoader(
        DeporteRepository repositoryE,
        PersonaRepository repositoryM,
        EquipoRepository repositoryB,
        IntegranteRepository repositoryN
    ) {
        this.repositoryE = repositoryE;
        this.repositoryM = repositoryM;
        this.repositoryB = repositoryB;
        this.repositoryN = repositoryN;
    }

    @Override
    public void run(String... strings) throws Exception {

        Deporte tenis = new Deporte("tenis","niños","se puede jugar de 1 contra 1 o de 2 contra 2");
        Deporte futbol = new Deporte("futbol","desde niños a adultos",".");
        Deporte basket = new Deporte("basket","jovenes", ".");
        Deporte futbolAmericano = new Deporte("futol americano","fuerza bruta",".");

        this.repositoryE.save(tenis);
        this.repositoryE.save(futbol);
        this.repositoryE.save(basket);
        this.repositoryE.save(futbolAmericano);

        Persona danielF = new Persona("Daniel F");
        Persona freddy = new Persona("Freddy");
        Persona brian = new Persona("Brian");

        this.repositoryM.save(danielF);
        this.repositoryM.save(freddy);
        this.repositoryM.save(brian);

        Equipo queen = new Equipo("Queen");
        this.repositoryB.save(queen);

        this.repositoryN.save(new Integrante(queen, freddy, futbol));
        this.repositoryN.save(new Integrante(queen, brian, basket));
    }
}
