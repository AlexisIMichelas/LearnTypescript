"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BankCustomer_name, _BankCustomer_pin;
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        _BankCustomer_name.set(this, void 0);
        _BankCustomer_pin.set(this, void 0);
        __classPrivateFieldSet(this, _BankCustomer_name, name, "f");
        __classPrivateFieldSet(this, _BankCustomer_pin, pin, "f");
    }
    BankCustomer.prototype.getName = function () {
        return __classPrivateFieldGet(this, _BankCustomer_name, "f");
    };
    BankCustomer.prototype.verifyPinInput = function (inputPin) {
        return __classPrivateFieldGet(this, _BankCustomer_pin, "f") === inputPin;
    };
    return BankCustomer;
}());
_BankCustomer_name = new WeakMap(), _BankCustomer_pin = new WeakMap();
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert_1.default.equal(typeof customer.getName, 'function');
assert_1.default.equal(typeof customer.verifyPinInput, 'function');
assert_1.default.equal(customer.getName(), 'John Doe');
assert_1.default.ok(customer.verifyPinInput('3579'));
