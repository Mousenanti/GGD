(() => {
    const cadetBarTemplate = document.createElement('template');
  
    cadetBarTemplate.innerHTML = `
    <div class="col-md-2 py-4 ps-4">
        <a class="d-flex btn btn-light text-start w-100" href="pod.html">
          <span class="material-symbols-outlined me-2">
            description
          </span>
          <p>POD</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="calendar.html">
          <span class="material-symbols-outlined me-2">
            calendar_month
          </span>
          <p>Calendar</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="chainofcommand.html">
          <span class="material-symbols-outlined me-2">
            person
          </span>
          <p>Chain of Command</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="supply.html">
          <span class="material-symbols-outlined me-2">
            import_contacts
          </span>
          <p>Supply</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="https://quarterdeck.seacadets.org/">
          <span class="material-symbols-outlined me-2">
            military_tech
          </span>
          <p>Quarterdeck</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="payment.html">
          <span class="material-symbols-outlined me-2">
            attach_money
          </span>
          <p>Payment</p>
        </a>
        <a class="d-flex btn btn-light text-start w-100" href="">
          <span class="material-symbols-outlined me-2">
            directions_run
          </span>
          <p>PRT Standards</p>
        </a>
      </div>
    </div>
    `;
    class CadetBar extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        this.innerHTML = cadetBarTemplate.innerHTML;
      }
    }
  
    customElements.define('cadet-bar', CadetBar);

  })();