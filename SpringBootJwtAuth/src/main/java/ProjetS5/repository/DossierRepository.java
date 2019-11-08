package ProjetS5.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ProjetS5.model.Dossier;

@Repository
public interface DossierRepository extends JpaRepository<Dossier, Long>{

}
