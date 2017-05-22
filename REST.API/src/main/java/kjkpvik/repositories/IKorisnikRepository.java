package kjkpvik.repositories;

import kjkpvik.models.Korisnik;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Siii on 5/9/2017.
 */
public interface IKorisnikRepository extends PagingAndSortingRepository<Korisnik, Long> {
    Korisnik findKorisnikByUsername(String username);
    Korisnik findKorisnikById(Long id);
}
