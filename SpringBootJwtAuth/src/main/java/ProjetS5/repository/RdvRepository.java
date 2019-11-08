package ProjetS5.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ProjetS5.model.Rdv;

@Repository
public interface RdvRepository extends JpaRepository<Rdv, Long>{

}
