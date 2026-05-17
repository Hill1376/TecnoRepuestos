// src/services/negocioService.js

/**
 * RN-INV-02: Calcula el stock disponible resultante tras una venta.
 * Lanza un error si la cantidad solicitada supera las existencias actuales.
 */
function calcularStockDisponible(stockActual, cantidadSolicitada) {
    if (cantidadSolicitada > stockActual) {
        throw new Error("Cantidad solicitada supera el stock disponible");
    }
    return stockActual - cantidadSolicitada;
}

/**
 * RN-COM-01: Calcula el total de una transacción (Compra o Venta)
 * aplicando el porcentaje de impuesto (IVA) correspondiente.
 */
function calcularTotalConImpuesto(subtotal, porcentajeIva = 15) {
    if (subtotal < 0) {
        throw new Error("El subtotal no puede ser un valor negativo");
    }
    const impuesto = subtotal * (porcentajeIva / 100);
    return Number((subtotal + impuesto).toFixed(2));
}

// Exportamos las funciones para que puedan ser testeadas en la carpeta /test
module.exports = {
    calcularStockDisponible,
    calcularTotalConImpuesto
};