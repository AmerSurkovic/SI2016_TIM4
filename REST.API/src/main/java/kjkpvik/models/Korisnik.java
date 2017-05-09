package kjkpvik.models;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Siii on 5/8/2017.
 */
@Entity
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
    private String username;
    private String password;
    private String email;

    public Korisnik () {}

    public Korisnik (String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // veza sa rolom
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Rola.class)
    private Rola rolaID;

    //veza sa anketom
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "korisnikID", targetEntity = Anketa.class)
    private List<Anketa> ankete = new ArrayList<>();

    //veza sa odgovorom
    @OneToOne(fetch = FetchType.LAZY, targetEntity = Odgovor.class, mappedBy = "korisnikID", cascade = CascadeType.ALL)
    @NotFound(action = NotFoundAction.IGNORE)
    private Odgovor odgovor;

    //veza sa zalbom
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "korisnikID", targetEntity = Zalba.class)
    private List<Zalba> zalbe = new ArrayList<>();

    //vaza sa zabranjenomRijeci
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "korisnikID", targetEntity = ZabranjenaRijec.class)
    private List<ZabranjenaRijec> zabranjeneRijeci = new ArrayList<>();

    //vaza sa obavijesti
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "korisnikID", targetEntity = Obavijest.class)
    private List<Obavijest> obavijesti = new ArrayList<>();

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Rola getRolaID() {
        return rolaID;
    }

    public void setRolaID(Rola rolaID) {
        this.rolaID = rolaID;
    }

    public List<Anketa> getAnkete() {
        return ankete;
    }

    public void setAnkete(List<Anketa> ankete) {
        this.ankete = ankete;
    }

    public Odgovor getOdgovor() {
        return odgovor;
    }

    public void setOdgovor(Odgovor odgovor) {
        this.odgovor = odgovor;
    }

    public List<Zalba> getZalbe() {
        return zalbe;
    }

    public void setZalbe(List<Zalba> zalbe) {
        this.zalbe = zalbe;
    }

    public List<ZabranjenaRijec> getZabranjeneRijeci() {
        return zabranjeneRijeci;
    }

    public void setZabranjeneRijeci(List<ZabranjenaRijec> zabranjeneRijeci) {
        this.zabranjeneRijeci = zabranjeneRijeci;
    }

    public List<Obavijest> getObavijesti() {
        return obavijesti;
    }

    public void setObavijesti(List<Obavijest> obavijesti) {
        this.obavijesti = obavijesti;
    }
}
