package kjkpvik.models;

import javax.persistence.*;

/**
 * Created by Siii on 5/8/2017.
 */

@Entity
public class Odgovor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private String tekst;

    //veza sa korisnikom
    @OneToOne(fetch = FetchType.LAZY)
    private Korisnik korisnikID;

    // veza sa pitanjem
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Pitanje.class)
    private Pitanje pitanjeID;
}
