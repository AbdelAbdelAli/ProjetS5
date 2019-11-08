package ProjetS5.model;




import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Dossiers")
public class Dossier {
	private long id;
	private long numDossier;
	private Date date;
	private String nomPatient;
	private String telPatient;

	
	
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "date", nullable = false)
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	@Column(name = "numDossier", nullable = false)
	public long getNumDossier() {
		return numDossier;
	}
	public void setNumDossier(long numDossier) {
		this.numDossier = numDossier;
	}
	
	@Column(name = "nomPatient", nullable = false)
	public String getNomPatient() {
		return nomPatient;
	}
	public void setNomPatient(String nomPatient) {
		this.nomPatient = nomPatient;
	}
	
	@Column(name = "telPatient", nullable = false)
	public String getTelPatient() {
		return telPatient;
	}
	public void setTelPatient(String telPatient) {
		this.telPatient = telPatient;
	}
	public Dossier(long id, long numDossier, Date date, String nomPatient, String telPatient) {
		super();
		this.id = id;
		this.numDossier = numDossier;
		this.date = date;
		this.nomPatient = nomPatient;
		this.telPatient = telPatient;
	}
	public Dossier() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
