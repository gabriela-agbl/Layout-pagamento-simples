document.getElementById("show-data").addEventListener("click", () => 
    {
    const valueField = document.getElementById("value");
    const pixPanel = document.getElementById("pix-panel");
    const cardPanel = document.getElementById("credit-card-panel");

    if (!valueField.value) 
        {
        alert("O campo valor deve ser preenchido.");
        return;
    }

    const paymentType = document.querySelector('input[name="payment"]:checked');

    if (paymentType && paymentType.value === "pix") 
        {
        pixPanel.classList.remove("hidden");
        cardPanel.classList.add("hidden");

        const total = valueField.value * 0.9; //10% de desconto
        document.getElementById("pix-total").textContent = `R$ ${total.toFixed(2)}`;
    } 
    
    else if (paymentType && paymentType.value === "credit-card") 
        {
        cardPanel.classList.remove("hidden");
        pixPanel.classList.add("hidden");
        updateInstallments(valueField.value);
    }
});

document.getElementById("card-number").addEventListener("input", (event) => 
    {
    const cardNumber = event.target.value;
    const cardIcon = document.getElementById("card-icon");
    const cardError = document.getElementById("card-error");

    if (cardNumber.startsWith("1234")) 
        {
        cardIcon.textContent = "💳"; // Ícone exemplo
        cardError.classList.add("hidden");
    } 
    
    else if (cardNumber.startsWith("4321")) 
        {
        cardIcon.textContent = "🏦"; // Ícone exemplo
        cardError.classList.add("hidden");
    } 
    
    else 
    {
        cardIcon.textContent = "";
        cardError.classList.remove("hidden");
    }
});

document.getElementById("installments").addEventListener("change", (event) => 
    {
    const valueField = document.getElementById("value").value;
    updateInstallments(valueField);
});

function updateInstallments(value) {
    const installments = document.getElementById("installments").value;
    let total = parseFloat(value);

    if (installments === "4") total *= 1.05; // 5% de juros

    if (installments === "5") total *= 1.10; // 10% de juros

    const installmentValue = total / installments;

    document.getElementById("installment-values").textContent = `R$ ${installmentValue.toFixed(2)}`;
    document.getElementById("card-total").textContent = `R$ ${total.toFixed(2)}`;
}

document.getElementById("pay-pix").addEventListener("click", () => 
    {
    alert("Pagamento via Pix realizado com sucesso!");
});

document.getElementById("pay-card").addEventListener("click", () => 
    {
    alert("Pagamento via Cartão de Crédito realizado com sucesso!");
});