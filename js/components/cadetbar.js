(() => {
    const cadetBarTemplate = document.createElement('template');
  
    cadetBarTemplate.innerHTML = `
    <div>
    <a class="d-flex btn btn-light text-start w-100" href="pod.html">
      <span class="material-symbols-outlined me-2">
        description
      </span>
      POD
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="calendar.html">
      <span class="material-symbols-outlined me-2">
        calendar_month
      </span>
      Calendar
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="chainofcommand.html">
      <span class="material-symbols-outlined me-2">
        person
      </span>
      Chain of Command
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="promotionmatrix.html">
      <span class="material-symbols-outlined me-2">
        person
      </span>
      Promotion Matrix
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="supply.html">
      <span class="material-symbols-outlined me-2">
        checkroom
      </span>
      Supply
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="resources.html">
      <span class="material-symbols-outlined me-2">
        import_contacts
      </span>
      Resources
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="https://quarterdeck.seacadets.org/">
      <span class="material-symbols-outlined me-2">
        military_tech
      </span>
      Quarterdeck
    </a>
    <a class="d-flex btn btn-light text-start w-100" href="payment.html">
      <span class="material-symbols-outlined me-2">
        attach_money
      </span>
      Payment
    </a>
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
