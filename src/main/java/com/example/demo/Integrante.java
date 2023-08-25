package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Integrante {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_equipo")
    private Equipo equipo;

    @ManyToOne()
    @JoinColumn(name = "id_musico")
    private Persona musico;

    @ManyToOne()
    @JoinColumn(name = "id_instrumento")
    private Deporte instrumento;

    public Integrante() {}

    public Integrante(Equipo equipo, Persona musico, Deporte instrumento) {
        this.equipo = equipo;
        this.musico = musico;
        this.instrumento = instrumento;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Equipo getEquipo() {
		return equipo;
	}

	public void setEquipo(Equipo equipo) {
		this.equipo = equipo;
	}

	public Persona getMusico() {
		return musico;
	}

	public void setMusico(Persona musico) {
		this.musico = musico;
	}

	public Deporte getInstrumento() {
		return instrumento;
	}

	public void setInstrumento(Deporte instrumento) {
		this.instrumento = instrumento;
	}

}