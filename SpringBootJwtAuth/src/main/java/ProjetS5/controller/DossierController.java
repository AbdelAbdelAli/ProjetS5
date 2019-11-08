package ProjetS5.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ProjetS5.exception.ResourceNotFoundException;
import ProjetS5.model.Dossier;
import ProjetS5.repository.DossierRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class DossierController {
	@Autowired
	private DossierRepository dossierRepository;

	@GetMapping("/dossiers")
	public List<Dossier> getAllDossiers() {
		return dossierRepository.findAll();
	}

	@GetMapping("/dossiers/{id}")
	public ResponseEntity<Dossier> getDossierById(@PathVariable(value = "id") Long dossierId)
			throws ResourceNotFoundException {
		Dossier dossier = dossierRepository.findById(dossierId)
				.orElseThrow(() -> new ResourceNotFoundException("Dossier not found for this id :: " + dossierId));
		return ResponseEntity.ok().body(dossier);
	}

	@PostMapping("/dossiers")
	public Dossier createDossier(@Valid @RequestBody Dossier dossier) {
		return dossierRepository.save(dossier);
	}

	@PutMapping("/dossiers/{id}")
	public ResponseEntity<Dossier> updateDossier(@PathVariable(value = "id") Long dossierId,
			@Valid @RequestBody Dossier dossierDetails) throws ResourceNotFoundException {
		Dossier dossier = dossierRepository.findById(dossierId)
				.orElseThrow(() -> new ResourceNotFoundException("Dossier not found for this id :: " + dossierId));

		dossier.setDate(dossierDetails.getDate());
		dossier.setNomPatient(dossierDetails.getNomPatient());
		dossier.setNumDossier(dossierDetails.getNumDossier());
		dossier.setTelPatient(dossierDetails.getTelPatient());
		final Dossier updatedDossier = dossierRepository.save(dossier);
		return ResponseEntity.ok(updatedDossier);
	}

	@DeleteMapping("/dossiers/{id}")
	public Map<String, Boolean> deleteDossier(@PathVariable(value = "id") Long dossierId)
			throws ResourceNotFoundException {
		Dossier dossier = dossierRepository.findById(dossierId)
				.orElseThrow(() -> new ResourceNotFoundException("Dossier not found for this id :: " + dossierId));

		dossierRepository.delete(dossier);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
