package br.com.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.model.Usuario;
import br.com.projeto.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/Registro")
@CrossOrigin(origins = "*")
public class Registro {
    @Autowired
    private UsuarioRepository _UsuarioRepository;
    @PostMapping("/SalvarUsuario")
    public Usuario SalvarUsuario(@RequestBody Usuario usuario) {
            return _UsuarioRepository.save(usuario);
    }
    @GetMapping("/ObterUsuario")
    public List<Usuario> ObterUsuario() {
        return _UsuarioRepository.findAll();
    }
}
