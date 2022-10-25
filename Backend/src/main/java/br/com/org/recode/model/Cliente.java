package br.com.org.recode.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

@Entity
public class Cliente {

	 @Column(nullable = false)
	  private String nome;
	 
	 @Column(nullable = false)
	  private String email;

   @Column(nullable = false)
   private String senha;
}
