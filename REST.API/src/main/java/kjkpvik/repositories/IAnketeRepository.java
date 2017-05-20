package kjkpvik.repositories;

import kjkpvik.models.Anketa;

import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Siii on 5/9/2017.
 */
public interface IAnketeRepository extends PagingAndSortingRepository<Anketa, Long> {
}
