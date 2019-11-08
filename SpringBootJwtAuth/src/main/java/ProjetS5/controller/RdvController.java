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
import ProjetS5.model.Rdv;
import ProjetS5.repository.RdvRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class RdvController {
	@Autowired
	private RdvRepository rdvRepository;

	@GetMapping("/rdvs")
	public List<Rdv> getAllRdvs() {
		return rdvRepository.findAll();
	}

	@GetMapping("/rdvs/{id}")
	public ResponseEntity<Rdv> getRdvById(@PathVariable(value = "id") Long rdvId)
			throws ResourceNotFoundException {
		Rdv rdv = rdvRepository.findById(rdvId)
				.orElseThrow(() -> new ResourceNotFoundException("Rdv not found for this id :: " + rdvId));
		return ResponseEntity.ok().body(rdv);
	}

	@PostMapping("/rdvs")
	public Rdv createRdv(@Valid @RequestBody Rdv rdv) {
		return rdvRepository.save(rdv);
	}

	@PutMapping("/rdvs/{id}")
	public ResponseEntity<Rdv> updateRdv(@PathVariable(value = "id") Long rdvId,
			@Valid @RequestBody Rdv rdvDetails) throws ResourceNotFoundException {
		Rdv rdv = rdvRepository.findById(rdvId)
				.orElseThrow(() -> new ResourceNotFoundException("Rdv not found for this id :: " + rdvId));

		rdv.setEmailId(rdvDetails.getEmailId());
		rdv.setDate(rdvDetails.getDate());
		rdv.setName(rdvDetails.getName());
		final Rdv updatedRdv = rdvRepository.save(rdv);
		return ResponseEntity.ok(updatedRdv);
	}

	@DeleteMapping("/rdvs/{id}")
	public Map<String, Boolean> deleteRdv(@PathVariable(value = "id") Long rdvId)
			throws ResourceNotFoundException {
		Rdv rdv = rdvRepository.findById(rdvId)
				.orElseThrow(() -> new ResourceNotFoundException("Rdv not found for this id :: " + rdvId));

		rdvRepository.delete(rdv);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
