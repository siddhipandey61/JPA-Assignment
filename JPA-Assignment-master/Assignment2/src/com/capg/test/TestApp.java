package com.capg.test;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.capg.entities.Author;
import com.capg.entities.Book;

public class TestApp {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("Assignment2");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
				Author auth=new Author(101, "Dk");
		Author auth1=new Author(102,"Dr. Naryan");
		Book b=new Book(104,"George",122,"C",3500);
		
		entityManager.getTransaction().begin();
		entityManager.persist(auth);
		entityManager.persist(auth1);
		entityManager.persist(b);
		entityManager.getTransaction().commit();
		System.out.println("Data Saved");
		Query namedquery=entityManager.createNamedQuery("getbook");
		List<Author> author=namedquery.getResultList();
		for(Author aut:author)
		{
			System.out.println(aut);
			System.out.println("Executed Result");
		}
		entityManagerFactory.close();
		

		
	}

}
