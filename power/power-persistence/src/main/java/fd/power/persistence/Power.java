package fd.power.persistence;
import java.io.Serializable;
import javax.persistence.*;
/**
 * Entity implementation class for Entity: power
 *
 */
@Entity
public class Power implements Serializable {

	private static final long serialVersionUID = 1L;
    
	public Power() {
		super();
	}

	@Id
    @GeneratedValue
	private Long id;
	private String electricity;
	private String gas;
	private String month;

	// Id
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	// Electricity
	public String getElectricity() {
		return electricity;
	}
	public void setElectricity(String electricity) {
		this.electricity = electricity;
	}
	// Gas
	public String getGas() {
		return gas;
	}
	public void setGas(String gas) {
		this.gas = gas;
	}
	
	// Month
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
}