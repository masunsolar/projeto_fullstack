package com.unifil.jogoseducativos.Controller;

public class UserController {

    private long id;
    private String nome;

    public String getNomeById(long id) {
        // classe de teste auxiliar (placeholder)
        return "usuario-" + id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
