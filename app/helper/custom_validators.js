"use strict";
var CustomValidators;
(function (CustomValidators) {
    var TypeValidators = (function () {
        function TypeValidators() {
        }
        TypeValidators.tel = function (control) {
            if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
                return { tel: true };
            }
        };
        TypeValidators.email = function (control) {
            if (!control.value.match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
                return { email: true };
            }
        };
        return TypeValidators;
    }());
    CustomValidators.TypeValidators = TypeValidators;
})(CustomValidators || (CustomValidators = {}));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomValidators.TypeValidators;
//# sourceMappingURL=custom_validators.js.map