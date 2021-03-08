function loadInitialProduct(callback = () => {}) {
    jsonRPC('Product.filter', {}, data => {
        updateSelect(data, '#id_product', 'id', 'name');
        callback();
    });
}

function loadInitialTestPlans() {
    jsonRPC('TestPlan.filter', {}, data => updateSelect(data, '#id_test_plan', 'id', 'name'));
}

function showOnlyRoundNumbers(number) {
    return number % 1 === 0 ? number : '';
}
