(function(){
'use strict';
var $linkingInfo = Object.freeze(({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.16.0",
  "fileLevelThis": this
}));
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c);
});
function $valueDescription(arg0) {
  return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
}
function $throwClassCastException(arg0, arg1) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ClassCastException__T__(new $c_jl_ClassCastException(), (($valueDescription(arg0) + " cannot be cast to ") + arg1)));
}
function $throwArrayCastException(arg0, arg1, arg2) {
  while ((--arg2)) {
    arg1 = ("[" + arg1);
  }
  $throwClassCastException(arg0, arg1);
}
function $throwArrayIndexOutOFBoundsException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((arg0 === null) ? null : ("" + arg0))));
}
function $throwArrayStoreException(arg0) {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
}
function $throwNegativeArraySizeException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
}
function $throwNullPointerException() {
  throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
}
function $n(arg0) {
  if ((arg0 === null)) {
    $throwNullPointerException();
  }
  return arg0;
}
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0);
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.constr(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.componentData;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex);
    }
  }
  return result;
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.clone__O() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.getClassOf();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.getClassOf();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.getClassOf();
        } else {
          return $d_jl_Integer.getClassOf();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.getClassOf();
      } else {
        return $d_jl_Double.getClassOf();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf();
    }
    case "undefined": {
      return $d_jl_Void.getClassOf();
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException();
      } else if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.getClassOf();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.getClassOf();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 === null)) {
        $throwNullPointerException();
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return $throwNullPointerException();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.codePointAt__I__I(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.equals__O__Z(x0);
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__equals__O__Z(instance, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z($uC(instance), x0);
      } else {
        return $c_O.prototype.equals__O__Z.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.hashCode__I.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.repeat__I__T(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $charAt(arg0, arg1) {
  var r = arg0.charCodeAt(arg1);
  if ((r !== r)) {
    throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1));
  } else {
    return r;
  }
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
  if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
    $throwArrayIndexOutOFBoundsException(null);
  }
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
  arg0.copyTo(arg1, arg2, arg3, arg4);
}
function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
  if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
    $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
  } else {
    var srcArray = arg0.u;
    $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
    }
  }
}
function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
  var srcData = (arg0 && arg0.$classData);
  if ((srcData === (arg2 && arg2.$classData))) {
    if ((srcData && srcData.isArrayClass)) {
      $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
    } else {
      $throwArrayStoreException(null);
    }
  } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
    $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
  } else {
    $throwArrayStoreException(null);
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uV(arg0) {
  return (((arg0 === (void 0)) || (arg0 === null)) ? (void 0) : $throwClassCastException(arg0, "java.lang.Void"));
}
function $uZ(arg0) {
  return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
}
function $uC(arg0) {
  return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
}
function $uB(arg0) {
  return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
}
function $uS(arg0) {
  return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
}
function $uI(arg0) {
  return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
}
function $uJ(arg0) {
  return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
}
function $uF(arg0) {
  return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
}
function $uD(arg0) {
  return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
}
function $uT(arg0) {
  return ((((typeof arg0) === "string") || (arg0 === null)) ? ((arg0 === null) ? "" : arg0) : $throwClassCastException(arg0, "java.lang.String"));
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$c_O.prototype.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.hashCode__I = (function() {
  return $systemIdentityHashCode(this);
});
$c_O.prototype.equals__O__Z = (function(that) {
  return (this === that);
});
$c_O.prototype.toString__T = (function() {
  var i = this.hashCode__I();
  return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
});
$c_O.prototype.toString = (function() {
  return this.toString__T();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = null;
    }
  } else {
    this.u = arg;
  }
}
$ac_O.prototype = new $h_O();
$ac_O.prototype.constructor = $ac_O;
$ac_O.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_O.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_O.prototype.clone__O = (function() {
  return new $ac_O(this.u.slice());
});
function $ah_O() {
}
$ah_O.prototype = $ac_O.prototype;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = false;
    }
  } else {
    this.u = arg;
  }
}
$ac_Z.prototype = new $h_O();
$ac_Z.prototype.constructor = $ac_Z;
$ac_Z.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_Z.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_Z.prototype.clone__O = (function() {
  return new $ac_Z(this.u.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Uint16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_C.prototype = new $h_O();
$ac_C.prototype.constructor = $ac_C;
$ac_C.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_C.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_C.prototype.clone__O = (function() {
  return new $ac_C(this.u.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int8Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_B.prototype = new $h_O();
$ac_B.prototype.constructor = $ac_B;
$ac_B.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_B.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_B.prototype.clone__O = (function() {
  return new $ac_B(this.u.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int16Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_S.prototype = new $h_O();
$ac_S.prototype.constructor = $ac_S;
$ac_S.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_S.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_S.prototype.clone__O = (function() {
  return new $ac_S(this.u.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Int32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_I.prototype = new $h_O();
$ac_I.prototype.constructor = $ac_I;
$ac_I.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_I.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_I.prototype.clone__O = (function() {
  return new $ac_I(this.u.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.u[i] = $L0;
    }
  } else {
    this.u = arg;
  }
}
$ac_J.prototype = new $h_O();
$ac_J.prototype.constructor = $ac_J;
$ac_J.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_J.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
});
$ac_J.prototype.clone__O = (function() {
  return new $ac_J(this.u.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float32Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_F.prototype = new $h_O();
$ac_F.prototype.constructor = $ac_F;
$ac_F.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_F.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_F.prototype.clone__O = (function() {
  return new $ac_F(this.u.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    if ((arg < 0)) {
      $throwNegativeArraySizeException();
    }
    this.u = new Float64Array(arg);
  } else {
    this.u = arg;
  }
}
$ac_D.prototype = new $h_O();
$ac_D.prototype.constructor = $ac_D;
$ac_D.prototype.get = (function(i) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  return this.u[i];
});
$ac_D.prototype.set = (function(i, v) {
  if (((i < 0) || (i >= this.u.length))) {
    $throwArrayIndexOutOFBoundsException(i);
  }
  this.u[i] = v;
});
$ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
  $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
  dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$ac_D.prototype.clone__O = (function() {
  return new $ac_D(this.u.slice());
});
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isAssignableFromFun = (void 0);
  this.wrapArray = (void 0);
  this.isJSType = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.ancestors = ({});
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  var self = this;
  this.isAssignableFromFun = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
  }
  return this;
});
$TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
  this.isJSType = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = arrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = componentData;
  this.arrayDepth = 1;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
  this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$TypeData.prototype.initArray = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      if ((arg < 0)) {
        $throwNegativeArraySizeException();
      }
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = null;
      }
    } else {
      this.u = arg;
    }
  }
  ArrayClass.prototype = new $ah_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOFBoundsException(i);
    }
    if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
      $throwArrayStoreException(v);
    }
    this.u[i] = v;
  });
  ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(this.u.slice());
  });
  ArrayClass.prototype.$classData = this;
  var arrayBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  var name = ("[" + componentData.arrayEncodedName);
  this.constr = ArrayClass;
  this.ancestors = ({
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  });
  this.componentData = componentData;
  this.arrayBase = arrayBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.arrayDepth;
    return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.isAssignableFromFun = isAssignableFromFun;
  this.wrapArray = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this);
  }
  return this._arrayOf;
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this);
  }
  return this._classOf;
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  return ((this === that) || this.isAssignableFromFun(that));
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name);
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null);
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null);
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf();
  }
  return $newArrayObject(arrayClassData, lengths);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.arrayDepth;
    return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
}
function $asArrayOf_O(obj, depth) {
  if (($isArrayOf_O(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "Z", depth);
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "C", depth);
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "B", depth);
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "S", depth);
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "I", depth);
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "J", depth);
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "F", depth);
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj;
  } else {
    $throwArrayCastException(obj, "D", depth);
  }
}
var $d_O = new $TypeData();
$d_O.ancestors = ({});
$d_O.arrayEncodedName = "Ljava.lang.Object;";
$d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.arrayDepth;
  return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
  this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
  this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
  this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
  this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
  this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = $uI((value | 0.0));
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  jl_FloatingPointBits$: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  var value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl_System$SystemProperties$__f_dict = null;
  this.jl_System$SystemProperties$__f_properties = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jl_System$SystemProperties$__f_properties = null;
}
$c_jl_System$SystemProperties$.prototype = new $h_O();
$c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $c_jl_System$SystemProperties$.prototype;
$c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
  if ((this.jl_System$SystemProperties$__f_dict !== null)) {
    var dict = this.jl_System$SystemProperties$__f_dict;
    return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1));
  } else {
    return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().initClass($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  jl_System$SystemProperties$: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
  $n_jl_Utils$Cache$ = this;
  this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
}
$c_jl_Utils$Cache$.prototype = new $h_O();
$c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $c_jl_Utils$Cache$.prototype;
var $d_jl_Utils$Cache$ = new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  jl_Utils$Cache$: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
  jl_Void: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  var this$1 = $n(array);
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$c_jl_reflect_Array$.prototype = new $h_O();
$c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $c_jl_reflect_Array$.prototype;
$c_jl_reflect_Array$.prototype.newInstance__jl_Class__I__O = (function(componentType, length) {
  return $n(componentType).newArrayOfThisClass__O__O([length]);
});
$c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
  if ((array instanceof $ac_O)) {
    var x2 = $asArrayOf_O(array, 1);
    return $n(x2).u.length;
  } else if ((array instanceof $ac_Z)) {
    var x3 = $asArrayOf_Z(array, 1);
    return $n(x3).u.length;
  } else if ((array instanceof $ac_C)) {
    var x4 = $asArrayOf_C(array, 1);
    return $n(x4).u.length;
  } else if ((array instanceof $ac_B)) {
    var x5 = $asArrayOf_B(array, 1);
    return $n(x5).u.length;
  } else if ((array instanceof $ac_S)) {
    var x6 = $asArrayOf_S(array, 1);
    return $n(x6).u.length;
  } else if ((array instanceof $ac_I)) {
    var x7 = $asArrayOf_I(array, 1);
    return $n(x7).u.length;
  } else if ((array instanceof $ac_J)) {
    var x8 = $asArrayOf_J(array, 1);
    return $n(x8).u.length;
  } else if ((array instanceof $ac_F)) {
    var x9 = $asArrayOf_F(array, 1);
    return $n(x9).u.length;
  } else if ((array instanceof $ac_D)) {
    var x10 = $asArrayOf_D(array, 1);
    return $n(x10).u.length;
  } else {
    $p_jl_reflect_Array$__mismatch__O__E(this, array);
  }
});
var $d_jl_reflect_Array$ = new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  jl_reflect_Array$: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$c_ju_Arrays$.prototype = new $h_O();
$c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $c_ju_Arrays$.prototype;
$c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
  var startIndex = 0;
  var endIndex = $n(a).u.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = $n(a).get(mid);
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = $n(a).u.length;
  if (($n(b).u.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var a$1 = $n(a).get(i$1);
    var i$2 = i;
    var b$1 = $n(b).get(i$2);
    if ((!(a$1 === b$1))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = $n(original).u.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), newLength), 1);
  $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
  return ret;
});
$c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = $n(original).u.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var this$3 = $n(original);
  var clazz = $objectGetClass(this$3);
  var ret = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(clazz.getComponentType__jl_Class(), retLength), 1);
  $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().initClass($c_ju_Arrays$, "java.util.Arrays$", ({
  ju_Arrays$: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var chars = $as_T(x);
      var this$3 = $n(chars);
      var end = this$3.length;
      var i = 0;
      while ((i < end)) {
        var i$2 = i;
        var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_1 = $m_ju_regex_PatternCompiler$();
        var this$5 = $n(chars);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $n($x_1).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, i$2)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var chars$3 = $as_T(x$1);
      var this$8 = $n(chars$3);
      var end$1 = this$8.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var i$2$1 = i$1;
        var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
        var $x_3 = $m_ju_regex_PatternCompiler$();
        var this$10 = $n(chars$3);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$n($x_3).java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, i$2$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var x$2 = m[0];
    var this$12 = $n($as_T(x$2));
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var this$1 = $n(s);
  var len = this$1.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I($n(s), i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1 = $charAt(this$2, index);
      switch (x1) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((startOfRepeater === len)) {
    var repeaterDispatchChar = 46;
  } else {
    var this$2 = $n(pattern);
    var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
  }
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    var this$3 = $n(compiledToken);
    var x1 = $charAt(this$3, 0);
    switch (x1) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var this$4 = $n(compiledToken);
        if (($charAt(this$4, 1) === 63)) {
          var this$5 = $n(compiledToken);
          var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
        } else {
          var isTokenAnAssertion = false;
        }
        break;
      }
      case 92: {
        var this$6 = $n(compiledToken);
        var c = $charAt(this$6, 1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$7 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var x1$2 = $charAt(this$7, index);
      switch (x1$2) {
        case 43: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((repeaterDispatchChar === 123)) {
    var this$1 = $n(pattern);
    var len = this$1.length;
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_1 = true;
    } else {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var c$1 = $charAt(this$4, index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      } else {
        break;
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    var this$6 = $n(pattern);
    var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    if (($charAt(this$6, index$2) === 44)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c$2 = $charAt(this$7, index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
      var $x_4 = true;
    } else {
      var this$9 = $n(pattern);
      var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var $x_4 = ($charAt(this$9, index$4) !== 125);
    }
    if ($x_4) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
  var i = 0;
  while ((i < end)) {
    var i$2 = i;
    var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2]);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[i$2] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
    var arg1 = $as_T(arg1$2);
    var arg2 = $as_T(arg2$2);
    var arg3 = $as_T(arg3$2);
    return $thiz.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T(arg1, arg2, arg3, compiledGroupCountBeforeThisToken);
  })));
  $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var this$2 = $n(pattern);
  var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  var dispatchChar = $charAt(this$2, index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
          break;
        }
        case 2: {
          return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
      return (("(?=" + lineTerminator) + "?$)");
      break;
    }
    case 122: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var this$7 = $n(pattern);
          var index$1 = end;
          var c = $charAt(this$7, index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
          var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = $as_T(pattern.substring(start, end));
      var groupNumber = $uI(parseInt(groupString, 10));
      if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_3 = true;
      } else {
        var this$11 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_3 = ($charAt(this$11, index$2) !== 60);
      }
      if ($x_3) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = $uI(dict[groupName]);
      var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$13 = $n(pattern);
      var end$2 = $uI(this$13.indexOf("\\E", start$2));
      if ((end$2 < 0)) {
        var this$14 = $n(pattern);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
      } else {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var this$1 = $n(pattern);
      if (($x_1 === this$1.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) < len)) {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var d1 = (((-48) + $charAt(this$2, index)) | 0);
  } else {
    var d1 = (-1);
  }
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  if ((((2 + start) | 0) < len)) {
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
  } else {
    var d2 = (-1);
  }
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    if ((((3 + start) | 0) < len)) {
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
    } else {
      var d3 = (-1);
    }
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if ((start !== len)) {
    var this$2 = $n(pattern);
    var $x_1 = ($charAt(this$2, start) === 123);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var innerStart = ((1 + start) | 0);
    var this$3 = $n(pattern);
    var innerEnd = $uI(this$3.indexOf("}", innerStart));
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var i$2 = i;
    var this$4 = $n(pattern);
    var c = $charAt(this$4, i$2);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = $as_T(pattern.substring(start, end));
    var cp = $uI(parseInt(s, 16));
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((start === len)) {
    var property = "?";
  } else {
    var this$2 = $n(pattern);
    if (($charAt(this$2, start) === 123)) {
      var innerStart = ((1 + start) | 0);
      var this$3 = $n(pattern);
      var innerEnd = $uI(this$3.indexOf("}", innerStart));
      if ((innerEnd < 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
      var property = $as_T(pattern.substring(innerStart, innerEnd));
    } else {
      var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
    }
  }
  var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
    $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
  var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var this$2 = $n(pattern);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var isNegated = ($charAt(this$2, index) === 94);
  } else {
    var isNegated = false;
  }
  if (isNegated) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
  while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return builder.finish__T();
          break;
        }
        case 38: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$3 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_1 = ($charAt(this$3, index$1) === 38);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            builder.startNewConjunct__V();
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
          }
          break matchResult;
          break;
        }
        case 91: {
          var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
          break matchResult;
          break;
        }
        case 92: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var this$4 = $n(pattern);
          var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c2 = $charAt(this$4, index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break;
            }
            case 81: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var this$5 = $n(pattern);
              var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var end = $uI(this$5.indexOf("\\E", fromIndex));
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
            }
          }
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 35: {
          if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
          } else {
            break;
          }
          break matchResult;
          break;
        }
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  if ((((1 + start) | 0) === len)) {
    var $x_1 = true;
  } else {
    var this$2 = $n(pattern);
    var index = ((1 + start) | 0);
    var $x_1 = ($charAt(this$2, index) !== 63);
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
    $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
    return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var this$3 = $n(pattern);
    var index$1 = ((2 + start) | 0);
    var c1 = $charAt(this$3, index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var this$4 = $n(pattern);
      var index$2 = ((3 + start) | 0);
      var c2 = $charAt(this$4, index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
        var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
        dict$1[name] = value;
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
      return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
  while (true) {
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
    var $x_2 = true;
  } else {
    var this$4 = $n(pattern);
    var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_2 = ($charAt(this$4, index$1) !== 62);
  }
  if ($x_2) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
    var this$1 = $n(pattern$3);
    var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
    var $x_1 = ($charAt(this$1, index) === 45);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      $n(builder$1).addSingleCodePoint__I__V(45);
    } else {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
    }
  } else {
    $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.ju_regex_PatternCompiler__f_pattern = null;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
  this.ju_regex_PatternCompiler__f_namedGroups = null;
  this.ju_regex_PatternCompiler__f_pattern = pattern;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
  this.ju_regex_PatternCompiler__f_sticky = false;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
  this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
  this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
  this.ju_regex_PatternCompiler__f_namedGroups = ({});
}
$c_ju_regex_PatternCompiler.prototype = new $h_O();
$c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $c_ju_regex_PatternCompiler.prototype;
$c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
  }
  var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
  }
  if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
    this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
  } else {
    if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
      this.ju_regex_PatternCompiler__f_sticky = true;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    }
    var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
  var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  var result = "";
  while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 35: {
          if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            this.java$util$regex$PatternCompiler$$skipSharpComment__V();
          } else {
            break;
          }
          break matchResult;
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
          break;
        }
        default: {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
  var pattern = this.ju_regex_PatternCompiler__f_pattern;
  var this$1 = $n(pattern);
  var len = this$1.length;
  while (true) {
    if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
      var this$2 = $n(pattern);
      var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var c = $charAt(this$2, index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
    } else {
      break;
    }
  }
});
$c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$$anonfun$buildPossessiveQuantifier$2__T__T__T__I__T = (function(str, backslashes, groupString, compiledGroupCountBeforeThisToken$1) {
  var this$1 = $n(backslashes);
  if ((((this$1.length % 2) | 0) === 0)) {
    return str;
  } else {
    var groupNumber = $uI(parseInt(groupString, 10));
    return ((groupNumber > compiledGroupCountBeforeThisToken$1) ? (("" + backslashes) + ((1 + groupNumber) | 0)) : str);
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ju_regex_PatternCompiler: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
  this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
}
$c_ju_regex_PatternCompiler$.prototype = new $h_O();
$c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $c_ju_regex_PatternCompiler$.prototype;
$c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
});
$c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
  return $as_T(String.fromCodePoint(codePoint));
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ju_regex_PatternCompiler$: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
  } else {
    $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
}
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
  this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
  var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
  switch (x1) {
    case 0: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 1: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
      break;
    }
    case 2: {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I($n(str), i);
    this.addSingleCodePoint__I__V(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
    }
  }
});
$c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
  } else {
    this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
  }
  if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ju_regex_PatternCompiler$CharacterClassBuilder: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
    $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
  }
  return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
  this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
}
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
$c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
  return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
});
function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
  return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
}
function $isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_regex_PatternCompiler$CompiledCharClass)));
}
function $asArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) {
  return (($isArrayOf_ju_regex_PatternCompiler$CompiledCharClass(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.util.regex.PatternCompiler$CompiledCharClass;", depth));
}
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  ju_regex_PatternCompiler$CompiledCharClass: 1
}));
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
}
$c_RTLong.prototype = new $h_O();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_RTLong(that);
    return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
  } else {
    return false;
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.RTLong__f_lo ^ this.RTLong__f_hi);
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.byteValue__B = (function() {
  return ((this.RTLong__f_lo << 24) >> 24);
});
$c_RTLong.prototype.shortValue__S = (function() {
  return ((this.RTLong__f_lo << 16) >> 16);
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.RTLong__f_lo;
});
$c_RTLong.prototype.longValue__J = (function() {
  return $uJ(this);
});
$c_RTLong.prototype.floatValue__F = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__O__I = (function(that) {
  var b = $as_RTLong(that);
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  var lo = this.RTLong__f_lo;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  var hi = this.RTLong__f_hi;
  return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.RTLong__f_lo;
  var hi = this.RTLong__f_hi;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo + $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var ahi = this.RTLong__f_hi;
  var bhi = $n(b).RTLong__f_hi;
  var lo = ((alo - $n(b).RTLong__f_lo) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.RTLong__f_lo;
  var blo = $n(b).RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi);
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  var this$1 = $m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
  return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)));
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth));
}
var $d_RTLong = new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  RTLong: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
    return ("" + this$1);
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
  }
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - $uI(Math.clz32(blo))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      var x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
      return $uI((rDouble | 0.0));
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = $uI((x | 0.0));
      var x$1 = (x / 4.294967296E9);
      var hi$7 = $uI((x$1 | 0.0));
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0.0));
      var x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0.0));
    }
  }
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  if ((hi < 0)) {
    var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var $x_1 = $uD((x >>> 0.0));
    var x$1 = ((-lo) | 0);
    return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
  } else {
    return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
  if ((hi < 0)) {
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var abs__lo = lo$1;
    var abs__hi = hi$1;
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var hi$2 = abs__hi;
  if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
    var compressedAbsLo = abs__lo;
  } else {
    var compressedAbsLo = (32768 | ((-65536) & abs__lo));
  }
  var x = abs__hi;
  var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1);
  } else {
    var rawLo = $uI((value | 0.0));
    var x = (value / 4.294967296E9);
    var rawHi = $uI((x | 0.0));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1);
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo;
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0;
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var lo$1 = ((-alo) | 0);
      var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
      var aAbs__lo = lo$1;
      var aAbs__hi = hi;
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var lo$2 = ((-blo) | 0);
      var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
      var bAbs__lo = lo$2;
      var bAbs__hi = hi$1;
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  RTLong$: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_Lorg_squawk_evaluator_Evaluator$__evalBinaryExpr__Lorg_squawk_tokens_Token__Lorg_squawk_evaluator_Evaluator$Value__Lorg_squawk_evaluator_Evaluator$Value__s_util_Either($thiz, operator, left, right) {
  var x = $m_Lorg_squawk_tokens_Plus$();
  if (((x === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$3 = $n(x$1);
    var x146 = this$3.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$1 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$5 = $n(x$1$1);
      var x143 = this$5.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value = ((x146 + x143) | 0);
      var value$1 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value);
      return new $c_s_util_Right(value$1);
    }
  }
  var x$3 = $m_Lorg_squawk_tokens_Minus$();
  if (((x$3 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$2 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$9 = $n(x$1$2);
    var x137 = this$9.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$3 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$11 = $n(x$1$3);
      var x134 = this$11.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$2 = ((x137 - x134) | 0);
      var value$3 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value$2);
      return new $c_s_util_Right(value$3);
    }
  }
  var x$5 = $m_Lorg_squawk_tokens_Asterisk$();
  if (((x$5 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$4 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$15 = $n(x$1$4);
    var x128 = this$15.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$5 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$17 = $n(x$1$5);
      var x125 = this$17.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$4 = Math.imul(x128, x125);
      var value$5 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value$4);
      return new $c_s_util_Right(value$5);
    }
  }
  var x$7 = $m_Lorg_squawk_tokens_Slash$();
  if (((x$7 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$6 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$21 = $n(x$1$6);
    var x119 = this$21.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$7 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$23 = $n(x$1$7);
      var x116 = this$23.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      if ((x116 === 0)) {
        return new $c_s_util_Left("Division by zero");
      }
      var value$6 = $intDiv(x119, x116);
      var value$7 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value$6);
      return new $c_s_util_Right(value$7);
    }
  }
  var x$9 = $m_Lorg_squawk_tokens_Equal$();
  if (((x$9 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$8 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$28 = $n(x$1$8);
    var x101 = this$28.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$9 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$30 = $n(x$1$9);
      var x98 = this$30.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$8 = (x101 === x98);
      var value$9 = new $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(value$8);
      return new $c_s_util_Right(value$9);
    }
  }
  var x$11 = $m_Lorg_squawk_tokens_NotEqual$();
  if (((x$11 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$10 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$34 = $n(x$1$10);
    var x92 = this$34.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$11 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$36 = $n(x$1$11);
      var x89 = this$36.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$10 = (x92 !== x89);
      var value$11 = new $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(value$10);
      return new $c_s_util_Right(value$11);
    }
  }
  var x$13 = $m_Lorg_squawk_tokens_LessThan$();
  if (((x$13 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$12 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$40 = $n(x$1$12);
    var x83 = this$40.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$13 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$42 = $n(x$1$13);
      var x80 = this$42.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$12 = (x83 < x80);
      var value$13 = new $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(value$12);
      return new $c_s_util_Right(value$13);
    }
  }
  var x$15 = $m_Lorg_squawk_tokens_GreaterThan$();
  if (((x$15 === operator) && (left instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1$14 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(left);
    var this$46 = $n(x$1$14);
    var x74 = this$46.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    if ((right instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
      var x$1$15 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(right);
      var this$48 = $n(x$1$15);
      var x71 = this$48.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
      var value$14 = (x74 > x71);
      var value$15 = new $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(value$14);
      return new $c_s_util_Right(value$15);
    }
  }
  var value$16 = ((((("Unsupported binary operation: " + operator) + " ") + left) + " ") + right);
  return new $c_s_util_Left(value$16);
}
function $p_Lorg_squawk_evaluator_Evaluator$__evalUnaryExpr__Lorg_squawk_tokens_Token__Lorg_squawk_evaluator_Evaluator$Value__s_util_Either($thiz, operator, value) {
  var x = $m_Lorg_squawk_tokens_Minus$();
  if (((x === operator) && (value instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue))) {
    var x$1 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(value);
    var this$3 = $n(x$1);
    var x152 = this$3.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
    var value$1 = ((-x152) | 0);
    var value$2 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value$1);
    return new $c_s_util_Right(value$2);
  } else {
    var value$3 = ((("Unsupported unary operation: " + operator) + " ") + value);
    return new $c_s_util_Left(value$3);
  }
}
function $p_Lorg_squawk_evaluator_Evaluator$__evaluateArguments__sci_List__sci_Map__s_util_Either($thiz, arguments$1, env) {
  var this$2 = $n(arguments$1);
  var value = $m_sci_Nil$();
  var z = new $c_s_util_Right(value);
  var acc = z;
  var these = this$2.reverse__sci_List();
  while ((!$n(these).isEmpty__Z())) {
    var arg1 = $n(these).head__O();
    var arg2 = acc;
    var arg = $as_Lorg_squawk_ast_Expression(arg1);
    var acc$1 = $as_s_util_Either(arg2);
    var this$3 = $n($m_Lorg_squawk_evaluator_Evaluator$().evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(arg, env));
    if ((this$3 instanceof $c_s_util_Right)) {
      var x2 = $as_s_util_Right(this$3);
      var b = $n(x2).s_util_Right__f_value;
      var _$5 = $as_T2(b);
      var $x_1 = new $c_s_util_Right($as_Lorg_squawk_evaluator_Evaluator$Value($n(_$5).T2__f__1));
    } else {
      var $x_1 = this$3;
    }
    var this$4 = $n($x_1);
    if ((this$4 instanceof $c_s_util_Right)) {
      var x2$1 = $as_s_util_Right(this$4);
      var b$1 = $n(x2$1).s_util_Right__f_value;
      var argValue = $as_Lorg_squawk_evaluator_Evaluator$Value(b$1);
      var this$5 = $n(acc$1);
      if ((this$5 instanceof $c_s_util_Right)) {
        var x2$2 = $as_s_util_Right(this$5);
        var b$2 = $n(x2$2).s_util_Right__f_value;
        var accValues = $as_sci_List(b$2);
        var this$6 = $n(accValues);
        acc = new $c_s_util_Right(new $c_sci_$colon$colon(argValue, this$6));
      } else {
        acc = this$5;
      }
    } else {
      acc = this$4;
    }
    these = $as_sci_List($n(these).tail__O());
  }
  return $as_s_util_Either(acc);
}
function $p_Lorg_squawk_evaluator_Evaluator$__applyFunction__Lorg_squawk_evaluator_Evaluator$Value__sci_List__sci_Map__s_util_Either($thiz, funcValue, argValues, env) {
  if ((funcValue instanceof $c_Lorg_squawk_evaluator_Evaluator$FunctionValue)) {
    var x$1 = $as_Lorg_squawk_evaluator_Evaluator$FunctionValue(funcValue);
    var this$2 = $n(x$1);
    var x163 = this$2.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters;
    var this$3 = $n(x$1);
    var x164 = this$3.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body;
    var this$4 = $n(x$1);
    var x165 = this$4.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env;
    if (($n(x163).length__I() !== $n(argValues).length__I())) {
      var value = ((("Expected " + $n(x163).length__I()) + " arguments but got ") + $n(argValues).length__I());
      return new $c_s_util_Left(value);
    } else {
      var this$8 = $n(x165);
      var this$6 = $n(x163);
      var $x_1 = $n($as_sc_IterableOnceOps($f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this$6, argValues)));
      var this$7 = $m_s_$less$colon$less$();
      var xs = $n($x_1).toMap__s_$less$colon$less__sci_Map(this$7.s_$less$colon$less$__f_singleton);
      var newEnv = $as_sci_Map(this$8.concat__sc_IterableOnce__sc_IterableOps(xs));
      var this$10 = $n($n(x164).Lorg_squawk_ast_BlockStmt__f_statements);
      var value$1 = $m_Lorg_squawk_evaluator_Evaluator$VoidValue$();
      var z = new $c_s_util_Right(value$1);
      var acc = z;
      var these = this$10;
      while ((!$n(these).isEmpty__Z())) {
        var arg1 = acc;
        var arg2 = $n(these).head__O();
        var x$1$1 = $as_s_util_Either(arg1);
        var x$2 = $as_Lorg_squawk_ast_Statement(arg2);
        if ((x$1$1 instanceof $c_s_util_Right)) {
          var this$12 = $n($m_Lorg_squawk_evaluator_Evaluator$().evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x$2, newEnv));
          if ((this$12 instanceof $c_s_util_Right)) {
            var x2 = $as_s_util_Right(this$12);
            var b = $n(x2).s_util_Right__f_value;
            var _$6 = $as_T2(b);
            acc = new $c_s_util_Right($as_Lorg_squawk_evaluator_Evaluator$Value($n(_$6).T2__f__1));
          } else {
            acc = this$12;
          }
        } else {
          acc = x$1$1;
        }
        these = $as_sc_LinearSeq($n(these).tail__O());
      }
      var result = $as_s_util_Either(acc);
      return result;
    }
  } else {
    var value$2 = ("Attempted to call a non-function value: " + funcValue);
    return new $c_s_util_Left(value$2);
  }
}
/** @constructor */
function $c_Lorg_squawk_evaluator_Evaluator$() {
}
$c_Lorg_squawk_evaluator_Evaluator$.prototype = new $h_O();
$c_Lorg_squawk_evaluator_Evaluator$.prototype.constructor = $c_Lorg_squawk_evaluator_Evaluator$;
/** @constructor */
function $h_Lorg_squawk_evaluator_Evaluator$() {
}
$h_Lorg_squawk_evaluator_Evaluator$.prototype = $c_Lorg_squawk_evaluator_Evaluator$.prototype;
$c_Lorg_squawk_evaluator_Evaluator$.prototype.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either = (function(node, env) {
  if ((node instanceof $c_Lorg_squawk_ast_NumberLiteralExpr)) {
    var x$1 = $as_Lorg_squawk_ast_NumberLiteralExpr(node);
    var this$2 = $n(x$1);
    var x64 = this$2.Lorg_squawk_ast_NumberLiteralExpr__f_value;
    var _1 = new $c_Lorg_squawk_evaluator_Evaluator$NumberValue(x64);
    var value = new $c_T2(_1, env);
    return new $c_s_util_Right(value);
  } else if ((node instanceof $c_Lorg_squawk_ast_BooleanLiteralExpr)) {
    var x$1$1 = $as_Lorg_squawk_ast_BooleanLiteralExpr(node);
    var this$7 = $n(x$1$1);
    var x61 = this$7.Lorg_squawk_ast_BooleanLiteralExpr__f_value;
    var _1$1 = new $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(x61);
    var value$1 = new $c_T2(_1$1, env);
    return new $c_s_util_Right(value$1);
  } else if ((node instanceof $c_Lorg_squawk_ast_IdentifierExpr)) {
    var x$1$2 = $as_Lorg_squawk_ast_IdentifierExpr(node);
    var this$12 = $n(x$1$2);
    var x58 = this$12.Lorg_squawk_ast_IdentifierExpr__f_name;
    var this$13 = $n($n(env).get__O__s_Option(x58));
    var this$14 = $n((this$13.isEmpty__Z() ? new $c_s_util_Left(("Undefined variable: " + x58)) : new $c_s_util_Right(this$13.get__O())));
    if ((this$14 instanceof $c_s_util_Right)) {
      var x2 = $as_s_util_Right(this$14);
      var b = $n(x2).s_util_Right__f_value;
      var value$2 = $as_Lorg_squawk_evaluator_Evaluator$Value(b);
      return new $c_s_util_Right(new $c_T2(value$2, env));
    } else {
      return this$14;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_LetStmt)) {
    var x$1$3 = $as_Lorg_squawk_ast_LetStmt(node);
    var this$17 = $n(x$1$3);
    var x54 = this$17.Lorg_squawk_ast_LetStmt__f_identifier;
    var this$18 = $n(x$1$3);
    var x55 = this$18.Lorg_squawk_ast_LetStmt__f_value;
    var this$19 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x55, env));
    if ((this$19 instanceof $c_s_util_Right)) {
      var x2$1 = $as_s_util_Right(this$19);
      var b$1 = $n(x2$1).s_util_Right__f_value;
      var x$1$4 = $as_T2(b$1);
      matchResult12: {
        var $x_1;
        if ((x$1$4 !== null)) {
          var v = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x$1$4).T2__f__1);
          var updatedEnv = $as_sci_Map($n(x$1$4).T2__f__2);
          var _1$2 = $m_Lorg_squawk_evaluator_Evaluator$VoidValue$();
          var this$22 = $n(updatedEnv);
          var self = $n(x54).Lorg_squawk_ast_IdentifierExpr__f_name;
          var _2 = this$22.updated__O__O__sci_MapOps(self, v);
          var $x_1 = new $c_T2(_1$2, _2);
          break matchResult12;
        }
        throw new $c_s_MatchError(x$1$4);
      }
      return new $c_s_util_Right($x_1);
    } else {
      return this$19;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_ExpressionStmt)) {
    var x$1$5 = $as_Lorg_squawk_ast_ExpressionStmt(node);
    var this$25 = $n(x$1$5);
    var x51 = this$25.Lorg_squawk_ast_ExpressionStmt__f_expression;
    var this$26 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x51, env));
    if ((this$26 instanceof $c_s_util_Right)) {
      var x2$2 = $as_s_util_Right(this$26);
      var b$2 = $n(x2$2).s_util_Right__f_value;
      var x$1$6 = $as_T2(b$2);
      matchResult13: {
        var $x_2;
        if ((x$1$6 !== null)) {
          var v$1 = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x$1$6).T2__f__1);
          var updatedEnv$1 = $as_sci_Map($n(x$1$6).T2__f__2);
          var $x_2 = new $c_T2(v$1, updatedEnv$1);
          break matchResult13;
        }
        throw new $c_s_MatchError(x$1$6);
      }
      return new $c_s_util_Right($x_2);
    } else {
      return this$26;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_ReturnStmt)) {
    var x$1$7 = $as_Lorg_squawk_ast_ReturnStmt(node);
    var this$29 = $n(x$1$7);
    var x48 = this$29.Lorg_squawk_ast_ReturnStmt__f_value;
    var this$30 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x48, env));
    if ((this$30 instanceof $c_s_util_Right)) {
      var x2$3 = $as_s_util_Right(this$30);
      var b$3 = $n(x2$3).s_util_Right__f_value;
      var x$1$8 = $as_T2(b$3);
      matchResult14: {
        var $x_3;
        if ((x$1$8 !== null)) {
          var v$2 = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x$1$8).T2__f__1);
          var updatedEnv$2 = $as_sci_Map($n(x$1$8).T2__f__2);
          var $x_3 = new $c_T2(v$2, updatedEnv$2);
          break matchResult14;
        }
        throw new $c_s_MatchError(x$1$8);
      }
      return new $c_s_util_Right($x_3);
    } else {
      return this$30;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_BinaryExpr)) {
    var x$1$9 = $as_Lorg_squawk_ast_BinaryExpr(node);
    var this$33 = $n(x$1$9);
    var x43 = this$33.Lorg_squawk_ast_BinaryExpr__f_operator;
    var this$34 = $n(x$1$9);
    var x44 = this$34.Lorg_squawk_ast_BinaryExpr__f_left;
    var this$35 = $n(x$1$9);
    var x45 = this$35.Lorg_squawk_ast_BinaryExpr__f_right;
    var this$36 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x44, env));
    if ((this$36 instanceof $c_s_util_Right)) {
      var x2$4 = $as_s_util_Right(this$36);
      var b$4 = $n(x2$4).s_util_Right__f_value;
      var _$1 = $as_T2(b$4);
      var $x_4 = new $c_s_util_Right($as_Lorg_squawk_evaluator_Evaluator$Value($n(_$1).T2__f__1));
    } else {
      var $x_4 = this$36;
    }
    var this$37 = $n($x_4);
    if ((this$37 instanceof $c_s_util_Right)) {
      var x2$5 = $as_s_util_Right(this$37);
      var b$5 = $n(x2$5).s_util_Right__f_value;
      var leftValue = $as_Lorg_squawk_evaluator_Evaluator$Value(b$5);
      var this$38 = $n($m_Lorg_squawk_evaluator_Evaluator$().evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x45, env));
      if ((this$38 instanceof $c_s_util_Right)) {
        var x2$6 = $as_s_util_Right(this$38);
        var b$6 = $n(x2$6).s_util_Right__f_value;
        var _$2 = $as_T2(b$6);
        var $x_5 = new $c_s_util_Right($as_Lorg_squawk_evaluator_Evaluator$Value($n(_$2).T2__f__1));
      } else {
        var $x_5 = this$38;
      }
      var this$39 = $n($x_5);
      if ((this$39 instanceof $c_s_util_Right)) {
        var x2$7 = $as_s_util_Right(this$39);
        var b$7 = $n(x2$7).s_util_Right__f_value;
        var rightValue = $as_Lorg_squawk_evaluator_Evaluator$Value(b$7);
        var this$40 = $n($p_Lorg_squawk_evaluator_Evaluator$__evalBinaryExpr__Lorg_squawk_tokens_Token__Lorg_squawk_evaluator_Evaluator$Value__Lorg_squawk_evaluator_Evaluator$Value__s_util_Either($m_Lorg_squawk_evaluator_Evaluator$(), x43, leftValue, rightValue));
        if ((this$40 instanceof $c_s_util_Right)) {
          var x2$8 = $as_s_util_Right(this$40);
          var b$8 = $n(x2$8).s_util_Right__f_value;
          var result = $as_Lorg_squawk_evaluator_Evaluator$Value(b$8);
          return new $c_s_util_Right(new $c_T2(result, env));
        } else {
          return this$40;
        }
      } else {
        return this$39;
      }
    } else {
      return this$37;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_UnaryExpr)) {
    var x$1$10 = $as_Lorg_squawk_ast_UnaryExpr(node);
    var this$43 = $n(x$1$10);
    var x39 = this$43.Lorg_squawk_ast_UnaryExpr__f_operator;
    var this$44 = $n(x$1$10);
    var x40 = this$44.Lorg_squawk_ast_UnaryExpr__f_operand;
    var this$45 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x40, env));
    if ((this$45 instanceof $c_s_util_Right)) {
      var x2$9 = $as_s_util_Right(this$45);
      var b$9 = $n(x2$9).s_util_Right__f_value;
      var x$1$11 = $as_T2(b$9);
      if ((x$1$11 !== null)) {
        var value$3 = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x$1$11).T2__f__1);
        var updatedEnv$3 = $as_sci_Map($n(x$1$11).T2__f__2);
        var this$46 = $n($p_Lorg_squawk_evaluator_Evaluator$__evalUnaryExpr__Lorg_squawk_tokens_Token__Lorg_squawk_evaluator_Evaluator$Value__s_util_Either($m_Lorg_squawk_evaluator_Evaluator$(), x39, value$3));
        if ((this$46 instanceof $c_s_util_Right)) {
          var x2$10 = $as_s_util_Right(this$46);
          var b$10 = $n(x2$10).s_util_Right__f_value;
          var result$1 = $as_Lorg_squawk_evaluator_Evaluator$Value(b$10);
          return new $c_s_util_Right(new $c_T2(result$1, updatedEnv$3));
        } else {
          return this$46;
        }
      }
      throw new $c_s_MatchError(x$1$11);
    } else {
      return this$45;
    }
  } else if ((node instanceof $c_Lorg_squawk_ast_FunctionDeclarationStmt)) {
    var x$1$12 = $as_Lorg_squawk_ast_FunctionDeclarationStmt(node);
    var this$49 = $n(x$1$12);
    var x34 = this$49.Lorg_squawk_ast_FunctionDeclarationStmt__f_name;
    var this$50 = $n(x$1$12);
    var x35 = this$50.Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters;
    var this$51 = $n(x$1$12);
    var x36 = this$51.Lorg_squawk_ast_FunctionDeclarationStmt__f_body;
    var this$52 = $n(x35);
    var f = ((_$3) => {
      var _$3$1 = $as_Lorg_squawk_ast_IdentifierExpr(_$3);
      return $n(_$3$1).Lorg_squawk_ast_IdentifierExpr__f_name;
    });
    if ((this$52 === $m_sci_Nil$())) {
      var parameters = $m_sci_Nil$();
    } else {
      var arg1 = this$52.head__O();
      var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
      var t = h;
      var rest = $as_sci_List(this$52.tail__O());
      while ((rest !== $m_sci_Nil$())) {
        var arg1$1 = $n(rest).head__O();
        var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
        $n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List($n(rest).tail__O());
      }
      var parameters = h;
    }
    var functionValue = new $c_Lorg_squawk_evaluator_Evaluator$FunctionValue(parameters, x36, env);
    var _1$3 = $m_Lorg_squawk_evaluator_Evaluator$VoidValue$();
    var this$56 = $n(env);
    var self$1 = $n(x34).Lorg_squawk_ast_IdentifierExpr__f_name;
    var _2$1 = this$56.updated__O__O__sci_MapOps(self$1, functionValue);
    var value$4 = new $c_T2(_1$3, _2$1);
    return new $c_s_util_Right(value$4);
  } else if ((node instanceof $c_Lorg_squawk_ast_FunctionCallExpr)) {
    var x$1$13 = $as_Lorg_squawk_ast_FunctionCallExpr(node);
    var this$60 = $n(x$1$13);
    var x30 = this$60.Lorg_squawk_ast_FunctionCallExpr__f_function;
    var this$61 = $n(x$1$13);
    var x31 = this$61.Lorg_squawk_ast_FunctionCallExpr__f_arguments;
    var this$62 = $n(this.evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(x30, env));
    if ((this$62 instanceof $c_s_util_Right)) {
      var x2$11 = $as_s_util_Right(this$62);
      var b$11 = $n(x2$11).s_util_Right__f_value;
      var _$4 = $as_T2(b$11);
      var $x_6 = new $c_s_util_Right($as_Lorg_squawk_evaluator_Evaluator$Value($n(_$4).T2__f__1));
    } else {
      var $x_6 = this$62;
    }
    var this$63 = $n($x_6);
    if ((this$63 instanceof $c_s_util_Right)) {
      var x2$12 = $as_s_util_Right(this$63);
      var b$12 = $n(x2$12).s_util_Right__f_value;
      var funcValue = $as_Lorg_squawk_evaluator_Evaluator$Value(b$12);
      var this$64 = $n($p_Lorg_squawk_evaluator_Evaluator$__evaluateArguments__sci_List__sci_Map__s_util_Either($m_Lorg_squawk_evaluator_Evaluator$(), x31, env));
      if ((this$64 instanceof $c_s_util_Right)) {
        var x2$13 = $as_s_util_Right(this$64);
        var b$13 = $n(x2$13).s_util_Right__f_value;
        var argValues = $as_sci_List(b$13);
        var this$65 = $n($p_Lorg_squawk_evaluator_Evaluator$__applyFunction__Lorg_squawk_evaluator_Evaluator$Value__sci_List__sci_Map__s_util_Either($m_Lorg_squawk_evaluator_Evaluator$(), funcValue, argValues, env));
        if ((this$65 instanceof $c_s_util_Right)) {
          var x2$14 = $as_s_util_Right(this$65);
          var b$14 = $n(x2$14).s_util_Right__f_value;
          var result$2 = $as_Lorg_squawk_evaluator_Evaluator$Value(b$14);
          return new $c_s_util_Right(new $c_T2(result$2, env));
        } else {
          return this$65;
        }
      } else {
        return this$64;
      }
    } else {
      return this$63;
    }
  } else {
    var value$5 = ("Unsupported AST node: " + node);
    return new $c_s_util_Left(value$5);
  }
});
var $d_Lorg_squawk_evaluator_Evaluator$ = new $TypeData().initClass($c_Lorg_squawk_evaluator_Evaluator$, "org.squawk.evaluator.Evaluator$", ({
  Lorg_squawk_evaluator_Evaluator$: 1
}));
var $n_Lorg_squawk_evaluator_Evaluator$;
function $m_Lorg_squawk_evaluator_Evaluator$() {
  if ((!$n_Lorg_squawk_evaluator_Evaluator$)) {
    $n_Lorg_squawk_evaluator_Evaluator$ = new $c_Lorg_squawk_evaluator_Evaluator$();
  }
  return $n_Lorg_squawk_evaluator_Evaluator$;
}
function $is_Lorg_squawk_evaluator_Evaluator$Value(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_squawk_evaluator_Evaluator$Value)));
}
function $as_Lorg_squawk_evaluator_Evaluator$Value(obj) {
  return (($is_Lorg_squawk_evaluator_Evaluator$Value(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.evaluator.Evaluator$Value"));
}
function $isArrayOf_Lorg_squawk_evaluator_Evaluator$Value(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_evaluator_Evaluator$Value)));
}
function $asArrayOf_Lorg_squawk_evaluator_Evaluator$Value(obj, depth) {
  return (($isArrayOf_Lorg_squawk_evaluator_Evaluator$Value(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.evaluator.Evaluator$Value;", depth));
}
/** @constructor */
function $c_Lorg_squawk_lexer_Lexer$() {
  this.Lorg_squawk_lexer_Lexer$__f_tokenPattern = null;
  this.Lorg_squawk_lexer_Lexer$__f_integerPattern = null;
  this.Lorg_squawk_lexer_Lexer$__f_identifierPattern = null;
  $n_Lorg_squawk_lexer_Lexer$ = this;
  this.Lorg_squawk_lexer_Lexer$__f_tokenPattern = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "(==|!=|[-+(){}<>=;,!*/]|[A-Za-z][A-Za-z0-9_]*|\\d+)", $m_sci_Nil$());
  this.Lorg_squawk_lexer_Lexer$__f_integerPattern = "\\d+";
  this.Lorg_squawk_lexer_Lexer$__f_identifierPattern = "[A-Za-z][A-Za-z0-9_]*";
}
$c_Lorg_squawk_lexer_Lexer$.prototype = new $h_O();
$c_Lorg_squawk_lexer_Lexer$.prototype.constructor = $c_Lorg_squawk_lexer_Lexer$;
/** @constructor */
function $h_Lorg_squawk_lexer_Lexer$() {
}
$h_Lorg_squawk_lexer_Lexer$.prototype = $c_Lorg_squawk_lexer_Lexer$.prototype;
$c_Lorg_squawk_lexer_Lexer$.prototype.tokenize__T__sci_List = (function(input) {
  var this$1 = $n($n(this.Lorg_squawk_lexer_Lexer$__f_tokenPattern).findAllIn__jl_CharSequence__s_util_matching_Regex$MatchIterator(input));
  var this$12 = $n($m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$1));
  var f = ((x$1) => {
    var x$1$1 = $as_T(x$1);
    var $x_1;
    switch (x$1$1) {
      case "(": {
        var $x_1 = $m_Lorg_squawk_tokens_OpenParen$();
        break;
      }
      case ")": {
        var $x_1 = $m_Lorg_squawk_tokens_CloseParen$();
        break;
      }
      case "{": {
        var $x_1 = $m_Lorg_squawk_tokens_OpenBracket$();
        break;
      }
      case "}": {
        var $x_1 = $m_Lorg_squawk_tokens_CloseBracket$();
        break;
      }
      case "<": {
        var $x_1 = $m_Lorg_squawk_tokens_LessThan$();
        break;
      }
      case ">": {
        var $x_1 = $m_Lorg_squawk_tokens_GreaterThan$();
        break;
      }
      case "+": {
        var $x_1 = $m_Lorg_squawk_tokens_Plus$();
        break;
      }
      case "-": {
        var $x_1 = $m_Lorg_squawk_tokens_Minus$();
        break;
      }
      case "==": {
        var $x_1 = $m_Lorg_squawk_tokens_Equal$();
        break;
      }
      case "!=": {
        var $x_1 = $m_Lorg_squawk_tokens_NotEqual$();
        break;
      }
      case "=": {
        var $x_1 = $m_Lorg_squawk_tokens_Assign$();
        break;
      }
      case ";": {
        var $x_1 = $m_Lorg_squawk_tokens_Semicolon$();
        break;
      }
      case ",": {
        var $x_1 = $m_Lorg_squawk_tokens_Comma$();
        break;
      }
      case "!": {
        var $x_1 = $m_Lorg_squawk_tokens_Bang$();
        break;
      }
      case "*": {
        var $x_1 = $m_Lorg_squawk_tokens_Asterisk$();
        break;
      }
      case "/": {
        var $x_1 = $m_Lorg_squawk_tokens_Slash$();
        break;
      }
      case "let": {
        var $x_1 = $m_Lorg_squawk_tokens_Let$();
        break;
      }
      case "fn": {
        var $x_1 = $m_Lorg_squawk_tokens_Function$();
        break;
      }
      case "if": {
        var $x_1 = $m_Lorg_squawk_tokens_If$();
        break;
      }
      case "else": {
        var $x_1 = $m_Lorg_squawk_tokens_Else$();
        break;
      }
      case "return": {
        var $x_1 = $m_Lorg_squawk_tokens_Return$();
        break;
      }
      case "true": {
        var $x_1 = $m_Lorg_squawk_tokens_True$();
        break;
      }
      case "false": {
        var $x_1 = $m_Lorg_squawk_tokens_False$();
        break;
      }
      default: {
        var this$3 = $n(x$1$1);
        var regex = $m_Lorg_squawk_lexer_Lexer$().Lorg_squawk_lexer_Lexer$__f_integerPattern;
        var this$4 = $m_ju_regex_Pattern$();
        if (this$4.java$util$regex$Pattern$$matches__T__T__Z(regex, this$3)) {
          var this$7 = $m_jl_Integer$();
          var value = this$7.parseInt__T__I__I(x$1$1, 10);
          var $x_1 = new $c_Lorg_squawk_tokens_Number(value);
          break;
        }
        var this$9 = $n(x$1$1);
        var regex$1 = $m_Lorg_squawk_lexer_Lexer$().Lorg_squawk_lexer_Lexer$__f_identifierPattern;
        var this$10 = $m_ju_regex_Pattern$();
        if (this$10.java$util$regex$Pattern$$matches__T__T__Z(regex$1, this$9)) {
          var $x_1 = new $c_Lorg_squawk_tokens_Identifier(x$1$1);
          break;
        }
        var $x_1 = $m_Lorg_squawk_tokens_Unknown$();
      }
    }
    return $as_Lorg_squawk_tokens_Token($x_1);
  });
  if ((this$12 === $m_sci_Nil$())) {
    return $m_sci_Nil$();
  } else {
    var arg1 = this$12.head__O();
    var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
    var t = h;
    var rest = $as_sci_List(this$12.tail__O());
    while ((rest !== $m_sci_Nil$())) {
      var arg1$1 = $n(rest).head__O();
      var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
      $n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $as_sci_List($n(rest).tail__O());
    }
    return h;
  }
});
var $d_Lorg_squawk_lexer_Lexer$ = new $TypeData().initClass($c_Lorg_squawk_lexer_Lexer$, "org.squawk.lexer.Lexer$", ({
  Lorg_squawk_lexer_Lexer$: 1
}));
var $n_Lorg_squawk_lexer_Lexer$;
function $m_Lorg_squawk_lexer_Lexer$() {
  if ((!$n_Lorg_squawk_lexer_Lexer$)) {
    $n_Lorg_squawk_lexer_Lexer$ = new $c_Lorg_squawk_lexer_Lexer$();
  }
  return $n_Lorg_squawk_lexer_Lexer$;
}
function $p_Lorg_squawk_parser_Parser$__parseProgram__sci_List__s_util_Either($thiz, tokens) {
  var this$1 = $n($p_Lorg_squawk_parser_Parser$__parseStatements__sci_List__s_util_Either($thiz, tokens));
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = $n(x2).s_util_Right__f_value;
    var x$1 = $as_T2(b);
    matchResult1: {
      var $x_1;
      if ((x$1 !== null)) {
        var statements = $as_sci_List($n(x$1).T2__f__1);
        var remainingTokens = $as_sci_List($n(x$1).T2__f__2);
        var _1 = new $c_Lorg_squawk_ast_Program(statements);
        var $x_1 = new $c_T2(_1, remainingTokens);
        break matchResult1;
      }
      throw new $c_s_MatchError(x$1);
    }
    return new $c_s_util_Right($x_1);
  } else {
    return this$1;
  }
}
function $p_Lorg_squawk_parser_Parser$__parseStatements__sci_List__s_util_Either($thiz, tokens) {
  var remainingTokens = tokens;
  var statements = $m_sci_Nil$();
  while (true) {
    var this$2 = $n(remainingTokens);
    if ((!this$2.isEmpty__Z())) {
      var x = $n(remainingTokens).head__O();
      var x$2 = $m_Lorg_squawk_tokens_CloseBracket$();
      var $x_1 = (!((x !== null) && $dp_equals__O__Z($n(x), x$2)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x4 = $p_Lorg_squawk_parser_Parser$__parseStatement__sci_List__s_util_Either($thiz, remainingTokens);
      if ((x4 instanceof $c_s_util_Right)) {
        var x8 = $as_T2($n($as_s_util_Right(x4)).s_util_Right__f_value);
        if ((x8 !== null)) {
          var statement = $as_Lorg_squawk_ast_Statement($n(x8).T2__f__1);
          var rest = $as_sci_List($n(x8).T2__f__2);
          var this$3 = $n(statements);
          statements = new $c_sci_$colon$colon(statement, this$3);
          remainingTokens = rest;
          continue;
        }
      }
      if ((x4 instanceof $c_s_util_Left)) {
        var error = $as_T($n($as_s_util_Left(x4)).s_util_Left__f_value);
        return new $c_s_util_Left(error);
      }
      throw new $c_s_MatchError(x4);
    } else {
      break;
    }
  }
  var _1 = $n(statements).reverse__sci_List();
  var _2 = remainingTokens;
  var value = new $c_T2(_1, _2);
  return new $c_s_util_Right(value);
}
function $p_Lorg_squawk_parser_Parser$__parseStatement__sci_List__s_util_Either($thiz, tokens) {
  if ((tokens instanceof $c_sci_$colon$colon)) {
    var x48 = $as_sci_$colon$colon(tokens);
    var x49 = $as_Lorg_squawk_tokens_Token($n(x48).sci_$colon$colon__f_head);
    var x50 = $n(x48).sci_$colon$colon__f_next;
    var x = $m_Lorg_squawk_tokens_Let$();
    if (((x === x49) && (x50 instanceof $c_sci_$colon$colon))) {
      var x51 = $as_sci_$colon$colon(x50);
      var x52 = $as_Lorg_squawk_tokens_Token($n(x51).sci_$colon$colon__f_head);
      var x53 = $n(x51).sci_$colon$colon__f_next;
      if ((x52 instanceof $c_Lorg_squawk_tokens_Identifier)) {
        var x$1 = $as_Lorg_squawk_tokens_Identifier(x52);
        var this$2 = $n(x$1);
        var x59 = this$2.Lorg_squawk_tokens_Identifier__f_name;
        if ((x53 instanceof $c_sci_$colon$colon)) {
          var x54 = $as_sci_$colon$colon(x53);
          var x56 = $n(x54).sci_$colon$colon__f_next;
          var x$3 = $m_Lorg_squawk_tokens_Assign$();
          var x$4 = $n(x54).sci_$colon$colon__f_head;
          if ((x$3 === x$4)) {
            var this$3 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, x56, 0));
            if ((this$3 instanceof $c_s_util_Right)) {
              var x2 = $as_s_util_Right(this$3);
              var b = $n(x2).s_util_Right__f_value;
              var x$1$1 = $as_T2(b);
              if ((x$1$1 !== null)) {
                var expr = $as_Lorg_squawk_ast_Expression($n(x$1$1).T2__f__1);
                var afterExpr = $as_sci_List($n(x$1$1).T2__f__2);
                if ((afterExpr instanceof $c_sci_$colon$colon)) {
                  var x12 = $as_sci_$colon$colon(afterExpr);
                  var x14 = $n(x12).sci_$colon$colon__f_next;
                  var x$2 = $m_Lorg_squawk_tokens_Semicolon$();
                  var x$2$1 = $n(x12).sci_$colon$colon__f_head;
                  if ((x$2 === x$2$1)) {
                    var identifier = new $c_Lorg_squawk_ast_IdentifierExpr(x59);
                    var _1 = new $c_Lorg_squawk_ast_LetStmt(identifier, expr);
                    var value = new $c_T2(_1, x14);
                    return new $c_s_util_Right(value);
                  }
                }
                var value$1 = ("Expected ';' after let statement near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, afterExpr, 5));
                return new $c_s_util_Left(value$1);
              }
              throw new $c_s_MatchError(x$1$1);
            } else {
              return this$3;
            }
          }
        }
      }
    }
    var x$5 = $m_Lorg_squawk_tokens_Return$();
    if ((x$5 === x49)) {
      var this$9 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, x50, 0));
      if ((this$9 instanceof $c_s_util_Right)) {
        var x2$1 = $as_s_util_Right(this$9);
        var b$1 = $n(x2$1).s_util_Right__f_value;
        var x$1$2 = $as_T2(b$1);
        if ((x$1$2 !== null)) {
          var expr$1 = $as_Lorg_squawk_ast_Expression($n(x$1$2).T2__f__1);
          var afterExpr$1 = $as_sci_List($n(x$1$2).T2__f__2);
          if ((afterExpr$1 instanceof $c_sci_$colon$colon)) {
            var x19 = $as_sci_$colon$colon(afterExpr$1);
            var x21 = $n(x19).sci_$colon$colon__f_next;
            var x$6 = $m_Lorg_squawk_tokens_Semicolon$();
            var x$2$2 = $n(x19).sci_$colon$colon__f_head;
            if ((x$6 === x$2$2)) {
              var _1$1 = new $c_Lorg_squawk_ast_ReturnStmt(expr$1);
              var value$2 = new $c_T2(_1$1, x21);
              return new $c_s_util_Right(value$2);
            }
          }
          var value$3 = ("Expected ';' after return statement near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, afterExpr$1, 5));
          return new $c_s_util_Left(value$3);
        }
        throw new $c_s_MatchError(x$1$2);
      } else {
        return this$9;
      }
    }
    var x$7 = $m_Lorg_squawk_tokens_Function$();
    if (((x$7 === x49) && (x50 instanceof $c_sci_$colon$colon))) {
      var x36 = $as_sci_$colon$colon(x50);
      var x37 = $as_Lorg_squawk_tokens_Token($n(x36).sci_$colon$colon__f_head);
      var x38 = $n(x36).sci_$colon$colon__f_next;
      if ((x37 instanceof $c_Lorg_squawk_tokens_Identifier)) {
        var x$1$3 = $as_Lorg_squawk_tokens_Identifier(x37);
        var this$15 = $n(x$1$3);
        var x44 = this$15.Lorg_squawk_tokens_Identifier__f_name;
        if ((x38 instanceof $c_sci_$colon$colon)) {
          var x39 = $as_sci_$colon$colon(x38);
          var x41 = $n(x39).sci_$colon$colon__f_next;
          var x$9 = $m_Lorg_squawk_tokens_OpenParen$();
          var x$10 = $n(x39).sci_$colon$colon__f_head;
          if ((x$9 === x$10)) {
            return $p_Lorg_squawk_parser_Parser$__parseFunctionDeclaration__T__sci_List__s_util_Either($thiz, x44, x41);
          }
        }
      }
    }
  }
  var this$16 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, tokens, 0));
  if ((this$16 instanceof $c_s_util_Right)) {
    var x2$2 = $as_s_util_Right(this$16);
    var b$2 = $n(x2$2).s_util_Right__f_value;
    var x$1$4 = $as_T2(b$2);
    if ((x$1$4 !== null)) {
      var expr$2 = $as_Lorg_squawk_ast_Expression($n(x$1$4).T2__f__1);
      var remainingTokens = $as_sci_List($n(x$1$4).T2__f__2);
      if ((remainingTokens instanceof $c_sci_$colon$colon)) {
        var x26 = $as_sci_$colon$colon(remainingTokens);
        var x28 = $n(x26).sci_$colon$colon__f_next;
        var x$8 = $m_Lorg_squawk_tokens_Semicolon$();
        var x$2$3 = $n(x26).sci_$colon$colon__f_head;
        if ((x$8 === x$2$3)) {
          var _1$2 = new $c_Lorg_squawk_ast_ExpressionStmt(expr$2);
          var value$4 = new $c_T2(_1$2, x28);
          return new $c_s_util_Right(value$4);
        }
      }
      var value$5 = ("Expected ';' after expression near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, remainingTokens, 5));
      return new $c_s_util_Left(value$5);
    }
    throw new $c_s_MatchError(x$1$4);
  } else {
    return this$16;
  }
}
function $p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, tokens, precedence) {
  var x63 = $n(tokens).headOption__s_Option();
  if ((x63 instanceof $c_s_Some)) {
    var token = $as_Lorg_squawk_tokens_Token($n($as_s_Some(x63)).s_Some__f_value);
    var this$1 = $n($p_Lorg_squawk_parser_Parser$__parsePrimaryExpression__Lorg_squawk_tokens_Token__sci_List__s_util_Either($thiz, token, $as_sci_List($n(tokens).tail__O())));
    if ((this$1 instanceof $c_s_util_Right)) {
      var x2 = $as_s_util_Right(this$1);
      var b = $n(x2).s_util_Right__f_value;
      var x$1 = $as_T2(b);
      if ((x$1 !== null)) {
        var leftExpr = $as_Lorg_squawk_ast_Expression($n(x$1).T2__f__1);
        var remainingTokens = $as_sci_List($n(x$1).T2__f__2);
        return $p_Lorg_squawk_parser_Parser$__parseInfixExpression__Lorg_squawk_ast_Expression__sci_List__I__s_util_Either($m_Lorg_squawk_parser_Parser$(), leftExpr, remainingTokens, precedence);
      }
      throw new $c_s_MatchError(x$1);
    } else {
      return this$1;
    }
  }
  var x = $m_s_None$();
  if ((x === x63)) {
    return new $c_s_util_Left("Unexpected end of tokens");
  }
  throw new $c_s_MatchError(x63);
}
function $p_Lorg_squawk_parser_Parser$__parsePrimaryExpression__Lorg_squawk_tokens_Token__sci_List__s_util_Either($thiz, token, tokens) {
  if ((token instanceof $c_Lorg_squawk_tokens_Number)) {
    var x$1 = $as_Lorg_squawk_tokens_Number(token);
    var this$2 = $n(x$1);
    var x82 = this$2.Lorg_squawk_tokens_Number__f_value;
    var _1 = new $c_Lorg_squawk_ast_NumberLiteralExpr(x82);
    var value = new $c_T2(_1, tokens);
    return new $c_s_util_Right(value);
  } else if ((token instanceof $c_Lorg_squawk_tokens_Identifier)) {
    var x$1$1 = $as_Lorg_squawk_tokens_Identifier(token);
    var this$7 = $n(x$1$1);
    var x79 = this$7.Lorg_squawk_tokens_Identifier__f_name;
    if ($n($n(tokens).headOption__s_Option()).contains__O__Z($m_Lorg_squawk_tokens_OpenParen$())) {
      return $p_Lorg_squawk_parser_Parser$__parseFunctionCall__Lorg_squawk_ast_Expression__sci_List__s_util_Either($thiz, new $c_Lorg_squawk_ast_IdentifierExpr(x79), $as_sci_List($n(tokens).tail__O()));
    } else {
      var _1$1 = new $c_Lorg_squawk_ast_IdentifierExpr(x79);
      var value$1 = new $c_T2(_1$1, tokens);
      return new $c_s_util_Right(value$1);
    }
  } else {
    var x = $m_Lorg_squawk_tokens_True$();
    if ((x === token)) {
      var _1$2 = new $c_Lorg_squawk_ast_BooleanLiteralExpr(true);
      var value$2 = new $c_T2(_1$2, tokens);
      return new $c_s_util_Right(value$2);
    } else {
      var x$3 = $m_Lorg_squawk_tokens_False$();
      if ((x$3 === token)) {
        var _1$3 = new $c_Lorg_squawk_ast_BooleanLiteralExpr(false);
        var value$3 = new $c_T2(_1$3, tokens);
        return new $c_s_util_Right(value$3);
      } else {
        var x$5 = $m_Lorg_squawk_tokens_OpenParen$();
        if ((x$5 === token)) {
          var this$18 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, tokens, 0));
          if ((this$18 instanceof $c_s_util_Right)) {
            var x2 = $as_s_util_Right(this$18);
            var b = $n(x2).s_util_Right__f_value;
            var x$1$2 = $as_T2(b);
            if ((x$1$2 !== null)) {
              var expr = $as_Lorg_squawk_ast_Expression($n(x$1$2).T2__f__1);
              var afterExpr = $as_sci_List($n(x$1$2).T2__f__2);
              if ((afterExpr instanceof $c_sci_$colon$colon)) {
                var x67 = $as_sci_$colon$colon(afterExpr);
                var x69 = $n(x67).sci_$colon$colon__f_next;
                var x$2 = $m_Lorg_squawk_tokens_CloseParen$();
                var x$2$1 = $n(x67).sci_$colon$colon__f_head;
                if ((x$2 === x$2$1)) {
                  var value$4 = new $c_T2(expr, x69);
                  return new $c_s_util_Right(value$4);
                }
              }
              var value$5 = ("Expected ')' after expression near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, afterExpr, 5));
              return new $c_s_util_Left(value$5);
            }
            throw new $c_s_MatchError(x$1$2);
          } else {
            return this$18;
          }
        } else {
          var x$7 = $m_Lorg_squawk_tokens_Minus$();
          if ((x$7 === token)) {
            var this$22 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, tokens, 0));
            if ((this$22 instanceof $c_s_util_Right)) {
              var x2$1 = $as_s_util_Right(this$22);
              var b$1 = $n(x2$1).s_util_Right__f_value;
              var x$1$3 = $as_T2(b$1);
              matchResult14: {
                var $x_1;
                if ((x$1$3 !== null)) {
                  var expr$1 = $as_Lorg_squawk_ast_Expression($n(x$1$3).T2__f__1);
                  var remainingTokens = $as_sci_List($n(x$1$3).T2__f__2);
                  var operator = $m_Lorg_squawk_tokens_Minus$();
                  var _1$4 = new $c_Lorg_squawk_ast_UnaryExpr(operator, expr$1);
                  var $x_1 = new $c_T2(_1$4, remainingTokens);
                  break matchResult14;
                }
                throw new $c_s_MatchError(x$1$3);
              }
              return new $c_s_util_Right($x_1);
            } else {
              return this$22;
            }
          } else {
            var value$6 = ("Unsupported expression near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, tokens, 5));
            return new $c_s_util_Left(value$6);
          }
        }
      }
    }
  }
}
function $p_Lorg_squawk_parser_Parser$__parseFunctionCall__Lorg_squawk_ast_Expression__sci_List__s_util_Either($thiz, function$1, tokens) {
  var this$1 = $n($p_Lorg_squawk_parser_Parser$__parseArguments$1__sci_List__sci_List__s_util_Either($thiz, tokens, $m_sci_Nil$()));
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = $n(x2).s_util_Right__f_value;
    var x$1 = $as_T2(b);
    matchResult18: {
      var $x_1;
      if ((x$1 !== null)) {
        var args = $as_sci_List($n(x$1).T2__f__1);
        var remainingTokens = $as_sci_List($n(x$1).T2__f__2);
        var _1 = new $c_Lorg_squawk_ast_FunctionCallExpr(function$1, args);
        var $x_1 = new $c_T2(_1, remainingTokens);
        break matchResult18;
      }
      throw new $c_s_MatchError(x$1);
    }
    return new $c_s_util_Right($x_1);
  } else {
    return this$1;
  }
}
function $p_Lorg_squawk_parser_Parser$__parseInfixExpression__Lorg_squawk_ast_Expression__sci_List__I__s_util_Either($thiz, leftExpr, tokens, precedence) {
  var elem = null;
  elem = tokens;
  var elem$1 = null;
  elem$1 = leftExpr;
  while (true) {
    var this$3 = $n($as_sci_List(elem));
    if (((!this$3.isEmpty__Z()) && (precedence < $p_Lorg_squawk_parser_Parser$__getPrecedence__Lorg_squawk_tokens_Token__I($thiz, $as_Lorg_squawk_tokens_Token($n($as_sci_List(elem)).head__O()))))) {
      var x102 = $as_Lorg_squawk_tokens_Token($n($as_sci_List(elem)).head__O());
      matchAlts1: {
        matchAlts2: {
          var x = $m_Lorg_squawk_tokens_Plus$();
          if ((x === x102)) {
            break matchAlts2;
          }
          var x$3 = $m_Lorg_squawk_tokens_Minus$();
          if ((x$3 === x102)) {
            break matchAlts2;
          }
          var x$5 = $m_Lorg_squawk_tokens_Asterisk$();
          if ((x$5 === x102)) {
            break matchAlts2;
          }
          var x$7 = $m_Lorg_squawk_tokens_Slash$();
          if ((x$7 === x102)) {
            break matchAlts2;
          }
          var x$9 = $m_Lorg_squawk_tokens_Equal$();
          if ((x$9 === x102)) {
            break matchAlts2;
          }
          var x$11 = $m_Lorg_squawk_tokens_NotEqual$();
          if ((x$11 === x102)) {
            break matchAlts2;
          }
          var x$13 = $m_Lorg_squawk_tokens_LessThan$();
          if ((x$13 === x102)) {
            break matchAlts2;
          }
          var x$15 = $m_Lorg_squawk_tokens_GreaterThan$();
          if ((x$15 === x102)) {
            break matchAlts2;
          }
          break matchAlts1;
        }
        var this$4 = $n($p_Lorg_squawk_parser_Parser$__parseBinaryExpression__Lorg_squawk_ast_Expression__sci_List__s_util_Either($thiz, $as_Lorg_squawk_ast_Expression(elem$1), $as_sci_List(elem)));
        if ((this$4 instanceof $c_s_util_Right)) {
          var x2 = $as_s_util_Right(this$4);
          var b = $n(x2).s_util_Right__f_value;
          var x$1 = $as_T2(b);
          matchResult19: {
            if ((x$1 !== null)) {
              var newLeft = $as_Lorg_squawk_ast_Expression($n(x$1).T2__f__1);
              var newTokens = $as_sci_List($n(x$1).T2__f__2);
              elem$1 = newLeft;
              elem = newTokens;
              break matchResult19;
            }
            throw new $c_s_MatchError(x$1);
          }
        }
        continue;
      }
      var x$17 = $m_Lorg_squawk_tokens_OpenParen$();
      if ((x$17 === x102)) {
        var this$5 = $n($p_Lorg_squawk_parser_Parser$__parseFunctionCall__Lorg_squawk_ast_Expression__sci_List__s_util_Either($thiz, $as_Lorg_squawk_ast_Expression(elem$1), $as_sci_List($n($as_sci_List(elem)).tail__O())));
        if ((this$5 instanceof $c_s_util_Right)) {
          var x2$1 = $as_s_util_Right(this$5);
          var b$1 = $n(x2$1).s_util_Right__f_value;
          var x$1$1 = $as_T2(b$1);
          matchResult20: {
            if ((x$1$1 !== null)) {
              var newLeft$1 = $as_Lorg_squawk_ast_Expression($n(x$1$1).T2__f__1);
              var newTokens$1 = $as_sci_List($n(x$1$1).T2__f__2);
              elem$1 = newLeft$1;
              elem = newTokens$1;
              break matchResult20;
            }
            throw new $c_s_MatchError(x$1$1);
          }
        }
        continue;
      }
      var _1 = $as_Lorg_squawk_ast_Expression(elem$1);
      var _2 = $as_sci_List(elem);
      var value = new $c_T2(_1, _2);
      return new $c_s_util_Right(value);
    } else {
      break;
    }
  }
  var _1$1 = $as_Lorg_squawk_ast_Expression(elem$1);
  var _2$1 = $as_sci_List(elem);
  var value$1 = new $c_T2(_1$1, _2$1);
  return new $c_s_util_Right(value$1);
}
function $p_Lorg_squawk_parser_Parser$__parseBinaryExpression__Lorg_squawk_ast_Expression__sci_List__s_util_Either($thiz, left, tokens) {
  var operator = $as_Lorg_squawk_tokens_Token($n(tokens).head__O());
  var precedence = $p_Lorg_squawk_parser_Parser$__getPrecedence__Lorg_squawk_tokens_Token__I($thiz, operator);
  var rightTokens = $as_sci_List($n(tokens).tail__O());
  var this$1 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, rightTokens, precedence));
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = $n(x2).s_util_Right__f_value;
    var x$1 = $as_T2(b);
    matchResult22: {
      var $x_1;
      if ((x$1 !== null)) {
        var right = $as_Lorg_squawk_ast_Expression($n(x$1).T2__f__1);
        var remainingTokens = $as_sci_List($n(x$1).T2__f__2);
        var _1 = new $c_Lorg_squawk_ast_BinaryExpr(operator, left, right);
        var $x_1 = new $c_T2(_1, remainingTokens);
        break matchResult22;
      }
      throw new $c_s_MatchError(x$1);
    }
    return new $c_s_util_Right($x_1);
  } else {
    return this$1;
  }
}
function $p_Lorg_squawk_parser_Parser$__parseFunctionDeclaration__T__sci_List__s_util_Either($thiz, name, tokens) {
  var this$1 = $n($p_Lorg_squawk_parser_Parser$__parseParameters$1__sci_List__sci_List__s_util_Either($thiz, tokens, $m_sci_Nil$()));
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = $n(x2).s_util_Right__f_value;
    var x$1 = $as_T2(b);
    if ((x$1 !== null)) {
      var params = $as_sci_List($n(x$1).T2__f__1);
      var remainingTokens = $as_sci_List($n(x$1).T2__f__2);
      if ((remainingTokens instanceof $c_sci_$colon$colon)) {
        var x136 = $as_sci_$colon$colon(remainingTokens);
        var x138 = $n(x136).sci_$colon$colon__f_next;
        var x = $m_Lorg_squawk_tokens_OpenBracket$();
        var x$2 = $n(x136).sci_$colon$colon__f_head;
        if ((x === x$2)) {
          var this$2 = $n($p_Lorg_squawk_parser_Parser$__parseStatements__sci_List__s_util_Either($thiz, x138));
          if ((this$2 instanceof $c_s_util_Right)) {
            var x2$1 = $as_s_util_Right(this$2);
            var b$1 = $n(x2$1).s_util_Right__f_value;
            var x$1$1 = $as_T2(b$1);
            if ((x$1$1 !== null)) {
              var statements = $as_sci_List($n(x$1$1).T2__f__1);
              var afterStatements = $as_sci_List($n(x$1$1).T2__f__2);
              if ((afterStatements instanceof $c_sci_$colon$colon)) {
                var x129 = $as_sci_$colon$colon(afterStatements);
                var x131 = $n(x129).sci_$colon$colon__f_next;
                var x$3 = $m_Lorg_squawk_tokens_CloseBracket$();
                var x$2$1 = $n(x129).sci_$colon$colon__f_head;
                if ((x$3 === x$2$1)) {
                  var name$1 = new $c_Lorg_squawk_ast_IdentifierExpr(name);
                  var body = new $c_Lorg_squawk_ast_BlockStmt(statements);
                  var _1 = new $c_Lorg_squawk_ast_FunctionDeclarationStmt(name$1, params, body);
                  var value = new $c_T2(_1, x131);
                  return new $c_s_util_Right(value);
                }
              }
              var value$1 = ("Expected '}' after function body near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, afterStatements, 5));
              return new $c_s_util_Left(value$1);
            }
            throw new $c_s_MatchError(x$1$1);
          } else {
            return this$2;
          }
        }
      }
      var value$2 = ("Expected '{' after function parameters near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, remainingTokens, 5));
      return new $c_s_util_Left(value$2);
    }
    throw new $c_s_MatchError(x$1);
  } else {
    return this$1;
  }
}
function $p_Lorg_squawk_parser_Parser$__getPrecedence__Lorg_squawk_tokens_Token__I($thiz, token) {
  matchAlts9: {
    matchAlts10: {
      var x = $m_Lorg_squawk_tokens_Equal$();
      if ((x === token)) {
        break matchAlts10;
      }
      var x$3 = $m_Lorg_squawk_tokens_NotEqual$();
      if ((x$3 === token)) {
        break matchAlts10;
      }
      break matchAlts9;
    }
    return 1;
  }
  matchAlts7: {
    matchAlts8: {
      var x$5 = $m_Lorg_squawk_tokens_LessThan$();
      if ((x$5 === token)) {
        break matchAlts8;
      }
      var x$7 = $m_Lorg_squawk_tokens_GreaterThan$();
      if ((x$7 === token)) {
        break matchAlts8;
      }
      break matchAlts7;
    }
    return 2;
  }
  matchAlts5: {
    matchAlts6: {
      var x$9 = $m_Lorg_squawk_tokens_Plus$();
      if ((x$9 === token)) {
        break matchAlts6;
      }
      var x$11 = $m_Lorg_squawk_tokens_Minus$();
      if ((x$11 === token)) {
        break matchAlts6;
      }
      break matchAlts5;
    }
    return 3;
  }
  matchAlts3: {
    matchAlts4: {
      var x$13 = $m_Lorg_squawk_tokens_Asterisk$();
      if ((x$13 === token)) {
        break matchAlts4;
      }
      var x$15 = $m_Lorg_squawk_tokens_Slash$();
      if ((x$15 === token)) {
        break matchAlts4;
      }
      break matchAlts3;
    }
    return 4;
  }
  return 0;
}
function $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, tokens, count) {
  var this$1 = $n($n(tokens).take__I__sci_List(count));
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", " ", "");
}
function $p_Lorg_squawk_parser_Parser$__parseArguments$1__sci_List__sci_List__s_util_Either($thiz, tokens, args) {
  var tokens$tailLocal1 = tokens;
  while (true) {
    var x86 = tokens$tailLocal1;
    if ((x86 instanceof $c_sci_$colon$colon)) {
      var x90 = $as_sci_$colon$colon(x86);
      var x91 = $as_Lorg_squawk_tokens_Token($n(x90).sci_$colon$colon__f_head);
      var x92 = $n(x90).sci_$colon$colon__f_next;
      var x = $m_Lorg_squawk_tokens_CloseParen$();
      if ((x === x91)) {
        var value = new $c_T2(args, x92);
        return new $c_s_util_Right(value);
      }
      var x$3 = $m_Lorg_squawk_tokens_Comma$();
      if ((x$3 === x91)) {
        tokens$tailLocal1 = x92;
        continue;
      }
    }
    var this$3 = $n($p_Lorg_squawk_parser_Parser$__parseExpression__sci_List__I__s_util_Either($thiz, tokens$tailLocal1, 0));
    if ((this$3 instanceof $c_s_util_Right)) {
      var x2 = $as_s_util_Right(this$3);
      var b = $n(x2).s_util_Right__f_value;
      var x$1 = $as_T2(b);
      if ((x$1 !== null)) {
        var arg = $as_Lorg_squawk_ast_Expression($n(x$1).T2__f__1);
        var rest = $as_sci_List($n(x$1).T2__f__2);
        var this$4 = $n(args);
        return $p_Lorg_squawk_parser_Parser$__parseArguments$1__sci_List__sci_List__s_util_Either($thiz, rest, $as_sci_List($f_sc_StrictOptimizedSeqOps__appended__O__O(this$4, arg)));
      }
      throw new $c_s_MatchError(x$1);
    } else {
      return this$3;
    }
  }
}
function $p_Lorg_squawk_parser_Parser$__parseParameters$1__sci_List__sci_List__s_util_Either($thiz, tokens, params) {
  var params$tailLocal1 = params;
  var tokens$tailLocal2 = tokens;
  while (true) {
    var x106 = tokens$tailLocal2;
    if ((x106 instanceof $c_sci_$colon$colon)) {
      var x119 = $as_sci_$colon$colon(x106);
      var x120 = $as_Lorg_squawk_tokens_Token($n(x119).sci_$colon$colon__f_head);
      var x121 = $n(x119).sci_$colon$colon__f_next;
      if ((x120 instanceof $c_Lorg_squawk_tokens_Identifier)) {
        var x$1 = $as_Lorg_squawk_tokens_Identifier(x120);
        var this$2 = $n(x$1);
        var x127 = this$2.Lorg_squawk_tokens_Identifier__f_name;
        if ((x121 instanceof $c_sci_$colon$colon)) {
          var x122 = $as_sci_$colon$colon(x121);
          var x123 = $as_Lorg_squawk_tokens_Token($n(x122).sci_$colon$colon__f_head);
          var x124 = $n(x122).sci_$colon$colon__f_next;
          var x = $m_Lorg_squawk_tokens_Comma$();
          if ((x === x123)) {
            var this$4 = $n(params$tailLocal1);
            var elem = new $c_Lorg_squawk_ast_IdentifierExpr(x127);
            var params$tailLocal1$tmp1 = $as_sci_List($f_sc_StrictOptimizedSeqOps__appended__O__O(this$4, elem));
            tokens$tailLocal2 = x124;
            params$tailLocal1 = params$tailLocal1$tmp1;
            continue;
          }
          var x$3 = $m_Lorg_squawk_tokens_CloseParen$();
          if ((x$3 === x123)) {
            var this$6 = $n(params$tailLocal1);
            var elem$1 = new $c_Lorg_squawk_ast_IdentifierExpr(x127);
            var _1 = $f_sc_StrictOptimizedSeqOps__appended__O__O(this$6, elem$1);
            var value = new $c_T2(_1, x124);
            return new $c_s_util_Right(value);
          }
        }
      }
      var x$5 = $m_Lorg_squawk_tokens_CloseParen$();
      if ((x$5 === x120)) {
        var _1$1 = params$tailLocal1;
        var value$1 = new $c_T2(_1$1, x121);
        return new $c_s_util_Right(value$1);
      }
    }
    var value$2 = ("Expected parameter list near: " + $p_Lorg_squawk_parser_Parser$__showNearbyTokens__sci_List__I__T($thiz, tokens$tailLocal2, 5));
    return new $c_s_util_Left(value$2);
  }
}
/** @constructor */
function $c_Lorg_squawk_parser_Parser$() {
}
$c_Lorg_squawk_parser_Parser$.prototype = new $h_O();
$c_Lorg_squawk_parser_Parser$.prototype.constructor = $c_Lorg_squawk_parser_Parser$;
/** @constructor */
function $h_Lorg_squawk_parser_Parser$() {
}
$h_Lorg_squawk_parser_Parser$.prototype = $c_Lorg_squawk_parser_Parser$.prototype;
$c_Lorg_squawk_parser_Parser$.prototype.parse__sci_List__s_util_Either = (function(tokens) {
  var this$1 = $n($p_Lorg_squawk_parser_Parser$__parseProgram__sci_List__s_util_Either(this, tokens));
  if ((this$1 instanceof $c_s_util_Right)) {
    var x2 = $as_s_util_Right(this$1);
    var b = $n(x2).s_util_Right__f_value;
    var _$1 = $as_T2(b);
    return new $c_s_util_Right($as_Lorg_squawk_ast_Program($n(_$1).T2__f__1));
  } else {
    return this$1;
  }
});
var $d_Lorg_squawk_parser_Parser$ = new $TypeData().initClass($c_Lorg_squawk_parser_Parser$, "org.squawk.parser.Parser$", ({
  Lorg_squawk_parser_Parser$: 1
}));
var $n_Lorg_squawk_parser_Parser$;
function $m_Lorg_squawk_parser_Parser$() {
  if ((!$n_Lorg_squawk_parser_Parser$)) {
    $n_Lorg_squawk_parser_Parser$ = new $c_Lorg_squawk_parser_Parser$();
  }
  return $n_Lorg_squawk_parser_Parser$;
}
function $is_Lorg_squawk_tokens_Token(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_squawk_tokens_Token)));
}
function $as_Lorg_squawk_tokens_Token(obj) {
  return (($is_Lorg_squawk_tokens_Token(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.tokens.Token"));
}
function $isArrayOf_Lorg_squawk_tokens_Token(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_tokens_Token)));
}
function $asArrayOf_Lorg_squawk_tokens_Token(obj, depth) {
  return (($isArrayOf_Lorg_squawk_tokens_Token(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.tokens.Token;", depth));
}
function $s_Lorg_squawk_web_WebREPL__main__AT__V(args) {
  var this$1 = $m_Lorg_squawk_web_WebREPL$();
  $p_Lorg_squawk_web_WebREPL$__setupUI__V(this$1);
}
function $p_Lorg_squawk_web_WebREPL$__setupUI__V($thiz) {
  var inputArea = document.getElementById("input");
  var runButton = document.getElementById("runButton");
  runButton.addEventListener("click", ((_$1) => {
    $p_Lorg_squawk_web_WebREPL$__runCode__T__V($m_Lorg_squawk_web_WebREPL$(), $as_T(inputArea.value));
  }));
  var showEnvButton = document.getElementById("showEnvButton");
  showEnvButton.addEventListener("click", ((_$2) => {
    $p_Lorg_squawk_web_WebREPL$__showEnv__V($m_Lorg_squawk_web_WebREPL$());
  }));
  var clearEnvButton = document.getElementById("clearEnvButton");
  clearEnvButton.addEventListener("click", ((_$3) => {
    $p_Lorg_squawk_web_WebREPL$__clearEnv__V($m_Lorg_squawk_web_WebREPL$());
  }));
}
function $p_Lorg_squawk_web_WebREPL$__runCode__T__V($thiz, input) {
  var tokens = $m_Lorg_squawk_lexer_Lexer$().tokenize__T__sci_List(input);
  var parseResult = $m_Lorg_squawk_parser_Parser$().parse__sci_List__s_util_Either(tokens);
  matchResult3: {
    if ((parseResult instanceof $c_s_util_Right)) {
      var program = $as_Lorg_squawk_ast_Program($n($as_s_util_Right(parseResult)).s_util_Right__f_value);
      var this$1 = $n($n(program).Lorg_squawk_ast_Program__f_statements);
      var f = ((stmt) => {
        var stmt$1 = $as_Lorg_squawk_ast_Statement(stmt);
        var evalResult = $m_Lorg_squawk_evaluator_Evaluator$().evaluate__Lorg_squawk_ast_ASTNode__sci_Map__s_util_Either(stmt$1, $m_Lorg_squawk_web_WebREPL$().Lorg_squawk_web_WebREPL$__f_environment);
        if ((evalResult instanceof $c_s_util_Right)) {
          var x6 = $as_T2($n($as_s_util_Right(evalResult)).s_util_Right__f_value);
          if ((x6 !== null)) {
            var value = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x6).T2__f__1);
            var updatedEnv = $as_sci_Map($n(x6).T2__f__2);
            $m_Lorg_squawk_web_WebREPL$().Lorg_squawk_web_WebREPL$__f_environment = updatedEnv;
            var x = $m_Lorg_squawk_evaluator_Evaluator$VoidValue$();
            if ((x === value)) {
              return "OK";
            } else {
              return ("" + value);
            }
          }
        }
        if ((evalResult instanceof $c_s_util_Left)) {
          var error = $as_T($n($as_s_util_Left(evalResult)).s_util_Left__f_value);
          return ("Evaluation error: " + error);
        }
        throw new $c_s_MatchError(evalResult);
      });
      if ((this$1 === $m_sci_Nil$())) {
        var $x_1 = $m_sci_Nil$();
      } else {
        var arg1 = this$1.head__O();
        var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
        var t = h;
        var rest = $as_sci_List(this$1.tail__O());
        while ((rest !== $m_sci_Nil$())) {
          var arg1$1 = $n(rest).head__O();
          var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
          $n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $as_sci_List($n(rest).tail__O());
        }
        var $x_1 = h;
      }
      var this$2 = $n($x_1);
      var output = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "\n", "");
      document.getElementById("output").textContent = output;
      break matchResult3;
    }
    if ((parseResult instanceof $c_s_util_Left)) {
      var error$1 = $as_T($n($as_s_util_Left(parseResult)).s_util_Left__f_value);
      document.getElementById("output").textContent = ("Parsing error: " + error$1);
      break matchResult3;
    }
    throw new $c_s_MatchError(parseResult);
  }
}
function $p_Lorg_squawk_web_WebREPL$__showEnv__V($thiz) {
  var this$1 = $n($as_sc_IterableOnceOps($n($thiz.Lorg_squawk_web_WebREPL$__f_environment).map__F1__O(new $c_sjsr_AnonFunction1(((x$1) => {
    var x$1$1 = $as_T2(x$1);
    if ((x$1$1 !== null)) {
      var name = $as_T($n(x$1$1).T2__f__1);
      var value = $as_Lorg_squawk_evaluator_Evaluator$Value($n(x$1$1).T2__f__2);
      return ((name + " = ") + value);
    }
    throw new $c_s_MatchError(x$1$1);
  })))));
  var envOutput = $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, "", "\n", "");
  document.getElementById("output").textContent = envOutput;
}
function $p_Lorg_squawk_web_WebREPL$__clearEnv__V($thiz) {
  $thiz.Lorg_squawk_web_WebREPL$__f_environment = $m_sci_Map$EmptyMap$();
  document.getElementById("output").textContent = "Environment cleared";
}
/** @constructor */
function $c_Lorg_squawk_web_WebREPL$() {
  this.Lorg_squawk_web_WebREPL$__f_environment = null;
  $n_Lorg_squawk_web_WebREPL$ = this;
  this.Lorg_squawk_web_WebREPL$__f_environment = $m_sci_Map$EmptyMap$();
}
$c_Lorg_squawk_web_WebREPL$.prototype = new $h_O();
$c_Lorg_squawk_web_WebREPL$.prototype.constructor = $c_Lorg_squawk_web_WebREPL$;
/** @constructor */
function $h_Lorg_squawk_web_WebREPL$() {
}
$h_Lorg_squawk_web_WebREPL$.prototype = $c_Lorg_squawk_web_WebREPL$.prototype;
var $d_Lorg_squawk_web_WebREPL$ = new $TypeData().initClass($c_Lorg_squawk_web_WebREPL$, "org.squawk.web.WebREPL$", ({
  Lorg_squawk_web_WebREPL$: 1
}));
var $n_Lorg_squawk_web_WebREPL$;
function $m_Lorg_squawk_web_WebREPL$() {
  if ((!$n_Lorg_squawk_web_WebREPL$)) {
    $n_Lorg_squawk_web_WebREPL$ = new $c_Lorg_squawk_web_WebREPL$();
  }
  return $n_Lorg_squawk_web_WebREPL$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.s_Array$EmptyArrays$__f_emptyIntArray = null;
  this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
  $n_s_Array$EmptyArrays$ = this;
  this.s_Array$EmptyArrays$__f_emptyIntArray = new $ac_I(0);
  this.s_Array$EmptyArrays$__f_emptyObjectArray = new $ac_O(0);
}
$c_s_Array$EmptyArrays$.prototype = new $h_O();
$c_s_Array$EmptyArrays$.prototype.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $c_s_Array$EmptyArrays$.prototype;
var $d_s_Array$EmptyArrays$ = new $TypeData().initClass($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  s_Array$EmptyArrays$: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$c_s_LowPriorityImplicits2.prototype = new $h_O();
$c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
/** @constructor */
function $c_sc_Hashing$() {
}
$c_sc_Hashing$.prototype = new $h_O();
$c_sc_Hashing$.prototype.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $c_sc_Hashing$.prototype;
$c_sc_Hashing$.prototype.improve__I__I = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().initClass($c_sc_Hashing$, "scala.collection.Hashing$", ({
  sc_Hashing$: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)));
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth));
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    $n(f).apply__O__O($n(it).next__O());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  while ((res && $n(it).hasNext__Z())) {
    res = $uZ($n(p).apply__O__O($n(it).next__O()));
  }
  return res;
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x1 = $n($as_sc_IterableOnce($thiz)).knownSize__I();
  switch (x1) {
    case (-1): {
      return (!$n($n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator()).hasNext__Z());
      break;
    }
    case 0: {
      return true;
      break;
    }
    default: {
      return false;
    }
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  var i = start;
  var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && $n(it).hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
    return (("" + start) + end);
  } else {
    var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
    return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
  }
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = $n(b).scm_StringBuilder__f_underlying;
  var this$1 = $n(start);
  if ((this$1.length !== 0)) {
    var this$2 = $n(jsb);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  }
  var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var this$3 = $n(jsb);
    var obj = $n(it).next__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while ($n(it).hasNext__Z()) {
      var this$4 = $n(jsb);
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      var this$5 = $n(jsb);
      var obj$1 = $n(it).next__O();
      this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
    }
  }
  var this$6 = $n(end);
  if ((this$6.length !== 0)) {
    var this$7 = $n(jsb);
    this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  }
  return b;
}
function $is_sc_IterableOnceOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnceOps)));
}
function $as_sc_IterableOnceOps(obj) {
  return (($is_sc_IterableOnceOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnceOps"));
}
function $isArrayOf_sc_IterableOnceOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnceOps)));
}
function $asArrayOf_sc_IterableOnceOps(obj, depth) {
  return (($isArrayOf_sc_IterableOnceOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnceOps;", depth));
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.sc_Iterator$ConcatIteratorCell__f_head = null;
  this.sc_Iterator$ConcatIteratorCell__f_tail = null;
  this.sc_Iterator$ConcatIteratorCell__f_head = head;
  this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
}
$c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $c_sc_Iterator$ConcatIteratorCell.prototype;
$c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
  return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  sc_Iterator$ConcatIteratorCell: 1
}));
function $p_sci_IndexedSeqDefaults$__liftedTree1$1__I($thiz) {
  try {
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10);
  } catch (e) {
    if (false) {
      return 64;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this);
}
$c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $c_sci_IndexedSeqDefaults$.prototype;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  sci_IndexedSeqDefaults$: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = null;
}
$c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $c_sci_LazyList$LazyBuilder$DeferredState.prototype;
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.eval__sci_LazyList$State = (function() {
  var state = this.sci_LazyList$LazyBuilder$DeferredState__f__state;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return $as_sci_LazyList$State($n(state).apply__O());
});
$c_sci_LazyList$LazyBuilder$DeferredState.prototype.init__F0__V = (function(state) {
  if ((this.sci_LazyList$LazyBuilder$DeferredState__f__state !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.sci_LazyList$LazyBuilder$DeferredState__f__state = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().initClass($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  sci_LazyList$LazyBuilder$DeferredState: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.sci_MapNode$__f_EmptyMapNode = null;
  $n_sci_MapNode$ = this;
  this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$c_sci_MapNode$.prototype = new $h_O();
$c_sci_MapNode$.prototype.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $c_sci_MapNode$.prototype;
var $d_sci_MapNode$ = new $TypeData().initClass($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  sci_MapNode$: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().getLength__O__I(as)) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$c_sci_Node.prototype = new $h_O();
$c_sci_Node.prototype.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $c_sci_Node.prototype;
$c_sci_Node.prototype.removeElement__AI__I__AI = (function(as, ix) {
  if ((ix < 0)) {
    throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
  }
  if ((ix > (((-1) + $n(as).u.length) | 0))) {
    throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
  }
  var result = new $ac_I((((-1) + $n(as).u.length) | 0));
  $systemArraycopy($n(as), 0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = (((-1) + (($n(as).u.length - ix) | 0)) | 0);
  $systemArraycopy($n(as), srcPos, result, ix, length);
  return result;
});
$c_sci_Node.prototype.insertElement__AI__I__I__AI = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
  }
  if ((ix > $n(as).u.length)) {
    throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
  }
  var result = new $ac_I(((1 + $n(as).u.length) | 0));
  $systemArraycopy($n(as), 0, result, 0, ix);
  $n(result).set(ix, elem);
  var destPos = ((1 + ix) | 0);
  var length = (($n(as).u.length - ix) | 0);
  $systemArraycopy($n(as), ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().initClass(0, "scala.collection.immutable.Node", ({
  sci_Node: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.sci_Node$__f_MaxDepth = 0;
  $n_sci_Node$ = this;
  this.sci_Node$__f_MaxDepth = $doubleToInt($uD(Math.ceil(6.4)));
}
$c_sci_Node$.prototype = new $h_O();
$c_sci_Node$.prototype.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $c_sci_Node$.prototype;
$c_sci_Node$.prototype.maskFrom__I__I__I = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$c_sci_Node$.prototype.bitposFrom__I__I = (function(mask) {
  return (1 << mask);
});
$c_sci_Node$.prototype.indexFrom__I__I__I = (function(bitmap, bitpos) {
  var i = (bitmap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i);
});
$c_sci_Node$.prototype.indexFrom__I__I__I__I = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().initClass($c_sci_Node$, "scala.collection.immutable.Node$", ({
  sci_Node$: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.sci_VectorStatics$__f_empty1 = null;
  this.sci_VectorStatics$__f_empty2 = null;
  this.sci_VectorStatics$__f_empty3 = null;
  this.sci_VectorStatics$__f_empty4 = null;
  this.sci_VectorStatics$__f_empty5 = null;
  this.sci_VectorStatics$__f_empty6 = null;
  $n_sci_VectorStatics$ = this;
  this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
  this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
  this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
}
$c_sci_VectorStatics$.prototype = new $h_O();
$c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $c_sci_VectorStatics$.prototype;
$c_sci_VectorStatics$.prototype.copyAppend1__AO__O__AO = (function(a, elem) {
  var alen = $n(a).u.length;
  var ac = new $ac_O(((1 + alen) | 0));
  $systemArraycopyRefs($n(a), 0, ac, 0, alen);
  $n(ac).set(alen, elem);
  return ac;
});
$c_sci_VectorStatics$.prototype.copyAppend__AO__O__AO = (function(a, elem) {
  var newLength = ((1 + $n(a).u.length) | 0);
  var ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
  $n(ac).set((((-1) + $n(ac).u.length) | 0), elem);
  return ac;
});
$c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
  var this$1 = $n(a);
  var componentType = $objectGetClass(this$1).getComponentType__jl_Class();
  var length = ((1 + $n(a).u.length) | 0);
  var ac = $asArrayOf_O($m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length), 1);
  var length$1 = $n(a).u.length;
  $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
  $n(ac).set(0, elem);
  return ac;
});
$c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
  var i = 0;
  var len = $n(a).u.length;
  if ((level === 0)) {
    while ((i < len)) {
      $n(f).apply__O__O($n(a).get(i));
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
      i = ((1 + i) | 0);
    }
  }
});
var $d_sci_VectorStatics$ = new $TypeData().initClass($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  sci_VectorStatics$: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
function $as_scm_HashMap$Node(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap$Node"));
}
function $isArrayOf_scm_HashMap$Node(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap$Node)));
}
function $asArrayOf_scm_HashMap$Node(obj, depth) {
  return (($isArrayOf_scm_HashMap$Node(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap$Node;", depth));
}
function $as_scm_LinkedHashMap$LinkedEntry(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap$LinkedEntry"));
}
function $isArrayOf_scm_LinkedHashMap$LinkedEntry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_LinkedHashMap$LinkedEntry)));
}
function $asArrayOf_scm_LinkedHashMap$LinkedEntry(obj, depth) {
  return (($isArrayOf_scm_LinkedHashMap$LinkedEntry(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap$LinkedEntry;", depth));
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$c_scm_MutationTracker$.prototype = new $h_O();
$c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $c_scm_MutationTracker$.prototype;
$c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().initClass($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  scm_MutationTracker$: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$c_sr_BoxesRunTime$.prototype = new $h_O();
$c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $c_sr_BoxesRunTime$.prototype;
$c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
  if ((x === y)) {
    return true;
  } else if ($is_jl_Number(x)) {
    var x2 = $as_jl_Number(x);
    return this.equalsNumObject__jl_Number__O__Z(x2, y);
  } else if ((x instanceof $Char)) {
    var x3 = $as_jl_Character(x);
    return this.equalsCharObject__jl_Character__O__Z(x3, y);
  } else {
    return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
  if ($is_jl_Number(y)) {
    var x2 = $as_jl_Number(y);
    return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
  } else if ((y instanceof $Char)) {
    var x3 = $as_jl_Character(y);
    if (((typeof xn) === "number")) {
      var x2$1 = $uD(xn);
      var this$1 = $uC($n(x3));
      return (x2$1 === this$1);
    } else if ((xn instanceof $c_RTLong)) {
      var t = $uJ(xn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$2 = $uC($n(x3));
      var value = this$2;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = $uD(xn);
    if (((typeof yn) === "number")) {
      var x2$2 = $uD(yn);
      return (x2 === x2$2);
    } else if ((yn instanceof $c_RTLong)) {
      var t = $uJ(yn);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
    } else if (false) {
      var x4 = $as_s_math_ScalaNumber(yn);
      return $n(x4).equals__O__Z(x2);
    } else {
      return false;
    }
  } else if ((xn instanceof $c_RTLong)) {
    var t$1 = $uJ(xn);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    if ((yn instanceof $c_RTLong)) {
      var t$2 = $uJ(yn);
      var lo$2 = t$2.RTLong__f_lo;
      var hi$2 = t$2.RTLong__f_hi;
      return ((lo$1 === lo$2) && (hi$1 === hi$2));
    } else if (((typeof yn) === "number")) {
      var x3$3 = $uD(yn);
      return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3);
    } else if (false) {
      var x4$2 = $as_s_math_ScalaNumber(yn);
      return $n(x4$2).equals__O__Z(new $c_RTLong(lo$1, hi$1));
    } else {
      return false;
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
  }
});
$c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
  if ((y instanceof $Char)) {
    var x2 = $as_jl_Character(y);
    var this$1 = $uC($n(xc));
    var this$2 = $uC($n(x2));
    return (this$1 === this$2);
  } else if ($is_jl_Number(y)) {
    var x3 = $as_jl_Number(y);
    if (((typeof x3) === "number")) {
      var x2$1 = $uD(x3);
      var this$3 = $uC($n(xc));
      return (x2$1 === this$3);
    } else if ((x3 instanceof $c_RTLong)) {
      var t = $uJ(x3);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      var this$4 = $uC($n(xc));
      var value = this$4;
      var hi$1 = (value >> 31);
      return ((lo === value) && (hi === hi$1));
    } else {
      return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  sr_BoxesRunTime$: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$c_sr_ScalaRunTime$.prototype = new $h_O();
$c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $c_sr_ScalaRunTime$.prototype;
$c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    return $n(x2).get(idx);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    return $n(x3).get(idx);
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    return $n(x4).get(idx);
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    return $n(x5).get(idx);
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    return $n(x6).get(idx);
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    return $bC($n(x7).get(idx));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    return $n(x8).get(idx);
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    return $n(x9).get(idx);
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    return $n(x10).get(idx);
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    var x2 = $asArrayOf_O(xs, 1);
    $n(x2).set(idx, value);
  } else if ((xs instanceof $ac_I)) {
    var x3 = $asArrayOf_I(xs, 1);
    $n(x3).set(idx, $uI(value));
  } else if ((xs instanceof $ac_D)) {
    var x4 = $asArrayOf_D(xs, 1);
    $n(x4).set(idx, $uD(value));
  } else if ((xs instanceof $ac_J)) {
    var x5 = $asArrayOf_J(xs, 1);
    $n(x5).set(idx, $uJ(value));
  } else if ((xs instanceof $ac_F)) {
    var x6 = $asArrayOf_F(xs, 1);
    $n(x6).set(idx, $uF(value));
  } else if ((xs instanceof $ac_C)) {
    var x7 = $asArrayOf_C(xs, 1);
    $n(x7).set(idx, $uC(value));
  } else if ((xs instanceof $ac_B)) {
    var x8 = $asArrayOf_B(xs, 1);
    $n(x8).set(idx, $uB(value));
  } else if ((xs instanceof $ac_S)) {
    var x9 = $asArrayOf_S(xs, 1);
    $n(x9).set(idx, $uS(value));
  } else if ((xs instanceof $ac_Z)) {
    var x10 = $asArrayOf_Z(xs, 1);
    $n(x10).set(idx, $uZ(value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
  var this$1 = $n($n(x).productIterator__sc_Iterator());
  var start = ($n(x).productPrefix__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  sr_ScalaRunTime$: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$c_sr_Statics$.prototype = new $h_O();
$c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $c_sr_Statics$.prototype;
$c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length));
});
$c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
  var lo = lv.RTLong__f_lo;
  var hi = lv.RTLong__f_hi;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
  }
});
$c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    var x3 = $uD(x);
    return this.doubleHash__D__I(x3);
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return this.longHash__J__I(new $c_RTLong(lo, hi));
  } else {
    return $dp_hashCode__I($n(x));
  }
});
$c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
  sr_Statics$: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
$c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
});
$c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$c_s_util_hashing_MurmurHash3.prototype.tuple2Hash__I__I__I__I = (function(x, y, seed) {
  var h = seed;
  h = this.mix__I__I__I(h, $f_T__hashCode__I("Tuple2"));
  h = this.mix__I__I__I(h, x);
  h = this.mix__I__I__I(h, y);
  return this.finalizeHash__I__I__I(h, 2);
});
$c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
  var arr = $n(x).productArity__I();
  if ((arr === 0)) {
    return $f_T__hashCode__I($n($n(x).productPrefix__T()));
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
    }
    var i = 0;
    while ((i < arr)) {
      var $x_1 = h;
      var x$1 = $n(x).productElement__I__O(i);
      h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
      i = ((1 + i) | 0);
    }
    return this.finalizeHash__I__I__I(h, arr);
  }
});
$c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = $n(xs).iterator__sc_Iterator();
  while ($n(iterator).hasNext__Z()) {
    var x = $n(iterator).next__O();
    var h = $m_sr_Statics$().anyHash__O__I(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.mix__I__I__I(h$2, a);
  h$2 = this.mix__I__I__I(h$2, b);
  h$2 = this.mixLast__I__I__I(h$2, c);
  return this.finalizeHash__I__I__I(h$2, n);
});
$c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
  var it = $n(xs).iterator__sc_Iterator();
  var h = seed;
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(h, 0);
  }
  var x0 = $n(it).next__O();
  if ((!$n(it).hasNext__Z())) {
    return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
  }
  var x1 = $n(it).next__O();
  var initial = $m_sr_Statics$().anyHash__O__I(x0);
  h = this.mix__I__I__I(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().anyHash__O__I(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while ($n(it).hasNext__Z()) {
    h = this.mix__I__I__I(h, prev);
    var x = $n(it).next__O();
    var hash = $m_sr_Statics$().anyHash__O__I(x);
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.mix__I__I__I(h, hash);
      i = ((1 + i) | 0);
      while ($n(it).hasNext__Z()) {
        var $x_1 = h;
        var x$1 = $n(it).next__O();
        h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0);
      }
      return this.finalizeHash__I__I__I(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
});
$c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
  return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
});
$c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
  var h = seed;
  var l = $n(a).length__I();
  switch (l) {
    case 0: {
      return this.finalizeHash__I__I__I(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var x = $n(a).apply__I__O(0);
      return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
      break;
    }
    default: {
      var x$1 = $n(a).apply__I__O(0);
      var initial = $m_sr_Statics$().anyHash__O__I(x$1);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var x$2 = $n(a).apply__I__O(1);
      var prev = $m_sr_Statics$().anyHash__O__I(x$2);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.mix__I__I__I(h, prev);
        var x$3 = $n(a).apply__I__O(i);
        var hash = $m_sr_Statics$().anyHash__O__I(x$3);
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var x$4 = $n(a).apply__I__O(i);
            h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    }
  }
});
$c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!$n(elems).isEmpty__Z())) {
    var head = $n(elems).head__O();
    var tail = $as_sci_List($n(elems).tail__O());
    var hash = $m_sr_Statics$().anyHash__O__I(head);
    h = this.mix__I__I__I(h, hash);
    var x1 = rangeState;
    switch (x1) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if ((rangeDiff !== ((hash - prev) | 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
});
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]));
    $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
  }
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints);
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0;
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().initClass($c_jl_Character$, "java.lang.Character$", ({
  jl_Character$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
function $p_jl_Integer$__fail$1__T__E($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Integer$() {
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
  if ((s === null)) {
    var len = 0;
  } else {
    var this$1 = $n(s);
    var len = this$1.length;
  }
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $p_jl_Integer$__fail$1__T__E(this, s);
  }
  var this$2 = $n(s);
  var firstChar = $charAt(this$2, 0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  var $x_1 = i;
  var this$3 = $n(s);
  if (($x_1 >= this$3.length)) {
    $p_jl_Integer$__fail$1__T__E(this, s);
  }
  var result = 0.0;
  while ((i !== len)) {
    var $x_2 = $m_jl_Character$();
    var this$4 = $n(s);
    var index = i;
    var digit = $n($x_2).digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $p_jl_Integer$__fail$1__T__E(this, s);
    }
    i = ((1 + i) | 0);
  }
  if (negative) {
    var n = (-result);
    return $uI((n | 0.0));
  } else {
    var n$1 = result;
    return $uI((n$1 | 0.0));
  }
});
$c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().initClass($c_jl_Integer$, "java.lang.Integer$", ({
  jl_Integer$: 1,
  Ljava_io_Serializable: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)));
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
  }
  getMessage__T() {
    return this.jl_Throwable__f_s;
  }
  fillInStackTrace__jl_Throwable() {
    var $x_1 = this;
    var reference = (false ? $x_1.sjs_js_JavaScriptException__f_exception : $n($x_1));
    var identifyingString = Object.prototype.toString.call(reference);
    if ((identifyingString !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  toString__T() {
    var className = $objectClassName(this);
    var message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this);
  }
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that);
  }
  get "message"() {
    var m = this.getMessage__T();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.toString__T();
  }
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)));
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth));
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.ju_regex_Matcher__f_position = 0;
  $thiz.ju_regex_Matcher__f_lastMatch = null;
  return $thiz;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.ju_regex_Matcher__f_lastMatch;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.ju_regex_Matcher__f_pattern0 = null;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
  this.ju_regex_Matcher__f_inputstr = null;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
  this.ju_regex_Matcher__f_pattern0 = pattern0;
  this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
  $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
  this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
  this.ju_regex_Matcher__f_position = 0;
  this.ju_regex_Matcher__f_lastMatch = null;
}
$c_ju_regex_Matcher.prototype = new $h_O();
$c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $c_ju_regex_Matcher.prototype;
$c_ju_regex_Matcher.prototype.matches__Z = (function() {
  $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
  this.ju_regex_Matcher__f_lastMatch = $n(this.ju_regex_Matcher__f_pattern0).execMatches__T__O(this.ju_regex_Matcher__f_inputstr);
  return (this.ju_regex_Matcher__f_lastMatch !== null);
});
$c_ju_regex_Matcher.prototype.find__Z = (function() {
  var this$1 = $n(this.ju_regex_Matcher__f_pattern0);
  var input = this.ju_regex_Matcher__f_inputstr;
  var start = this.ju_regex_Matcher__f_position;
  var mtch = this$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
  var end = $uI(this$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
  if ((mtch !== null)) {
    var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end);
  } else {
    var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
    var $x_1 = ((1 + this$2.length) | 0);
  }
  this.ju_regex_Matcher__f_position = $x_1;
  this.ju_regex_Matcher__f_lastMatch = mtch;
  return (mtch !== null);
});
$c_ju_regex_Matcher.prototype.group__T = (function() {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
  return $as_T(x);
});
var $d_ju_regex_Matcher = new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  ju_regex_Matcher: 1,
  ju_regex_MatchResult: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.ju_regex_Pattern__f__pattern = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
  this.ju_regex_Pattern__f_jsRegExpForMatches = null;
  this.ju_regex_Pattern__f__pattern = _pattern;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
  this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
  this.ju_regex_Pattern__f_jsRegExpForMatches = new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$c_ju_regex_Pattern.prototype = new $h_O();
$c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $c_ju_regex_Pattern.prototype;
$c_ju_regex_Pattern.prototype.execMatches__T__O = (function(input) {
  return this.ju_regex_Pattern__f_jsRegExpForMatches.exec(input);
});
$c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
  var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$c_ju_regex_Pattern.prototype.toString__T = (function() {
  return this.ju_regex_Pattern__f__pattern;
});
var $d_ju_regex_Pattern = new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ju_regex_Pattern: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_ju_regex_Pattern$() {
}
$c_ju_regex_Pattern$.prototype = new $h_O();
$c_ju_regex_Pattern$.prototype.constructor = $c_ju_regex_Pattern$;
/** @constructor */
function $h_ju_regex_Pattern$() {
}
$h_ju_regex_Pattern$.prototype = $c_ju_regex_Pattern$.prototype;
$c_ju_regex_Pattern$.prototype.java$util$regex$Pattern$$matches__T__T__Z = (function(regex, input) {
  var this$1 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
  var this$2 = $n(input);
  return new $c_ju_regex_Matcher(this$1, this$2).matches__Z();
});
var $d_ju_regex_Pattern$ = new $TypeData().initClass($c_ju_regex_Pattern$, "java.util.regex.Pattern$", ({
  ju_regex_Pattern$: 1,
  Ljava_io_Serializable: 1
}));
var $n_ju_regex_Pattern$;
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$();
  }
  return $n_ju_regex_Pattern$;
}
function $is_Lorg_squawk_ast_Expression(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_squawk_ast_Expression)));
}
function $as_Lorg_squawk_ast_Expression(obj) {
  return (($is_Lorg_squawk_ast_Expression(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.Expression"));
}
function $isArrayOf_Lorg_squawk_ast_Expression(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_Expression)));
}
function $asArrayOf_Lorg_squawk_ast_Expression(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_Expression(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.Expression;", depth));
}
function $is_Lorg_squawk_ast_Statement(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lorg_squawk_ast_Statement)));
}
function $as_Lorg_squawk_ast_Statement(obj) {
  return (($is_Lorg_squawk_ast_Statement(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.Statement"));
}
function $isArrayOf_Lorg_squawk_ast_Statement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_Statement)));
}
function $asArrayOf_Lorg_squawk_ast_Statement(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_Statement(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.Statement;", depth));
}
/** @constructor */
function $c_s_$less$colon$less$() {
  this.s_$less$colon$less$__f_singleton = null;
  $n_s_$less$colon$less$ = this;
  this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1();
}
$c_s_$less$colon$less$.prototype = new $h_O();
$c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
/** @constructor */
function $h_s_$less$colon$less$() {
}
$h_s_$less$colon$less$.prototype = $c_s_$less$colon$less$.prototype;
var $d_s_$less$colon$less$ = new $TypeData().initClass($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
  s_$less$colon$less$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_$less$colon$less$;
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
  }
  return $n_s_$less$colon$less$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$c_s_Array$.prototype = new $h_O();
$c_s_Array$.prototype.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $c_s_Array$.prototype;
$c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  var this$1 = $n(src);
  var srcClass = $objectGetClass(this$1);
  if ($n(srcClass).isArray__Z()) {
    var this$2 = $n(dest);
    var $x_1 = $n($objectGetClass(this$2)).isAssignableFrom__jl_Class__Z(srcClass);
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
var $d_s_Array$ = new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
  s_Array$: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)));
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"));
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)));
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth));
}
/** @constructor */
function $c_sci_MapNode() {
}
$c_sci_MapNode.prototype = new $h_sci_Node();
$c_sci_MapNode.prototype.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $c_sci_MapNode.prototype;
function $as_sci_MapNode(obj) {
  return (((obj instanceof $c_sci_MapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapNode"));
}
function $isArrayOf_sci_MapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapNode)));
}
function $asArrayOf_sci_MapNode(obj, depth) {
  return (($isArrayOf_sci_MapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapNode;", depth));
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems));
  } else {
    var it = $n(elems).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      $thiz.addOne__O__scm_Growable($n(it).next__O());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$c_sr_AbstractFunction0.prototype = new $h_O();
$c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
$c_sr_AbstractFunction0.prototype.toString__T = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$c_sr_AbstractFunction1.prototype = new $h_O();
$c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
$c_sr_AbstractFunction1.prototype.toString__T = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$c_sr_AbstractFunction2.prototype = new $h_O();
$c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
$c_sr_AbstractFunction2.prototype.toString__T = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.sr_IntRef__f_elem = 0;
  this.sr_IntRef__f_elem = elem;
}
$c_sr_IntRef.prototype = new $h_O();
$c_sr_IntRef.prototype.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $c_sr_IntRef.prototype;
$c_sr_IntRef.prototype.toString__T = (function() {
  var i = this.sr_IntRef__f_elem;
  return ("" + i);
});
var $d_sr_IntRef = new $TypeData().initClass($c_sr_IntRef, "scala.runtime.IntRef", ({
  sr_IntRef: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.sr_ObjectRef__f_elem = null;
  this.sr_ObjectRef__f_elem = elem;
}
$c_sr_ObjectRef.prototype = new $h_O();
$c_sr_ObjectRef.prototype.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $c_sr_ObjectRef.prototype;
$c_sr_ObjectRef.prototype.toString__T = (function() {
  var obj = this.sr_ObjectRef__f_elem;
  return ("" + obj);
});
var $d_sr_ObjectRef = new $TypeData().initClass($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  sr_ObjectRef: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
  this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
  this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
  this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
}
$c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $c_s_util_hashing_MurmurHash3$.prototype;
$c_s_util_hashing_MurmurHash3$.prototype.tuple2Hash__O__O__I = (function(x, y) {
  return this.tuple2Hash__I__I__I__I($m_sr_Statics$().anyHash__O__I(x), $m_sr_Statics$().anyHash__O__I(y), (-889275714));
});
$c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
  if ($is_sc_IndexedSeq(xs)) {
    var x2 = $as_sc_IndexedSeq(xs);
    return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else if ((xs instanceof $c_sci_List)) {
    var x3 = $as_sci_List(xs);
    return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  } else {
    return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
  }
});
$c_s_util_hashing_MurmurHash3$.prototype.mapHash__sc_Map__I = (function(xs) {
  if ($n(xs).isEmpty__Z()) {
    return this.s_util_hashing_MurmurHash3$__f_emptyMapHash;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.s_util_hashing_MurmurHash3$__f_mapSeed;
    $n(xs).foreachEntry__F2__V(accum);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_a);
    h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_b);
    h = this.mixLast__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_c);
    return this.finalizeHash__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_n);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
  this.s_util_hashing_MurmurHash3$accum$1__f_c = 1;
}
$c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$c_s_util_hashing_MurmurHash3$accum$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $c_s_util_hashing_MurmurHash3$accum$1.prototype;
$c_s_util_hashing_MurmurHash3$accum$1.prototype.toString__T = (function() {
  return "<function2>";
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__V = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(k, v);
  this.s_util_hashing_MurmurHash3$accum$1__f_a = ((this.s_util_hashing_MurmurHash3$accum$1__f_a + h) | 0);
  this.s_util_hashing_MurmurHash3$accum$1__f_b = (this.s_util_hashing_MurmurHash3$accum$1__f_b ^ h);
  this.s_util_hashing_MurmurHash3$accum$1__f_c = Math.imul(this.s_util_hashing_MurmurHash3$accum$1__f_c, (1 | h));
  this.s_util_hashing_MurmurHash3$accum$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$accum$1__f_n) | 0);
});
$c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().initClass($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  s_util_hashing_MurmurHash3$accum$1: 1,
  F2: 1
}));
function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz;
}
function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz;
}
/** @constructor */
function $c_s_util_matching_Regex() {
  this.s_util_matching_Regex__f_pattern = null;
  this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null;
}
$c_s_util_matching_Regex.prototype = new $h_O();
$c_s_util_matching_Regex.prototype.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
}
$h_s_util_matching_Regex.prototype = $c_s_util_matching_Regex.prototype;
$c_s_util_matching_Regex.prototype.findAllIn__jl_CharSequence__s_util_matching_Regex$MatchIterator = (function(source) {
  return new $c_s_util_matching_Regex$MatchIterator(source, this, this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames);
});
$c_s_util_matching_Regex.prototype.toString__T = (function() {
  return $n(this.s_util_matching_Regex__f_pattern).ju_regex_Pattern__f__pattern;
});
var $d_s_util_matching_Regex = new $TypeData().initClass($c_s_util_matching_Regex, "scala.util.matching.Regex", ({
  s_util_matching_Regex: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  this.jl_Class__f_data = data0;
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T());
});
$c_jl_Class.prototype.isAssignableFrom__jl_Class__Z = (function(that) {
  return $uZ(this.jl_Class__f_data.isAssignableFrom($n(that).jl_Class__f_data));
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface);
});
$c_jl_Class.prototype.isArray__Z = (function() {
  return $uZ(this.jl_Class__f_data.isArrayClass);
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive);
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name);
});
$c_jl_Class.prototype.getComponentType__jl_Class = (function() {
  return $as_jl_Class(this.jl_Class__f_data.getComponentType());
});
$c_jl_Class.prototype.newArrayOfThisClass__O__O = (function(dimensions) {
  return this.jl_Class__f_data.newArrayOfThisClass(dimensions);
});
function $as_jl_Class(obj) {
  return (((obj instanceof $c_jl_Class) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Class"));
}
function $isArrayOf_jl_Class(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Class)));
}
function $asArrayOf_jl_Class(obj, depth) {
  return (($isArrayOf_jl_Class(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Class;", depth));
}
var $d_jl_Class = new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
  jl_Class: 1,
  Ljava_io_Serializable: 1,
  jl_constant_Constable: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
var $d_jl_Exception = new $TypeData().initClass($c_jl_Exception, "java.lang.Exception", ({
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_$less$colon$less() {
}
$c_s_$less$colon$less.prototype = new $h_O();
$c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
/** @constructor */
function $h_s_$less$colon$less() {
}
$h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
/** @constructor */
function $c_s_Predef$() {
  this.s_Predef$__f_Map = null;
  $n_s_Predef$ = this;
  this.s_Predef$__f_Map = $m_sci_Map$();
}
$c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$c_s_Predef$.prototype.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $c_s_Predef$.prototype;
$c_s_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().initClass($c_s_Predef$, "scala.Predef$", ({
  s_Predef$: 1,
  s_LowPriorityImplicits: 1,
  s_LowPriorityImplicits2: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break;
    }
    case 1: {
      return $thiz.T2__f__2;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.sc_IterableFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
}
$c_sc_IterableFactory$Delegate.prototype = new $h_O();
$c_sc_IterableFactory$Delegate.prototype.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $c_sc_IterableFactory$Delegate.prototype;
$c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return $n(this.sc_IterableFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it);
});
$c_sc_IterableFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return $n(this.sc_IterableFactory$Delegate__f_delegate).newBuilder__scm_Builder();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        if ((i === otherSize)) {
          return 1;
        }
        $n(it).next__O();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $n($thiz.iterableFactory__sc_IterableFactory()).from__sc_IterableOnce__O(new $c_sc_View$Map($thiz, f));
}
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)));
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"));
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)));
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = $n(that).iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
      return false;
    }
  }
  return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
}
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)));
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"));
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)));
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth));
}
/** @constructor */
function $c_sc_Iterator$() {
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
  $n_sc_Iterator$ = this;
  this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
}
$c_sc_Iterator$.prototype = new $h_O();
$c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $c_sc_Iterator$.prototype;
$c_sc_Iterator$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$c_sc_Iterator$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $n(source).iterator__sc_Iterator();
});
var $d_sc_Iterator$ = new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
  sc_Iterator$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.sc_MapFactory$Delegate__f_delegate = null;
}
$c_sc_MapFactory$Delegate.prototype = new $h_O();
$c_sc_MapFactory$Delegate.prototype.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $c_sc_MapFactory$Delegate.prototype;
$c_sc_MapFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(it) {
  return $n(this.sc_MapFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it);
});
/** @constructor */
function $c_sc_View$() {
}
$c_sc_View$.prototype = new $h_O();
$c_sc_View$.prototype.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $c_sc_View$.prototype;
$c_sc_View$.prototype.from__sc_IterableOnce__sc_View = (function(it) {
  if ($is_sc_View(it)) {
    var x2 = $as_sc_View(it);
    return x2;
  } else if ($is_sc_Iterable(it)) {
    var x3 = $as_sc_Iterable(it);
    var it$1 = new $c_sjsr_AnonFunction0((() => $n(x3).iterator__sc_Iterator()));
    return new $c_sc_View$$anon$1(it$1);
  } else {
    var this$3 = $n($m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it));
    return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3);
  }
});
$c_sc_View$.prototype.newBuilder__scm_Builder = (function() {
  $m_scm_ArrayBuffer$();
  var this$3 = new $c_scm_ArrayBuffer$$anon$1();
  var f = new $c_sjsr_AnonFunction1(((it$2) => {
    var it = $as_sc_IterableOnce(it$2);
    return $m_sc_View$().from__sc_IterableOnce__sc_View(it);
  }));
  return new $c_scm_Builder$$anon$1(this$3, f);
});
$c_sc_View$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_View(source);
});
var $d_sc_View$ = new $TypeData().initClass($c_sc_View$, "scala.collection.View$", ({
  sc_View$: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.sci_BitmapIndexedMapNode__f_dataMap = 0;
  this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
  this.sci_BitmapIndexedMapNode__f_content = null;
  this.sci_BitmapIndexedMapNode__f_originalHashes = null;
  this.sci_BitmapIndexedMapNode__f_size = 0;
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
  this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
  this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
  this.sci_BitmapIndexedMapNode__f_content = content;
  this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
  this.sci_BitmapIndexedMapNode__f_size = size;
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode;
}
$c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$c_sci_BitmapIndexedMapNode.prototype.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $c_sci_BitmapIndexedMapNode.prototype;
$c_sci_BitmapIndexedMapNode.prototype.size__I = (function() {
  return this.sci_BitmapIndexedMapNode__f_size;
});
$c_sci_BitmapIndexedMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
  return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode;
});
$c_sci_BitmapIndexedMapNode.prototype.getKey__I__O = (function(index) {
  return $n(this.sci_BitmapIndexedMapNode__f_content).get((index << 1));
});
$c_sci_BitmapIndexedMapNode.prototype.getValue__I__O = (function(index) {
  return $n(this.sci_BitmapIndexedMapNode__f_content).get(((1 + (index << 1)) | 0));
});
$c_sci_BitmapIndexedMapNode.prototype.getPayload__I__T2 = (function(index) {
  return new $c_T2($n(this.sci_BitmapIndexedMapNode__f_content).get((index << 1)), $n(this.sci_BitmapIndexedMapNode__f_content).get(((1 + (index << 1)) | 0)));
});
$c_sci_BitmapIndexedMapNode.prototype.getHash__I__I = (function(index) {
  return $n(this.sci_BitmapIndexedMapNode__f_originalHashes).get(index);
});
$c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
  return $as_sci_MapNode($n(this.sci_BitmapIndexedMapNode__f_content).get((((((-1) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - index) | 0)));
});
$c_sci_BitmapIndexedMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
      return this.getValue__I__O(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    return $n(this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos))).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$c_sci_BitmapIndexedMapNode.prototype.get__O__I__I__I__s_Option = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? new $c_s_Some(this.getValue__I__O(index)) : $m_s_None$());
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    return $n(this.getNode__I__sci_MapNode(index$2)).get__O__I__I__I__s_Option(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    return $m_s_None$();
  }
});
$c_sci_BitmapIndexedMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : $n(f).apply__O());
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    return $n(this.getNode__I__sci_MapNode(index$2)).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f);
  } else {
    return $n(f).apply__O();
  }
});
$c_sci_BitmapIndexedMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    return (($n(this.sci_BitmapIndexedMapNode__f_originalHashes).get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)));
  } else {
    return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && $n(this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos))).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    var key0UnimprovedHash = this.getHash__I__I(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
      if (replaceValue) {
        var value0 = this.getValue__I__O(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.getValue__I__O(index);
      var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
      var subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
      return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew);
    }
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    var subNode = this.getNode__I__sci_MapNode(index$2);
    var subNodeNew$2 = $n(subNode).updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2));
  } else {
    return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value);
  }
});
$c_sci_BitmapIndexedMapNode.prototype.updateWithShallowMutations__O__O__I__I__I__I__I = (function(key, value, originalHash, keyHash, shift, shallowlyMutableNodeMap) {
  var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
  var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
  if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
    var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
    var key0 = this.getKey__I__O(index);
    var key0UnimprovedHash = this.getHash__I__I(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
      var value0 = this.getValue__I__O(index);
      if ((!(Object.is(key0, key) && Object.is(value0, value)))) {
        var dataIx = this.dataIndex__I__I(bitpos);
        var idx = (dataIx << 1);
        $n(this.sci_BitmapIndexedMapNode__f_content).set(((1 + idx) | 0), value);
      }
      return shallowlyMutableNodeMap;
    } else {
      var value0$2 = this.getValue__I__O(index);
      var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
      var subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
      this.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew);
      return (shallowlyMutableNodeMap | bitpos);
    }
  } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
    var subNode = this.getNode__I__sci_MapNode(index$2);
    var subNodeSize = $n(subNode).size__I();
    var subNodeHashCode = $n(subNode).cachedJavaKeySetHashCode__I();
    var returnMutableNodeMap = shallowlyMutableNodeMap;
    matchEnd4: {
      var subNodeNew$2;
      if ((subNode instanceof $c_sci_BitmapIndexedMapNode)) {
        var x2 = $as_sci_BitmapIndexedMapNode(subNode);
        if (((bitpos & shallowlyMutableNodeMap) !== 0)) {
          $n(x2).updateWithShallowMutations__O__O__I__I__I__I__I(key, value, originalHash, keyHash, ((5 + shift) | 0), 0);
          var subNodeNew$2 = x2;
          break matchEnd4;
        }
      }
      var result = $n(subNode).updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), true);
      if ((result !== subNode)) {
        returnMutableNodeMap = (returnMutableNodeMap | bitpos);
      }
      var subNodeNew$2 = result;
    }
    $n(this.sci_BitmapIndexedMapNode__f_content).set((((((-1) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0), subNodeNew$2);
    this.sci_BitmapIndexedMapNode__f_size = ((((this.sci_BitmapIndexedMapNode__f_size - subNodeSize) | 0) + $n(subNodeNew$2).size__I()) | 0);
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - subNodeHashCode) | 0) + $n(subNodeNew$2).cachedJavaKeySetHashCode__I()) | 0);
    return returnMutableNodeMap;
  } else {
    var dataIx$2 = this.dataIndex__I__I(bitpos);
    var idx$2 = (dataIx$2 << 1);
    var src = this.sci_BitmapIndexedMapNode__f_content;
    var dst = new $ac_O(((2 + $n(src).u.length) | 0));
    $systemArraycopyRefs($n(src), 0, dst, 0, idx$2);
    $n(dst).set(idx$2, key);
    $n(dst).set(((1 + idx$2) | 0), value);
    var destPos = ((2 + idx$2) | 0);
    var length = (($n(src).u.length - idx$2) | 0);
    $systemArraycopyRefs($n(src), idx$2, dst, destPos, length);
    this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap | bitpos);
    this.sci_BitmapIndexedMapNode__f_content = dst;
    this.sci_BitmapIndexedMapNode__f_originalHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx$2, originalHash);
    this.sci_BitmapIndexedMapNode__f_size = ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0);
    this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0);
    return shallowlyMutableNodeMap;
  }
});
$c_sci_BitmapIndexedMapNode.prototype.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    var this$4 = $m_sci_Vector$();
    var array = [new $c_T2(key0, value0), new $c_T2(key1, value1)];
    var elems = new $c_sjsr_WrappedVarArgs(array);
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems));
  } else {
    var mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
    var mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
      return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
    } else {
      var nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
      var node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, $n(node).size__I(), $n(node).cachedJavaKeySetHashCode__I());
    }
  }
});
$c_sci_BitmapIndexedMapNode.prototype.hasNodes__Z = (function() {
  return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0);
});
$c_sci_BitmapIndexedMapNode.prototype.nodeArity__I = (function() {
  var i = this.sci_BitmapIndexedMapNode__f_nodeMap;
  return $m_jl_Integer$().bitCount__I__I(i);
});
$c_sci_BitmapIndexedMapNode.prototype.hasPayload__Z = (function() {
  return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0);
});
$c_sci_BitmapIndexedMapNode.prototype.payloadArity__I = (function() {
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  return $m_jl_Integer$().bitCount__I__I(i);
});
$c_sci_BitmapIndexedMapNode.prototype.dataIndex__I__I = (function(bitpos) {
  var i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i);
});
$c_sci_BitmapIndexedMapNode.prototype.nodeIndex__I__I = (function(bitpos) {
  var i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
  return $m_jl_Integer$().bitCount__I__I(i);
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode = (function(bitpos, newKey, newValue) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O($n(src).u.length);
  var length = $n(src).u.length;
  $systemArraycopyRefs($n(src), 0, dst, 0, length);
  $n(dst).set(((1 + idx) | 0), newValue);
  return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode);
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, oldNode, newNode) {
  var idx = (((((-1) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O($n(src).u.length);
  var length = $n(src).u.length;
  $systemArraycopyRefs($n(src), 0, dst, 0, length);
  $n(dst).set(idx, newNode);
  return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - $n(oldNode).size__I()) | 0) + $n(newNode).size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - $n(oldNode).cachedJavaKeySetHashCode__I()) | 0) + $n(newNode).cachedJavaKeySetHashCode__I()) | 0));
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(((2 + $n(src).u.length) | 0));
  $systemArraycopyRefs($n(src), 0, dst, 0, idx);
  $n(dst).set(idx, key);
  $n(dst).set(((1 + idx) | 0), value);
  var destPos = ((2 + idx) | 0);
  var length = (($n(src).u.length - idx) | 0);
  $systemArraycopyRefs($n(src), idx, dst, destPos, length);
  var dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0));
});
$c_sci_BitmapIndexedMapNode.prototype.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O((((-1) + $n(src).u.length) | 0));
  $systemArraycopyRefs($n(src), 0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  $systemArraycopyRefs($n(src), srcPos, dst, idxOld, length);
  $n(dst).set(idxNew, node);
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + (($n(src).u.length - idxNew) | 0)) | 0);
  $systemArraycopyRefs($n(src), srcPos$1, dst, destPos, length$1);
  var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
  this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
  this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
  this.sci_BitmapIndexedMapNode__f_content = dst;
  this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + $n(node).size__I()) | 0);
  this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + $n(node).cachedJavaKeySetHashCode__I()) | 0);
  return this;
});
$c_sci_BitmapIndexedMapNode.prototype.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
  var dataIx = this.dataIndex__I__I(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = (((((-2) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
  var src = this.sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O((((-1) + $n(src).u.length) | 0));
  $systemArraycopyRefs($n(src), 0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  $systemArraycopyRefs($n(src), srcPos, dst, idxOld, length);
  $n(dst).set(idxNew, node);
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = (((-2) + (($n(src).u.length - idxNew) | 0)) | 0);
  $systemArraycopyRefs($n(src), srcPos$1, dst, destPos, length$1);
  var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + $n(node).size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + $n(node).cachedJavaKeySetHashCode__I()) | 0));
});
$c_sci_BitmapIndexedMapNode.prototype.foreachEntry__F2__V = (function(f) {
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  var iN = $m_jl_Integer$().bitCount__I__I(i);
  var i$1 = 0;
  while ((i$1 < iN)) {
    $n(f).apply__O__O__O(this.getKey__I__O(i$1), this.getValue__I__O(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
  var jN = $m_jl_Integer$().bitCount__I__I(i$2);
  var j = 0;
  while ((j < jN)) {
    $n(this.getNode__I__sci_MapNode(j)).foreachEntry__F2__V(f);
    j = ((1 + j) | 0);
  }
});
$c_sci_BitmapIndexedMapNode.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    var x2 = $as_sci_BitmapIndexedMapNode(that);
    if ((this === x2)) {
      return true;
    } else {
      if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === $n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === $n(x2).sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === $n(x2).sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === $n(x2).sci_BitmapIndexedMapNode__f_size))) {
        var a = this.sci_BitmapIndexedMapNode__f_originalHashes;
        var b = $n(x2).sci_BitmapIndexedMapNode__f_originalHashes;
        var $x_1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var a1 = this.sci_BitmapIndexedMapNode__f_content;
        var a2 = $n(x2).sci_BitmapIndexedMapNode__f_content;
        var length = $n(this.sci_BitmapIndexedMapNode__f_content).u.length;
        if ((a1 === a2)) {
          return true;
        } else {
          var isEqual = true;
          var i = 0;
          while ((isEqual && (i < length))) {
            isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z($n(a1).get(i), $n(a2).get(i));
            i = ((1 + i) | 0);
          }
          return isEqual;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
});
$c_sci_BitmapIndexedMapNode.prototype.hashCode__I = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$c_sci_BitmapIndexedMapNode.prototype.concat__sci_MapNode__I__sci_BitmapIndexedMapNode = (function(that, shift) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    var x2 = $as_sci_BitmapIndexedMapNode(that);
    if ((this.sci_BitmapIndexedMapNode__f_size === 0)) {
      return x2;
    } else if ((($n(x2).sci_BitmapIndexedMapNode__f_size === 0) || (x2 === this))) {
      return this;
    } else if (($n(x2).sci_BitmapIndexedMapNode__f_size === 1)) {
      var originalHash = $n(x2).getHash__I__I(0);
      return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode($n(x2).getKey__I__O(0), $n(x2).getValue__I__O(0), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), shift, true);
    }
    var anyChangesMadeSoFar = false;
    var allMap = (((this.sci_BitmapIndexedMapNode__f_dataMap | $n(x2).sci_BitmapIndexedMapNode__f_dataMap) | this.sci_BitmapIndexedMapNode__f_nodeMap) | $n(x2).sci_BitmapIndexedMapNode__f_nodeMap);
    var $x_2 = $m_sci_Node$();
    if ((allMap === 0)) {
      var $x_1 = 32;
    } else {
      var i = (allMap & ((-allMap) | 0));
      var $x_1 = ((31 - $uI(Math.clz32(i))) | 0);
    }
    var minimumBitPos = $n($x_2).bitposFrom__I__I($x_1);
    var maximumBitPos = $m_sci_Node$().bitposFrom__I__I(((31 - $uI(Math.clz32(allMap))) | 0));
    var leftNodeRightNode = 0;
    var leftDataRightNode = 0;
    var leftNodeRightData = 0;
    var leftDataOnly = 0;
    var rightDataOnly = 0;
    var leftNodeOnly = 0;
    var rightNodeOnly = 0;
    var leftDataRightDataMigrateToNode = 0;
    var leftDataRightDataRightOverwrites = 0;
    var dataToNodeMigrationTargets = 0;
    var bitpos = minimumBitPos;
    var leftIdx = 0;
    var rightIdx = 0;
    var finished = false;
    while ((!finished)) {
      if (((bitpos & this.sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
        if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
          var leftOriginalHash = this.getHash__I__I(leftIdx);
          if (((leftOriginalHash === $n(x2).getHash__I__I(rightIdx)) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.getKey__I__O(leftIdx), $n(x2).getKey__I__O(rightIdx)))) {
            leftDataRightDataRightOverwrites = (leftDataRightDataRightOverwrites | bitpos);
          } else {
            leftDataRightDataMigrateToNode = (leftDataRightDataMigrateToNode | bitpos);
            dataToNodeMigrationTargets = (dataToNodeMigrationTargets | $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I($m_sc_Hashing$().improve__I__I(leftOriginalHash), shift)));
          }
          rightIdx = ((1 + rightIdx) | 0);
        } else if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
          leftDataRightNode = (leftDataRightNode | bitpos);
        } else {
          leftDataOnly = (leftDataOnly | bitpos);
        }
        leftIdx = ((1 + leftIdx) | 0);
      } else if (((bitpos & this.sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
        if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
          leftNodeRightData = (leftNodeRightData | bitpos);
          rightIdx = ((1 + rightIdx) | 0);
        } else if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
          leftNodeRightNode = (leftNodeRightNode | bitpos);
        } else {
          leftNodeOnly = (leftNodeOnly | bitpos);
        }
      } else if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_dataMap) !== 0)) {
        rightDataOnly = (rightDataOnly | bitpos);
        rightIdx = ((1 + rightIdx) | 0);
      } else if (((bitpos & $n(x2).sci_BitmapIndexedMapNode__f_nodeMap) !== 0)) {
        rightNodeOnly = (rightNodeOnly | bitpos);
      }
      if ((bitpos === maximumBitPos)) {
        finished = true;
      } else {
        bitpos = (bitpos << 1);
      }
    }
    var newDataMap = ((leftDataOnly | rightDataOnly) | leftDataRightDataRightOverwrites);
    var newNodeMap = (((((leftNodeRightNode | leftDataRightNode) | leftNodeRightData) | leftNodeOnly) | rightNodeOnly) | dataToNodeMigrationTargets);
    if (((newDataMap === (rightDataOnly | leftDataRightDataRightOverwrites)) && (newNodeMap === rightNodeOnly))) {
      return x2;
    }
    var newDataSize = $m_jl_Integer$().bitCount__I__I(newDataMap);
    var newContentSize = (((newDataSize << 1) + $m_jl_Integer$().bitCount__I__I(newNodeMap)) | 0);
    var newContent = new $ac_O(newContentSize);
    var newOriginalHashes = new $ac_I(newDataSize);
    var newSize = 0;
    var newCachedHashCode = 0;
    var leftDataIdx = 0;
    var rightDataIdx = 0;
    var leftNodeIdx = 0;
    var rightNodeIdx = 0;
    var nextShift = ((5 + shift) | 0);
    var compressedDataIdx = 0;
    var compressedNodeIdx = 0;
    var bitpos$2 = minimumBitPos;
    var finished$2 = false;
    while ((!finished$2)) {
      if (((bitpos$2 & leftNodeRightNode) !== 0)) {
        var rightNode = $n(x2).getNode__I__sci_MapNode(rightNodeIdx);
        var newNode = $n(this.getNode__I__sci_MapNode(leftNodeIdx)).concat__sci_MapNode__I__sci_MapNode(rightNode, nextShift);
        if ((rightNode !== newNode)) {
          anyChangesMadeSoFar = true;
        }
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), newNode);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        rightNodeIdx = ((1 + rightNodeIdx) | 0);
        leftNodeIdx = ((1 + leftNodeIdx) | 0);
        newSize = ((newSize + $n(newNode).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(newNode).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & leftDataRightNode) !== 0)) {
        var n = $n(x2).getNode__I__sci_MapNode(rightNodeIdx);
        var leftKey = this.getKey__I__O(leftDataIdx);
        var leftValue = this.getValue__I__O(leftDataIdx);
        var leftOriginalHash$2 = this.getHash__I__I(leftDataIdx);
        var leftImproved = $m_sc_Hashing$().improve__I__I(leftOriginalHash$2);
        var updated = $n(n).updated__O__O__I__I__I__Z__sci_MapNode(leftKey, leftValue, leftOriginalHash$2, leftImproved, nextShift, false);
        if ((updated !== n)) {
          anyChangesMadeSoFar = true;
        }
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), updated);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        rightNodeIdx = ((1 + rightNodeIdx) | 0);
        leftDataIdx = ((1 + leftDataIdx) | 0);
        newSize = ((newSize + $n(updated).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(updated).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & leftNodeRightData) !== 0)) {
        anyChangesMadeSoFar = true;
        var rightOriginalHash = $n(x2).getHash__I__I(rightDataIdx);
        var newNode$3 = $n(this.getNode__I__sci_MapNode(leftNodeIdx)).updated__O__O__I__I__I__Z__sci_MapNode($n(x2).getKey__I__O(rightDataIdx), $n(x2).getValue__I__O(rightDataIdx), $n(x2).getHash__I__I(rightDataIdx), $m_sc_Hashing$().improve__I__I(rightOriginalHash), nextShift, true);
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), newNode$3);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        leftNodeIdx = ((1 + leftNodeIdx) | 0);
        rightDataIdx = ((1 + rightDataIdx) | 0);
        newSize = ((newSize + $n(newNode$3).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(newNode$3).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & leftDataOnly) !== 0)) {
        anyChangesMadeSoFar = true;
        var originalHash$2 = $n(this.sci_BitmapIndexedMapNode__f_originalHashes).get(leftDataIdx);
        $n(newContent).set((compressedDataIdx << 1), this.getKey__I__O(leftDataIdx));
        $n(newContent).set(((1 + (compressedDataIdx << 1)) | 0), this.getValue__I__O(leftDataIdx));
        $n(newOriginalHashes).set(compressedDataIdx, originalHash$2);
        compressedDataIdx = ((1 + compressedDataIdx) | 0);
        leftDataIdx = ((1 + leftDataIdx) | 0);
        newSize = ((1 + newSize) | 0);
        newCachedHashCode = ((newCachedHashCode + $m_sc_Hashing$().improve__I__I(originalHash$2)) | 0);
      } else if (((bitpos$2 & rightDataOnly) !== 0)) {
        var originalHash$3 = $n($n(x2).sci_BitmapIndexedMapNode__f_originalHashes).get(rightDataIdx);
        $n(newContent).set((compressedDataIdx << 1), $n(x2).getKey__I__O(rightDataIdx));
        $n(newContent).set(((1 + (compressedDataIdx << 1)) | 0), $n(x2).getValue__I__O(rightDataIdx));
        $n(newOriginalHashes).set(compressedDataIdx, originalHash$3);
        compressedDataIdx = ((1 + compressedDataIdx) | 0);
        rightDataIdx = ((1 + rightDataIdx) | 0);
        newSize = ((1 + newSize) | 0);
        newCachedHashCode = ((newCachedHashCode + $m_sc_Hashing$().improve__I__I(originalHash$3)) | 0);
      } else if (((bitpos$2 & leftNodeOnly) !== 0)) {
        anyChangesMadeSoFar = true;
        var newNode$4 = this.getNode__I__sci_MapNode(leftNodeIdx);
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), newNode$4);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        leftNodeIdx = ((1 + leftNodeIdx) | 0);
        newSize = ((newSize + $n(newNode$4).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(newNode$4).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & rightNodeOnly) !== 0)) {
        var newNode$5 = $n(x2).getNode__I__sci_MapNode(rightNodeIdx);
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), newNode$5);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        rightNodeIdx = ((1 + rightNodeIdx) | 0);
        newSize = ((newSize + $n(newNode$5).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(newNode$5).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & leftDataRightDataMigrateToNode) !== 0)) {
        anyChangesMadeSoFar = true;
        var leftOriginalHash$3 = this.getHash__I__I(leftDataIdx);
        var rightOriginalHash$2 = $n(x2).getHash__I__I(rightDataIdx);
        var newNode$6 = $n(x2).mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(this.getKey__I__O(leftDataIdx), this.getValue__I__O(leftDataIdx), leftOriginalHash$3, $m_sc_Hashing$().improve__I__I(leftOriginalHash$3), $n(x2).getKey__I__O(rightDataIdx), $n(x2).getValue__I__O(rightDataIdx), rightOriginalHash$2, $m_sc_Hashing$().improve__I__I(rightOriginalHash$2), nextShift);
        $n(newContent).set((((-1) + ((newContentSize - compressedNodeIdx) | 0)) | 0), newNode$6);
        compressedNodeIdx = ((1 + compressedNodeIdx) | 0);
        leftDataIdx = ((1 + leftDataIdx) | 0);
        rightDataIdx = ((1 + rightDataIdx) | 0);
        newSize = ((newSize + $n(newNode$6).size__I()) | 0);
        newCachedHashCode = ((newCachedHashCode + $n(newNode$6).cachedJavaKeySetHashCode__I()) | 0);
      } else if (((bitpos$2 & leftDataRightDataRightOverwrites) !== 0)) {
        var originalHash$4 = $n($n(x2).sci_BitmapIndexedMapNode__f_originalHashes).get(rightDataIdx);
        $n(newContent).set((compressedDataIdx << 1), $n(x2).getKey__I__O(rightDataIdx));
        $n(newContent).set(((1 + (compressedDataIdx << 1)) | 0), $n(x2).getValue__I__O(rightDataIdx));
        $n(newOriginalHashes).set(compressedDataIdx, originalHash$4);
        compressedDataIdx = ((1 + compressedDataIdx) | 0);
        rightDataIdx = ((1 + rightDataIdx) | 0);
        newSize = ((1 + newSize) | 0);
        newCachedHashCode = ((newCachedHashCode + $m_sc_Hashing$().improve__I__I(originalHash$4)) | 0);
        leftDataIdx = ((1 + leftDataIdx) | 0);
      }
      if ((bitpos$2 === maximumBitPos)) {
        finished$2 = true;
      } else {
        bitpos$2 = (bitpos$2 << 1);
      }
    }
    return (anyChangesMadeSoFar ? new $c_sci_BitmapIndexedMapNode(newDataMap, newNodeMap, newContent, newOriginalHashes, newSize, newCachedHashCode) : x2);
  } else {
    throw new $c_jl_UnsupportedOperationException("Cannot concatenate a HashCollisionMapNode with a BitmapIndexedMapNode");
  }
});
$c_sci_BitmapIndexedMapNode.prototype.copy__sci_BitmapIndexedMapNode = (function() {
  var this$1 = $n(this.sci_BitmapIndexedMapNode__f_content);
  var contentClone = $n(this$1).clone__O();
  var contentLength = $n(contentClone).u.length;
  var i = this.sci_BitmapIndexedMapNode__f_dataMap;
  var i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
  while ((i$1 < contentLength)) {
    $n(contentClone).set(i$1, $n($as_sci_MapNode($n(contentClone).get(i$1))).copy__sci_MapNode());
    i$1 = ((1 + i$1) | 0);
  }
  var $x_2 = this.sci_BitmapIndexedMapNode__f_dataMap;
  var $x_1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
  var this$2 = $n(this.sci_BitmapIndexedMapNode__f_originalHashes);
  return new $c_sci_BitmapIndexedMapNode($x_2, $x_1, contentClone, $n(this$2).clone__O(), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode);
});
$c_sci_BitmapIndexedMapNode.prototype.copy__sci_MapNode = (function() {
  return this.copy__sci_BitmapIndexedMapNode();
});
$c_sci_BitmapIndexedMapNode.prototype.concat__sci_MapNode__I__sci_MapNode = (function(that, shift) {
  return this.concat__sci_MapNode__I__sci_BitmapIndexedMapNode(that, shift);
});
$c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue);
});
$c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_Node = (function(index) {
  return this.getNode__I__sci_MapNode(index);
});
function $as_sci_BitmapIndexedMapNode(obj) {
  return (((obj instanceof $c_sci_BitmapIndexedMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedMapNode"));
}
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BitmapIndexedMapNode)));
}
function $asArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (($isArrayOf_sci_BitmapIndexedMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BitmapIndexedMapNode;", depth));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().initClass($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  sci_BitmapIndexedMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.sci_HashCollisionMapNode__f_originalHash = 0;
  this.sci_HashCollisionMapNode__f_hash = 0;
  this.sci_HashCollisionMapNode__f_content = null;
  this.sci_HashCollisionMapNode__f_originalHash = originalHash;
  this.sci_HashCollisionMapNode__f_hash = hash;
  this.sci_HashCollisionMapNode__f_content = content;
  $m_s_Predef$().require__Z__V(($n(this.sci_HashCollisionMapNode__f_content).length__I() >= 2));
}
$c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$c_sci_HashCollisionMapNode.prototype.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $c_sci_HashCollisionMapNode.prototype;
$c_sci_HashCollisionMapNode.prototype.indexOf__O__I = (function(key) {
  var iter = $n(this.sci_HashCollisionMapNode__f_content).iterator__sc_Iterator();
  var i = 0;
  while ($n(iter).hasNext__Z()) {
    if ($m_sr_BoxesRunTime$().equals__O__O__Z($n($as_T2($n(iter).next__O())).T2__f__1, key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$c_sci_HashCollisionMapNode.prototype.size__I = (function() {
  return $n(this.sci_HashCollisionMapNode__f_content).length__I();
});
$c_sci_HashCollisionMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, hash, shift) {
  var this$1 = $n(this.get__O__I__I__I__s_Option(key, originalHash, hash, shift));
  if (this$1.isEmpty__Z()) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
    throw $ct_jl_ClassCastException__(new $c_jl_ClassCastException());
  } else {
    return this$1.get__O();
  }
});
$c_sci_HashCollisionMapNode.prototype.get__O__I__I__I__s_Option = (function(key, originalHash, hash, shift) {
  if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
    var index = this.indexOf__O__I(key);
    return ((index >= 0) ? new $c_s_Some($n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$c_sci_HashCollisionMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, hash, shift, f) {
  if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
    var x1 = this.indexOf__O__I(key);
    return ((x1 === (-1)) ? $n(f).apply__O() : $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(x1))).T2__f__2);
  } else {
    return $n(f).apply__O();
  }
});
$c_sci_HashCollisionMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, hash, shift) {
  return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0));
});
$c_sci_HashCollisionMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.indexOf__O__I(key);
  return ((index >= 0) ? (replaceValue ? (Object.is($n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, $n(this.sci_HashCollisionMapNode__f_content).updated__I__O__sci_Vector(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, $n(this.sci_HashCollisionMapNode__f_content).appended__O__sci_Vector(new $c_T2(key, value))));
});
$c_sci_HashCollisionMapNode.prototype.hasNodes__Z = (function() {
  return false;
});
$c_sci_HashCollisionMapNode.prototype.nodeArity__I = (function() {
  return 0;
});
$c_sci_HashCollisionMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$c_sci_HashCollisionMapNode.prototype.hasPayload__Z = (function() {
  return true;
});
$c_sci_HashCollisionMapNode.prototype.payloadArity__I = (function() {
  return $n(this.sci_HashCollisionMapNode__f_content).length__I();
});
$c_sci_HashCollisionMapNode.prototype.getKey__I__O = (function(index) {
  return $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__1;
});
$c_sci_HashCollisionMapNode.prototype.getValue__I__O = (function(index) {
  return $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2;
});
$c_sci_HashCollisionMapNode.prototype.getPayload__I__T2 = (function(index) {
  return $as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index));
});
$c_sci_HashCollisionMapNode.prototype.getHash__I__I = (function(index) {
  return this.sci_HashCollisionMapNode__f_originalHash;
});
$c_sci_HashCollisionMapNode.prototype.foreachEntry__F2__V = (function(f) {
  $n(this.sci_HashCollisionMapNode__f_content).foreach__F1__V(new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = $n(x0$1).T2__f__1;
      var v = $n(x0$1).T2__f__2;
      return $n(f).apply__O__O__O(k, v);
    } else {
      throw new $c_s_MatchError(x0$1);
    }
  })));
});
$c_sci_HashCollisionMapNode.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    var x2 = $as_sci_HashCollisionMapNode(that);
    if ((this === x2)) {
      return true;
    } else if (((this.sci_HashCollisionMapNode__f_hash === $n(x2).sci_HashCollisionMapNode__f_hash) && ($n(this.sci_HashCollisionMapNode__f_content).length__I() === $n($n(x2).sci_HashCollisionMapNode__f_content).length__I()))) {
      var iter = $n(this.sci_HashCollisionMapNode__f_content).iterator__sc_Iterator();
      while ($n(iter).hasNext__Z()) {
        var x1$2 = $as_T2($n(iter).next__O());
        if ((x1$2 === null)) {
          throw new $c_s_MatchError(x1$2);
        }
        var key = $n(x1$2).T2__f__1;
        var value = $n(x1$2).T2__f__2;
        var index = $n(x2).indexOf__O__I(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, $n($as_T2($n($n(x2).sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2)))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_sci_HashCollisionMapNode.prototype.concat__sci_MapNode__I__sci_HashCollisionMapNode = (function(that, shift) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    var x2 = $as_sci_HashCollisionMapNode(that);
    if ((x2 === this)) {
      return this;
    } else {
      var newContent = null;
      var iter = $n(this.sci_HashCollisionMapNode__f_content).iterator__sc_Iterator();
      while ($n(iter).hasNext__Z()) {
        var nextPayload = $as_T2($n(iter).next__O());
        if (($n(x2).indexOf__O__I($n(nextPayload).T2__f__1) < 0)) {
          if ((newContent === null)) {
            newContent = new $c_sci_VectorBuilder();
            $n(newContent).addAll__sc_IterableOnce__sci_VectorBuilder($n(x2).sci_HashCollisionMapNode__f_content);
          }
          $n(newContent).addOne__O__sci_VectorBuilder(nextPayload);
        }
      }
      return ((newContent === null) ? x2 : new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, $n(newContent).result__sci_Vector()));
    }
  } else if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    throw new $c_jl_UnsupportedOperationException("Cannot concatenate a HashCollisionMapNode with a BitmapIndexedMapNode");
  } else {
    throw new $c_s_MatchError(that);
  }
});
$c_sci_HashCollisionMapNode.prototype.hashCode__I = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$c_sci_HashCollisionMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
  return Math.imul($n(this.sci_HashCollisionMapNode__f_content).length__I(), this.sci_HashCollisionMapNode__f_hash);
});
$c_sci_HashCollisionMapNode.prototype.copy__sci_MapNode = (function() {
  return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content);
});
$c_sci_HashCollisionMapNode.prototype.concat__sci_MapNode__I__sci_MapNode = (function(that, shift) {
  return this.concat__sci_MapNode__I__sci_HashCollisionMapNode(that, shift);
});
$c_sci_HashCollisionMapNode.prototype.getNode__I__sci_Node = (function(index) {
  return this.getNode__I__sci_MapNode(index);
});
function $as_sci_HashCollisionMapNode(obj) {
  return (((obj instanceof $c_sci_HashCollisionMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionMapNode"));
}
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashCollisionMapNode)));
}
function $asArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (($isArrayOf_sci_HashCollisionMapNode(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashCollisionMapNode;", depth));
}
var $d_sci_HashCollisionMapNode = new $TypeData().initClass($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  sci_HashCollisionMapNode: 1,
  sci_MapNode: 1,
  sci_Node: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.sci_HashMap$__f_EmptyMap = null;
  $n_sci_HashMap$ = this;
  var this$1 = $m_sci_MapNode$();
  this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1.sci_MapNode$__f_EmptyMapNode);
}
$c_sci_HashMap$.prototype = new $h_O();
$c_sci_HashMap$.prototype.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $c_sci_HashMap$.prototype;
$c_sci_HashMap$.prototype.from__sc_IterableOnce__sci_HashMap = (function(source) {
  if ((source instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(source);
    return x2;
  } else {
    var this$1 = new $c_sci_HashMapBuilder();
    var this$2 = $n(this$1.addAll__sc_IterableOnce__sci_HashMapBuilder(source));
    return this$2.result__sci_HashMap();
  }
});
$c_sci_HashMap$.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.from__sc_IterableOnce__sci_HashMap(it);
});
var $d_sci_HashMap$ = new $TypeData().initClass($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  sci_HashMap$: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_LazyList$State$Cons(head, tail) {
  this.sci_LazyList$State$Cons__f_head = null;
  this.sci_LazyList$State$Cons__f_tail = null;
  this.sci_LazyList$State$Cons__f_head = head;
  this.sci_LazyList$State$Cons__f_tail = tail;
}
$c_sci_LazyList$State$Cons.prototype = new $h_O();
$c_sci_LazyList$State$Cons.prototype.constructor = $c_sci_LazyList$State$Cons;
/** @constructor */
function $h_sci_LazyList$State$Cons() {
}
$h_sci_LazyList$State$Cons.prototype = $c_sci_LazyList$State$Cons.prototype;
$c_sci_LazyList$State$Cons.prototype.head__O = (function() {
  return this.sci_LazyList$State$Cons__f_head;
});
$c_sci_LazyList$State$Cons.prototype.tail__sci_LazyList = (function() {
  return this.sci_LazyList$State$Cons__f_tail;
});
var $d_sci_LazyList$State$Cons = new $TypeData().initClass($c_sci_LazyList$State$Cons, "scala.collection.immutable.LazyList$State$Cons", ({
  sci_LazyList$State$Cons: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_LazyList$State$Empty$() {
}
$c_sci_LazyList$State$Empty$.prototype = new $h_O();
$c_sci_LazyList$State$Empty$.prototype.constructor = $c_sci_LazyList$State$Empty$;
/** @constructor */
function $h_sci_LazyList$State$Empty$() {
}
$h_sci_LazyList$State$Empty$.prototype = $c_sci_LazyList$State$Empty$.prototype;
$c_sci_LazyList$State$Empty$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
});
$c_sci_LazyList$State$Empty$.prototype.tail__sci_LazyList = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
});
$c_sci_LazyList$State$Empty$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_LazyList$State$Empty$ = new $TypeData().initClass($c_sci_LazyList$State$Empty$, "scala.collection.immutable.LazyList$State$Empty$", ({
  sci_LazyList$State$Empty$: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_LazyList$State$Empty$;
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$();
  }
  return $n_sci_LazyList$State$Empty$;
}
/** @constructor */
function $c_sci_Map$() {
}
$c_sci_Map$.prototype = new $h_O();
$c_sci_Map$.prototype.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $c_sci_Map$.prototype;
$c_sci_Map$.prototype.from__sc_IterableOnce__sci_Map = (function(it) {
  if ($is_sci_Iterable(it)) {
    var x2 = $as_sci_Iterable(it);
    if ($n(x2).isEmpty__Z()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    var x3 = $as_sci_HashMap(it);
    return x3;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    var x4 = $as_sci_Map$Map1(it);
    return x4;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    var x5 = $as_sci_Map$Map2(it);
    return x5;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    var x6 = $as_sci_Map$Map3(it);
    return x6;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    var x7 = $as_sci_Map$Map4(it);
    return x7;
  }
  if (false) {
    var x8 = $as_sci_ListMap(it);
    return x8;
  }
  if (false) {
    var x9 = $as_sci_TreeSeqMap(it);
    return x9;
  }
  if (false) {
    var x10 = $as_sci_VectorMap(it);
    return x10;
  }
  if (false) {
    var x11 = $as_sci_SeqMap$SeqMap1(it);
    return x11;
  }
  if (false) {
    var x12 = $as_sci_SeqMap$SeqMap2(it);
    return x12;
  }
  if (false) {
    var x13 = $as_sci_SeqMap$SeqMap3(it);
    return x13;
  }
  if (false) {
    var x14 = $as_sci_SeqMap$SeqMap4(it);
    return x14;
  }
  var this$1 = new $c_sci_MapBuilderImpl();
  var this$2 = $n(this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it));
  return this$2.result__sci_Map();
});
$c_sci_Map$.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.from__sc_IterableOnce__sci_Map(it);
});
var $d_sci_Map$ = new $TypeData().initClass($c_sci_Map$, "scala.collection.immutable.Map$", ({
  sci_Map$: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = $n(coll).knownSize__I();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.sizeHint__I__V(((that < 0) ? 0 : that));
  }
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)));
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"));
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)));
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth));
}
function $as_s_math_ScalaNumber(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"));
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)));
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth));
}
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.sjsr_AnonFunction0__f_f = null;
  this.sjsr_AnonFunction0__f_f = f;
}
$c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $c_sjsr_AnonFunction0.prototype;
$c_sjsr_AnonFunction0.prototype.apply__O = (function() {
  return (0, this.sjsr_AnonFunction0__f_f)();
});
var $d_sjsr_AnonFunction0 = new $TypeData().initClass($c_sjsr_AnonFunction0, "scala.scalajs.runtime.AnonFunction0", ({
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  F0: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.sjsr_AnonFunction1__f_f = null;
  this.sjsr_AnonFunction1__f_f = f;
}
$c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $c_sjsr_AnonFunction1.prototype;
$c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
  return (0, this.sjsr_AnonFunction1__f_f)(arg1);
});
var $d_sjsr_AnonFunction1 = new $TypeData().initClass($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  F1: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.sjsr_AnonFunction2__f_f = null;
  this.sjsr_AnonFunction2__f_f = f;
}
$c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $c_sjsr_AnonFunction2.prototype;
$c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
  return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2);
});
var $d_sjsr_AnonFunction2 = new $TypeData().initClass($c_sjsr_AnonFunction2, "scala.scalajs.runtime.AnonFunction2", ({
  sjsr_AnonFunction2: 1,
  sr_AbstractFunction2: 1,
  F2: 1
}));
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $c_jl_Throwable)) {
      var x2 = $as_jl_Throwable(detailMessage);
      var cause = x2;
    } else {
      var cause = null;
    }
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
  jl_Boolean: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  if ((that instanceof $Char)) {
    var this$1 = $uC($n($as_jl_Character(that)));
    return ($thiz === this$1);
  } else {
    return false;
  }
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)));
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth));
}
var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
  jl_Character: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().initClass($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException();
  }
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
}
$c_jl_StringBuilder.prototype = new $h_O();
$c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $c_jl_StringBuilder.prototype;
$c_jl_StringBuilder.prototype.toString__T = (function() {
  return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_jl_StringBuilder.prototype.length__I = (function() {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return this$1.length;
});
$c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
  var this$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  return $charAt(this$1, index);
});
var $d_jl_StringBuilder = new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  jl_StringBuilder: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
/** @constructor */
function $c_s_$eq$colon$eq() {
}
$c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
$c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
/** @constructor */
function $h_s_$eq$colon$eq() {
}
$h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
/** @constructor */
function $c_sc_AbstractIterator() {
}
$c_sc_AbstractIterator.prototype = new $h_O();
$c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
$c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
  return this;
});
$c_sc_AbstractIterator.prototype.concat__F0__sc_Iterator = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
  return this.sliceIterator__I__I__sc_Iterator(n, (-1));
});
$c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$c_sc_AbstractIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterator.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this);
});
$c_sc_AbstractIterator.prototype.knownSize__I = (function() {
  return (-1);
});
/** @constructor */
function $c_sc_Map$() {
  this.sc_MapFactory$Delegate__f_delegate = null;
  this.sc_Map$__f_DefaultSentinel = null;
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.sc_Map$__f_DefaultSentinel = $ct_O__(new $c_O());
  this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = new $c_sjsr_AnonFunction0((() => $m_sc_Map$().sc_Map$__f_DefaultSentinel));
}
$c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$c_sc_Map$.prototype.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $c_sc_Map$.prototype;
var $d_sc_Map$ = new $TypeData().initClass($c_sc_Map$, "scala.collection.Map$", ({
  sc_Map$: 1,
  sc_MapFactory$Delegate: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
}
$c_sc_SeqFactory$Delegate.prototype = new $h_O();
$c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
  return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it));
});
$c_sc_SeqFactory$Delegate.prototype.newBuilder__scm_Builder = (function() {
  return $n(this.sc_SeqFactory$Delegate__f_delegate).newBuilder__scm_Builder();
});
$c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sc_SeqOps(source);
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.knownSize__I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = $n(that).knownSize__I();
    var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
  } else {
    var knownSizeDifference = false;
  }
  if ((!knownSizeDifference)) {
    var this$1 = $n($thiz.iterator__sc_Iterator());
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
  } else {
    return false;
  }
}
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)));
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"));
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)));
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth));
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $n($thiz.iterableFactory__sc_IterableFactory()).newBuilder__scm_Builder();
  var it = $thiz.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var this$1 = $n(b);
    var elem = $n(f).apply__O__O($n(it).next__O());
    this$1.addOne__O__scm_Growable(elem);
  }
  return $n(b).result__O();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $n($thiz.iterableFactory__sc_IterableFactory()).newBuilder__scm_Builder();
  var it1 = $thiz.iterator__sc_Iterator();
  var it2 = $n(that).iterator__sc_Iterator();
  while (($n(it1).hasNext__Z() && $n(it2).hasNext__Z())) {
    var this$1 = $n(b);
    var elem = new $c_T2($n(it1).next__O(), $n(it2).next__O());
    this$1.addOne__O__scm_Growable(elem);
  }
  return $n(b).result__O();
}
/** @constructor */
function $c_sci_HashMap$accum$1(outer) {
  this.sci_HashMap$accum$1__f_changed = false;
  this.sci_HashMap$accum$1__f_shallowlyMutableNodeMap = 0;
  this.sci_HashMap$accum$1__f_current = null;
  this.sci_HashMap$accum$1__f_$outer = null;
  $n(outer);
  this.sci_HashMap$accum$1__f_$outer = outer;
  this.sci_HashMap$accum$1__f_changed = false;
  this.sci_HashMap$accum$1__f_shallowlyMutableNodeMap = 0;
  this.sci_HashMap$accum$1__f_current = $n(outer).sci_HashMap__f_rootNode;
}
$c_sci_HashMap$accum$1.prototype = new $h_sr_AbstractFunction2();
$c_sci_HashMap$accum$1.prototype.constructor = $c_sci_HashMap$accum$1;
/** @constructor */
function $h_sci_HashMap$accum$1() {
}
$h_sci_HashMap$accum$1.prototype = $c_sci_HashMap$accum$1.prototype;
$c_sci_HashMap$accum$1.prototype.toString__T = (function() {
  return "<function1>";
});
$c_sci_HashMap$accum$1.prototype.apply__O__O__V = (function(key, value) {
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  var improved = $m_sc_Hashing$().improve__I__I(originalHash);
  if ((!this.sci_HashMap$accum$1__f_changed)) {
    this.sci_HashMap$accum$1__f_current = $n(this.sci_HashMap$accum$1__f_current).updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, improved, 0, true);
    if ((this.sci_HashMap$accum$1__f_current !== $n(this.sci_HashMap$accum$1__f_$outer).sci_HashMap__f_rootNode)) {
      this.sci_HashMap$accum$1__f_changed = true;
      this.sci_HashMap$accum$1__f_shallowlyMutableNodeMap = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(improved, 0));
    }
  } else {
    this.sci_HashMap$accum$1__f_shallowlyMutableNodeMap = $n(this.sci_HashMap$accum$1__f_current).updateWithShallowMutations__O__O__I__I__I__I__I(key, value, originalHash, improved, 0, this.sci_HashMap$accum$1__f_shallowlyMutableNodeMap);
  }
});
$c_sci_HashMap$accum$1.prototype.apply__O__O__O = (function(v1, v2) {
  this.apply__O__O__V(v1, v2);
});
$c_sci_HashMap$accum$1.prototype.apply__O__O = (function(v1) {
  var kv = $as_T2(v1);
  this.apply__O__O__V($n(kv).T2__f__1, $n(kv).T2__f__2);
});
var $d_sci_HashMap$accum$1 = new $TypeData().initClass($c_sci_HashMap$accum$1, "scala.collection.immutable.HashMap$accum$1", ({
  sci_HashMap$accum$1: 1,
  sr_AbstractFunction2: 1,
  F2: 1,
  F1: 1
}));
/** @constructor */
function $c_sci_Iterable$() {
  this.sc_IterableFactory$Delegate__f_delegate = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$c_sci_Iterable$.prototype.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $c_sci_Iterable$.prototype;
$c_sci_Iterable$.prototype.from__sc_IterableOnce__sci_Iterable = (function(it) {
  if ($is_sci_Iterable(it)) {
    var x2 = $as_sci_Iterable(it);
    return x2;
  } else {
    return $as_sci_Iterable($c_sc_IterableFactory$Delegate.prototype.from__sc_IterableOnce__O.call(this, it));
  }
});
$c_sci_Iterable$.prototype.from__sc_IterableOnce__O = (function(it) {
  return this.from__sc_IterableOnce__sci_Iterable(it);
});
var $d_sci_Iterable$ = new $TypeData().initClass($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  sci_Iterable$: 1,
  sc_IterableFactory$Delegate: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.sci_LazyList$__f__empty = null;
  $n_sci_LazyList$ = this;
  var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$()));
  this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
}
$c_sci_LazyList$.prototype = new $h_O();
$c_sci_LazyList$.prototype.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $c_sci_LazyList$.prototype;
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList = (function(ll, n) {
  var restRef = new $c_sr_ObjectRef(ll);
  var iRef = new $c_sr_IntRef(n);
  var state = new $c_sjsr_AnonFunction0((() => {
    var rest = $as_sci_LazyList(restRef.sr_ObjectRef__f_elem);
    var i = iRef.sr_IntRef__f_elem;
    while (((i > 0) && (!$n(rest).isEmpty__Z()))) {
      var this$4 = $n(rest);
      rest = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      restRef.sr_ObjectRef__f_elem = rest;
      i = (((-1) + i) | 0);
      iRef.sr_IntRef__f_elem = i;
    }
    return $n(rest).scala$collection$immutable$LazyList$$state__sci_LazyList$State();
  }));
  return new $c_sci_LazyList(state);
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__sci_LazyList = (function(coll) {
  if ((coll instanceof $c_sci_LazyList)) {
    var x2 = $as_sci_LazyList(coll);
    return x2;
  } else if (($n(coll).knownSize__I() === 0)) {
    return this.sci_LazyList$__f__empty;
  } else {
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State($n(coll).iterator__sc_Iterator())));
    return new $c_sci_LazyList(state);
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State = (function(it, suffix) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State(it, suffix)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl);
  } else {
    return $as_sci_LazyList$State($n(suffix).apply__O());
  }
});
$c_sci_LazyList$.prototype.scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State = (function(it) {
  if ($n(it).hasNext__Z()) {
    var hd = $n(it).next__O();
    var state = new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it)));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(hd, tl);
  } else {
    return $m_sci_LazyList$State$Empty$();
  }
});
$c_sci_LazyList$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$c_sci_LazyList$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_LazyList(source);
});
var $d_sci_LazyList$ = new $TypeData().initClass($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  sci_LazyList$: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.scm_Builder$$anon$1__f_$outer = null;
  this.scm_Builder$$anon$1__f_f$1 = null;
  $n(outer);
  this.scm_Builder$$anon$1__f_$outer = outer;
  this.scm_Builder$$anon$1__f_f$1 = f$1;
}
$c_scm_Builder$$anon$1.prototype = new $h_O();
$c_scm_Builder$$anon$1.prototype.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $c_scm_Builder$$anon$1.prototype;
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Builder$$anon$1 = (function(x) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addOne__O__scm_Growable(x);
  return this;
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Builder$$anon$1 = (function(xs) {
  var this$1 = $n(this.scm_Builder$$anon$1__f_$outer);
  this$1.addAll__sc_IterableOnce__scm_Growable(xs);
  return this;
});
$c_scm_Builder$$anon$1.prototype.sizeHint__I__V = (function(size) {
  $n(this.scm_Builder$$anon$1__f_$outer).sizeHint__I__V(size);
});
$c_scm_Builder$$anon$1.prototype.result__O = (function() {
  return $n(this.scm_Builder$$anon$1__f_f$1).apply__O__O($n(this.scm_Builder$$anon$1__f_$outer).result__O());
});
$c_scm_Builder$$anon$1.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(elems);
});
$c_scm_Builder$$anon$1.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_Builder$$anon$1(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().initClass($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  scm_Builder$$anon$1: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.scm_GrowableBuilder__f_elems = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.scm_GrowableBuilder__f_elems = null;
}
$c_scm_GrowableBuilder.prototype = new $h_O();
$c_scm_GrowableBuilder.prototype.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $c_scm_GrowableBuilder.prototype;
$c_scm_GrowableBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_GrowableBuilder = (function(elem) {
  var this$1 = $n(this.scm_GrowableBuilder__f_elems);
  this$1.addOne__O__scm_Growable(elem);
  return this;
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_GrowableBuilder = (function(xs) {
  $n(this.scm_GrowableBuilder__f_elems).addAll__sc_IterableOnce__scm_Growable(xs);
  return this;
});
$c_scm_GrowableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_GrowableBuilder(elems);
});
$c_scm_GrowableBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_GrowableBuilder(elem);
});
$c_scm_GrowableBuilder.prototype.result__O = (function() {
  return this.scm_GrowableBuilder__f_elems;
});
var $d_scm_GrowableBuilder = new $TypeData().initClass($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  scm_GrowableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_s_util_Either() {
}
$c_s_util_Either.prototype = new $h_O();
$c_s_util_Either.prototype.constructor = $c_s_util_Either;
/** @constructor */
function $h_s_util_Either() {
}
$h_s_util_Either.prototype = $c_s_util_Either.prototype;
function $as_s_util_Either(obj) {
  return (((obj instanceof $c_s_util_Either) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Either"));
}
function $isArrayOf_s_util_Either(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Either)));
}
function $asArrayOf_s_util_Either(obj, depth) {
  return (($isArrayOf_s_util_Either(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Either;", depth));
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArrayStoreException = new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
  jl_ArrayStoreException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
  jl_Byte: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isByte(x)));
function $ct_jl_ClassCastException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ClassCastException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
}
function $as_jl_ClassCastException(obj) {
  return (((obj instanceof $c_jl_ClassCastException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.ClassCastException"));
}
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_ClassCastException)));
}
function $asArrayOf_jl_ClassCastException(obj, depth) {
  return (($isArrayOf_jl_ClassCastException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth));
}
var $d_jl_ClassCastException = new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  jl_NegativeArraySizeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $as_jl_SecurityException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"));
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)));
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
  jl_Short: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().initClass($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  ju_ConcurrentModificationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
  constructor(cause) {
    super();
    var message = ((cause === null) ? null : $n(cause).toString__T());
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_Program(statements) {
  this.Lorg_squawk_ast_Program__f_statements = null;
  this.Lorg_squawk_ast_Program__f_statements = statements;
}
$c_Lorg_squawk_ast_Program.prototype = new $h_O();
$c_Lorg_squawk_ast_Program.prototype.constructor = $c_Lorg_squawk_ast_Program;
/** @constructor */
function $h_Lorg_squawk_ast_Program() {
}
$h_Lorg_squawk_ast_Program.prototype = $c_Lorg_squawk_ast_Program.prototype;
$c_Lorg_squawk_ast_Program.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_Program.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_Program.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_Program)) {
    var x$0$2 = $as_Lorg_squawk_ast_Program(x$0);
    var x = this.Lorg_squawk_ast_Program__f_statements;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_Program__f_statements;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_Program.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_Program.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_Program.prototype.productPrefix__T = (function() {
  return "Program";
});
$c_Lorg_squawk_ast_Program.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_Program__f_statements;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_Program(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_Program) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.Program"));
}
function $isArrayOf_Lorg_squawk_ast_Program(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_Program)));
}
function $asArrayOf_Lorg_squawk_ast_Program(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_Program(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.Program;", depth));
}
var $d_Lorg_squawk_ast_Program = new $TypeData().initClass($c_Lorg_squawk_ast_Program, "org.squawk.ast.Program", ({
  Lorg_squawk_ast_Program: 1,
  Lorg_squawk_ast_ASTNode: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_evaluator_Evaluator$BooleanValue(value) {
  this.Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value = false;
  this.Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value = value;
}
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype = new $h_O();
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.constructor = $c_Lorg_squawk_evaluator_Evaluator$BooleanValue;
/** @constructor */
function $h_Lorg_squawk_evaluator_Evaluator$BooleanValue() {
}
$h_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype = $c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype;
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("BooleanValue");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = (this.Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_evaluator_Evaluator$BooleanValue)) {
    var x$0$2 = $as_Lorg_squawk_evaluator_Evaluator$BooleanValue(x$0);
    return ((this.Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value === $n(x$0$2).Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.productPrefix__T = (function() {
  return "BooleanValue";
});
$c_Lorg_squawk_evaluator_Evaluator$BooleanValue.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_evaluator_Evaluator$BooleanValue__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_evaluator_Evaluator$BooleanValue(obj) {
  return (((obj instanceof $c_Lorg_squawk_evaluator_Evaluator$BooleanValue) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.evaluator.Evaluator$BooleanValue"));
}
function $isArrayOf_Lorg_squawk_evaluator_Evaluator$BooleanValue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_evaluator_Evaluator$BooleanValue)));
}
function $asArrayOf_Lorg_squawk_evaluator_Evaluator$BooleanValue(obj, depth) {
  return (($isArrayOf_Lorg_squawk_evaluator_Evaluator$BooleanValue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.evaluator.Evaluator$BooleanValue;", depth));
}
var $d_Lorg_squawk_evaluator_Evaluator$BooleanValue = new $TypeData().initClass($c_Lorg_squawk_evaluator_Evaluator$BooleanValue, "org.squawk.evaluator.Evaluator$BooleanValue", ({
  Lorg_squawk_evaluator_Evaluator$BooleanValue: 1,
  Lorg_squawk_evaluator_Evaluator$Value: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_evaluator_Evaluator$FunctionValue(parameters, body, env) {
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters = null;
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body = null;
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env = null;
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters = parameters;
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body = body;
  this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env = env;
}
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype = new $h_O();
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.constructor = $c_Lorg_squawk_evaluator_Evaluator$FunctionValue;
/** @constructor */
function $h_Lorg_squawk_evaluator_Evaluator$FunctionValue() {
}
$h_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype = $c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype;
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_evaluator_Evaluator$FunctionValue)) {
    var x$0$2 = $as_Lorg_squawk_evaluator_Evaluator$FunctionValue(x$0);
    var x = this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters;
    var x$2 = $n(x$0$2).Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body;
      var x$4 = $n(x$0$2).Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env;
      var x$6 = $n(x$0$2).Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : $n(x$5).equals__O__Z(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.productArity__I = (function() {
  return 3;
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.productPrefix__T = (function() {
  return "FunctionValue";
});
$c_Lorg_squawk_evaluator_Evaluator$FunctionValue.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_parameters;
      break;
    }
    case 1: {
      return this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_body;
      break;
    }
    case 2: {
      return this.Lorg_squawk_evaluator_Evaluator$FunctionValue__f_env;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Lorg_squawk_evaluator_Evaluator$FunctionValue(obj) {
  return (((obj instanceof $c_Lorg_squawk_evaluator_Evaluator$FunctionValue) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.evaluator.Evaluator$FunctionValue"));
}
function $isArrayOf_Lorg_squawk_evaluator_Evaluator$FunctionValue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_evaluator_Evaluator$FunctionValue)));
}
function $asArrayOf_Lorg_squawk_evaluator_Evaluator$FunctionValue(obj, depth) {
  return (($isArrayOf_Lorg_squawk_evaluator_Evaluator$FunctionValue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.evaluator.Evaluator$FunctionValue;", depth));
}
var $d_Lorg_squawk_evaluator_Evaluator$FunctionValue = new $TypeData().initClass($c_Lorg_squawk_evaluator_Evaluator$FunctionValue, "org.squawk.evaluator.Evaluator$FunctionValue", ({
  Lorg_squawk_evaluator_Evaluator$FunctionValue: 1,
  Lorg_squawk_evaluator_Evaluator$Value: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_evaluator_Evaluator$NumberValue(value) {
  this.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value = 0;
  this.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value = value;
}
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype = new $h_O();
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.constructor = $c_Lorg_squawk_evaluator_Evaluator$NumberValue;
/** @constructor */
function $h_Lorg_squawk_evaluator_Evaluator$NumberValue() {
}
$h_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype = $c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype;
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("NumberValue");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue)) {
    var x$0$2 = $as_Lorg_squawk_evaluator_Evaluator$NumberValue(x$0);
    return ((this.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value === $n(x$0$2).Lorg_squawk_evaluator_Evaluator$NumberValue__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.productPrefix__T = (function() {
  return "NumberValue";
});
$c_Lorg_squawk_evaluator_Evaluator$NumberValue.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_evaluator_Evaluator$NumberValue__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_evaluator_Evaluator$NumberValue(obj) {
  return (((obj instanceof $c_Lorg_squawk_evaluator_Evaluator$NumberValue) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.evaluator.Evaluator$NumberValue"));
}
function $isArrayOf_Lorg_squawk_evaluator_Evaluator$NumberValue(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_evaluator_Evaluator$NumberValue)));
}
function $asArrayOf_Lorg_squawk_evaluator_Evaluator$NumberValue(obj, depth) {
  return (($isArrayOf_Lorg_squawk_evaluator_Evaluator$NumberValue(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.evaluator.Evaluator$NumberValue;", depth));
}
var $d_Lorg_squawk_evaluator_Evaluator$NumberValue = new $TypeData().initClass($c_Lorg_squawk_evaluator_Evaluator$NumberValue, "org.squawk.evaluator.Evaluator$NumberValue", ({
  Lorg_squawk_evaluator_Evaluator$NumberValue: 1,
  Lorg_squawk_evaluator_Evaluator$Value: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_tokens_Identifier(name) {
  this.Lorg_squawk_tokens_Identifier__f_name = null;
  this.Lorg_squawk_tokens_Identifier__f_name = name;
}
$c_Lorg_squawk_tokens_Identifier.prototype = new $h_O();
$c_Lorg_squawk_tokens_Identifier.prototype.constructor = $c_Lorg_squawk_tokens_Identifier;
/** @constructor */
function $h_Lorg_squawk_tokens_Identifier() {
}
$h_Lorg_squawk_tokens_Identifier.prototype = $c_Lorg_squawk_tokens_Identifier.prototype;
$c_Lorg_squawk_tokens_Identifier.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Identifier.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_tokens_Identifier.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_tokens_Identifier)) {
    var x$0$2 = $as_Lorg_squawk_tokens_Identifier(x$0);
    return ((this.Lorg_squawk_tokens_Identifier__f_name === $n(x$0$2).Lorg_squawk_tokens_Identifier__f_name) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_tokens_Identifier.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_tokens_Identifier.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_tokens_Identifier.prototype.productPrefix__T = (function() {
  return "Identifier";
});
$c_Lorg_squawk_tokens_Identifier.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_tokens_Identifier__f_name;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_tokens_Identifier(obj) {
  return (((obj instanceof $c_Lorg_squawk_tokens_Identifier) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.tokens.Identifier"));
}
function $isArrayOf_Lorg_squawk_tokens_Identifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_tokens_Identifier)));
}
function $asArrayOf_Lorg_squawk_tokens_Identifier(obj, depth) {
  return (($isArrayOf_Lorg_squawk_tokens_Identifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.tokens.Identifier;", depth));
}
var $d_Lorg_squawk_tokens_Identifier = new $TypeData().initClass($c_Lorg_squawk_tokens_Identifier, "org.squawk.tokens.Identifier", ({
  Lorg_squawk_tokens_Identifier: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_tokens_Number(value) {
  this.Lorg_squawk_tokens_Number__f_value = 0;
  this.Lorg_squawk_tokens_Number__f_value = value;
}
$c_Lorg_squawk_tokens_Number.prototype = new $h_O();
$c_Lorg_squawk_tokens_Number.prototype.constructor = $c_Lorg_squawk_tokens_Number;
/** @constructor */
function $h_Lorg_squawk_tokens_Number() {
}
$h_Lorg_squawk_tokens_Number.prototype = $c_Lorg_squawk_tokens_Number.prototype;
$c_Lorg_squawk_tokens_Number.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Number.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("Number");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Lorg_squawk_tokens_Number__f_value;
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lorg_squawk_tokens_Number.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_tokens_Number)) {
    var x$0$2 = $as_Lorg_squawk_tokens_Number(x$0);
    return ((this.Lorg_squawk_tokens_Number__f_value === $n(x$0$2).Lorg_squawk_tokens_Number__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_tokens_Number.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_tokens_Number.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_tokens_Number.prototype.productPrefix__T = (function() {
  return "Number";
});
$c_Lorg_squawk_tokens_Number.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_tokens_Number__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_tokens_Number(obj) {
  return (((obj instanceof $c_Lorg_squawk_tokens_Number) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.tokens.Number"));
}
function $isArrayOf_Lorg_squawk_tokens_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_tokens_Number)));
}
function $asArrayOf_Lorg_squawk_tokens_Number(obj, depth) {
  return (($isArrayOf_Lorg_squawk_tokens_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.tokens.Number;", depth));
}
var $d_Lorg_squawk_tokens_Number = new $TypeData().initClass($c_Lorg_squawk_tokens_Number, "org.squawk.tokens.Number", ({
  Lorg_squawk_tokens_Number: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_$less$colon$less$$anon$1() {
}
$c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
$c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
/** @constructor */
function $h_s_$less$colon$less$$anon$1() {
}
$h_s_$less$colon$less$$anon$1.prototype = $c_s_$less$colon$less$$anon$1.prototype;
$c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
  return x;
});
$c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
  return "generalized constraint";
});
var $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  F1: 1,
  Ljava_io_Serializable: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true;
  }
  return $thiz.s_MatchError__f_objString;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $n($thiz.s_MatchError__f_obj);
  return ("of class " + $n($objectGetClass(this$1)).getName__T());
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_Option() {
}
$c_s_Option.prototype = new $h_O();
$c_s_Option.prototype.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $c_s_Option.prototype;
$c_s_Option.prototype.isEmpty__Z = (function() {
  return (this === $m_s_None$());
});
$c_s_Option.prototype.knownSize__I = (function() {
  return (this.isEmpty__Z() ? 0 : 1);
});
$c_s_Option.prototype.contains__O__Z = (function(elem) {
  return ((!this.isEmpty__Z()) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.get__O(), elem));
});
$c_s_Option.prototype.iterator__sc_Iterator = (function() {
  if (this.isEmpty__Z()) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var a = this.get__O();
    return new $c_sc_Iterator$$anon$20(a);
  }
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  $n(outer);
  this.s_Product$$anon$1__f_$outer = outer;
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
}
$c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.T2__f__1 = null;
  this.T2__f__2 = null;
  this.T2__f__1 = _1;
  this.T2__f__2 = _2;
}
$c_T2.prototype = new $h_O();
$c_T2.prototype.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $c_T2.prototype;
$c_T2.prototype.productArity__I = (function() {
  return 2;
});
$c_T2.prototype.productElement__I__O = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$c_T2.prototype.toString__T = (function() {
  return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")");
});
$c_T2.prototype.productPrefix__T = (function() {
  return "Tuple2";
});
$c_T2.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_T2.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_T2.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_T2)) {
    var Tuple2$1 = $as_T2(x$1);
    return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2));
  } else {
    return false;
  }
});
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"));
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)));
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth));
}
var $d_T2 = new $TypeData().initClass($c_T2, "scala.Tuple2", ({
  T2: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  var start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)));
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)));
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $c_sc_Iterator$$anon$19.prototype;
$c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
  return false;
});
$c_sc_Iterator$$anon$19.prototype.next__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
  return 0;
});
$c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return this;
});
$c_sc_Iterator$$anon$19.prototype.next__O = (function() {
  this.next__E();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.sc_Iterator$$anon$20__f_consumed = false;
  this.sc_Iterator$$anon$20__f_a$1 = null;
  this.sc_Iterator$$anon$20__f_a$1 = a$1;
  this.sc_Iterator$$anon$20__f_consumed = false;
}
$c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $c_sc_Iterator$$anon$20.prototype;
$c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
  return (!this.sc_Iterator$$anon$20__f_consumed);
});
$c_sc_Iterator$$anon$20.prototype.next__O = (function() {
  if (this.sc_Iterator$$anon$20__f_consumed) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    this.sc_Iterator$$anon$20__f_consumed = true;
    return this.sc_Iterator$$anon$20__f_a$1;
  }
});
$c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(outer, f$2) {
  this.sc_Iterator$$anon$9__f_$outer = null;
  this.sc_Iterator$$anon$9__f_f$2 = null;
  $n(outer);
  this.sc_Iterator$$anon$9__f_$outer = outer;
  this.sc_Iterator$$anon$9__f_f$2 = f$2;
}
$c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$$anon$9.prototype.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $c_sc_Iterator$$anon$9.prototype;
$c_sc_Iterator$$anon$9.prototype.knownSize__I = (function() {
  return $n(this.sc_Iterator$$anon$9__f_$outer).knownSize__I();
});
$c_sc_Iterator$$anon$9.prototype.hasNext__Z = (function() {
  return $n(this.sc_Iterator$$anon$9__f_$outer).hasNext__Z();
});
$c_sc_Iterator$$anon$9.prototype.next__O = (function() {
  return $n(this.sc_Iterator$$anon$9__f_f$2).apply__O__O($n(this.sc_Iterator$$anon$9__f_$outer).next__O());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().initClass($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  sc_Iterator$$anon$9: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
    var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
    $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
    $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
    if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
      if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
      }
      $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
      $thiz.sc_Iterator$ConcatIterator__f_current = null;
      $thiz.sc_Iterator$ConcatIterator__f_last = null;
      return false;
    } else {
      $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
      if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
        $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
      }
      $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
        $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.sc_Iterator$ConcatIterator__f_current = null;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
  this.sc_Iterator$ConcatIterator__f_current = current;
  this.sc_Iterator$ConcatIterator__f_tail = null;
  this.sc_Iterator$ConcatIterator__f_last = null;
  this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
}
$c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $c_sc_Iterator$ConcatIterator.prototype;
$c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
  if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
    return true;
  } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
    if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
  if (this.hasNext__Z()) {
    this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
    this.sc_Iterator$ConcatIterator__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  } else {
    $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
    this.sc_Iterator$ConcatIterator__f_last = c;
  }
  if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
    this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  }
  return this;
});
function $as_sc_Iterator$ConcatIterator(obj) {
  return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
}
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator$ConcatIterator)));
}
function $asArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (($isArrayOf_sc_Iterator$ConcatIterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator$ConcatIterator;", depth));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  sc_Iterator$ConcatIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
    if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
      $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
      $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
    } else {
      $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    return (-1);
  } else {
    var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.sc_Iterator$SliceIterator__f_underlying = null;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
  this.sc_Iterator$SliceIterator__f_dropping = 0;
  this.sc_Iterator$SliceIterator__f_underlying = underlying;
  this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
  this.sc_Iterator$SliceIterator__f_dropping = start;
}
$c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $c_sc_Iterator$SliceIterator.prototype;
$c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
  var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
      return dropSize;
    } else {
      var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
});
$c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
    return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
  } else {
    return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
  }
});
$c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  if ((rest === 0)) {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
  } else {
    var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
    this.sc_Iterator$SliceIterator__f_dropping = ((sum < 0) ? 2147483647 : sum);
    this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  sc_Iterator$SliceIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $as_sc_LinearSeq($thiz);
  var len = 0;
  while (true) {
    var this$1 = $n(these);
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq($n(these).tail__O());
    } else {
      break;
    }
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if ($n(skipped).isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return $n(skipped).head__O();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    var x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
  }
}
function $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sc_LinearSeq($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var this$1 = $n(a);
      if ((!this$1.isEmpty__Z())) {
        var this$2 = $n(b);
        var $x_1 = (!this$2.isEmpty__Z());
      } else {
        var $x_1 = false;
      }
      if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sc_LinearSeq($n(a).tail__O());
        var temp$b = $as_sc_LinearSeq($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
      }
    }
  }
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
}
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
  return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
  var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
  this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
    $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = new $ac_I(($m_sci_Node$().sci_Node$__f_MaxDepth << 1));
    $thiz.sci_ChampBaseIterator__f_nodes = new ($d_sci_Node.getArrayOf().constr)($m_sci_Node$().sci_Node$__f_MaxDepth);
  }
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = $n(node).payloadArity__I();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
  var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
  var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
  $n($thiz.sci_ChampBaseIterator__f_nodes).set($thiz.sci_ChampBaseIterator__f_currentStackLevel, node);
  $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).set(cursorIndex, 0);
  $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).set(lengthIndex, $n(node).nodeArity__I());
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
    var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
    var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
    var nodeCursor = $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).get(cursorIndex);
    var nodeLength = $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).get(lengthIndex);
    if ((nodeCursor < nodeLength)) {
      var ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
      $n(ev$1).set(cursorIndex, ((1 + $n(ev$1).get(cursorIndex)) | 0));
      var nextNode = $n($n($thiz.sci_ChampBaseIterator__f_nodes).get($thiz.sci_ChampBaseIterator__f_currentStackLevel)).getNode__I__sci_Node(nodeCursor);
      if ($n(nextNode).hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if ($n(nextNode).hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
  $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
  $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
  return $thiz;
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if ($n(rootNode).hasNodes__Z()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if ($n(rootNode).hasPayload__Z()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null;
}
$c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_ChampBaseIterator.prototype.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $c_sci_ChampBaseIterator.prototype;
$c_sci_ChampBaseIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + $n(node).payloadArity__I()) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
  $n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, node);
  $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + $n(node).nodeArity__I()) | 0));
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
    var nodeCursor = $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
    $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + nodeCursor) | 0));
    if ((nodeCursor >= 0)) {
      var nextNode = $n($n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel)).getNode__I__sci_Node(nodeCursor);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode);
    } else {
      var currNode = $n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if ($n(currNode).hasPayload__Z()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
  $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = new $ac_I(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
  $thiz.sci_ChampBaseReverseIterator__f_nodeStack = new ($d_sci_Node.getArrayOf().constr)(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
  this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
  this.sci_ChampBaseReverseIterator__f_nodeStack = null;
}
$c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_ChampBaseReverseIterator.prototype.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $c_sci_ChampBaseReverseIterator.prototype;
$c_sci_ChampBaseReverseIterator.prototype.hasNext__Z = (function() {
  return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.sci_HashMapBuilder__f_aliased !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > $n(as).u.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + $n(as).u.length) | 0));
  $systemArraycopy($n(as), 0, result, 0, ix);
  $n(result).set(ix, elem);
  var destPos = ((1 + ix) | 0);
  var length = (($n(as).u.length - ix) | 0);
  $systemArraycopy($n(as), ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = $n(bm).dataIndex__I__I(bitpos);
  var idx = (dataIx << 1);
  var src = $n(bm).sci_BitmapIndexedMapNode__f_content;
  var dst = new $ac_O(((2 + $n(src).u.length) | 0));
  $systemArraycopyRefs($n(src), 0, dst, 0, idx);
  $n(dst).set(idx, key);
  $n(dst).set(((1 + idx) | 0), value);
  var destPos = ((2 + idx) | 0);
  var length = (($n(src).u.length - idx) | 0);
  $systemArraycopyRefs($n(src), idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, $n(bm).sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
  $n(bm).sci_BitmapIndexedMapNode__f_dataMap = ($n(bm).sci_BitmapIndexedMapNode__f_dataMap | bitpos);
  $n(bm).sci_BitmapIndexedMapNode__f_content = dst;
  $n(bm).sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
  $n(bm).sci_BitmapIndexedMapNode__f_size = ((1 + $n(bm).sci_BitmapIndexedMapNode__f_size) | 0);
  $n(bm).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = (($n(bm).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.sci_HashMapBuilder__f_aliased = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $n($thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode).copy__sci_BitmapIndexedMapNode();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.sci_HashMapBuilder__f_aliased = null;
  this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
  this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0);
}
$c_sci_HashMapBuilder.prototype = new $h_O();
$c_sci_HashMapBuilder.prototype.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $c_sci_HashMapBuilder.prototype;
$c_sci_HashMapBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_sci_HashMapBuilder.prototype.update__sci_MapNode__O__O__I__I__I__V = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var x2 = $as_sci_BitmapIndexedMapNode(mapNode);
    var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
    var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
    if ((($n(x2).sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
      var index = $m_sci_Node$().indexFrom__I__I__I__I($n(x2).sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
      var key0 = $n(x2).getKey__I__O(index);
      var key0UnimprovedHash = $n(x2).getHash__I__I(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
        $n($n(x2).sci_BitmapIndexedMapNode__f_content).set(((1 + (index << 1)) | 0), value);
      } else {
        var value0 = $n(x2).getValue__I__O(index);
        var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
        var subNodeNew = $n(x2).mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        $n(x2).migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew);
      }
    } else if ((($n(x2).sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().indexFrom__I__I__I__I($n(x2).sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
      var subNode = $n(x2).getNode__I__sci_MapNode(index$2);
      var beforeSize = $n(subNode).size__I();
      var beforeHash = $n(subNode).cachedJavaKeySetHashCode__I();
      this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      $n(x2).sci_BitmapIndexedMapNode__f_size = (($n(x2).sci_BitmapIndexedMapNode__f_size + (($n(subNode).size__I() - beforeSize) | 0)) | 0);
      $n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = (($n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + (($n(subNode).cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value);
    }
  } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var x3 = $as_sci_HashCollisionMapNode(mapNode);
    var index$3 = $n(x3).indexOf__O__I(key);
    if ((index$3 < 0)) {
      $n(x3).sci_HashCollisionMapNode__f_content = $n($n(x3).sci_HashCollisionMapNode__f_content).appended__O__sci_Vector(new $c_T2(key, value));
    } else {
      $n(x3).sci_HashCollisionMapNode__f_content = $n($n(x3).sci_HashCollisionMapNode__f_content).updated__I__O__sci_Vector(index$3, new $c_T2(key, value));
    }
  } else {
    throw new $c_s_MatchError(mapNode);
  }
});
$c_sci_HashMapBuilder.prototype.result__sci_HashMap = (function() {
  if (($n(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode).sci_BitmapIndexedMapNode__f_size === 0)) {
    var this$1 = $m_sci_HashMap$();
    return this$1.sci_HashMap$__f_EmptyMap;
  } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
    return this.sci_HashMapBuilder__f_aliased;
  } else {
    this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
    return this.sci_HashMapBuilder__f_aliased;
  }
});
$c_sci_HashMapBuilder.prototype.addOne__T2__sci_HashMapBuilder = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var x = $n(elem).T2__f__1;
  var h = $m_sr_Statics$().anyHash__O__I(x);
  var im = $m_sc_Hashing$().improve__I__I(h);
  this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n(elem).T2__f__1, $n(elem).T2__f__2, h, im, 0);
  return this;
});
$c_sci_HashMapBuilder.prototype.addOne__O__O__sci_HashMapBuilder = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().anyHash__O__I(key);
  this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
  return this;
});
$c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__sci_HashMapBuilder = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(xs);
    new $c_sci_HashMapBuilder$$anon$1(this, x2);
  } else if (false) {
    var x3 = $as_scm_HashMap(xs);
    var iter = $n(x3).nodeIterator__sc_Iterator();
    while ($n(iter).hasNext__Z()) {
      var next = $as_scm_HashMap$Node($n(iter).next__O());
      var originalHash = $n(x3).unimproveHash__I__I($n(next).hash__I());
      var hash = $m_sc_Hashing$().improve__I__I(originalHash);
      this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n(next).key__O(), $n(next).value__O(), originalHash, hash, 0);
    }
  } else if (false) {
    var x4 = $as_scm_LinkedHashMap(xs);
    var iter$2 = $n(x4).entryIterator__sc_Iterator();
    while ($n(iter$2).hasNext__Z()) {
      var next$2 = $as_scm_LinkedHashMap$LinkedEntry($n(iter$2).next__O());
      var originalHash$2 = $n(x4).unimproveHash__I__I($n(next$2).hash__I());
      var hash$2 = $m_sc_Hashing$().improve__I__I(originalHash$2);
      this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n(next$2).key__O(), $n(next$2).value__O(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    var x5 = $as_sci_Map(xs);
    $n(x5).foreachEntry__F2__V(new $c_sjsr_AnonFunction2(((key$2, value$2) => this.addOne__O__O__sci_HashMapBuilder(key$2, value$2))));
  } else {
    var it = $n(xs).iterator__sc_Iterator();
    while ($n(it).hasNext__Z()) {
      this.addOne__T2__sci_HashMapBuilder($as_T2($n(it).next__O()));
    }
  }
  return this;
});
$c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_HashMapBuilder(elems);
});
$c_sci_HashMapBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__T2__sci_HashMapBuilder($as_T2(elem));
});
$c_sci_HashMapBuilder.prototype.result__O = (function() {
  return this.result__sci_HashMap();
});
var $d_sci_HashMapBuilder = new $TypeData().initClass($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  sci_HashMapBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.sci_LazyList$LazyBuilder__f_next = null;
  this.sci_LazyList$LazyBuilder__f_list = null;
  this.clear__V();
}
$c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$c_sci_LazyList$LazyBuilder.prototype.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $c_sci_LazyList$LazyBuilder.prototype;
$c_sci_LazyList$LazyBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_sci_LazyList$LazyBuilder.prototype.clear__V = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $m_sci_LazyList$();
  var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
  this.sci_LazyList$LazyBuilder__f_list = new $c_sci_LazyList(state);
  this.sci_LazyList$LazyBuilder__f_next = deferred;
});
$c_sci_LazyList$LazyBuilder.prototype.result__sci_LazyList = (function() {
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$State$Empty$())));
  return this.sci_LazyList$LazyBuilder__f_list;
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__sci_LazyList$LazyBuilder = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => {
    $m_sci_LazyList$();
    $m_sci_LazyList$();
    var state = new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()));
    var tl = new $c_sci_LazyList(state);
    return new $c_sci_LazyList$State$Cons(elem, tl);
  })));
  this.sci_LazyList$LazyBuilder__f_next = deferred;
  return this;
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder = (function(xs) {
  if (($n(xs).knownSize__I() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    $n(this.sci_LazyList$LazyBuilder__f_next).init__F0__V(new $c_sjsr_AnonFunction0((() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIteratorConcatSuffix__sc_Iterator__F0__sci_LazyList$State($n(xs).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => deferred.eval__sci_LazyList$State()))))));
    this.sci_LazyList$LazyBuilder__f_next = deferred;
  }
  return this;
});
$c_sci_LazyList$LazyBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_LazyList$LazyBuilder(elems);
});
$c_sci_LazyList$LazyBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_LazyList$LazyBuilder(elem);
});
$c_sci_LazyList$LazyBuilder.prototype.result__O = (function() {
  return this.result__sci_LazyList();
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().initClass($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  sci_LazyList$LazyBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.sci_LazyList$LazyIterator__f_lazyList = null;
  this.sci_LazyList$LazyIterator__f_lazyList = lazyList;
}
$c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_LazyList$LazyIterator.prototype.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $c_sci_LazyList$LazyIterator.prototype;
$c_sci_LazyList$LazyIterator.prototype.hasNext__Z = (function() {
  return (!$n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z());
});
$c_sci_LazyList$LazyIterator.prototype.next__O = (function() {
  if ($n(this.sci_LazyList$LazyIterator__f_lazyList).isEmpty__Z()) {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  } else {
    var this$1 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    var res = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    var this$2 = $n(this.sci_LazyList$LazyIterator__f_lazyList);
    this.sci_LazyList$LazyIterator__f_lazyList = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().initClass($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_List$() {
}
$c_sci_List$.prototype = new $h_O();
$c_sci_List$.prototype.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $c_sci_List$.prototype;
$c_sci_List$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ListBuffer();
});
$c_sci_List$.prototype.from__sc_IterableOnce__O = (function(source) {
  return $m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(source);
});
var $d_sci_List$ = new $TypeData().initClass($c_sci_List$, "scala.collection.immutable.List$", ({
  sci_List$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  $n(outer);
  $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer;
  $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.sci_Map$Map2$Map2Iterator__f_i = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null;
}
$c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map2$Map2Iterator.prototype.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $c_sci_Map$Map2$Map2Iterator.prototype;
$c_sci_Map$Map2$Map2Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map2$Map2Iterator__f_i < 2);
});
$c_sci_Map$Map2$Map2Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map2$Map2Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1;
      var v = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
      var result = new $c_T2(k, v);
      break;
    }
    case 1: {
      var k$1 = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2;
      var v$1 = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
      var result = new $c_T2(k$1, v$1);
      break;
    }
    default: {
      var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
    }
  }
  this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
  return result;
});
$c_sci_Map$Map2$Map2Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map2$Map2Iterator__f_i = ((this.sci_Map$Map2$Map2Iterator__f_i + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  $n(outer);
  $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer;
  $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.sci_Map$Map3$Map3Iterator__f_i = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null;
}
$c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map3$Map3Iterator.prototype.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $c_sci_Map$Map3$Map3Iterator.prototype;
$c_sci_Map$Map3$Map3Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map3$Map3Iterator__f_i < 3);
});
$c_sci_Map$Map3$Map3Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map3$Map3Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1;
      var v = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
      var result = new $c_T2(k, v);
      break;
    }
    case 1: {
      var k$1 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2;
      var v$1 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
      var result = new $c_T2(k$1, v$1);
      break;
    }
    case 2: {
      var k$2 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3;
      var v$2 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
      var result = new $c_T2(k$2, v$2);
      break;
    }
    default: {
      var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
    }
  }
  this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
  return result;
});
$c_sci_Map$Map3$Map3Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map3$Map3Iterator__f_i = ((this.sci_Map$Map3$Map3Iterator__f_i + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  $n(outer);
  $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer;
  $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.sci_Map$Map4$Map4Iterator__f_i = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null;
}
$c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$c_sci_Map$Map4$Map4Iterator.prototype.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $c_sci_Map$Map4$Map4Iterator.prototype;
$c_sci_Map$Map4$Map4Iterator.prototype.hasNext__Z = (function() {
  return (this.sci_Map$Map4$Map4Iterator__f_i < 4);
});
$c_sci_Map$Map4$Map4Iterator.prototype.next__O = (function() {
  var x1 = this.sci_Map$Map4$Map4Iterator__f_i;
  switch (x1) {
    case 0: {
      var k = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1;
      var v = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
      var result = new $c_T2(k, v);
      break;
    }
    case 1: {
      var k$1 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2;
      var v$1 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
      var result = new $c_T2(k$1, v$1);
      break;
    }
    case 2: {
      var k$2 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3;
      var v$2 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
      var result = new $c_T2(k$2, v$2);
      break;
    }
    case 3: {
      var k$3 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4;
      var v$3 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
      var result = new $c_T2(k$3, v$3);
      break;
    }
    default: {
      var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
    }
  }
  this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
  return result;
});
$c_sci_Map$Map4$Map4Iterator.prototype.drop__I__sc_Iterator = (function(n) {
  this.sci_Map$Map4$Map4Iterator__f_i = ((this.sci_Map$Map4$Map4Iterator__f_i + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.sci_MapBuilderImpl__f_elems = null;
  this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
  this.sci_MapBuilderImpl__f_hashMapBuilder = null;
  this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
  this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
}
$c_sci_MapBuilderImpl.prototype = new $h_O();
$c_sci_MapBuilderImpl.prototype.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $c_sci_MapBuilderImpl.prototype;
$c_sci_MapBuilderImpl.prototype.sizeHint__I__V = (function(size) {
});
$c_sci_MapBuilderImpl.prototype.result__sci_Map = (function() {
  return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? $n(this.sci_MapBuilderImpl__f_hashMapBuilder).result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems);
});
$c_sci_MapBuilderImpl.prototype.addOne__O__O__sci_MapBuilderImpl = (function(key, value) {
  if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
    $n(this.sci_MapBuilderImpl__f_hashMapBuilder).addOne__O__O__sci_HashMapBuilder(key, value);
  } else if (($n(this.sci_MapBuilderImpl__f_elems).size__I() < 4)) {
    this.sci_MapBuilderImpl__f_elems = $as_sci_Map($n(this.sci_MapBuilderImpl__f_elems).updated__O__O__sci_MapOps(key, value));
  } else if ($n(this.sci_MapBuilderImpl__f_elems).contains__O__Z(key)) {
    this.sci_MapBuilderImpl__f_elems = $as_sci_Map($n(this.sci_MapBuilderImpl__f_elems).updated__O__O__sci_MapOps(key, value));
  } else {
    this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
    if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
      this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder();
    }
    $n($as_sci_Map$Map4(this.sci_MapBuilderImpl__f_elems)).buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
    $n(this.sci_MapBuilderImpl__f_hashMapBuilder).addOne__O__O__sci_HashMapBuilder(key, value);
  }
  return this;
});
$c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__sci_MapBuilderImpl = (function(xs) {
  return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? ($n(this.sci_MapBuilderImpl__f_hashMapBuilder).addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $as_sci_MapBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)));
});
$c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(elems);
});
$c_sci_MapBuilderImpl.prototype.addOne__O__scm_Growable = (function(elem) {
  var elem$1 = $as_T2(elem);
  return this.addOne__O__O__sci_MapBuilderImpl($n(elem$1).T2__f__1, $n(elem$1).T2__f__2);
});
$c_sci_MapBuilderImpl.prototype.result__O = (function() {
  return this.result__sci_Map();
});
function $as_sci_MapBuilderImpl(obj) {
  return (((obj instanceof $c_sci_MapBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapBuilderImpl"));
}
function $isArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_MapBuilderImpl)));
}
function $asArrayOf_sci_MapBuilderImpl(obj, depth) {
  return (($isArrayOf_sci_MapBuilderImpl(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.MapBuilderImpl;", depth));
}
var $d_sci_MapBuilderImpl = new $TypeData().initClass($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  sci_MapBuilderImpl: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $p_sci_Vector$__liftedTree1$1__I($thiz) {
  try {
    var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
    var this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
  $n_sci_Vector$ = this;
  this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this);
  this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$c_sci_Vector$.prototype = new $h_O();
$c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $c_sci_Vector$.prototype;
$c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(it);
    return x2;
  } else {
    var knownSize = $n(it).knownSize__I();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var a1$3;
        if (false) {
          var x2$2 = $as_sci_ArraySeq$ofRef(it);
          var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
          if ((x !== null)) {
            var this$1 = $n(x);
            var $x_1 = (this$1 === $d_O.getClassOf());
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var a1$3 = $n(x2$2).unsafeArray__AO();
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var x3 = $as_sci_Iterable(it);
          var a1 = new $ac_O(knownSize);
          var this$2 = $n(x3);
          this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
          var a1$3 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        var this$3 = $n($n(it).iterator__sc_Iterator());
        this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
        var a1$3 = a1$2;
      }
      return new $c_sci_Vector1(a1$3);
    } else {
      var this$4 = new $c_sci_VectorBuilder();
      var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
      return this$5.result__sci_Vector();
    }
  }
});
$c_sci_Vector$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_sci_VectorBuilder();
});
$c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sci_Vector(source);
});
var $d_sci_Vector$ = new $TypeData().initClass($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  sci_Vector$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
    a = $thiz.sci_VectorBuilder__f_a6;
    var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      $systemArraycopyRefs($n(src), i, $n(dest), 0, length);
    }
    var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
    if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a5;
    }
    var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1);
      }
      $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
      var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 4;
      }
    } else {
      if ((i$2 > 0)) {
        var original = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a4;
    }
    var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2);
      }
      $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
      var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 3;
      }
    } else {
      if ((i$3 > 0)) {
        var original$1 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a3;
    }
    var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3);
      }
      $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
      var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 2;
      }
    } else {
      if ((i$4 > 0)) {
        var original$2 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a2;
    }
    var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
    if (($thiz.sci_VectorBuilder__f_depth === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4);
      }
      $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
      var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
        $thiz.sci_VectorBuilder__f_depth = 1;
      }
    } else {
      if ((i$5 > 0)) {
        var original$3 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32);
      }
      $n(aParent).set(0, a);
    }
    aParent = a;
    a = $asArrayOf_O($n(a).get(0), 1);
  }
  if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
    if ((a === null)) {
      a = $thiz.sci_VectorBuilder__f_a1;
    }
    var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
    if (($thiz.sci_VectorBuilder__f_depth === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5);
      }
      $thiz.sci_VectorBuilder__f_a1 = a;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
    } else {
      if ((i$6 > 0)) {
        var original$4 = a;
        a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32);
      }
      $n(aParent).set(0, a);
    }
  }
  $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = $n(data).u.length;
  if ((dl > 0)) {
    if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.sci_VectorBuilder__f_a1;
    var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
    $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.sci_VectorBuilder__f_a1;
      $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if (($n(slice).u.length === 0)) {
    return (void 0);
  }
  if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = $n(slice).u.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
      var dest = $thiz.sci_VectorBuilder__f_a2;
      $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.sci_VectorBuilder__f_a2;
        $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
        var f = ((e$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2, 1), 2);
        });
        var len = $n(slice).u.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var arg1 = $n(slice).get(i);
            f(arg1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3 = $asArrayOf_I(slice, 1);
          while ((i < len)) {
            var arg1$1 = $n(x3).get(i);
            f(arg1$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4 = $asArrayOf_D(slice, 1);
          while ((i < len)) {
            var arg1$2 = $n(x4).get(i);
            f(arg1$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5 = $asArrayOf_J(slice, 1);
          while ((i < len)) {
            var t = $n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6 = $asArrayOf_F(slice, 1);
          while ((i < len)) {
            var arg1$3 = $n(x6).get(i);
            f(arg1$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7 = $asArrayOf_C(slice, 1);
          while ((i < len)) {
            var arg1$4 = $n(x7).get(i);
            f($bC(arg1$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8 = $asArrayOf_B(slice, 1);
          while ((i < len)) {
            var arg1$5 = $n(x8).get(i);
            f(arg1$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9 = $asArrayOf_S(slice, 1);
          while ((i < len)) {
            var arg1$6 = $n(x9).get(i);
            f(arg1$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10 = $asArrayOf_Z(slice, 1);
          while ((i < len)) {
            var arg1$7 = $n(x10).get(i);
            f(arg1$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
      var dest$2 = $thiz.sci_VectorBuilder__f_a3;
      $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.sci_VectorBuilder__f_a3;
        $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
        var f$1 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$3$2, 1), 3);
        });
        var len$1 = $n(slice).u.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var arg1$8 = $n(slice).get(i$1);
            f$1(arg1$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$1 = $asArrayOf_I(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$9 = $n(x3$1).get(i$1);
            f$1(arg1$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$1 = $asArrayOf_D(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$10 = $n(x4$1).get(i$1);
            f$1(arg1$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$1 = $asArrayOf_J(slice, 1);
          while ((i$1 < len$1)) {
            var t$1 = $n(x5$1).get(i$1);
            var lo$1 = t$1.RTLong__f_lo;
            var hi$1 = t$1.RTLong__f_hi;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$1 = $asArrayOf_F(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$11 = $n(x6$1).get(i$1);
            f$1(arg1$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$1 = $asArrayOf_C(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$12 = $n(x7$1).get(i$1);
            f$1($bC(arg1$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$1 = $asArrayOf_B(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$13 = $n(x8$1).get(i$1);
            f$1(arg1$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$1 = $asArrayOf_S(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$14 = $n(x9$1).get(i$1);
            f$1(arg1$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$1 = $asArrayOf_Z(slice, 1);
          while ((i$1 < len$1)) {
            var arg1$15 = $n(x10$1).get(i$1);
            f$1(arg1$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
      var dest$4 = $thiz.sci_VectorBuilder__f_a4;
      $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.sci_VectorBuilder__f_a4;
        $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
        var f$2 = ((e$4$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$4$2, 1), 4);
        });
        var len$2 = $n(slice).u.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var arg1$16 = $n(slice).get(i$2);
            f$2(arg1$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$2 = $asArrayOf_I(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$17 = $n(x3$2).get(i$2);
            f$2(arg1$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$2 = $asArrayOf_D(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$18 = $n(x4$2).get(i$2);
            f$2(arg1$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$2 = $asArrayOf_J(slice, 1);
          while ((i$2 < len$2)) {
            var t$2 = $n(x5$2).get(i$2);
            var lo$2 = t$2.RTLong__f_lo;
            var hi$2 = t$2.RTLong__f_hi;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$2 = $asArrayOf_F(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$19 = $n(x6$2).get(i$2);
            f$2(arg1$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$2 = $asArrayOf_C(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$20 = $n(x7$2).get(i$2);
            f$2($bC(arg1$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$2 = $asArrayOf_B(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$21 = $n(x8$2).get(i$2);
            f$2(arg1$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$2 = $asArrayOf_S(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$22 = $n(x9$2).get(i$2);
            f$2(arg1$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$2 = $asArrayOf_Z(slice, 1);
          while ((i$2 < len$2)) {
            var arg1$23 = $n(x10$2).get(i$2);
            f$2(arg1$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
      var dest$6 = $thiz.sci_VectorBuilder__f_a5;
      $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.sci_VectorBuilder__f_a5;
        $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
        var f$3 = ((e$5$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$5$2, 1), 5);
        });
        var len$3 = $n(slice).u.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var arg1$24 = $n(slice).get(i$3);
            f$3(arg1$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          var x3$3 = $asArrayOf_I(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$25 = $n(x3$3).get(i$3);
            f$3(arg1$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          var x4$3 = $asArrayOf_D(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$26 = $n(x4$3).get(i$3);
            f$3(arg1$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          var x5$3 = $asArrayOf_J(slice, 1);
          while ((i$3 < len$3)) {
            var t$3 = $n(x5$3).get(i$3);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          var x6$3 = $asArrayOf_F(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$27 = $n(x6$3).get(i$3);
            f$3(arg1$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          var x7$3 = $asArrayOf_C(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$28 = $n(x7$3).get(i$3);
            f$3($bC(arg1$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          var x8$3 = $asArrayOf_B(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$29 = $n(x8$3).get(i$3);
            f$3(arg1$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          var x9$3 = $asArrayOf_S(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$30 = $n(x9$3).get(i$3);
            f$3(arg1$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          var x10$3 = $asArrayOf_Z(slice, 1);
          while ((i$3 < len$3)) {
            var arg1$31 = $n(x10$3).get(i$3);
            f$3(arg1$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.sci_VectorBuilder__f_a6;
      $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = $n(xs).vectorSliceCount__I();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2) => {
        var data = $asArrayOf_O(data$2, 1);
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
  $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
    var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
    $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth));
  } else if ((xor < 1024)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
      $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
      $thiz.sci_VectorBuilder__f_depth = 2;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
  } else if ((xor < 32768)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
      $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
      $thiz.sci_VectorBuilder__f_depth = 3;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
  } else if ((xor < 1048576)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
      $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
      $thiz.sci_VectorBuilder__f_depth = 4;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
  } else if ((xor < 33554432)) {
    if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
      $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
      $thiz.sci_VectorBuilder__f_depth = 5;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
  } else {
    if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
      $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
      $thiz.sci_VectorBuilder__f_depth = 6;
    }
    $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
    $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
    $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
    $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
    $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
    $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
    $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5);
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.sci_VectorBuilder__f_a6 = null;
  this.sci_VectorBuilder__f_a5 = null;
  this.sci_VectorBuilder__f_a4 = null;
  this.sci_VectorBuilder__f_a3 = null;
  this.sci_VectorBuilder__f_a2 = null;
  this.sci_VectorBuilder__f_a1 = null;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 0;
  this.sci_VectorBuilder__f_a1 = new $ac_O(32);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
  this.sci_VectorBuilder__f_prefixIsRightAligned = false;
  this.sci_VectorBuilder__f_depth = 1;
}
$c_sci_VectorBuilder.prototype = new $h_O();
$c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $c_sci_VectorBuilder.prototype;
$c_sci_VectorBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
  var x1 = $n(v).vectorSliceCount__I();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      var v1 = $as_sci_Vector1(v);
      this.sci_VectorBuilder__f_depth = 1;
      var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      var a = $n(v1).sci_Vector__f_prefix1;
      this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
      break;
    }
    case 3: {
      var v2 = $as_sci_Vector2(v);
      var d2 = $n(v2).sci_Vector2__f_data2;
      var a$1 = $n(v2).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
      this.sci_VectorBuilder__f_depth = 2;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
      var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
      var dest = this.sci_VectorBuilder__f_a2;
      var length = $n(d2).u.length;
      $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
      $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
      break;
    }
    case 5: {
      var v3 = $as_sci_Vector3(v);
      var d3 = $n(v3).sci_Vector3__f_data3;
      var s2 = $n(v3).sci_Vector3__f_suffix2;
      var a$2 = $n(v3).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
      this.sci_VectorBuilder__f_depth = 3;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
      var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
      var dest$1 = this.sci_VectorBuilder__f_a3;
      var length$1 = $n(d3).u.length;
      $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
      $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 7: {
      var v4 = $as_sci_Vector4(v);
      var d4 = $n(v4).sci_Vector4__f_data4;
      var s3 = $n(v4).sci_Vector4__f_suffix3;
      var s2$2 = $n(v4).sci_Vector4__f_suffix2;
      var a$3 = $n(v4).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
      this.sci_VectorBuilder__f_depth = 4;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
      var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
      var dest$2 = this.sci_VectorBuilder__f_a4;
      var length$2 = $n(d4).u.length;
      $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
      $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 9: {
      var v5 = $as_sci_Vector5(v);
      var d5 = $n(v5).sci_Vector5__f_data5;
      var s4 = $n(v5).sci_Vector5__f_suffix4;
      var s3$2 = $n(v5).sci_Vector5__f_suffix3;
      var s2$3 = $n(v5).sci_Vector5__f_suffix2;
      var a$4 = $n(v5).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
      this.sci_VectorBuilder__f_depth = 5;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
      var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
      $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
      var dest$3 = this.sci_VectorBuilder__f_a5;
      var length$3 = $n(d5).u.length;
      $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
      $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    case 11: {
      var v6 = $as_sci_Vector6(v);
      var d6 = $n(v6).sci_Vector6__f_data6;
      var s5 = $n(v6).sci_Vector6__f_suffix5;
      var s4$2 = $n(v6).sci_Vector6__f_suffix4;
      var s3$3 = $n(v6).sci_Vector6__f_suffix3;
      var s2$4 = $n(v6).sci_Vector6__f_suffix2;
      var a$5 = $n(v6).sci_BigVector__f_suffix1;
      this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
      this.sci_VectorBuilder__f_depth = 6;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
      var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
      $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
      var dest$4 = this.sci_VectorBuilder__f_a6;
      var length$4 = $n(d6).u.length;
      $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
      this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
      this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
      this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
      this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
      $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
      $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
      $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
      $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
      $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
    this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  }
  return this;
});
$c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
  if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
  this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
  return this;
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
  if ((xs instanceof $c_sci_Vector)) {
    var x2 = $as_sci_Vector(xs);
    return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2));
  } else {
    return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
  if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
  var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.sci_VectorBuilder__f_a1;
    return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var original = this.sci_VectorBuilder__f_a2;
    var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
    var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
    var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
    var len$1 = ((1 + i1) | 0);
    var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var original$1 = this.sci_VectorBuilder__f_a3;
    var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
    var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
    var to = $n(a$2).u.length;
    var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
    var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
    var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
    var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
    var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
    var len1 = $n(prefix1$2).u.length;
    var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var original$3 = this.sci_VectorBuilder__f_a4;
    var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
    var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
    var to$1 = $n(a$4).u.length;
    var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
    var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
    var to$2 = $n(a$5).u.length;
    var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
    var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
    var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
    var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
    var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
    var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
    var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
    var len1$2 = $n(prefix1$3).u.length;
    var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
    var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var original$6 = this.sci_VectorBuilder__f_a5;
    var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
    var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
    var to$3 = $n(a$7).u.length;
    var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
    var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
    var to$4 = $n(a$8).u.length;
    var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
    var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
    var to$5 = $n(a$9).u.length;
    var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
    var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
    var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
    var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
    var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
    var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
    var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
    var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
    var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
    var len1$3 = $n(prefix1$4).u.length;
    var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
    var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
    var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var original$10 = this.sci_VectorBuilder__f_a6;
    var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
    var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
    var to$6 = $n(a$11).u.length;
    var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
    var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
    var to$7 = $n(a$12).u.length;
    var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
    var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
    var to$8 = $n(a$13).u.length;
    var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
    var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
    var to$9 = $n(a$14).u.length;
    var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
    var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
    var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
    var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
    var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
    var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
    var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
    var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
    var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
    var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
    var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
    var len1$4 = $n(prefix1$5).u.length;
    var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
    var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
    var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
    var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$c_sci_VectorBuilder.prototype.toString__T = (function() {
  return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")");
});
$c_sci_VectorBuilder.prototype.result__O = (function() {
  return this.result__sci_Vector();
});
$c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__sci_VectorBuilder(elems);
});
$c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sci_VectorBuilder(elem);
});
function $as_sci_VectorBuilder(obj) {
  return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"));
}
function $isArrayOf_sci_VectorBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorBuilder)));
}
function $asArrayOf_sci_VectorBuilder(obj, depth) {
  return (($isArrayOf_sci_VectorBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorBuilder;", depth));
}
var $d_sci_VectorBuilder = new $TypeData().initClass($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  sci_VectorBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $p_scm_ArrayBuffer$__checkArrayLengthLimit$1__I__I__V($thiz, targetLen$1, arrayLen$1) {
  if ((targetLen$1 > 2147483639)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen$1) + "; current length: ") + arrayLen$1));
  } else if ((targetLen$1 < 0)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen$1) + "; current length: ") + arrayLen$1) + "; increase: ") + ((targetLen$1 - arrayLen$1) | 0)));
  }
}
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.scm_ArrayBuffer$__f_emptyArray = null;
  $n_scm_ArrayBuffer$ = this;
  this.scm_ArrayBuffer$__f_emptyArray = new $ac_O(0);
}
$c_scm_ArrayBuffer$.prototype = new $h_O();
$c_scm_ArrayBuffer$.prototype.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $c_scm_ArrayBuffer$.prototype;
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__scm_ArrayBuffer = (function(coll) {
  var k = $n(coll).knownSize__I();
  if ((k >= 0)) {
    var array = this.scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer$__f_emptyArray, 0, k);
    if ($is_sc_Iterable(coll)) {
      var x2 = $as_sc_Iterable(coll);
      var actual = $n(x2).copyToArray__O__I__I__I(array, 0, 2147483647);
    } else {
      var actual = $n($n(coll).iterator__sc_Iterator()).copyToArray__O__I__I__I(array, 0, 2147483647);
    }
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    var this$2 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
    return this$2.addAll__sc_IterableOnce__scm_ArrayBuffer(coll);
  }
});
$c_scm_ArrayBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$c_scm_ArrayBuffer$.prototype.resizeUp__I__I__I = (function(arrayLen, targetLen) {
  if (((targetLen > 0) && (targetLen <= arrayLen))) {
    return (-1);
  } else {
    $p_scm_ArrayBuffer$__checkArrayLengthLimit$1__I__I__V(this, targetLen, arrayLen);
    if ((arrayLen > 1073741819)) {
      return 2147483639;
    } else {
      var x = (arrayLen << 1);
      var y = ((x > 16) ? x : 16);
      return ((targetLen > y) ? targetLen : y);
    }
  }
});
$c_scm_ArrayBuffer$.prototype.scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO = (function(array, curSize, targetSize) {
  var newLen = this.resizeUp__I__I__I($n(array).u.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    $systemArraycopyRefs($n(array), 0, res, 0, curSize);
    return res;
  }
});
$c_scm_ArrayBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__scm_ArrayBuffer(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().initClass($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  scm_ArrayBuffer$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.scm_GrowableBuilder__f_elems = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$c_scm_ArrayBuffer$$anon$1.prototype.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $c_scm_ArrayBuffer$$anon$1.prototype;
$c_scm_ArrayBuffer$$anon$1.prototype.sizeHint__I__V = (function(size) {
  $n($as_scm_ArrayBuffer(this.scm_GrowableBuilder__f_elems)).sizeHint__I__V(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().initClass($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  scm_ArrayBuffer$$anon$1: 1,
  scm_GrowableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $c_scm_Buffer$.prototype;
var $d_scm_Buffer$ = new $TypeData().initClass($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  scm_Buffer$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.scm_ImmutableBuilder__f_elems = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.scm_ImmutableBuilder__f_elems = null;
}
$c_scm_ImmutableBuilder.prototype = new $h_O();
$c_scm_ImmutableBuilder.prototype.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $c_scm_ImmutableBuilder.prototype;
$c_scm_ImmutableBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_scm_ImmutableBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_ImmutableBuilder.prototype.result__O = (function() {
  return this.scm_ImmutableBuilder__f_elems;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$c_scm_IndexedSeq$.prototype.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $c_scm_IndexedSeq$.prototype;
var $d_scm_IndexedSeq$ = new $TypeData().initClass($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$c_scm_ListBuffer$.prototype = new $h_O();
$c_scm_ListBuffer$.prototype.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $c_scm_ListBuffer$.prototype;
$c_scm_ListBuffer$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$c_scm_ListBuffer$.prototype.from__sc_IterableOnce__O = (function(source) {
  return new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(source);
});
var $d_scm_ListBuffer$ = new $TypeData().initClass($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  scm_ListBuffer$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.scm_MutationTracker$CheckedIterator__f_underlying = null;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
  this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
  this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
  var this$1 = $n(mutationCount);
  this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1.apply__O());
}
$c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $c_scm_MutationTracker$CheckedIterator.prototype;
$c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z();
});
$c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
  return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().initClass($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  scm_MutationTracker$CheckedIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
  this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
  this.sr_ScalaRunTime$$anon$1__f_c = 0;
  this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
}
$c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $c_sr_ScalaRunTime$$anon$1.prototype;
$c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
  return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
});
$c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
  var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
  this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$c_sjs_js_WrappedArray$.prototype = new $h_O();
$c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $c_sjs_js_WrappedArray$.prototype;
$c_sjs_js_WrappedArray$.prototype.newBuilder__scm_Builder = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
  var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
  return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O());
});
$c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjs_js_WrappedArray(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().initClass($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  sjs_js_WrappedArray$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$c_sjsr_WrappedVarArgs$.prototype.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $c_sjsr_WrappedVarArgs$.prototype;
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__sjsr_WrappedVarArgs = (function(source) {
  var this$1 = $n(this.newBuilder__scm_Builder());
  return $as_sjsr_WrappedVarArgs($n($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source))).result__O());
});
$c_sjsr_WrappedVarArgs$.prototype.newBuilder__scm_Builder = (function() {
  var array = [];
  var this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
  var f = new $c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1 = $as_sjs_js_WrappedArray(x$1$2);
    return new $c_sjsr_WrappedVarArgs($n(x$1).sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array);
  }));
  return new $c_scm_Builder$$anon$1(this$4, f);
});
$c_sjsr_WrappedVarArgs$.prototype.from__sc_IterableOnce__O = (function(source) {
  return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  sjsr_WrappedVarArgs$: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Left(value) {
  this.s_util_Left__f_value = null;
  this.s_util_Left__f_value = value;
}
$c_s_util_Left.prototype = new $h_s_util_Either();
$c_s_util_Left.prototype.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
}
$h_s_util_Left.prototype = $c_s_util_Left.prototype;
$c_s_util_Left.prototype.productPrefix__T = (function() {
  return "Left";
});
$c_s_util_Left.prototype.productArity__I = (function() {
  return 1;
});
$c_s_util_Left.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Left__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_util_Left.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_util_Left.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_util_Left.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_util_Left.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Left)) {
    var Left$1 = $as_s_util_Left(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Left__f_value, $n(Left$1).s_util_Left__f_value);
  } else {
    return false;
  }
});
function $as_s_util_Left(obj) {
  return (((obj instanceof $c_s_util_Left) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Left"));
}
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Left)));
}
function $asArrayOf_s_util_Left(obj, depth) {
  return (($isArrayOf_s_util_Left(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Left;", depth));
}
var $d_s_util_Left = new $TypeData().initClass($c_s_util_Left, "scala.util.Left", ({
  s_util_Left: 1,
  s_util_Either: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_util_Right(value) {
  this.s_util_Right__f_value = null;
  this.s_util_Right__f_value = value;
}
$c_s_util_Right.prototype = new $h_s_util_Either();
$c_s_util_Right.prototype.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
}
$h_s_util_Right.prototype = $c_s_util_Right.prototype;
$c_s_util_Right.prototype.productPrefix__T = (function() {
  return "Right";
});
$c_s_util_Right.prototype.productArity__I = (function() {
  return 1;
});
$c_s_util_Right.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Right__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_util_Right.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_util_Right.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_util_Right.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_util_Right.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_util_Right)) {
    var Right$1 = $as_s_util_Right(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Right__f_value, $n(Right$1).s_util_Right__f_value);
  } else {
    return false;
  }
});
function $as_s_util_Right(obj) {
  return (((obj instanceof $c_s_util_Right) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Right"));
}
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Right)));
}
function $asArrayOf_s_util_Right(obj, depth) {
  return (($isArrayOf_s_util_Right(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.util.Right;", depth));
}
var $d_s_util_Right = new $TypeData().initClass($c_s_util_Right, "scala.util.Right", ({
  s_util_Right: 1,
  s_util_Either: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"));
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)));
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth));
}
var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
  jl_Double: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
  jl_Float: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
  jl_Integer: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = $as_jl_Long(that);
    var this$1 = $n(x2);
    var b = $uJ(this$1);
    return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz) {
  var $x_1 = $thiz.RTLong__f_lo;
  var hi = $thiz.RTLong__f_hi;
  return ($x_1 ^ hi);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T($thiz.RTLong__f_lo, $thiz.RTLong__f_hi);
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)));
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth));
}
var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
  jl_Long: 1,
  jl_Number: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().initClass($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  $charAt($thiz, index);
  return $uI($thiz.codePointAt(index));
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    var $x_1 = res;
    var index = i;
    res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $as_T($thiz.repeat(count));
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)));
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth));
}
var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
  T: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1,
  jl_constant_Constable: 1,
  jl_constant_ConstantDesc: 1
}), ((x) => ((typeof x) === "string")));
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor(index) {
    super();
    var s = ("String index out of range: " + index);
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.ju_regex_PatternSyntaxException__f_desc = null;
    this.ju_regex_PatternSyntaxException__f_regex = null;
    this.ju_regex_PatternSyntaxException__f_index = 0;
    this.ju_regex_PatternSyntaxException__f_desc = desc;
    this.ju_regex_PatternSyntaxException__f_regex = regex;
    this.ju_regex_PatternSyntaxException__f_index = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  getMessage__T() {
    var idx = this.ju_regex_PatternSyntaxException__f_index;
    var re = this.ju_regex_PatternSyntaxException__f_regex;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
    if (((idx >= 0) && (re !== null))) {
      var this$1 = $n(re);
      var $x_1 = (idx < this$1.length);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
    } else {
      return base;
    }
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  ju_regex_PatternSyntaxException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_BinaryExpr(operator, left, right) {
  this.Lorg_squawk_ast_BinaryExpr__f_operator = null;
  this.Lorg_squawk_ast_BinaryExpr__f_left = null;
  this.Lorg_squawk_ast_BinaryExpr__f_right = null;
  this.Lorg_squawk_ast_BinaryExpr__f_operator = operator;
  this.Lorg_squawk_ast_BinaryExpr__f_left = left;
  this.Lorg_squawk_ast_BinaryExpr__f_right = right;
}
$c_Lorg_squawk_ast_BinaryExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_BinaryExpr.prototype.constructor = $c_Lorg_squawk_ast_BinaryExpr;
/** @constructor */
function $h_Lorg_squawk_ast_BinaryExpr() {
}
$h_Lorg_squawk_ast_BinaryExpr.prototype = $c_Lorg_squawk_ast_BinaryExpr.prototype;
$c_Lorg_squawk_ast_BinaryExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_BinaryExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_BinaryExpr(x$0);
    var x = this.Lorg_squawk_ast_BinaryExpr__f_operator;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_BinaryExpr__f_operator;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_ast_BinaryExpr__f_left;
      var x$4 = $n(x$0$2).Lorg_squawk_ast_BinaryExpr__f_left;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.Lorg_squawk_ast_BinaryExpr__f_right;
      var x$6 = $n(x$0$2).Lorg_squawk_ast_BinaryExpr__f_right;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : $n(x$5).equals__O__Z(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.productArity__I = (function() {
  return 3;
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.productPrefix__T = (function() {
  return "BinaryExpr";
});
$c_Lorg_squawk_ast_BinaryExpr.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lorg_squawk_ast_BinaryExpr__f_operator;
      break;
    }
    case 1: {
      return this.Lorg_squawk_ast_BinaryExpr__f_left;
      break;
    }
    case 2: {
      return this.Lorg_squawk_ast_BinaryExpr__f_right;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Lorg_squawk_ast_BinaryExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_BinaryExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.BinaryExpr"));
}
function $isArrayOf_Lorg_squawk_ast_BinaryExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_BinaryExpr)));
}
function $asArrayOf_Lorg_squawk_ast_BinaryExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_BinaryExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.BinaryExpr;", depth));
}
var $d_Lorg_squawk_ast_BinaryExpr = new $TypeData().initClass($c_Lorg_squawk_ast_BinaryExpr, "org.squawk.ast.BinaryExpr", ({
  Lorg_squawk_ast_BinaryExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_BlockStmt(statements) {
  this.Lorg_squawk_ast_BlockStmt__f_statements = null;
  this.Lorg_squawk_ast_BlockStmt__f_statements = statements;
}
$c_Lorg_squawk_ast_BlockStmt.prototype = new $h_O();
$c_Lorg_squawk_ast_BlockStmt.prototype.constructor = $c_Lorg_squawk_ast_BlockStmt;
/** @constructor */
function $h_Lorg_squawk_ast_BlockStmt() {
}
$h_Lorg_squawk_ast_BlockStmt.prototype = $c_Lorg_squawk_ast_BlockStmt.prototype;
$c_Lorg_squawk_ast_BlockStmt.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_BlockStmt.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_BlockStmt.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_BlockStmt)) {
    var x$0$2 = $as_Lorg_squawk_ast_BlockStmt(x$0);
    var x = this.Lorg_squawk_ast_BlockStmt__f_statements;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_BlockStmt__f_statements;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_BlockStmt.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_BlockStmt.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_BlockStmt.prototype.productPrefix__T = (function() {
  return "BlockStmt";
});
$c_Lorg_squawk_ast_BlockStmt.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_BlockStmt__f_statements;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_BlockStmt(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_BlockStmt) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.BlockStmt"));
}
function $isArrayOf_Lorg_squawk_ast_BlockStmt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_BlockStmt)));
}
function $asArrayOf_Lorg_squawk_ast_BlockStmt(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_BlockStmt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.BlockStmt;", depth));
}
var $d_Lorg_squawk_ast_BlockStmt = new $TypeData().initClass($c_Lorg_squawk_ast_BlockStmt, "org.squawk.ast.BlockStmt", ({
  Lorg_squawk_ast_BlockStmt: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Statement: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_BooleanLiteralExpr(value) {
  this.Lorg_squawk_ast_BooleanLiteralExpr__f_value = false;
  this.Lorg_squawk_ast_BooleanLiteralExpr__f_value = value;
}
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.constructor = $c_Lorg_squawk_ast_BooleanLiteralExpr;
/** @constructor */
function $h_Lorg_squawk_ast_BooleanLiteralExpr() {
}
$h_Lorg_squawk_ast_BooleanLiteralExpr.prototype = $c_Lorg_squawk_ast_BooleanLiteralExpr.prototype;
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("BooleanLiteralExpr");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = (this.Lorg_squawk_ast_BooleanLiteralExpr__f_value ? 1231 : 1237);
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_BooleanLiteralExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_BooleanLiteralExpr(x$0);
    return ((this.Lorg_squawk_ast_BooleanLiteralExpr__f_value === $n(x$0$2).Lorg_squawk_ast_BooleanLiteralExpr__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.productPrefix__T = (function() {
  return "BooleanLiteralExpr";
});
$c_Lorg_squawk_ast_BooleanLiteralExpr.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_BooleanLiteralExpr__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_BooleanLiteralExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_BooleanLiteralExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.BooleanLiteralExpr"));
}
function $isArrayOf_Lorg_squawk_ast_BooleanLiteralExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_BooleanLiteralExpr)));
}
function $asArrayOf_Lorg_squawk_ast_BooleanLiteralExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_BooleanLiteralExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.BooleanLiteralExpr;", depth));
}
var $d_Lorg_squawk_ast_BooleanLiteralExpr = new $TypeData().initClass($c_Lorg_squawk_ast_BooleanLiteralExpr, "org.squawk.ast.BooleanLiteralExpr", ({
  Lorg_squawk_ast_BooleanLiteralExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_ExpressionStmt(expression) {
  this.Lorg_squawk_ast_ExpressionStmt__f_expression = null;
  this.Lorg_squawk_ast_ExpressionStmt__f_expression = expression;
}
$c_Lorg_squawk_ast_ExpressionStmt.prototype = new $h_O();
$c_Lorg_squawk_ast_ExpressionStmt.prototype.constructor = $c_Lorg_squawk_ast_ExpressionStmt;
/** @constructor */
function $h_Lorg_squawk_ast_ExpressionStmt() {
}
$h_Lorg_squawk_ast_ExpressionStmt.prototype = $c_Lorg_squawk_ast_ExpressionStmt.prototype;
$c_Lorg_squawk_ast_ExpressionStmt.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_ExpressionStmt)) {
    var x$0$2 = $as_Lorg_squawk_ast_ExpressionStmt(x$0);
    var x = this.Lorg_squawk_ast_ExpressionStmt__f_expression;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_ExpressionStmt__f_expression;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.productPrefix__T = (function() {
  return "ExpressionStmt";
});
$c_Lorg_squawk_ast_ExpressionStmt.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_ExpressionStmt__f_expression;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_ExpressionStmt(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_ExpressionStmt) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.ExpressionStmt"));
}
function $isArrayOf_Lorg_squawk_ast_ExpressionStmt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_ExpressionStmt)));
}
function $asArrayOf_Lorg_squawk_ast_ExpressionStmt(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_ExpressionStmt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.ExpressionStmt;", depth));
}
var $d_Lorg_squawk_ast_ExpressionStmt = new $TypeData().initClass($c_Lorg_squawk_ast_ExpressionStmt, "org.squawk.ast.ExpressionStmt", ({
  Lorg_squawk_ast_ExpressionStmt: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Statement: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_FunctionCallExpr(function$1, arguments$1) {
  this.Lorg_squawk_ast_FunctionCallExpr__f_function = null;
  this.Lorg_squawk_ast_FunctionCallExpr__f_arguments = null;
  this.Lorg_squawk_ast_FunctionCallExpr__f_function = function$1;
  this.Lorg_squawk_ast_FunctionCallExpr__f_arguments = arguments$1;
}
$c_Lorg_squawk_ast_FunctionCallExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.constructor = $c_Lorg_squawk_ast_FunctionCallExpr;
/** @constructor */
function $h_Lorg_squawk_ast_FunctionCallExpr() {
}
$h_Lorg_squawk_ast_FunctionCallExpr.prototype = $c_Lorg_squawk_ast_FunctionCallExpr.prototype;
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_FunctionCallExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_FunctionCallExpr(x$0);
    var x = this.Lorg_squawk_ast_FunctionCallExpr__f_function;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_FunctionCallExpr__f_function;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_ast_FunctionCallExpr__f_arguments;
      var x$4 = $n(x$0$2).Lorg_squawk_ast_FunctionCallExpr__f_arguments;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.productArity__I = (function() {
  return 2;
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.productPrefix__T = (function() {
  return "FunctionCallExpr";
});
$c_Lorg_squawk_ast_FunctionCallExpr.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_FunctionCallExpr__f_function;
  }
  if ((n === 1)) {
    return this.Lorg_squawk_ast_FunctionCallExpr__f_arguments;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_FunctionCallExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_FunctionCallExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.FunctionCallExpr"));
}
function $isArrayOf_Lorg_squawk_ast_FunctionCallExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_FunctionCallExpr)));
}
function $asArrayOf_Lorg_squawk_ast_FunctionCallExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_FunctionCallExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.FunctionCallExpr;", depth));
}
var $d_Lorg_squawk_ast_FunctionCallExpr = new $TypeData().initClass($c_Lorg_squawk_ast_FunctionCallExpr, "org.squawk.ast.FunctionCallExpr", ({
  Lorg_squawk_ast_FunctionCallExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_FunctionDeclarationStmt(name, parameters, body) {
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_name = null;
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters = null;
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_body = null;
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_name = name;
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters = parameters;
  this.Lorg_squawk_ast_FunctionDeclarationStmt__f_body = body;
}
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype = new $h_O();
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.constructor = $c_Lorg_squawk_ast_FunctionDeclarationStmt;
/** @constructor */
function $h_Lorg_squawk_ast_FunctionDeclarationStmt() {
}
$h_Lorg_squawk_ast_FunctionDeclarationStmt.prototype = $c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype;
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_FunctionDeclarationStmt)) {
    var x$0$2 = $as_Lorg_squawk_ast_FunctionDeclarationStmt(x$0);
    var x = this.Lorg_squawk_ast_FunctionDeclarationStmt__f_name;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_FunctionDeclarationStmt__f_name;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters;
      var x$4 = $n(x$0$2).Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters;
      var $x_2 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$5 = this.Lorg_squawk_ast_FunctionDeclarationStmt__f_body;
      var x$6 = $n(x$0$2).Lorg_squawk_ast_FunctionDeclarationStmt__f_body;
      var $x_1 = ((x$5 === null) ? (x$6 === null) : $n(x$5).equals__O__Z(x$6));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.productArity__I = (function() {
  return 3;
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.productPrefix__T = (function() {
  return "FunctionDeclarationStmt";
});
$c_Lorg_squawk_ast_FunctionDeclarationStmt.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lorg_squawk_ast_FunctionDeclarationStmt__f_name;
      break;
    }
    case 1: {
      return this.Lorg_squawk_ast_FunctionDeclarationStmt__f_parameters;
      break;
    }
    case 2: {
      return this.Lorg_squawk_ast_FunctionDeclarationStmt__f_body;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    }
  }
});
function $as_Lorg_squawk_ast_FunctionDeclarationStmt(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_FunctionDeclarationStmt) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.FunctionDeclarationStmt"));
}
function $isArrayOf_Lorg_squawk_ast_FunctionDeclarationStmt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_FunctionDeclarationStmt)));
}
function $asArrayOf_Lorg_squawk_ast_FunctionDeclarationStmt(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_FunctionDeclarationStmt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.FunctionDeclarationStmt;", depth));
}
var $d_Lorg_squawk_ast_FunctionDeclarationStmt = new $TypeData().initClass($c_Lorg_squawk_ast_FunctionDeclarationStmt, "org.squawk.ast.FunctionDeclarationStmt", ({
  Lorg_squawk_ast_FunctionDeclarationStmt: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Statement: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_IdentifierExpr(name) {
  this.Lorg_squawk_ast_IdentifierExpr__f_name = null;
  this.Lorg_squawk_ast_IdentifierExpr__f_name = name;
}
$c_Lorg_squawk_ast_IdentifierExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_IdentifierExpr.prototype.constructor = $c_Lorg_squawk_ast_IdentifierExpr;
/** @constructor */
function $h_Lorg_squawk_ast_IdentifierExpr() {
}
$h_Lorg_squawk_ast_IdentifierExpr.prototype = $c_Lorg_squawk_ast_IdentifierExpr.prototype;
$c_Lorg_squawk_ast_IdentifierExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_IdentifierExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_IdentifierExpr(x$0);
    return ((this.Lorg_squawk_ast_IdentifierExpr__f_name === $n(x$0$2).Lorg_squawk_ast_IdentifierExpr__f_name) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.productPrefix__T = (function() {
  return "IdentifierExpr";
});
$c_Lorg_squawk_ast_IdentifierExpr.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_IdentifierExpr__f_name;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_IdentifierExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_IdentifierExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.IdentifierExpr"));
}
function $isArrayOf_Lorg_squawk_ast_IdentifierExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_IdentifierExpr)));
}
function $asArrayOf_Lorg_squawk_ast_IdentifierExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_IdentifierExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.IdentifierExpr;", depth));
}
var $d_Lorg_squawk_ast_IdentifierExpr = new $TypeData().initClass($c_Lorg_squawk_ast_IdentifierExpr, "org.squawk.ast.IdentifierExpr", ({
  Lorg_squawk_ast_IdentifierExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_LetStmt(identifier, value) {
  this.Lorg_squawk_ast_LetStmt__f_identifier = null;
  this.Lorg_squawk_ast_LetStmt__f_value = null;
  this.Lorg_squawk_ast_LetStmt__f_identifier = identifier;
  this.Lorg_squawk_ast_LetStmt__f_value = value;
}
$c_Lorg_squawk_ast_LetStmt.prototype = new $h_O();
$c_Lorg_squawk_ast_LetStmt.prototype.constructor = $c_Lorg_squawk_ast_LetStmt;
/** @constructor */
function $h_Lorg_squawk_ast_LetStmt() {
}
$h_Lorg_squawk_ast_LetStmt.prototype = $c_Lorg_squawk_ast_LetStmt.prototype;
$c_Lorg_squawk_ast_LetStmt.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_LetStmt.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_LetStmt.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_LetStmt)) {
    var x$0$2 = $as_Lorg_squawk_ast_LetStmt(x$0);
    var x = this.Lorg_squawk_ast_LetStmt__f_identifier;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_LetStmt__f_identifier;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_ast_LetStmt__f_value;
      var x$4 = $n(x$0$2).Lorg_squawk_ast_LetStmt__f_value;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_LetStmt.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_LetStmt.prototype.productArity__I = (function() {
  return 2;
});
$c_Lorg_squawk_ast_LetStmt.prototype.productPrefix__T = (function() {
  return "LetStmt";
});
$c_Lorg_squawk_ast_LetStmt.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_LetStmt__f_identifier;
  }
  if ((n === 1)) {
    return this.Lorg_squawk_ast_LetStmt__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_LetStmt(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_LetStmt) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.LetStmt"));
}
function $isArrayOf_Lorg_squawk_ast_LetStmt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_LetStmt)));
}
function $asArrayOf_Lorg_squawk_ast_LetStmt(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_LetStmt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.LetStmt;", depth));
}
var $d_Lorg_squawk_ast_LetStmt = new $TypeData().initClass($c_Lorg_squawk_ast_LetStmt, "org.squawk.ast.LetStmt", ({
  Lorg_squawk_ast_LetStmt: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Statement: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_NumberLiteralExpr(value) {
  this.Lorg_squawk_ast_NumberLiteralExpr__f_value = 0;
  this.Lorg_squawk_ast_NumberLiteralExpr__f_value = value;
}
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.constructor = $c_Lorg_squawk_ast_NumberLiteralExpr;
/** @constructor */
function $h_Lorg_squawk_ast_NumberLiteralExpr() {
}
$h_Lorg_squawk_ast_NumberLiteralExpr.prototype = $c_Lorg_squawk_ast_NumberLiteralExpr.prototype;
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $f_T__hashCode__I("NumberLiteralExpr");
  acc = $m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = this.Lorg_squawk_ast_NumberLiteralExpr__f_value;
  acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  return $m_sr_Statics$().finalizeHash__I__I__I(hash$2, 1);
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_NumberLiteralExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_NumberLiteralExpr(x$0);
    return ((this.Lorg_squawk_ast_NumberLiteralExpr__f_value === $n(x$0$2).Lorg_squawk_ast_NumberLiteralExpr__f_value) && ($n(x$0$2), true));
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.productPrefix__T = (function() {
  return "NumberLiteralExpr";
});
$c_Lorg_squawk_ast_NumberLiteralExpr.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_NumberLiteralExpr__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_NumberLiteralExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_NumberLiteralExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.NumberLiteralExpr"));
}
function $isArrayOf_Lorg_squawk_ast_NumberLiteralExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_NumberLiteralExpr)));
}
function $asArrayOf_Lorg_squawk_ast_NumberLiteralExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_NumberLiteralExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.NumberLiteralExpr;", depth));
}
var $d_Lorg_squawk_ast_NumberLiteralExpr = new $TypeData().initClass($c_Lorg_squawk_ast_NumberLiteralExpr, "org.squawk.ast.NumberLiteralExpr", ({
  Lorg_squawk_ast_NumberLiteralExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_ReturnStmt(value) {
  this.Lorg_squawk_ast_ReturnStmt__f_value = null;
  this.Lorg_squawk_ast_ReturnStmt__f_value = value;
}
$c_Lorg_squawk_ast_ReturnStmt.prototype = new $h_O();
$c_Lorg_squawk_ast_ReturnStmt.prototype.constructor = $c_Lorg_squawk_ast_ReturnStmt;
/** @constructor */
function $h_Lorg_squawk_ast_ReturnStmt() {
}
$h_Lorg_squawk_ast_ReturnStmt.prototype = $c_Lorg_squawk_ast_ReturnStmt.prototype;
$c_Lorg_squawk_ast_ReturnStmt.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_ReturnStmt)) {
    var x$0$2 = $as_Lorg_squawk_ast_ReturnStmt(x$0);
    var x = this.Lorg_squawk_ast_ReturnStmt__f_value;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_ReturnStmt__f_value;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.productArity__I = (function() {
  return 1;
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.productPrefix__T = (function() {
  return "ReturnStmt";
});
$c_Lorg_squawk_ast_ReturnStmt.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_ReturnStmt__f_value;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_ReturnStmt(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_ReturnStmt) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.ReturnStmt"));
}
function $isArrayOf_Lorg_squawk_ast_ReturnStmt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_ReturnStmt)));
}
function $asArrayOf_Lorg_squawk_ast_ReturnStmt(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_ReturnStmt(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.ReturnStmt;", depth));
}
var $d_Lorg_squawk_ast_ReturnStmt = new $TypeData().initClass($c_Lorg_squawk_ast_ReturnStmt, "org.squawk.ast.ReturnStmt", ({
  Lorg_squawk_ast_ReturnStmt: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Statement: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_Lorg_squawk_ast_UnaryExpr(operator, operand) {
  this.Lorg_squawk_ast_UnaryExpr__f_operator = null;
  this.Lorg_squawk_ast_UnaryExpr__f_operand = null;
  this.Lorg_squawk_ast_UnaryExpr__f_operator = operator;
  this.Lorg_squawk_ast_UnaryExpr__f_operand = operand;
}
$c_Lorg_squawk_ast_UnaryExpr.prototype = new $h_O();
$c_Lorg_squawk_ast_UnaryExpr.prototype.constructor = $c_Lorg_squawk_ast_UnaryExpr;
/** @constructor */
function $h_Lorg_squawk_ast_UnaryExpr() {
}
$h_Lorg_squawk_ast_UnaryExpr.prototype = $c_Lorg_squawk_ast_UnaryExpr.prototype;
$c_Lorg_squawk_ast_UnaryExpr.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lorg_squawk_ast_UnaryExpr)) {
    var x$0$2 = $as_Lorg_squawk_ast_UnaryExpr(x$0);
    var x = this.Lorg_squawk_ast_UnaryExpr__f_operator;
    var x$2 = $n(x$0$2).Lorg_squawk_ast_UnaryExpr__f_operator;
    if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
      var x$3 = this.Lorg_squawk_ast_UnaryExpr__f_operand;
      var x$4 = $n(x$0$2).Lorg_squawk_ast_UnaryExpr__f_operand;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : $n(x$3).equals__O__Z(x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $n(x$0$2);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.productArity__I = (function() {
  return 2;
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.productPrefix__T = (function() {
  return "UnaryExpr";
});
$c_Lorg_squawk_ast_UnaryExpr.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lorg_squawk_ast_UnaryExpr__f_operator;
  }
  if ((n === 1)) {
    return this.Lorg_squawk_ast_UnaryExpr__f_operand;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
function $as_Lorg_squawk_ast_UnaryExpr(obj) {
  return (((obj instanceof $c_Lorg_squawk_ast_UnaryExpr) || (obj === null)) ? obj : $throwClassCastException(obj, "org.squawk.ast.UnaryExpr"));
}
function $isArrayOf_Lorg_squawk_ast_UnaryExpr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lorg_squawk_ast_UnaryExpr)));
}
function $asArrayOf_Lorg_squawk_ast_UnaryExpr(obj, depth) {
  return (($isArrayOf_Lorg_squawk_ast_UnaryExpr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.squawk.ast.UnaryExpr;", depth));
}
var $d_Lorg_squawk_ast_UnaryExpr = new $TypeData().initClass($c_Lorg_squawk_ast_UnaryExpr, "org.squawk.ast.UnaryExpr", ({
  Lorg_squawk_ast_UnaryExpr: 1,
  Lorg_squawk_ast_ASTNode: 1,
  Lorg_squawk_ast_Expression: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_s_None$() {
}
$c_s_None$.prototype = new $h_s_Option();
$c_s_None$.prototype.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $c_s_None$.prototype;
$c_s_None$.prototype.get__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$c_s_None$.prototype.productPrefix__T = (function() {
  return "None";
});
$c_s_None$.prototype.productArity__I = (function() {
  return 0;
});
$c_s_None$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_s_None$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_None$.prototype.hashCode__I = (function() {
  return 2433880;
});
$c_s_None$.prototype.toString__T = (function() {
  return "None";
});
$c_s_None$.prototype.get__O = (function() {
  this.get__E();
});
var $d_s_None$ = new $TypeData().initClass($c_s_None$, "scala.None$", ({
  s_None$: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.s_Some__f_value = null;
  this.s_Some__f_value = value;
}
$c_s_Some.prototype = new $h_s_Option();
$c_s_Some.prototype.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $c_s_Some.prototype;
$c_s_Some.prototype.get__O = (function() {
  return this.s_Some__f_value;
});
$c_s_Some.prototype.productPrefix__T = (function() {
  return "Some";
});
$c_s_Some.prototype.productArity__I = (function() {
  return 1;
});
$c_s_Some.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
});
$c_s_Some.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_s_Some.prototype.hashCode__I = (function() {
  var this$2 = $m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
});
$c_s_Some.prototype.toString__T = (function() {
  return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
});
$c_s_Some.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true;
  } else if ((x$1 instanceof $c_s_Some)) {
    var Some$1 = $as_s_Some(x$1);
    return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
  } else {
    return false;
  }
});
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)));
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth));
}
var $d_s_Some = new $TypeData().initClass($c_s_Some, "scala.Some", ({
  s_Some: 1,
  s_Option: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$c_sc_AbstractIterable.prototype = new $h_O();
$c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
$c_sc_AbstractIterable.prototype.className__T = (function() {
  return this.stringPrefix__T();
});
$c_sc_AbstractIterable.prototype.map__F1__O = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$c_sc_AbstractIterable.prototype.isEmpty__Z = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sc_AbstractIterable.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this);
});
$c_sc_AbstractIterable.prototype.knownSize__I = (function() {
  return (-1);
});
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
}
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
}
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
  return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
  if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
    var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
    return r;
  } else {
    return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
    var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  }
  return this;
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.scm_ImmutableBuilder__f_elems = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty);
}
$c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$c_sc_Iterator$$anon$21.prototype.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $c_sc_Iterator$$anon$21.prototype;
$c_sc_Iterator$$anon$21.prototype.addOne__O__sc_Iterator$$anon$21 = (function(elem) {
  var this$3 = $n($as_sc_Iterator(this.scm_ImmutableBuilder__f_elems));
  var xs = new $c_sjsr_AnonFunction0((() => new $c_sc_Iterator$$anon$20(elem)));
  this.scm_ImmutableBuilder__f_elems = this$3.concat__F0__sc_Iterator(xs);
  return this;
});
$c_sc_Iterator$$anon$21.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sc_Iterator$$anon$21(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().initClass($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  sc_Iterator$$anon$21: 1,
  scm_ImmutableBuilder: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
}));
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.iterator__sc_Iterator();
  while ($n(it).hasNext__Z()) {
    var next = $as_T2($n(it).next__O());
    $n(f).apply__O__O__O($n(next).T2__f__1, $n(next).T2__f__2);
  }
}
function $f_sc_MapOps__concat__sc_IterableOnce__sc_IterableOps($thiz, suffix) {
  var $x_2 = $thiz.mapFactory__sc_MapFactory();
  if ($is_sc_Iterable(suffix)) {
    var x2 = $as_sc_Iterable(suffix);
    var $x_1 = new $c_sc_View$Concat($thiz, x2);
  } else {
    var $x_1 = $n($thiz.iterator__sc_Iterator()).concat__F0__sc_Iterator(new $c_sjsr_AnonFunction0((() => $n(suffix).iterator__sc_Iterator())));
  }
  return $as_sc_IterableOps($n($x_2).from__sc_IterableOnce__O($x_1));
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  var this$2 = $n($thiz.iterator__sc_Iterator());
  var f = new $c_sjsr_AnonFunction1(((x0$1$2) => {
    var x0$1 = $as_T2(x0$1$2);
    if ((x0$1 !== null)) {
      var k = $n(x0$1).T2__f__1;
      var v = $n(x0$1).T2__f__2;
      return ((k + " -> ") + v);
    } else {
      throw new $c_s_MatchError(x0$1);
    }
  }));
  var this$3 = new $c_sc_Iterator$$anon$9(this$2, f);
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$3, sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__appended__O__O($thiz, elem) {
  var b = $n($thiz.iterableFactory__sc_SeqFactory()).newBuilder__scm_Builder();
  var this$1 = $n(b);
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this$1, $thiz, 1);
  var this$2 = $n(b);
  this$2.addAll__sc_IterableOnce__scm_Growable($thiz);
  var this$3 = $n(b);
  this$3.addOne__O__scm_Growable(elem);
  return $n(b).result__O();
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, $n(x2$1).sci_HashMap__f_rootNode);
  while (this.hasNext__Z()) {
    var originalHash = $n(this.sci_ChampBaseIterator__f_currentValueNode).getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
    $n(outer).update__sci_MapNode__O__O__I__I__I__V($n(outer).sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
    this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
  }
}
$c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$c_sci_HashMapBuilder$$anon$1.prototype.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $c_sci_HashMapBuilder$$anon$1.prototype;
$c_sci_HashMapBuilder$$anon$1.prototype.next__E = (function() {
  $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  throw $ct_jl_ClassCastException__(new $c_jl_ClassCastException());
});
$c_sci_HashMapBuilder$$anon$1.prototype.next__O = (function() {
  this.next__E();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().initClass($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  sci_HashMapBuilder$$anon$1: 1,
  sci_ChampBaseIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)));
}
function $as_sci_Iterable(obj) {
  return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Iterable)));
}
function $asArrayOf_sci_Iterable(obj, depth) {
  return (($isArrayOf_sci_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Iterable;", depth));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.sci_Map$Map2$Map2Iterator__f_i = 0;
  this.sci_Map$Map2$Map2Iterator__f_$outer = null;
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$c_sci_Map$Map2$$anon$1.prototype.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $c_sci_Map$Map2$$anon$1.prototype;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().initClass($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  sci_Map$Map2$$anon$1: 1,
  sci_Map$Map2$Map2Iterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.sci_Map$Map3$Map3Iterator__f_i = 0;
  this.sci_Map$Map3$Map3Iterator__f_$outer = null;
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$c_sci_Map$Map3$$anon$4.prototype.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $c_sci_Map$Map3$$anon$4.prototype;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().initClass($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  sci_Map$Map3$$anon$4: 1,
  sci_Map$Map3$Map3Iterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.sci_Map$Map4$Map4Iterator__f_i = 0;
  this.sci_Map$Map4$Map4Iterator__f_$outer = null;
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$c_sci_Map$Map4$$anon$7.prototype.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $c_sci_Map$Map4$$anon$7.prototype;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().initClass($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  sci_Map$Map4$$anon$7: 1,
  sci_Map$Map4$Map4Iterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
  this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
  this.sci_ChampBaseReverseIterator__f_nodeStack = null;
  this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
  this.sci_MapKeyValueTupleHashIterator__f_value = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
}
$c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$c_sci_MapKeyValueTupleHashIterator.prototype.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $c_sci_MapKeyValueTupleHashIterator.prototype;
$c_sci_MapKeyValueTupleHashIterator.prototype.hashCode__I = (function() {
  var $x_2 = $m_s_util_hashing_MurmurHash3$();
  var $x_1 = this.sci_MapKeyValueTupleHashIterator__f_hash;
  var x = this.sci_MapKeyValueTupleHashIterator__f_value;
  return $n($x_2).tuple2Hash__I__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x), (-889275714));
});
$c_sci_MapKeyValueTupleHashIterator.prototype.next__sci_MapKeyValueTupleHashIterator = (function() {
  if ((!this.hasNext__Z())) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  this.sci_MapKeyValueTupleHashIterator__f_hash = $n(this.sci_ChampBaseReverseIterator__f_currentValueNode).getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
  this.sci_MapKeyValueTupleHashIterator__f_value = $n($as_sci_MapNode(this.sci_ChampBaseReverseIterator__f_currentValueNode)).getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
  this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
  return this;
});
$c_sci_MapKeyValueTupleHashIterator.prototype.next__O = (function() {
  return this.next__sci_MapKeyValueTupleHashIterator();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().initClass($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  sci_MapKeyValueTupleHashIterator: 1,
  sci_ChampBaseReverseIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.sci_ChampBaseIterator__f_currentValueCursor = 0;
  this.sci_ChampBaseIterator__f_currentValueLength = 0;
  this.sci_ChampBaseIterator__f_currentValueNode = null;
  this.sci_ChampBaseIterator__f_currentStackLevel = 0;
  this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
  this.sci_ChampBaseIterator__f_nodes = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$c_sci_MapKeyValueTupleIterator.prototype.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $c_sci_MapKeyValueTupleIterator.prototype;
$c_sci_MapKeyValueTupleIterator.prototype.next__T2 = (function() {
  if ((!this.hasNext__Z())) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  var payload = $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
  this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
  return payload;
});
$c_sci_MapKeyValueTupleIterator.prototype.next__O = (function() {
  return this.next__T2();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().initClass($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  sci_MapKeyValueTupleIterator: 1,
  sci_ChampBaseIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
    $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
  }
  $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
  var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  while (($n(slice).u.length === 0)) {
    $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
    slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
  }
  $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
  var count = $thiz.sci_NewVectorIterator__f_sliceCount;
  var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
  switch (x1) {
    case 1: {
      $thiz.sci_NewVectorIterator__f_a1 = slice;
      break;
    }
    case 2: {
      $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
      break;
    }
    case 3: {
      $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
      break;
    }
    case 4: {
      $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
      break;
    }
    case 5: {
      $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
      break;
    }
    case 6: {
      $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
  if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
    $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength;
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
  if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
    var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
    var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
    $thiz.sci_NewVectorIterator__f_oldPos = io;
  }
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
  var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
  $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
  $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 32768)) {
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 1048576)) {
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else if ((xor < 33554432)) {
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  } else {
    $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
    $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
    $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
    $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
    $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.sci_NewVectorIterator__f_v = null;
  this.sci_NewVectorIterator__f_totalLength = 0;
  this.sci_NewVectorIterator__f_sliceCount = 0;
  this.sci_NewVectorIterator__f_a1 = null;
  this.sci_NewVectorIterator__f_a2 = null;
  this.sci_NewVectorIterator__f_a3 = null;
  this.sci_NewVectorIterator__f_a4 = null;
  this.sci_NewVectorIterator__f_a5 = null;
  this.sci_NewVectorIterator__f_a6 = null;
  this.sci_NewVectorIterator__f_a1len = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 0;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = 0;
  this.sci_NewVectorIterator__f_v = v;
  this.sci_NewVectorIterator__f_totalLength = totalLength;
  this.sci_NewVectorIterator__f_sliceCount = sliceCount;
  this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
  this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
  this.sci_NewVectorIterator__f_oldPos = 0;
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
  this.sci_NewVectorIterator__f_sliceIdx = 0;
  this.sci_NewVectorIterator__f_sliceDim = 1;
  this.sci_NewVectorIterator__f_sliceStart = 0;
  this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len;
}
$c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $c_sci_NewVectorIterator.prototype;
$c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
  return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
});
$c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
  return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
});
$c_sci_NewVectorIterator.prototype.next__O = (function() {
  if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
  this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  return r;
});
$c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.sci_NewVectorIterator__f_totalLength;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_a1len = 0;
    } else {
      while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
      if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
        var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
        this.sci_NewVectorIterator__f_oldPos = io;
      }
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
      if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
        this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
      }
    }
  }
  return this;
});
$c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.sci_NewVectorIterator__f_a1;
      var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
      var destPos = ((start + copied) | 0);
      $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count);
    } else {
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count);
    }
    this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().initClass($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  sci_NewVectorIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  jl_Cloneable: 1
}));
/** @constructor */
function $c_s_util_matching_Regex$MatchIterator(source, regex, _groupNames) {
  this.s_util_matching_Regex$MatchIterator__f_matcher = null;
  this.s_util_matching_Regex$MatchIterator__f_nextSeen = 0;
  var this$1 = $n($n(regex).s_util_matching_Regex__f_pattern);
  this.s_util_matching_Regex$MatchIterator__f_matcher = new $c_ju_regex_Matcher(this$1, $dp_toString__T($n(source)));
  this.s_util_matching_Regex$MatchIterator__f_nextSeen = 0;
}
$c_s_util_matching_Regex$MatchIterator.prototype = new $h_sc_AbstractIterator();
$c_s_util_matching_Regex$MatchIterator.prototype.constructor = $c_s_util_matching_Regex$MatchIterator;
/** @constructor */
function $h_s_util_matching_Regex$MatchIterator() {
}
$h_s_util_matching_Regex$MatchIterator.prototype = $c_s_util_matching_Regex$MatchIterator.prototype;
$c_s_util_matching_Regex$MatchIterator.prototype.hasNext__Z = (function() {
  var x1 = this.s_util_matching_Regex$MatchIterator__f_nextSeen;
  switch (x1) {
    case 0: {
      this.s_util_matching_Regex$MatchIterator__f_nextSeen = ($n(this.s_util_matching_Regex$MatchIterator__f_matcher).find__Z() ? 1 : 3);
      break;
    }
    case 1: {
      break;
    }
    case 2: {
      this.s_util_matching_Regex$MatchIterator__f_nextSeen = 0;
      this.hasNext__Z();
      break;
    }
    case 3: {
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  return (this.s_util_matching_Regex$MatchIterator__f_nextSeen === 1);
});
$c_s_util_matching_Regex$MatchIterator.prototype.next__T = (function() {
  var x1 = this.s_util_matching_Regex$MatchIterator__f_nextSeen;
  switch (x1) {
    case 0: {
      if ((!this.hasNext__Z())) {
        throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
      }
      this.next__T();
      break;
    }
    case 1: {
      this.s_util_matching_Regex$MatchIterator__f_nextSeen = 2;
      break;
    }
    case 2: {
      this.s_util_matching_Regex$MatchIterator__f_nextSeen = 0;
      this.next__T();
      break;
    }
    case 3: {
      throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  return $n(this.s_util_matching_Regex$MatchIterator__f_matcher).group__T();
});
$c_s_util_matching_Regex$MatchIterator.prototype.toString__T = (function() {
  return "<iterator>";
});
$c_s_util_matching_Regex$MatchIterator.prototype.next__O = (function() {
  return this.next__T();
});
var $d_s_util_matching_Regex$MatchIterator = new $TypeData().initClass($c_s_util_matching_Regex$MatchIterator, "scala.util.matching.Regex$MatchIterator", ({
  s_util_matching_Regex$MatchIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  s_util_matching_Regex$MatchData: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.className__T() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)));
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)));
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth));
}
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
  this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = null;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = 0;
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  var this$1 = $n(mutationCount);
  this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount = $uI(this$1.apply__O());
}
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype;
$c_scm_CheckedIndexedSeqView$CheckedIterator.prototype.hasNext__Z = (function() {
  var this$2 = $m_scm_MutationTracker$();
  var expectedCount = this.scm_CheckedIndexedSeqView$CheckedIterator__f_expectedCount;
  var this$1 = $n(this.scm_CheckedIndexedSeqView$CheckedIterator__f_mutationCount);
  var actualCount = $uI(this$1.apply__O());
  this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
  return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().initClass($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  scm_CheckedIndexedSeqView$CheckedIterator: 1,
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
}));
function $as_sjs_js_JavaScriptException(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)));
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth));
}
/** @constructor */
function $c_Lorg_squawk_evaluator_Evaluator$VoidValue$() {
}
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype = new $h_O();
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.constructor = $c_Lorg_squawk_evaluator_Evaluator$VoidValue$;
/** @constructor */
function $h_Lorg_squawk_evaluator_Evaluator$VoidValue$() {
}
$h_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype = $c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype;
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.hashCode__I = (function() {
  return 1000098845;
});
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.toString__T = (function() {
  return "VoidValue";
});
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.productPrefix__T = (function() {
  return "VoidValue";
});
$c_Lorg_squawk_evaluator_Evaluator$VoidValue$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_evaluator_Evaluator$VoidValue$ = new $TypeData().initClass($c_Lorg_squawk_evaluator_Evaluator$VoidValue$, "org.squawk.evaluator.Evaluator$VoidValue$", ({
  Lorg_squawk_evaluator_Evaluator$VoidValue$: 1,
  Lorg_squawk_evaluator_Evaluator$Value: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_evaluator_Evaluator$VoidValue$;
function $m_Lorg_squawk_evaluator_Evaluator$VoidValue$() {
  if ((!$n_Lorg_squawk_evaluator_Evaluator$VoidValue$)) {
    $n_Lorg_squawk_evaluator_Evaluator$VoidValue$ = new $c_Lorg_squawk_evaluator_Evaluator$VoidValue$();
  }
  return $n_Lorg_squawk_evaluator_Evaluator$VoidValue$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Assign$() {
}
$c_Lorg_squawk_tokens_Assign$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Assign$.prototype.constructor = $c_Lorg_squawk_tokens_Assign$;
/** @constructor */
function $h_Lorg_squawk_tokens_Assign$() {
}
$h_Lorg_squawk_tokens_Assign$.prototype = $c_Lorg_squawk_tokens_Assign$.prototype;
$c_Lorg_squawk_tokens_Assign$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Assign$.prototype.hashCode__I = (function() {
  return 1970629903;
});
$c_Lorg_squawk_tokens_Assign$.prototype.toString__T = (function() {
  return "Assign";
});
$c_Lorg_squawk_tokens_Assign$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Assign$.prototype.productPrefix__T = (function() {
  return "Assign";
});
$c_Lorg_squawk_tokens_Assign$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Assign$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Assign$, "org.squawk.tokens.Assign$", ({
  Lorg_squawk_tokens_Assign$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Assign$;
function $m_Lorg_squawk_tokens_Assign$() {
  if ((!$n_Lorg_squawk_tokens_Assign$)) {
    $n_Lorg_squawk_tokens_Assign$ = new $c_Lorg_squawk_tokens_Assign$();
  }
  return $n_Lorg_squawk_tokens_Assign$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Asterisk$() {
}
$c_Lorg_squawk_tokens_Asterisk$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Asterisk$.prototype.constructor = $c_Lorg_squawk_tokens_Asterisk$;
/** @constructor */
function $h_Lorg_squawk_tokens_Asterisk$() {
}
$h_Lorg_squawk_tokens_Asterisk$.prototype = $c_Lorg_squawk_tokens_Asterisk$.prototype;
$c_Lorg_squawk_tokens_Asterisk$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Asterisk$.prototype.hashCode__I = (function() {
  return (-279979118);
});
$c_Lorg_squawk_tokens_Asterisk$.prototype.toString__T = (function() {
  return "Asterisk";
});
$c_Lorg_squawk_tokens_Asterisk$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Asterisk$.prototype.productPrefix__T = (function() {
  return "Asterisk";
});
$c_Lorg_squawk_tokens_Asterisk$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Asterisk$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Asterisk$, "org.squawk.tokens.Asterisk$", ({
  Lorg_squawk_tokens_Asterisk$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Asterisk$;
function $m_Lorg_squawk_tokens_Asterisk$() {
  if ((!$n_Lorg_squawk_tokens_Asterisk$)) {
    $n_Lorg_squawk_tokens_Asterisk$ = new $c_Lorg_squawk_tokens_Asterisk$();
  }
  return $n_Lorg_squawk_tokens_Asterisk$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Bang$() {
}
$c_Lorg_squawk_tokens_Bang$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Bang$.prototype.constructor = $c_Lorg_squawk_tokens_Bang$;
/** @constructor */
function $h_Lorg_squawk_tokens_Bang$() {
}
$h_Lorg_squawk_tokens_Bang$.prototype = $c_Lorg_squawk_tokens_Bang$.prototype;
$c_Lorg_squawk_tokens_Bang$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Bang$.prototype.hashCode__I = (function() {
  return 2062936;
});
$c_Lorg_squawk_tokens_Bang$.prototype.toString__T = (function() {
  return "Bang";
});
$c_Lorg_squawk_tokens_Bang$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Bang$.prototype.productPrefix__T = (function() {
  return "Bang";
});
$c_Lorg_squawk_tokens_Bang$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Bang$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Bang$, "org.squawk.tokens.Bang$", ({
  Lorg_squawk_tokens_Bang$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Bang$;
function $m_Lorg_squawk_tokens_Bang$() {
  if ((!$n_Lorg_squawk_tokens_Bang$)) {
    $n_Lorg_squawk_tokens_Bang$ = new $c_Lorg_squawk_tokens_Bang$();
  }
  return $n_Lorg_squawk_tokens_Bang$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_CloseBracket$() {
}
$c_Lorg_squawk_tokens_CloseBracket$.prototype = new $h_O();
$c_Lorg_squawk_tokens_CloseBracket$.prototype.constructor = $c_Lorg_squawk_tokens_CloseBracket$;
/** @constructor */
function $h_Lorg_squawk_tokens_CloseBracket$() {
}
$h_Lorg_squawk_tokens_CloseBracket$.prototype = $c_Lorg_squawk_tokens_CloseBracket$.prototype;
$c_Lorg_squawk_tokens_CloseBracket$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_CloseBracket$.prototype.hashCode__I = (function() {
  return (-1043360848);
});
$c_Lorg_squawk_tokens_CloseBracket$.prototype.toString__T = (function() {
  return "CloseBracket";
});
$c_Lorg_squawk_tokens_CloseBracket$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_CloseBracket$.prototype.productPrefix__T = (function() {
  return "CloseBracket";
});
$c_Lorg_squawk_tokens_CloseBracket$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_CloseBracket$ = new $TypeData().initClass($c_Lorg_squawk_tokens_CloseBracket$, "org.squawk.tokens.CloseBracket$", ({
  Lorg_squawk_tokens_CloseBracket$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_CloseBracket$;
function $m_Lorg_squawk_tokens_CloseBracket$() {
  if ((!$n_Lorg_squawk_tokens_CloseBracket$)) {
    $n_Lorg_squawk_tokens_CloseBracket$ = new $c_Lorg_squawk_tokens_CloseBracket$();
  }
  return $n_Lorg_squawk_tokens_CloseBracket$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_CloseParen$() {
}
$c_Lorg_squawk_tokens_CloseParen$.prototype = new $h_O();
$c_Lorg_squawk_tokens_CloseParen$.prototype.constructor = $c_Lorg_squawk_tokens_CloseParen$;
/** @constructor */
function $h_Lorg_squawk_tokens_CloseParen$() {
}
$h_Lorg_squawk_tokens_CloseParen$.prototype = $c_Lorg_squawk_tokens_CloseParen$.prototype;
$c_Lorg_squawk_tokens_CloseParen$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_CloseParen$.prototype.hashCode__I = (function() {
  return (-82501102);
});
$c_Lorg_squawk_tokens_CloseParen$.prototype.toString__T = (function() {
  return "CloseParen";
});
$c_Lorg_squawk_tokens_CloseParen$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_CloseParen$.prototype.productPrefix__T = (function() {
  return "CloseParen";
});
$c_Lorg_squawk_tokens_CloseParen$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_CloseParen$ = new $TypeData().initClass($c_Lorg_squawk_tokens_CloseParen$, "org.squawk.tokens.CloseParen$", ({
  Lorg_squawk_tokens_CloseParen$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_CloseParen$;
function $m_Lorg_squawk_tokens_CloseParen$() {
  if ((!$n_Lorg_squawk_tokens_CloseParen$)) {
    $n_Lorg_squawk_tokens_CloseParen$ = new $c_Lorg_squawk_tokens_CloseParen$();
  }
  return $n_Lorg_squawk_tokens_CloseParen$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Comma$() {
}
$c_Lorg_squawk_tokens_Comma$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Comma$.prototype.constructor = $c_Lorg_squawk_tokens_Comma$;
/** @constructor */
function $h_Lorg_squawk_tokens_Comma$() {
}
$h_Lorg_squawk_tokens_Comma$.prototype = $c_Lorg_squawk_tokens_Comma$.prototype;
$c_Lorg_squawk_tokens_Comma$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Comma$.prototype.hashCode__I = (function() {
  return 65290933;
});
$c_Lorg_squawk_tokens_Comma$.prototype.toString__T = (function() {
  return "Comma";
});
$c_Lorg_squawk_tokens_Comma$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Comma$.prototype.productPrefix__T = (function() {
  return "Comma";
});
$c_Lorg_squawk_tokens_Comma$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Comma$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Comma$, "org.squawk.tokens.Comma$", ({
  Lorg_squawk_tokens_Comma$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Comma$;
function $m_Lorg_squawk_tokens_Comma$() {
  if ((!$n_Lorg_squawk_tokens_Comma$)) {
    $n_Lorg_squawk_tokens_Comma$ = new $c_Lorg_squawk_tokens_Comma$();
  }
  return $n_Lorg_squawk_tokens_Comma$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Else$() {
}
$c_Lorg_squawk_tokens_Else$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Else$.prototype.constructor = $c_Lorg_squawk_tokens_Else$;
/** @constructor */
function $h_Lorg_squawk_tokens_Else$() {
}
$h_Lorg_squawk_tokens_Else$.prototype = $c_Lorg_squawk_tokens_Else$.prototype;
$c_Lorg_squawk_tokens_Else$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Else$.prototype.hashCode__I = (function() {
  return 2163033;
});
$c_Lorg_squawk_tokens_Else$.prototype.toString__T = (function() {
  return "Else";
});
$c_Lorg_squawk_tokens_Else$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Else$.prototype.productPrefix__T = (function() {
  return "Else";
});
$c_Lorg_squawk_tokens_Else$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Else$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Else$, "org.squawk.tokens.Else$", ({
  Lorg_squawk_tokens_Else$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Else$;
function $m_Lorg_squawk_tokens_Else$() {
  if ((!$n_Lorg_squawk_tokens_Else$)) {
    $n_Lorg_squawk_tokens_Else$ = new $c_Lorg_squawk_tokens_Else$();
  }
  return $n_Lorg_squawk_tokens_Else$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Equal$() {
}
$c_Lorg_squawk_tokens_Equal$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Equal$.prototype.constructor = $c_Lorg_squawk_tokens_Equal$;
/** @constructor */
function $h_Lorg_squawk_tokens_Equal$() {
}
$h_Lorg_squawk_tokens_Equal$.prototype = $c_Lorg_squawk_tokens_Equal$.prototype;
$c_Lorg_squawk_tokens_Equal$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Equal$.prototype.hashCode__I = (function() {
  return 67204884;
});
$c_Lorg_squawk_tokens_Equal$.prototype.toString__T = (function() {
  return "Equal";
});
$c_Lorg_squawk_tokens_Equal$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Equal$.prototype.productPrefix__T = (function() {
  return "Equal";
});
$c_Lorg_squawk_tokens_Equal$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Equal$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Equal$, "org.squawk.tokens.Equal$", ({
  Lorg_squawk_tokens_Equal$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Equal$;
function $m_Lorg_squawk_tokens_Equal$() {
  if ((!$n_Lorg_squawk_tokens_Equal$)) {
    $n_Lorg_squawk_tokens_Equal$ = new $c_Lorg_squawk_tokens_Equal$();
  }
  return $n_Lorg_squawk_tokens_Equal$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_False$() {
}
$c_Lorg_squawk_tokens_False$.prototype = new $h_O();
$c_Lorg_squawk_tokens_False$.prototype.constructor = $c_Lorg_squawk_tokens_False$;
/** @constructor */
function $h_Lorg_squawk_tokens_False$() {
}
$h_Lorg_squawk_tokens_False$.prototype = $c_Lorg_squawk_tokens_False$.prototype;
$c_Lorg_squawk_tokens_False$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_False$.prototype.hashCode__I = (function() {
  return 67643651;
});
$c_Lorg_squawk_tokens_False$.prototype.toString__T = (function() {
  return "False";
});
$c_Lorg_squawk_tokens_False$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_False$.prototype.productPrefix__T = (function() {
  return "False";
});
$c_Lorg_squawk_tokens_False$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_False$ = new $TypeData().initClass($c_Lorg_squawk_tokens_False$, "org.squawk.tokens.False$", ({
  Lorg_squawk_tokens_False$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_False$;
function $m_Lorg_squawk_tokens_False$() {
  if ((!$n_Lorg_squawk_tokens_False$)) {
    $n_Lorg_squawk_tokens_False$ = new $c_Lorg_squawk_tokens_False$();
  }
  return $n_Lorg_squawk_tokens_False$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Function$() {
}
$c_Lorg_squawk_tokens_Function$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Function$.prototype.constructor = $c_Lorg_squawk_tokens_Function$;
/** @constructor */
function $h_Lorg_squawk_tokens_Function$() {
}
$h_Lorg_squawk_tokens_Function$.prototype = $c_Lorg_squawk_tokens_Function$.prototype;
$c_Lorg_squawk_tokens_Function$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Function$.prototype.hashCode__I = (function() {
  return 1445582840;
});
$c_Lorg_squawk_tokens_Function$.prototype.toString__T = (function() {
  return "Function";
});
$c_Lorg_squawk_tokens_Function$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Function$.prototype.productPrefix__T = (function() {
  return "Function";
});
$c_Lorg_squawk_tokens_Function$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Function$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Function$, "org.squawk.tokens.Function$", ({
  Lorg_squawk_tokens_Function$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Function$;
function $m_Lorg_squawk_tokens_Function$() {
  if ((!$n_Lorg_squawk_tokens_Function$)) {
    $n_Lorg_squawk_tokens_Function$ = new $c_Lorg_squawk_tokens_Function$();
  }
  return $n_Lorg_squawk_tokens_Function$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_GreaterThan$() {
}
$c_Lorg_squawk_tokens_GreaterThan$.prototype = new $h_O();
$c_Lorg_squawk_tokens_GreaterThan$.prototype.constructor = $c_Lorg_squawk_tokens_GreaterThan$;
/** @constructor */
function $h_Lorg_squawk_tokens_GreaterThan$() {
}
$h_Lorg_squawk_tokens_GreaterThan$.prototype = $c_Lorg_squawk_tokens_GreaterThan$.prototype;
$c_Lorg_squawk_tokens_GreaterThan$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_GreaterThan$.prototype.hashCode__I = (function() {
  return (-1701951333);
});
$c_Lorg_squawk_tokens_GreaterThan$.prototype.toString__T = (function() {
  return "GreaterThan";
});
$c_Lorg_squawk_tokens_GreaterThan$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_GreaterThan$.prototype.productPrefix__T = (function() {
  return "GreaterThan";
});
$c_Lorg_squawk_tokens_GreaterThan$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_GreaterThan$ = new $TypeData().initClass($c_Lorg_squawk_tokens_GreaterThan$, "org.squawk.tokens.GreaterThan$", ({
  Lorg_squawk_tokens_GreaterThan$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_GreaterThan$;
function $m_Lorg_squawk_tokens_GreaterThan$() {
  if ((!$n_Lorg_squawk_tokens_GreaterThan$)) {
    $n_Lorg_squawk_tokens_GreaterThan$ = new $c_Lorg_squawk_tokens_GreaterThan$();
  }
  return $n_Lorg_squawk_tokens_GreaterThan$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_If$() {
}
$c_Lorg_squawk_tokens_If$.prototype = new $h_O();
$c_Lorg_squawk_tokens_If$.prototype.constructor = $c_Lorg_squawk_tokens_If$;
/** @constructor */
function $h_Lorg_squawk_tokens_If$() {
}
$h_Lorg_squawk_tokens_If$.prototype = $c_Lorg_squawk_tokens_If$.prototype;
$c_Lorg_squawk_tokens_If$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_If$.prototype.hashCode__I = (function() {
  return 2365;
});
$c_Lorg_squawk_tokens_If$.prototype.toString__T = (function() {
  return "If";
});
$c_Lorg_squawk_tokens_If$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_If$.prototype.productPrefix__T = (function() {
  return "If";
});
$c_Lorg_squawk_tokens_If$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_If$ = new $TypeData().initClass($c_Lorg_squawk_tokens_If$, "org.squawk.tokens.If$", ({
  Lorg_squawk_tokens_If$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_If$;
function $m_Lorg_squawk_tokens_If$() {
  if ((!$n_Lorg_squawk_tokens_If$)) {
    $n_Lorg_squawk_tokens_If$ = new $c_Lorg_squawk_tokens_If$();
  }
  return $n_Lorg_squawk_tokens_If$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_LessThan$() {
}
$c_Lorg_squawk_tokens_LessThan$.prototype = new $h_O();
$c_Lorg_squawk_tokens_LessThan$.prototype.constructor = $c_Lorg_squawk_tokens_LessThan$;
/** @constructor */
function $h_Lorg_squawk_tokens_LessThan$() {
}
$h_Lorg_squawk_tokens_LessThan$.prototype = $c_Lorg_squawk_tokens_LessThan$.prototype;
$c_Lorg_squawk_tokens_LessThan$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_LessThan$.prototype.hashCode__I = (function() {
  return (-2140646662);
});
$c_Lorg_squawk_tokens_LessThan$.prototype.toString__T = (function() {
  return "LessThan";
});
$c_Lorg_squawk_tokens_LessThan$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_LessThan$.prototype.productPrefix__T = (function() {
  return "LessThan";
});
$c_Lorg_squawk_tokens_LessThan$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_LessThan$ = new $TypeData().initClass($c_Lorg_squawk_tokens_LessThan$, "org.squawk.tokens.LessThan$", ({
  Lorg_squawk_tokens_LessThan$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_LessThan$;
function $m_Lorg_squawk_tokens_LessThan$() {
  if ((!$n_Lorg_squawk_tokens_LessThan$)) {
    $n_Lorg_squawk_tokens_LessThan$ = new $c_Lorg_squawk_tokens_LessThan$();
  }
  return $n_Lorg_squawk_tokens_LessThan$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Let$() {
}
$c_Lorg_squawk_tokens_Let$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Let$.prototype.constructor = $c_Lorg_squawk_tokens_Let$;
/** @constructor */
function $h_Lorg_squawk_tokens_Let$() {
}
$h_Lorg_squawk_tokens_Let$.prototype = $c_Lorg_squawk_tokens_Let$.prototype;
$c_Lorg_squawk_tokens_Let$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Let$.prototype.hashCode__I = (function() {
  return 76283;
});
$c_Lorg_squawk_tokens_Let$.prototype.toString__T = (function() {
  return "Let";
});
$c_Lorg_squawk_tokens_Let$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Let$.prototype.productPrefix__T = (function() {
  return "Let";
});
$c_Lorg_squawk_tokens_Let$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Let$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Let$, "org.squawk.tokens.Let$", ({
  Lorg_squawk_tokens_Let$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Let$;
function $m_Lorg_squawk_tokens_Let$() {
  if ((!$n_Lorg_squawk_tokens_Let$)) {
    $n_Lorg_squawk_tokens_Let$ = new $c_Lorg_squawk_tokens_Let$();
  }
  return $n_Lorg_squawk_tokens_Let$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Minus$() {
}
$c_Lorg_squawk_tokens_Minus$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Minus$.prototype.constructor = $c_Lorg_squawk_tokens_Minus$;
/** @constructor */
function $h_Lorg_squawk_tokens_Minus$() {
}
$h_Lorg_squawk_tokens_Minus$.prototype = $c_Lorg_squawk_tokens_Minus$.prototype;
$c_Lorg_squawk_tokens_Minus$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Minus$.prototype.hashCode__I = (function() {
  return 74348624;
});
$c_Lorg_squawk_tokens_Minus$.prototype.toString__T = (function() {
  return "Minus";
});
$c_Lorg_squawk_tokens_Minus$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Minus$.prototype.productPrefix__T = (function() {
  return "Minus";
});
$c_Lorg_squawk_tokens_Minus$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Minus$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Minus$, "org.squawk.tokens.Minus$", ({
  Lorg_squawk_tokens_Minus$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Minus$;
function $m_Lorg_squawk_tokens_Minus$() {
  if ((!$n_Lorg_squawk_tokens_Minus$)) {
    $n_Lorg_squawk_tokens_Minus$ = new $c_Lorg_squawk_tokens_Minus$();
  }
  return $n_Lorg_squawk_tokens_Minus$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_NotEqual$() {
}
$c_Lorg_squawk_tokens_NotEqual$.prototype = new $h_O();
$c_Lorg_squawk_tokens_NotEqual$.prototype.constructor = $c_Lorg_squawk_tokens_NotEqual$;
/** @constructor */
function $h_Lorg_squawk_tokens_NotEqual$() {
}
$h_Lorg_squawk_tokens_NotEqual$.prototype = $c_Lorg_squawk_tokens_NotEqual$.prototype;
$c_Lorg_squawk_tokens_NotEqual$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_NotEqual$.prototype.hashCode__I = (function() {
  return 1617099841;
});
$c_Lorg_squawk_tokens_NotEqual$.prototype.toString__T = (function() {
  return "NotEqual";
});
$c_Lorg_squawk_tokens_NotEqual$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_NotEqual$.prototype.productPrefix__T = (function() {
  return "NotEqual";
});
$c_Lorg_squawk_tokens_NotEqual$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_NotEqual$ = new $TypeData().initClass($c_Lorg_squawk_tokens_NotEqual$, "org.squawk.tokens.NotEqual$", ({
  Lorg_squawk_tokens_NotEqual$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_NotEqual$;
function $m_Lorg_squawk_tokens_NotEqual$() {
  if ((!$n_Lorg_squawk_tokens_NotEqual$)) {
    $n_Lorg_squawk_tokens_NotEqual$ = new $c_Lorg_squawk_tokens_NotEqual$();
  }
  return $n_Lorg_squawk_tokens_NotEqual$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_OpenBracket$() {
}
$c_Lorg_squawk_tokens_OpenBracket$.prototype = new $h_O();
$c_Lorg_squawk_tokens_OpenBracket$.prototype.constructor = $c_Lorg_squawk_tokens_OpenBracket$;
/** @constructor */
function $h_Lorg_squawk_tokens_OpenBracket$() {
}
$h_Lorg_squawk_tokens_OpenBracket$.prototype = $c_Lorg_squawk_tokens_OpenBracket$.prototype;
$c_Lorg_squawk_tokens_OpenBracket$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_OpenBracket$.prototype.hashCode__I = (function() {
  return 1608449758;
});
$c_Lorg_squawk_tokens_OpenBracket$.prototype.toString__T = (function() {
  return "OpenBracket";
});
$c_Lorg_squawk_tokens_OpenBracket$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_OpenBracket$.prototype.productPrefix__T = (function() {
  return "OpenBracket";
});
$c_Lorg_squawk_tokens_OpenBracket$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_OpenBracket$ = new $TypeData().initClass($c_Lorg_squawk_tokens_OpenBracket$, "org.squawk.tokens.OpenBracket$", ({
  Lorg_squawk_tokens_OpenBracket$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_OpenBracket$;
function $m_Lorg_squawk_tokens_OpenBracket$() {
  if ((!$n_Lorg_squawk_tokens_OpenBracket$)) {
    $n_Lorg_squawk_tokens_OpenBracket$ = new $c_Lorg_squawk_tokens_OpenBracket$();
  }
  return $n_Lorg_squawk_tokens_OpenBracket$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_OpenParen$() {
}
$c_Lorg_squawk_tokens_OpenParen$.prototype = new $h_O();
$c_Lorg_squawk_tokens_OpenParen$.prototype.constructor = $c_Lorg_squawk_tokens_OpenParen$;
/** @constructor */
function $h_Lorg_squawk_tokens_OpenParen$() {
}
$h_Lorg_squawk_tokens_OpenParen$.prototype = $c_Lorg_squawk_tokens_OpenParen$.prototype;
$c_Lorg_squawk_tokens_OpenParen$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_OpenParen$.prototype.hashCode__I = (function() {
  return (-759070528);
});
$c_Lorg_squawk_tokens_OpenParen$.prototype.toString__T = (function() {
  return "OpenParen";
});
$c_Lorg_squawk_tokens_OpenParen$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_OpenParen$.prototype.productPrefix__T = (function() {
  return "OpenParen";
});
$c_Lorg_squawk_tokens_OpenParen$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_OpenParen$ = new $TypeData().initClass($c_Lorg_squawk_tokens_OpenParen$, "org.squawk.tokens.OpenParen$", ({
  Lorg_squawk_tokens_OpenParen$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_OpenParen$;
function $m_Lorg_squawk_tokens_OpenParen$() {
  if ((!$n_Lorg_squawk_tokens_OpenParen$)) {
    $n_Lorg_squawk_tokens_OpenParen$ = new $c_Lorg_squawk_tokens_OpenParen$();
  }
  return $n_Lorg_squawk_tokens_OpenParen$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Plus$() {
}
$c_Lorg_squawk_tokens_Plus$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Plus$.prototype.constructor = $c_Lorg_squawk_tokens_Plus$;
/** @constructor */
function $h_Lorg_squawk_tokens_Plus$() {
}
$h_Lorg_squawk_tokens_Plus$.prototype = $c_Lorg_squawk_tokens_Plus$.prototype;
$c_Lorg_squawk_tokens_Plus$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Plus$.prototype.hashCode__I = (function() {
  return 2490810;
});
$c_Lorg_squawk_tokens_Plus$.prototype.toString__T = (function() {
  return "Plus";
});
$c_Lorg_squawk_tokens_Plus$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Plus$.prototype.productPrefix__T = (function() {
  return "Plus";
});
$c_Lorg_squawk_tokens_Plus$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Plus$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Plus$, "org.squawk.tokens.Plus$", ({
  Lorg_squawk_tokens_Plus$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Plus$;
function $m_Lorg_squawk_tokens_Plus$() {
  if ((!$n_Lorg_squawk_tokens_Plus$)) {
    $n_Lorg_squawk_tokens_Plus$ = new $c_Lorg_squawk_tokens_Plus$();
  }
  return $n_Lorg_squawk_tokens_Plus$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Return$() {
}
$c_Lorg_squawk_tokens_Return$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Return$.prototype.constructor = $c_Lorg_squawk_tokens_Return$;
/** @constructor */
function $h_Lorg_squawk_tokens_Return$() {
}
$h_Lorg_squawk_tokens_Return$.prototype = $c_Lorg_squawk_tokens_Return$.prototype;
$c_Lorg_squawk_tokens_Return$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Return$.prototype.hashCode__I = (function() {
  return (-1850529456);
});
$c_Lorg_squawk_tokens_Return$.prototype.toString__T = (function() {
  return "Return";
});
$c_Lorg_squawk_tokens_Return$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Return$.prototype.productPrefix__T = (function() {
  return "Return";
});
$c_Lorg_squawk_tokens_Return$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Return$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Return$, "org.squawk.tokens.Return$", ({
  Lorg_squawk_tokens_Return$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Return$;
function $m_Lorg_squawk_tokens_Return$() {
  if ((!$n_Lorg_squawk_tokens_Return$)) {
    $n_Lorg_squawk_tokens_Return$ = new $c_Lorg_squawk_tokens_Return$();
  }
  return $n_Lorg_squawk_tokens_Return$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Semicolon$() {
}
$c_Lorg_squawk_tokens_Semicolon$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Semicolon$.prototype.constructor = $c_Lorg_squawk_tokens_Semicolon$;
/** @constructor */
function $h_Lorg_squawk_tokens_Semicolon$() {
}
$h_Lorg_squawk_tokens_Semicolon$.prototype = $c_Lorg_squawk_tokens_Semicolon$.prototype;
$c_Lorg_squawk_tokens_Semicolon$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Semicolon$.prototype.hashCode__I = (function() {
  return 1289876625;
});
$c_Lorg_squawk_tokens_Semicolon$.prototype.toString__T = (function() {
  return "Semicolon";
});
$c_Lorg_squawk_tokens_Semicolon$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Semicolon$.prototype.productPrefix__T = (function() {
  return "Semicolon";
});
$c_Lorg_squawk_tokens_Semicolon$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Semicolon$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Semicolon$, "org.squawk.tokens.Semicolon$", ({
  Lorg_squawk_tokens_Semicolon$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Semicolon$;
function $m_Lorg_squawk_tokens_Semicolon$() {
  if ((!$n_Lorg_squawk_tokens_Semicolon$)) {
    $n_Lorg_squawk_tokens_Semicolon$ = new $c_Lorg_squawk_tokens_Semicolon$();
  }
  return $n_Lorg_squawk_tokens_Semicolon$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Slash$() {
}
$c_Lorg_squawk_tokens_Slash$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Slash$.prototype.constructor = $c_Lorg_squawk_tokens_Slash$;
/** @constructor */
function $h_Lorg_squawk_tokens_Slash$() {
}
$h_Lorg_squawk_tokens_Slash$.prototype = $c_Lorg_squawk_tokens_Slash$.prototype;
$c_Lorg_squawk_tokens_Slash$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Slash$.prototype.hashCode__I = (function() {
  return 79966557;
});
$c_Lorg_squawk_tokens_Slash$.prototype.toString__T = (function() {
  return "Slash";
});
$c_Lorg_squawk_tokens_Slash$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Slash$.prototype.productPrefix__T = (function() {
  return "Slash";
});
$c_Lorg_squawk_tokens_Slash$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Slash$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Slash$, "org.squawk.tokens.Slash$", ({
  Lorg_squawk_tokens_Slash$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Slash$;
function $m_Lorg_squawk_tokens_Slash$() {
  if ((!$n_Lorg_squawk_tokens_Slash$)) {
    $n_Lorg_squawk_tokens_Slash$ = new $c_Lorg_squawk_tokens_Slash$();
  }
  return $n_Lorg_squawk_tokens_Slash$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_True$() {
}
$c_Lorg_squawk_tokens_True$.prototype = new $h_O();
$c_Lorg_squawk_tokens_True$.prototype.constructor = $c_Lorg_squawk_tokens_True$;
/** @constructor */
function $h_Lorg_squawk_tokens_True$() {
}
$h_Lorg_squawk_tokens_True$.prototype = $c_Lorg_squawk_tokens_True$.prototype;
$c_Lorg_squawk_tokens_True$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_True$.prototype.hashCode__I = (function() {
  return 2615726;
});
$c_Lorg_squawk_tokens_True$.prototype.toString__T = (function() {
  return "True";
});
$c_Lorg_squawk_tokens_True$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_True$.prototype.productPrefix__T = (function() {
  return "True";
});
$c_Lorg_squawk_tokens_True$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_True$ = new $TypeData().initClass($c_Lorg_squawk_tokens_True$, "org.squawk.tokens.True$", ({
  Lorg_squawk_tokens_True$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_True$;
function $m_Lorg_squawk_tokens_True$() {
  if ((!$n_Lorg_squawk_tokens_True$)) {
    $n_Lorg_squawk_tokens_True$ = new $c_Lorg_squawk_tokens_True$();
  }
  return $n_Lorg_squawk_tokens_True$;
}
/** @constructor */
function $c_Lorg_squawk_tokens_Unknown$() {
}
$c_Lorg_squawk_tokens_Unknown$.prototype = new $h_O();
$c_Lorg_squawk_tokens_Unknown$.prototype.constructor = $c_Lorg_squawk_tokens_Unknown$;
/** @constructor */
function $h_Lorg_squawk_tokens_Unknown$() {
}
$h_Lorg_squawk_tokens_Unknown$.prototype = $c_Lorg_squawk_tokens_Unknown$.prototype;
$c_Lorg_squawk_tokens_Unknown$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this);
});
$c_Lorg_squawk_tokens_Unknown$.prototype.hashCode__I = (function() {
  return 1379812394;
});
$c_Lorg_squawk_tokens_Unknown$.prototype.toString__T = (function() {
  return "Unknown";
});
$c_Lorg_squawk_tokens_Unknown$.prototype.productArity__I = (function() {
  return 0;
});
$c_Lorg_squawk_tokens_Unknown$.prototype.productPrefix__T = (function() {
  return "Unknown";
});
$c_Lorg_squawk_tokens_Unknown$.prototype.productElement__I__O = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_Lorg_squawk_tokens_Unknown$ = new $TypeData().initClass($c_Lorg_squawk_tokens_Unknown$, "org.squawk.tokens.Unknown$", ({
  Lorg_squawk_tokens_Unknown$: 1,
  Lorg_squawk_tokens_Token: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
}));
var $n_Lorg_squawk_tokens_Unknown$;
function $m_Lorg_squawk_tokens_Unknown$() {
  if ((!$n_Lorg_squawk_tokens_Unknown$)) {
    $n_Lorg_squawk_tokens_Unknown$ = new $c_Lorg_squawk_tokens_Unknown$();
  }
  return $n_Lorg_squawk_tokens_Unknown$;
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || $n(s).isEmpty__Z())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = $as_sc_LinearSeq($n(s).tail__O());
      n = temp$n;
      s = temp$s;
    }
  }
}
function $is_sc_StrictOptimizedLinearSeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $as_sc_StrictOptimizedLinearSeqOps(obj) {
  return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
}
function $isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StrictOptimizedLinearSeqOps)));
}
function $asArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) {
  return (($isArrayOf_sc_StrictOptimizedLinearSeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StrictOptimizedLinearSeqOps;", depth));
}
/** @constructor */
function $c_sc_AbstractView() {
}
$c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
$c_sc_AbstractView.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sc_View$();
});
$c_sc_AbstractView.prototype.toString__T = (function() {
  return $f_sc_View__toString__T(this);
});
$c_sc_AbstractView.prototype.stringPrefix__T = (function() {
  return "View";
});
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      var x2 = $as_sc_Seq(o);
      if ($n(x2).canEqual__O__Z($thiz)) {
        return $thiz.sameElements__sc_IterableOnce__Z(x2);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)));
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth));
}
/** @constructor */
function $c_sc_View$$anon$1(it$1) {
  this.sc_View$$anon$1__f_it$1 = null;
  this.sc_View$$anon$1__f_it$1 = it$1;
}
$c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$c_sc_View$$anon$1.prototype.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $c_sc_View$$anon$1.prototype;
$c_sc_View$$anon$1.prototype.iterator__sc_Iterator = (function() {
  return $as_sc_Iterator($n(this.sc_View$$anon$1__f_it$1).apply__O());
});
var $d_sc_View$$anon$1 = new $TypeData().initClass($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_View$Concat(prefix, suffix) {
  this.sc_View$Concat__f_prefix = null;
  this.sc_View$Concat__f_suffix = null;
  this.sc_View$Concat__f_prefix = prefix;
  this.sc_View$Concat__f_suffix = suffix;
}
$c_sc_View$Concat.prototype = new $h_sc_AbstractView();
$c_sc_View$Concat.prototype.constructor = $c_sc_View$Concat;
/** @constructor */
function $h_sc_View$Concat() {
}
$h_sc_View$Concat.prototype = $c_sc_View$Concat.prototype;
$c_sc_View$Concat.prototype.iterator__sc_Iterator = (function() {
  var this$2 = $n($n(this.sc_View$Concat__f_prefix).iterator__sc_Iterator());
  var xs = new $c_sjsr_AnonFunction0((() => $n(this.sc_View$Concat__f_suffix).iterator__sc_Iterator()));
  return this$2.concat__F0__sc_Iterator(xs);
});
$c_sc_View$Concat.prototype.knownSize__I = (function() {
  var prefixSize = $n(this.sc_View$Concat__f_prefix).knownSize__I();
  if ((prefixSize >= 0)) {
    var suffixSize = $n(this.sc_View$Concat__f_suffix).knownSize__I();
    return ((suffixSize >= 0) ? ((prefixSize + suffixSize) | 0) : (-1));
  } else {
    return (-1);
  }
});
$c_sc_View$Concat.prototype.isEmpty__Z = (function() {
  return ($n(this.sc_View$Concat__f_prefix).isEmpty__Z() && $n(this.sc_View$Concat__f_suffix).isEmpty__Z());
});
var $d_sc_View$Concat = new $TypeData().initClass($c_sc_View$Concat, "scala.collection.View$Concat", ({
  sc_View$Concat: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sc_View$Map(underlying, f) {
  this.sc_View$Map__f_underlying = null;
  this.sc_View$Map__f_f = null;
  this.sc_View$Map__f_underlying = underlying;
  this.sc_View$Map__f_f = f;
}
$c_sc_View$Map.prototype = new $h_sc_AbstractView();
$c_sc_View$Map.prototype.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $c_sc_View$Map.prototype;
$c_sc_View$Map.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $n($n(this.sc_View$Map__f_underlying).iterator__sc_Iterator());
  var f = this.sc_View$Map__f_f;
  return new $c_sc_Iterator$$anon$9(this$1, f);
});
$c_sc_View$Map.prototype.knownSize__I = (function() {
  return $n(this.sc_View$Map__f_underlying).knownSize__I();
});
$c_sc_View$Map.prototype.isEmpty__Z = (function() {
  return $n(this.sc_View$Map__f_underlying).isEmpty__Z();
});
var $d_sc_View$Map = new $TypeData().initClass($c_sc_View$Map, "scala.collection.View$Map", ({
  sc_View$Map: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
}));
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Map(o)) {
      var x2 = $as_sc_Map(o);
      if (($n(x2), true)) {
        if (($thiz.size__I() === $n(x2).size__I())) {
          try {
            return $thiz.forall__F1__Z(new $c_sjsr_AnonFunction1(((kv$2) => {
              var kv = $as_T2(kv$2);
              return $m_sr_BoxesRunTime$().equals__O__O__Z($n(x2).getOrElse__O__F0__O($n(kv).T2__f__1, $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinelFn), $n(kv).T2__f__2);
            })));
          } catch (e) {
            if ((e instanceof $c_jl_ClassCastException)) {
              return false;
            } else {
              throw e;
            }
          }
        } else {
          return false;
        }
      }
    }
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)));
}
function $as_sc_Map(obj) {
  return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Map)));
}
function $asArrayOf_sc_Map(obj, depth) {
  return (($isArrayOf_sc_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Map;", depth));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
$c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
  return true;
});
$c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sc_AbstractSeq.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sc_AbstractSeq.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
$c_sc_AbstractSeqView.prototype.stringPrefix__T = (function() {
  return "SeqView";
});
$c_sc_AbstractSeqView.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$c_sc_AbstractSeqView.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)));
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)));
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth));
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
$c_sc_AbstractMap.prototype.equals__O__Z = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$c_sc_AbstractMap.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this);
});
$c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
  return "Map";
});
$c_sc_AbstractMap.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sc_AbstractMap.prototype.foreachEntry__F2__V = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$c_sc_AbstractMap.prototype.concat__sc_IterableOnce__sc_IterableOps = (function(suffix) {
  return $f_sc_MapOps__concat__sc_IterableOnce__sc_IterableOps(this, suffix);
});
$c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.sc_SeqView$Id__f_underlying = null;
}
$c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
$c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
  return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
});
$c_sc_SeqView$Id.prototype.length__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).length__I();
});
$c_sc_SeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).iterator__sc_Iterator();
});
$c_sc_SeqView$Id.prototype.knownSize__I = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).knownSize__I();
});
$c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
  return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
});
var $d_sc_SeqView$Id = new $TypeData().initClass($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
}));
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)));
}
function $as_sci_Map(obj) {
  return (($is_sci_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map"));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map)));
}
function $asArrayOf_sci_Map(obj, depth) {
  return (($isArrayOf_sci_Map(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map;", depth));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$c_sc_AbstractIndexedSeqView.prototype.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $c_sc_AbstractIndexedSeqView.prototype;
$c_sc_AbstractIndexedSeqView.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_AbstractIndexedSeqView.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_AbstractIndexedSeqView.prototype.knownSize__I = (function() {
  return this.length__I();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.sc_SeqView$Id__f_underlying = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $c_sc_IndexedSeqView$Id.prototype;
$c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
  return "IndexedSeqView";
});
$c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
  return this.length__I();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.scm_ArrayBufferView__f_underlying = null;
  this.scm_ArrayBufferView__f_mutationCount = null;
  this.scm_ArrayBufferView__f_underlying = underlying;
  this.scm_ArrayBufferView__f_mutationCount = mutationCount;
}
$c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$c_scm_ArrayBufferView.prototype.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $c_scm_ArrayBufferView.prototype;
$c_scm_ArrayBufferView.prototype.apply__I__O = (function(n) {
  return $n(this.scm_ArrayBufferView__f_underlying).apply__I__O(n);
});
$c_scm_ArrayBufferView.prototype.length__I = (function() {
  var this$1 = $n(this.scm_ArrayBufferView__f_underlying);
  return this$1.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBufferView.prototype.className__T = (function() {
  return "ArrayBufferView";
});
$c_scm_ArrayBufferView.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.scm_ArrayBufferView__f_mutationCount);
});
var $d_scm_ArrayBufferView = new $TypeData().initClass($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
$c_sci_AbstractMap.prototype.mapFactory__sc_MapFactory = (function() {
  return $m_sci_Map$();
});
$c_sci_AbstractMap.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this);
});
$c_sci_AbstractMap.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_Iterable$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true;
  } else {
    var x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === $n(x2).length__I());
  }
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    var x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true;
    } else {
      var length = $thiz.length__I();
      var equal = (length === $n(x2).length__I());
      if (equal) {
        var index = 0;
        var a = $thiz.applyPreferredMaxLength__I();
        var b = $n(x2).applyPreferredMaxLength__I();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
          while ((equal && $n(thisIt).hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)));
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth));
}
function $as_sci_SeqMap$SeqMap1(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SeqMap$SeqMap1"));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SeqMap$SeqMap1)));
}
function $asArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (($isArrayOf_sci_SeqMap$SeqMap1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SeqMap$SeqMap1;", depth));
}
function $as_sci_SeqMap$SeqMap2(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SeqMap$SeqMap2"));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SeqMap$SeqMap2)));
}
function $asArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (($isArrayOf_sci_SeqMap$SeqMap2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SeqMap$SeqMap2;", depth));
}
function $as_sci_SeqMap$SeqMap3(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SeqMap$SeqMap3"));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SeqMap$SeqMap3)));
}
function $asArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (($isArrayOf_sci_SeqMap$SeqMap3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SeqMap$SeqMap3;", depth));
}
function $as_sci_SeqMap$SeqMap4(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.SeqMap$SeqMap4"));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_SeqMap$SeqMap4)));
}
function $asArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (($isArrayOf_sci_SeqMap$SeqMap4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.SeqMap$SeqMap4;", depth));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $c_sci_Map$EmptyMap$.prototype;
$c_sci_Map$EmptyMap$.prototype.size__I = (function() {
  return 0;
});
$c_sci_Map$EmptyMap$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Map$EmptyMap$.prototype.isEmpty__Z = (function() {
  return true;
});
$c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$c_sci_Map$EmptyMap$.prototype.contains__O__Z = (function(key) {
  return false;
});
$c_sci_Map$EmptyMap$.prototype.get__O__s_Option = (function(key) {
  return $m_s_None$();
});
$c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return $n(default$1).apply__O();
});
$c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Map$EmptyMap$.prototype.concat__sc_IterableOnce__sci_Map = (function(suffix) {
  if ($is_sci_Map(suffix)) {
    var x2 = $as_sci_Map(suffix);
    return x2;
  } else {
    return $as_sci_Map($f_sc_MapOps__concat__sc_IterableOnce__sc_IterableOps(this, suffix));
  }
});
$c_sci_Map$EmptyMap$.prototype.concat__sc_IterableOnce__sc_IterableOps = (function(suffix) {
  return this.concat__sc_IterableOnce__sci_Map(suffix);
});
$c_sci_Map$EmptyMap$.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
$c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
  this.apply__O__E(key);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().initClass($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  sci_Map$EmptyMap$: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.sci_Map$Map1__f_key1 = null;
  this.sci_Map$Map1__f_value1 = null;
  this.sci_Map$Map1__f_key1 = key1;
  this.sci_Map$Map1__f_value1 = value1;
}
$c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map1.prototype.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $c_sci_Map$Map1.prototype;
$c_sci_Map$Map1.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$c_sci_Map$Map1.prototype.size__I = (function() {
  return 1;
});
$c_sci_Map$Map1.prototype.knownSize__I = (function() {
  return 1;
});
$c_sci_Map$Map1.prototype.isEmpty__Z = (function() {
  return false;
});
$c_sci_Map$Map1.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
    return this.sci_Map$Map1__f_value1;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$c_sci_Map$Map1.prototype.contains__O__Z = (function(key) {
  return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1);
});
$c_sci_Map$Map1.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_s_Some(this.sci_Map$Map1__f_value1) : $m_s_None$());
});
$c_sci_Map$Map1.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : $n(default$1).apply__O());
});
$c_sci_Map$Map1.prototype.iterator__sc_Iterator = (function() {
  var a = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  return new $c_sc_Iterator$$anon$20(a);
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value));
});
$c_sci_Map$Map1.prototype.forall__F1__Z = (function(p) {
  return $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)));
});
$c_sci_Map$Map1.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1);
});
$c_sci_Map$Map1.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value);
});
function $as_sci_Map$Map1(obj) {
  return (((obj instanceof $c_sci_Map$Map1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map1"));
}
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map1)));
}
function $asArrayOf_sci_Map$Map1(obj, depth) {
  return (($isArrayOf_sci_Map$Map1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map1;", depth));
}
var $d_sci_Map$Map1 = new $TypeData().initClass($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  sci_Map$Map1: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
  this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2;
}
$c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map2.prototype.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $c_sci_Map$Map2.prototype;
$c_sci_Map$Map2.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$c_sci_Map$Map2.prototype.size__I = (function() {
  return 2;
});
$c_sci_Map$Map2.prototype.knownSize__I = (function() {
  return 2;
});
$c_sci_Map$Map2.prototype.isEmpty__Z = (function() {
  return false;
});
$c_sci_Map$Map2.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
    return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
    return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$c_sci_Map$Map2.prototype.contains__O__Z = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2));
});
$c_sci_Map$Map2.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_s_Some(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : $m_s_None$()));
});
$c_sci_Map$Map2.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : $n(default$1).apply__O()));
});
$c_sci_Map$Map2.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)));
});
$c_sci_Map$Map2.prototype.forall__F1__Z = (function(p) {
  return ($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2))));
});
$c_sci_Map$Map2.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2);
});
$c_sci_Map$Map2.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value);
});
function $as_sci_Map$Map2(obj) {
  return (((obj instanceof $c_sci_Map$Map2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map2"));
}
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map2)));
}
function $asArrayOf_sci_Map$Map2(obj, depth) {
  return (($isArrayOf_sci_Map$Map2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map2;", depth));
}
var $d_sci_Map$Map2 = new $TypeData().initClass($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  sci_Map$Map2: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
  this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3;
}
$c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map3.prototype.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $c_sci_Map$Map3.prototype;
$c_sci_Map$Map3.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$c_sci_Map$Map3.prototype.size__I = (function() {
  return 3;
});
$c_sci_Map$Map3.prototype.knownSize__I = (function() {
  return 3;
});
$c_sci_Map$Map3.prototype.isEmpty__Z = (function() {
  return false;
});
$c_sci_Map$Map3.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
    return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$c_sci_Map$Map3.prototype.contains__O__Z = (function(key) {
  return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3));
});
$c_sci_Map$Map3.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_s_Some(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : $m_s_None$())));
});
$c_sci_Map$Map3.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : $n(default$1).apply__O())));
});
$c_sci_Map$Map3.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_Map = (function(key, value) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))));
});
$c_sci_Map$Map3.prototype.forall__F1__Z = (function(p) {
  return (($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3))));
});
$c_sci_Map$Map3.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3);
});
$c_sci_Map$Map3.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value);
});
function $as_sci_Map$Map3(obj) {
  return (((obj instanceof $c_sci_Map$Map3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map3"));
}
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map3)));
}
function $asArrayOf_sci_Map$Map3(obj, depth) {
  return (($isArrayOf_sci_Map$Map3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map3;", depth));
}
var $d_sci_Map$Map3 = new $TypeData().initClass($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  sci_Map$Map3: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
  this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4;
}
$c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$c_sci_Map$Map4.prototype.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $c_sci_Map$Map4.prototype;
$c_sci_Map$Map4.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$c_sci_Map$Map4.prototype.size__I = (function() {
  return 4;
});
$c_sci_Map$Map4.prototype.knownSize__I = (function() {
  return 4;
});
$c_sci_Map$Map4.prototype.isEmpty__Z = (function() {
  return false;
});
$c_sci_Map$Map4.prototype.apply__O__O = (function(key) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
    return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$c_sci_Map$Map4.prototype.contains__O__Z = (function(key) {
  return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4));
});
$c_sci_Map$Map4.prototype.get__O__s_Option = (function(key) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? new $c_s_Some(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4) : $m_s_None$()))));
});
$c_sci_Map$Map4.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : $n(default$1).apply__O()))));
});
$c_sci_Map$Map4.prototype.iterator__sc_Iterator = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_Map = (function(key, value) {
  if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
  } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
    return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value);
  } else {
    var this$1 = $m_sci_HashMap$();
    return $n($n($n($n($n(this$1.sci_HashMap$__f_EmptyMap).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)).updated__O__O__sci_HashMap(key, value);
  }
});
$c_sci_Map$Map4.prototype.forall__F1__Z = (function(p) {
  return ((($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4))));
});
$c_sci_Map$Map4.prototype.buildTo__sci_HashMapBuilder__sci_HashMapBuilder = (function(builder) {
  return $n($n($n($n(builder).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
});
$c_sci_Map$Map4.prototype.hashCode__I = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
  h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
  h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
  return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4);
});
$c_sci_Map$Map4.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_Map(key, value);
});
function $as_sci_Map$Map4(obj) {
  return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"));
}
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Map$Map4)));
}
function $asArrayOf_sci_Map$Map4(obj, depth) {
  return (($isArrayOf_sci_Map$Map4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Map$Map4;", depth));
}
var $d_sci_Map$Map4 = new $TypeData().initClass($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  sci_Map$Map4: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
function $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    if ($thiz.sci_LazyList__f_midEvaluation) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "self-referential LazyList or a derivation thereof has no more elements");
    }
    $thiz.sci_LazyList__f_midEvaluation = true;
    try {
      var res = $as_sci_LazyList$State($n($thiz.sci_LazyList__f_lazyState).apply__O());
    } finally {
      $thiz.sci_LazyList__f_midEvaluation = false;
    }
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true;
  }
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state;
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  var this$1 = $n(b);
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    var this$2 = $n(b);
    this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>");
  } else if ((!$thiz.isEmpty__Z())) {
    var this$3 = $n(b);
    var obj = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
    this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    var elem = null;
    elem = $thiz;
    var elem$1 = $n($thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    var elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
        var this$6 = $n($as_sci_LazyList(elem$2));
        elem$2 = $n(this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) && ($n($as_sci_LazyList(elem)).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $n($as_sci_LazyList(elem$2)).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          var this$7 = $n(b);
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$8 = $n($as_sci_LazyList(elem));
          var obj$1 = $n(this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          var this$9 = $n($as_sci_LazyList(elem));
          elem = $n(this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$10 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          if (($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z()))) {
            var this$11 = $n($as_sci_LazyList(elem$2));
            elem$2 = $n(this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          }
        }
      }
    }
    if ((!($n($as_sci_LazyList(elem$2)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$n($as_sci_LazyList(elem$2)).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        var this$12 = $n(b);
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$13 = $n($as_sci_LazyList(elem));
        var obj$2 = $n(this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        var this$14 = $n($as_sci_LazyList(elem));
        elem = $n(this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      }
      if ((!$n($as_sci_LazyList(elem)).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        var this$15 = $n(b);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$15.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>");
      }
    } else {
      var runner = $thiz;
      var k = 0;
      while (true) {
        var a = runner;
        var b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || ($n(a).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$16 = $n(runner);
          runner = $n(this$16.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          var this$17 = $n($as_sci_LazyList(elem$2));
          elem$2 = $n(this$17.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
          k = ((1 + k) | 0);
        } else {
          break;
        }
      }
      var a$1 = $as_sci_LazyList(elem);
      var b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || ($n(a$1).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        var this$18 = $n(b);
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        var this$19 = $n($as_sci_LazyList(elem));
        var obj$3 = $n(this$19.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
        this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$18.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        var this$20 = $n($as_sci_LazyList(elem));
        elem = $n(this$20.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
      }
      while (true) {
        var a$2 = $as_sci_LazyList(elem);
        var b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || ($n(a$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $n(b$3).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          var this$21 = $n(b);
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$22 = $n($as_sci_LazyList(elem));
          var obj$4 = $n(this$22.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
          this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$21.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          var this$23 = $n($as_sci_LazyList(elem));
          elem = $n(this$23.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
        } else {
          break;
        }
      }
      var this$24 = $n(b);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$24.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>");
    }
  }
  var this$25 = $n(b);
  this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$25.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList(lazyState) {
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
  this.sci_LazyList__f_lazyState = null;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
  this.sci_LazyList__f_bitmap$0 = false;
  this.sci_LazyList__f_lazyState = lazyState;
  this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
  this.sci_LazyList__f_midEvaluation = false;
}
$c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$c_sci_LazyList.prototype.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $c_sci_LazyList.prototype;
$c_sci_LazyList.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_LazyList.prototype.length__I = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$c_sci_LazyList.prototype.lengthCompare__I__I = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$c_sci_LazyList.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_LazyList.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_LazyList.prototype.scala$collection$immutable$LazyList$$state__sci_LazyList$State = (function() {
  return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state);
});
$c_sci_LazyList.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$());
});
$c_sci_LazyList.prototype.knownSize__I = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? 0 : (-1));
});
$c_sci_LazyList.prototype.head__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).head__O();
});
$c_sci_LazyList.prototype.force__sci_LazyList = (function() {
  var these = this;
  var those = this;
  if ((!$n(these).isEmpty__Z())) {
    var this$1 = $n(these);
    these = $n(this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
  }
  while ((those !== these)) {
    if ($n(these).isEmpty__Z()) {
      return this;
    }
    var this$2 = $n(these);
    these = $n(this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ($n(these).isEmpty__Z()) {
      return this;
    }
    var this$3 = $n(these);
    these = $n(this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
    if ((these === those)) {
      return this;
    }
    var this$4 = $n(those);
    those = $n(this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
  }
  return this;
});
$c_sci_LazyList.prototype.iterator__sc_Iterator = (function() {
  return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this));
});
$c_sci_LazyList.prototype.className__T = (function() {
  return "LazyList";
});
$c_sci_LazyList.prototype.drop__I__sci_LazyList = (function(n) {
  return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)));
});
$c_sci_LazyList.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
  this.force__sci_LazyList();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $n(sb).scm_StringBuilder__f_underlying, start, sep, end);
  return sb;
});
$c_sci_LazyList.prototype.toString__T = (function() {
  return $n($p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")")).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_sci_LazyList.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_LazyList.prototype.drop__I__O = (function(n) {
  return this.drop__I__sci_LazyList(n);
});
$c_sci_LazyList.prototype.tail__O = (function() {
  return $n(this.scala$collection$immutable$LazyList$$state__sci_LazyList$State()).tail__sci_LazyList();
});
$c_sci_LazyList.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_LazyList$();
});
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"));
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)));
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth));
}
var $d_sci_LazyList = new $TypeData().initClass($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
  this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array;
}
$c_sjsr_WrappedVarArgs.prototype = new $h_O();
$c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $c_sjsr_WrappedVarArgs.prototype;
$c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength;
});
$c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
  return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
});
$c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$c_sjsr_WrappedVarArgs.prototype.toMap__s_$less$colon$less__sci_Map = (function(ev) {
  return $m_sci_Map$().from__sc_IterableOnce__sci_Map(this);
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
  return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length);
});
$c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
  return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx];
});
$c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
  return "WrappedVarArgs";
});
$c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
$c_sjsr_WrappedVarArgs.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"));
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)));
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().initClass($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  sjsr_WrappedVarArgs: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.sci_HashMap__f_rootNode = null;
  this.sci_HashMap__f_rootNode = rootNode;
}
$c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$c_sci_HashMap.prototype.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $c_sci_HashMap.prototype;
$c_sci_HashMap.prototype.map__F1__O = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$c_sci_HashMap.prototype.mapFactory__sc_MapFactory = (function() {
  return $m_sci_HashMap$();
});
$c_sci_HashMap.prototype.knownSize__I = (function() {
  return $n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size;
});
$c_sci_HashMap.prototype.size__I = (function() {
  return $n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size;
});
$c_sci_HashMap.prototype.isEmpty__Z = (function() {
  return ($n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size === 0);
});
$c_sci_HashMap.prototype.iterator__sc_Iterator = (function() {
  return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode));
});
$c_sci_HashMap.prototype.contains__O__Z = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return $n(this.sci_HashMap__f_rootNode).containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0);
});
$c_sci_HashMap.prototype.apply__O__O = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return $n(this.sci_HashMap__f_rootNode).apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0);
});
$c_sci_HashMap.prototype.get__O__s_Option = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return $n(this.sci_HashMap__f_rootNode).get__O__I__I__I__s_Option(key, keyUnimprovedHash, keyHash, 0);
});
$c_sci_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
  return $n(this.sci_HashMap__f_rootNode).getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$c_sci_HashMap.prototype.updated__O__O__sci_HashMap = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
  var newRootNode = $n(this.sci_HashMap__f_rootNode).updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode));
});
$c_sci_HashMap.prototype.concat__sc_IterableOnce__sci_HashMap = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(that);
    if (this.isEmpty__Z()) {
      return x2;
    } else {
      var newNode = $n(this.sci_HashMap__f_rootNode).concat__sci_MapNode__I__sci_BitmapIndexedMapNode($n(x2).sci_HashMap__f_rootNode, 0);
      if ((newNode === $n(x2).sci_HashMap__f_rootNode)) {
        return x2;
      } else {
        var newRootNode = $n(this.sci_HashMap__f_rootNode).concat__sci_MapNode__I__sci_BitmapIndexedMapNode($n(x2).sci_HashMap__f_rootNode, 0);
        return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode));
      }
    }
  } else if (false) {
    var x3 = $as_scm_HashMap(that);
    var iter = $n(x3).nodeIterator__sc_Iterator();
    var current = this.sci_HashMap__f_rootNode;
    while ($n(iter).hasNext__Z()) {
      var next = $as_scm_HashMap$Node($n(iter).next__O());
      var originalHash = $n(x3).unimproveHash__I__I($n(next).hash__I());
      var improved = $m_sc_Hashing$().improve__I__I(originalHash);
      current = $n(current).updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode($n(next).key__O(), $n(next).value__O(), originalHash, improved, 0, true);
      if ((current !== this.sci_HashMap__f_rootNode)) {
        var shallowlyMutableNodeMap = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(improved, 0));
        while ($n(iter).hasNext__Z()) {
          var next$2 = $as_scm_HashMap$Node($n(iter).next__O());
          var originalHash$2 = $n(x3).unimproveHash__I__I($n(next$2).hash__I());
          shallowlyMutableNodeMap = $n(current).updateWithShallowMutations__O__O__I__I__I__I__I($n(next$2).key__O(), $n(next$2).value__O(), originalHash$2, $m_sc_Hashing$().improve__I__I(originalHash$2), 0, shallowlyMutableNodeMap);
        }
        return new $c_sci_HashMap(current);
      }
    }
    return this;
  } else if (false) {
    var x4 = $as_scm_LinkedHashMap(that);
    var iter$2 = $n(x4).entryIterator__sc_Iterator();
    var current$2 = this.sci_HashMap__f_rootNode;
    while ($n(iter$2).hasNext__Z()) {
      var next$3 = $as_scm_LinkedHashMap$LinkedEntry($n(iter$2).next__O());
      var originalHash$3 = $n(x4).unimproveHash__I__I($n(next$3).hash__I());
      var improved$2 = $m_sc_Hashing$().improve__I__I(originalHash$3);
      current$2 = $n(current$2).updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode($n(next$3).key__O(), $n(next$3).value__O(), originalHash$3, improved$2, 0, true);
      if ((current$2 !== this.sci_HashMap__f_rootNode)) {
        var shallowlyMutableNodeMap$2 = $m_sci_Node$().bitposFrom__I__I($m_sci_Node$().maskFrom__I__I__I(improved$2, 0));
        while ($n(iter$2).hasNext__Z()) {
          var next$4 = $as_scm_LinkedHashMap$LinkedEntry($n(iter$2).next__O());
          var originalHash$4 = $n(x4).unimproveHash__I__I($n(next$4).hash__I());
          shallowlyMutableNodeMap$2 = $n(current$2).updateWithShallowMutations__O__O__I__I__I__I__I($n(next$4).key__O(), $n(next$4).value__O(), originalHash$4, $m_sc_Hashing$().improve__I__I(originalHash$4), 0, shallowlyMutableNodeMap$2);
        }
        return new $c_sci_HashMap(current$2);
      }
    }
    return this;
  } else if ($is_sci_Map(that)) {
    var x2$2 = $as_sci_Map(that);
    if ($n(x2$2).isEmpty__Z()) {
      return this;
    } else {
      var accum = new $c_sci_HashMap$accum$1(this);
      $n(x2$2).foreachEntry__F2__V(accum);
      var newRootNode$1 = accum.sci_HashMap$accum$1__f_current;
      return ((newRootNode$1 === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode$1));
    }
  } else {
    var it = $n(that).iterator__sc_Iterator();
    var this$1 = $n(it);
    if ((!this$1.hasNext__Z())) {
      return this;
    } else {
      var accum$2 = new $c_sci_HashMap$accum$1(this);
      var this$2 = $n(it);
      $f_sc_IterableOnceOps__foreach__F1__V(this$2, accum$2);
      var newRootNode$2 = accum$2.sci_HashMap$accum$1__f_current;
      return ((newRootNode$2 === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode$2));
    }
  }
});
$c_sci_HashMap.prototype.foreachEntry__F2__V = (function(f) {
  $n(this.sci_HashMap__f_rootNode).foreachEntry__F2__V(f);
});
$c_sci_HashMap.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    var x2 = $as_sci_HashMap(that);
    if ((this === x2)) {
      return true;
    } else {
      var x = this.sci_HashMap__f_rootNode;
      var x$2 = $n(x2).sci_HashMap__f_rootNode;
      return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$c_sci_HashMap.prototype.hashCode__I = (function() {
  if (this.isEmpty__Z()) {
    return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
    var hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
    return hash;
  }
});
$c_sci_HashMap.prototype.className__T = (function() {
  return "HashMap";
});
$c_sci_HashMap.prototype.concat__sc_IterableOnce__sc_IterableOps = (function(suffix) {
  return this.concat__sc_IterableOnce__sci_HashMap(suffix);
});
$c_sci_HashMap.prototype.updated__O__O__sci_MapOps = (function(key, value) {
  return this.updated__O__O__sci_HashMap(key, value);
});
function $as_sci_HashMap(obj) {
  return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"));
}
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_HashMap)));
}
function $asArrayOf_sci_HashMap(obj, depth) {
  return (($isArrayOf_sci_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth));
}
var $d_sci_HashMap = new $TypeData().initClass($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  sci_HashMap: 1,
  sci_AbstractMap: 1,
  sc_AbstractMap: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Map: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_MapFactoryDefaults: 1,
  s_Equals: 1,
  sci_Map: 1,
  sci_Iterable: 1,
  sci_MapOps: 1,
  sci_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedMapOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $as_sci_TreeSeqMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.TreeSeqMap"));
}
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_TreeSeqMap)));
}
function $asArrayOf_sci_TreeSeqMap(obj, depth) {
  return (($isArrayOf_sci_TreeSeqMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.TreeSeqMap;", depth));
}
function $as_sci_VectorMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorMap"));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_VectorMap)));
}
function $asArrayOf_sci_VectorMap(obj, depth) {
  return (($isArrayOf_sci_VectorMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.VectorMap;", depth));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
$c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
function $as_sci_ListMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ListMap"));
}
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ListMap)));
}
function $asArrayOf_sci_ListMap(obj, depth) {
  return (($isArrayOf_sci_ListMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ListMap;", depth));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.sci_Vector__f_prefix1 = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$c_sci_Vector.prototype.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $c_sci_Vector.prototype;
$c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$c_sci_Vector.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
  var x = this.length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sci_Vector.prototype.knownSize__I = (function() {
  return this.length__I();
});
$c_sci_Vector.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_Vector$();
});
$c_sci_Vector.prototype.length__I = (function() {
  return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length);
});
$c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()));
});
$c_sci_Vector.prototype.className__T = (function() {
  return "Vector";
});
$c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len);
});
$c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
  return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength;
});
$c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.length__I()) | 0)) + ")"));
});
$c_sci_Vector.prototype.foreach__F1__V = (function(f) {
  var c = this.vectorSliceCount__I();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = ((c / 2) | 0);
    var a = ((idx - c$1) | 0);
    $n($x_1).foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
    i = ((1 + i) | 0);
  }
});
$c_sci_Vector.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_Vector$();
});
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"));
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)));
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth));
}
function $as_sci_ArraySeq$ofRef(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
}
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq$ofRef)));
}
function $asArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (($isArrayOf_sci_ArraySeq$ofRef(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq$ofRef;", depth));
}
function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return ($n(xs).isEmpty__Z() ? 0 : 1);
    } else if ($n(xs).isEmpty__Z()) {
      return (-1);
    } else {
      var temp$i = ((1 + i) | 0);
      var temp$xs = $as_sci_List($n(xs).tail__O());
      i = temp$i;
      xs = temp$xs;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true;
    } else {
      var aEmpty = $n(a).isEmpty__Z();
      var bEmpty = $n(b).isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
        var temp$a = $as_sci_List($n(a).tail__O());
        var temp$b = $as_sci_List($n(b).tail__O());
        a = temp$a;
        b = temp$b;
      } else {
        return (aEmpty && bEmpty);
      }
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$c_sci_List.prototype = new $h_sci_AbstractSeq();
$c_sci_List.prototype.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $c_sci_List.prototype;
$c_sci_List.prototype.iterator__sc_Iterator = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$c_sci_List.prototype.stringPrefix__T = (function() {
  return "LinearSeq";
});
$c_sci_List.prototype.apply__I__O = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$c_sci_List.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sci_List$();
});
$c_sci_List.prototype.$colon$colon$colon__sci_List__sci_List = (function(prefix) {
  if (this.isEmpty__Z()) {
    return prefix;
  } else if ($n(prefix).isEmpty__Z()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon($n(prefix).head__O(), this);
    var curr = result;
    var that = $as_sci_List($n(prefix).tail__O());
    while ((!$n(that).isEmpty__Z())) {
      var temp = new $c_sci_$colon$colon($n(that).head__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
      that = $as_sci_List($n(that).tail__O());
    }
    return result;
  }
});
$c_sci_List.prototype.isEmpty__Z = (function() {
  return (this === $m_sci_Nil$());
});
$c_sci_List.prototype.prependedAll__sc_IterableOnce__sci_List = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    var x2 = $as_sci_List(prefix);
    return this.$colon$colon$colon__sci_List__sci_List(x2);
  }
  if (($n(prefix).knownSize__I() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    var x3 = $as_scm_ListBuffer(prefix);
    if (this.isEmpty__Z()) {
      return $n(x3).toList__sci_List();
    }
  }
  var iter = $n(prefix).iterator__sc_Iterator();
  if ($n(iter).hasNext__Z()) {
    var result = new $c_sci_$colon$colon($n(iter).next__O(), this);
    var curr = result;
    while ($n(iter).hasNext__Z()) {
      var temp = new $c_sci_$colon$colon($n(iter).next__O(), this);
      $n(curr).sci_$colon$colon__f_next = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$c_sci_List.prototype.take__I__sci_List = (function(n) {
  if ((this.isEmpty__Z() || (n <= 0))) {
    return $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(this.head__O(), $m_sci_Nil$());
    var t = h;
    var rest = $as_sci_List(this.tail__O());
    var i = 1;
    while (true) {
      if ($n(rest).isEmpty__Z()) {
        return this;
      }
      if ((i < n)) {
        i = ((1 + i) | 0);
        var nx = new $c_sci_$colon$colon($n(rest).head__O(), $m_sci_Nil$());
        $n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $as_sci_List($n(rest).tail__O());
      } else {
        break;
      }
    }
    return h;
  }
});
$c_sci_List.prototype.reverse__sci_List = (function() {
  var result = $m_sci_Nil$();
  var these = this;
  while ((!$n(these).isEmpty__Z())) {
    var rassoc$6 = $n(these).head__O();
    var this$1 = $n(result);
    result = new $c_sci_$colon$colon(rassoc$6, this$1);
    these = $as_sci_List($n(these).tail__O());
  }
  return result;
});
$c_sci_List.prototype.length__I = (function() {
  var these = this;
  var len = 0;
  while ((!$n(these).isEmpty__Z())) {
    len = ((1 + len) | 0);
    these = $as_sci_List($n(these).tail__O());
  }
  return len;
});
$c_sci_List.prototype.lengthCompare__I__I = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
});
$c_sci_List.prototype.className__T = (function() {
  return "List";
});
$c_sci_List.prototype.equals__O__Z = (function(o) {
  if ((o instanceof $c_sci_List)) {
    var x2 = $as_sci_List(o);
    return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
  } else {
    return $f_sc_Seq__equals__O__Z(this, o);
  }
});
$c_sci_List.prototype.apply__O__O = (function(v1) {
  var n = $uI(v1);
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$c_sci_List.prototype.drop__I__O = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$c_sci_List.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sci_List$();
});
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)));
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.sci_Vector__f_prefix1 = null;
}
$c_sci_VectorImpl.prototype = new $h_sci_Vector();
$c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
function $as_scm_HashMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.HashMap"));
}
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_HashMap)));
}
function $asArrayOf_scm_HashMap(obj, depth) {
  return (($isArrayOf_scm_HashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.HashMap;", depth));
}
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.sci_BigVector__f_suffix1 = suffix1;
  $thiz.sci_BigVector__f_length0 = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
}
$c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
function $as_sci_BigVector(obj) {
  return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"));
}
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_BigVector)));
}
function $asArrayOf_sci_BigVector(obj, depth) {
  return (($isArrayOf_sci_BigVector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.BigVector;", depth));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.sci_Vector__f_prefix1 = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $c_sci_Vector1.prototype;
$c_sci_Vector1.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector1.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    var a1 = this.sci_Vector__f_prefix1;
    var this$2 = $n(a1);
    var a1c = $n(this$2).clone__O();
    $n(a1c).set(index, elem);
    return new $c_sci_Vector1(a1c);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector1.prototype.appended__O__sci_Vector = (function(elem) {
  var len1 = $n(this.sci_Vector__f_prefix1).u.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem));
  } else {
    var $x_2 = this.sci_Vector__f_prefix1;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
  return 1;
});
$c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
  return this.sci_Vector__f_prefix1;
});
$c_sci_Vector1.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
    return $n(this.sci_Vector__f_prefix1).get(index);
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector1(obj) {
  return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"));
}
function $isArrayOf_sci_Vector1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector1)));
}
function $asArrayOf_sci_Vector1(obj, depth) {
  return (($isArrayOf_sci_Vector1(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector1;", depth));
}
var $d_sci_Vector1 = new $TypeData().initClass($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  sci_Vector1: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.sci_$colon$colon__f_head = null;
  this.sci_$colon$colon__f_next = null;
  this.sci_$colon$colon__f_head = head;
  this.sci_$colon$colon__f_next = next;
}
$c_sci_$colon$colon.prototype = new $h_sci_List();
$c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $c_sci_$colon$colon.prototype;
$c_sci_$colon$colon.prototype.head__O = (function() {
  return this.sci_$colon$colon__f_head;
});
$c_sci_$colon$colon.prototype.productPrefix__T = (function() {
  return "::";
});
$c_sci_$colon$colon.prototype.productArity__I = (function() {
  return 2;
});
$c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.sci_$colon$colon__f_head;
      break;
    }
    case 1: {
      return this.sci_$colon$colon__f_next;
      break;
    }
    default: {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    }
  }
});
$c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_$colon$colon.prototype.tail__O = (function() {
  return this.sci_$colon$colon__f_next;
});
$c_sci_$colon$colon.prototype.headOption__s_Option = (function() {
  return new $c_s_Some(this.sci_$colon$colon__f_head);
});
function $as_sci_$colon$colon(obj) {
  return (((obj instanceof $c_sci_$colon$colon) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.$colon$colon"));
}
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_$colon$colon)));
}
function $asArrayOf_sci_$colon$colon(obj, depth) {
  return (($isArrayOf_sci_$colon$colon(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.$colon$colon;", depth));
}
var $d_sci_$colon$colon = new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$c_sci_Nil$.prototype = new $h_sci_List();
$c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $c_sci_Nil$.prototype;
$c_sci_Nil$.prototype.head__E = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$c_sci_Nil$.prototype.tail__E = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$c_sci_Nil$.prototype.knownSize__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
  return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
});
$c_sci_Nil$.prototype.productPrefix__T = (function() {
  return "Nil";
});
$c_sci_Nil$.prototype.productArity__I = (function() {
  return 0;
});
$c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
  return $m_sr_Statics$().ioobe__I__O(x$1);
});
$c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$c_sci_Nil$.prototype.tail__O = (function() {
  this.tail__E();
});
$c_sci_Nil$.prototype.headOption__s_Option = (function() {
  return $m_s_None$();
});
$c_sci_Nil$.prototype.head__O = (function() {
  this.head__E();
});
var $d_sci_Nil$ = new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0);
}
$c_sci_Vector0$.prototype = new $h_sci_BigVector();
$c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $c_sci_Vector0$.prototype;
$c_sci_Vector0$.prototype.apply__I__E = (function(index) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
});
$c_sci_Vector0$.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
});
$c_sci_Vector0$.prototype.appended__O__sci_Vector = (function(elem) {
  var a = new $ac_O(1);
  $n(a).set(0, elem);
  return new $c_sci_Vector1(a);
});
$c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
  return 0;
});
$c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
  return null;
});
$c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
  return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
});
$c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
  this.apply__I__E($uI(v1));
});
$c_sci_Vector0$.prototype.apply__I__O = (function(i) {
  this.apply__I__E(i);
});
var $d_sci_Vector0$ = new $TypeData().initClass($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  sci_Vector0$: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector2__f_len1 = 0;
  this.sci_Vector2__f_data2 = null;
  this.sci_Vector2__f_len1 = len1;
  this.sci_Vector2__f_data2 = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector2.prototype = new $h_sci_BigVector();
$c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $c_sci_Vector2.prototype;
$c_sci_Vector2.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector2.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector2__f_len1)) {
      var io = ((index - this.sci_Vector2__f_len1) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < $n(this.sci_Vector2__f_data2).u.length)) {
        var a2 = this.sci_Vector2__f_data2;
        var this$2 = $n(a2);
        var a2c = $n(this$2).clone__O();
        var $x_1 = $n(a2c);
        var a1 = $n(a2c).get(i2);
        var this$3 = $n(a1);
        var a1c = $n(this$3).clone__O();
        $n(a1c).set(i1, elem);
        $x_1.set(i2, a1c);
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector2__f_len1;
        var x$4 = this.sci_BigVector__f_suffix1;
        var x$5 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector2(x$2, x$3, a2c, x$4, x$5);
      } else {
        var a1$1 = this.sci_BigVector__f_suffix1;
        var this$5 = $n(a1$1);
        var a1c$1 = $n(this$5).clone__O();
        $n(a1c$1).set(i1, elem);
        var x$7 = this.sci_Vector__f_prefix1;
        var x$8 = this.sci_Vector2__f_len1;
        var x$9 = this.sci_Vector2__f_data2;
        var x$10 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector2(x$7, x$8, x$9, a1c$1, x$10);
      }
    } else {
      var a1$2 = this.sci_Vector__f_prefix1;
      var this$7 = $n(a1$2);
      var a1c$2 = $n(this$7).clone__O();
      $n(a1c$2).set(index, elem);
      var len1 = this.sci_Vector2__f_len1;
      var data2 = this.sci_Vector2__f_data2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector2(a1c$2, len1, data2, suffix1, length0);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector2.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector2__f_len1;
    var x$5 = this.sci_Vector2__f_data2;
    return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2);
  } else if (($n(this.sci_Vector2__f_data2).u.length < 30)) {
    var x$6 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$9 = this.sci_Vector__f_prefix1;
    var x$10 = this.sci_Vector2__f_len1;
    return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8);
  } else {
    var $x_5 = this.sci_Vector__f_prefix1;
    var $x_4 = this.sci_Vector2__f_len1;
    var $x_3 = this.sci_Vector2__f_data2;
    var $x_2 = this.sci_Vector2__f_len1;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x = this.sci_BigVector__f_suffix1;
    var a$1 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
    $n(a$1).set(0, x);
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0));
  }
});
$c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
  return 3;
});
$c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector2__f_data2;
      break;
    }
    case 2: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector2.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector2__f_len1) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector2(obj) {
  return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"));
}
function $isArrayOf_sci_Vector2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector2)));
}
function $asArrayOf_sci_Vector2(obj, depth) {
  return (($isArrayOf_sci_Vector2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector2;", depth));
}
var $d_sci_Vector2 = new $TypeData().initClass($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  sci_Vector2: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector3__f_len1 = 0;
  this.sci_Vector3__f_prefix2 = null;
  this.sci_Vector3__f_len12 = 0;
  this.sci_Vector3__f_data3 = null;
  this.sci_Vector3__f_suffix2 = null;
  this.sci_Vector3__f_len1 = len1;
  this.sci_Vector3__f_prefix2 = prefix2;
  this.sci_Vector3__f_len12 = len12;
  this.sci_Vector3__f_data3 = data3;
  this.sci_Vector3__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector3.prototype = new $h_sci_BigVector();
$c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $c_sci_Vector3.prototype;
$c_sci_Vector3.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector3.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector3__f_len12)) {
      var io = ((index - this.sci_Vector3__f_len12) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < $n(this.sci_Vector3__f_data3).u.length)) {
        var a3 = this.sci_Vector3__f_data3;
        var this$2 = $n(a3);
        var a3c = $n(this$2).clone__O();
        var $x_2 = $n(a3c);
        var a2 = $n(a3c).get(i3);
        var this$3 = $n(a2);
        var a2c = $n(this$3).clone__O();
        var $x_1 = $n(a2c);
        var a1 = $n(a2c).get(i2);
        var this$4 = $n(a1);
        var a1c = $n(this$4).clone__O();
        $n(a1c).set(i1, elem);
        $x_1.set(i2, a1c);
        $x_2.set(i3, a2c);
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector3__f_len1;
        var x$4 = this.sci_Vector3__f_prefix2;
        var x$5 = this.sci_Vector3__f_len12;
        var x$6 = this.sci_Vector3__f_suffix2;
        var x$7 = this.sci_BigVector__f_suffix1;
        var x$8 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$2, x$3, x$4, x$5, a3c, x$6, x$7, x$8);
      } else if ((i2 < $n(this.sci_Vector3__f_suffix2).u.length)) {
        var a2$1 = this.sci_Vector3__f_suffix2;
        var this$6 = $n(a2$1);
        var a2c$1 = $n(this$6).clone__O();
        var $x_3 = $n(a2c$1);
        var a1$1 = $n(a2c$1).get(i2);
        var this$7 = $n(a1$1);
        var a1c$1 = $n(this$7).clone__O();
        $n(a1c$1).set(i1, elem);
        $x_3.set(i2, a1c$1);
        var x$10 = this.sci_Vector__f_prefix1;
        var x$11 = this.sci_Vector3__f_len1;
        var x$12 = this.sci_Vector3__f_prefix2;
        var x$13 = this.sci_Vector3__f_len12;
        var x$14 = this.sci_Vector3__f_data3;
        var x$15 = this.sci_BigVector__f_suffix1;
        var x$16 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$10, x$11, x$12, x$13, x$14, a2c$1, x$15, x$16);
      } else {
        var a1$2 = this.sci_BigVector__f_suffix1;
        var this$9 = $n(a1$2);
        var a1c$2 = $n(this$9).clone__O();
        $n(a1c$2).set(i1, elem);
        var x$18 = this.sci_Vector__f_prefix1;
        var x$19 = this.sci_Vector3__f_len1;
        var x$20 = this.sci_Vector3__f_prefix2;
        var x$21 = this.sci_Vector3__f_len12;
        var x$22 = this.sci_Vector3__f_data3;
        var x$23 = this.sci_Vector3__f_suffix2;
        var x$24 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector3(x$18, x$19, x$20, x$21, x$22, x$23, a1c$2, x$24);
      }
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      var a2$2 = this.sci_Vector3__f_prefix2;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var this$11 = $n(a2$2);
      var a2c$2 = $n(this$11).clone__O();
      var $x_4 = $n(a2c$2);
      var a1$3 = $n(a2c$2).get(idx2);
      var this$12 = $n(a1$3);
      var a1c$3 = $n(this$12).clone__O();
      $n(a1c$3).set(idx1, elem);
      $x_4.set(idx2, a1c$3);
      var x$26 = this.sci_Vector__f_prefix1;
      var x$27 = this.sci_Vector3__f_len1;
      var x$28 = this.sci_Vector3__f_len12;
      var x$29 = this.sci_Vector3__f_data3;
      var x$30 = this.sci_Vector3__f_suffix2;
      var x$31 = this.sci_BigVector__f_suffix1;
      var x$32 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector3(x$26, x$27, a2c$2, x$28, x$29, x$30, x$31, x$32);
    } else {
      var a1$4 = this.sci_Vector__f_prefix1;
      var this$14 = $n(a1$4);
      var a1c$4 = $n(this$14).clone__O();
      $n(a1c$4).set(index, elem);
      var len1 = this.sci_Vector3__f_len1;
      var prefix2 = this.sci_Vector3__f_prefix2;
      var len12 = this.sci_Vector3__f_len12;
      var data3 = this.sci_Vector3__f_data3;
      var suffix2 = this.sci_Vector3__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector3(a1c$4, len1, prefix2, len12, data3, suffix2, suffix1, length0);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector3.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector3__f_len1;
    var x$5 = this.sci_Vector3__f_prefix2;
    var x$6 = this.sci_Vector3__f_len12;
    var x$7 = this.sci_Vector3__f_data3;
    var x$8 = this.sci_Vector3__f_suffix2;
    return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2);
  } else if (($n(this.sci_Vector3__f_suffix2).u.length < 31)) {
    var x$9 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$12 = this.sci_Vector__f_prefix1;
    var x$13 = this.sci_Vector3__f_len1;
    var x$14 = this.sci_Vector3__f_prefix2;
    var x$15 = this.sci_Vector3__f_len12;
    var x$16 = this.sci_Vector3__f_data3;
    return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11);
  } else if (($n(this.sci_Vector3__f_data3).u.length < 30)) {
    var x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector3__f_len1;
    var x$23 = this.sci_Vector3__f_prefix2;
    var x$24 = this.sci_Vector3__f_len12;
    return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20);
  } else {
    var $x_8 = this.sci_Vector__f_prefix1;
    var $x_7 = this.sci_Vector3__f_len1;
    var $x_6 = this.sci_Vector3__f_prefix2;
    var $x_5 = this.sci_Vector3__f_len12;
    var $x_4 = this.sci_Vector3__f_data3;
    var $x_3 = this.sci_Vector3__f_len12;
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a$2 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$2).set(0, x);
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.sci_BigVector__f_length0) | 0));
  }
});
$c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
  return 5;
});
$c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector3__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector3__f_data3;
      break;
    }
    case 3: {
      return this.sci_Vector3__f_suffix2;
      break;
    }
    case 4: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector3.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector3__f_len12) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
    } else if ((index >= this.sci_Vector3__f_len1)) {
      var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
      return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector3(obj) {
  return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"));
}
function $isArrayOf_sci_Vector3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector3)));
}
function $asArrayOf_sci_Vector3(obj, depth) {
  return (($isArrayOf_sci_Vector3(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector3;", depth));
}
var $d_sci_Vector3 = new $TypeData().initClass($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  sci_Vector3: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector4__f_len1 = 0;
  this.sci_Vector4__f_prefix2 = null;
  this.sci_Vector4__f_len12 = 0;
  this.sci_Vector4__f_prefix3 = null;
  this.sci_Vector4__f_len123 = 0;
  this.sci_Vector4__f_data4 = null;
  this.sci_Vector4__f_suffix3 = null;
  this.sci_Vector4__f_suffix2 = null;
  this.sci_Vector4__f_len1 = len1;
  this.sci_Vector4__f_prefix2 = prefix2;
  this.sci_Vector4__f_len12 = len12;
  this.sci_Vector4__f_prefix3 = prefix3;
  this.sci_Vector4__f_len123 = len123;
  this.sci_Vector4__f_data4 = data4;
  this.sci_Vector4__f_suffix3 = suffix3;
  this.sci_Vector4__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector4.prototype = new $h_sci_BigVector();
$c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $c_sci_Vector4.prototype;
$c_sci_Vector4.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector4.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector4__f_len123)) {
      var io = ((index - this.sci_Vector4__f_len123) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < $n(this.sci_Vector4__f_data4).u.length)) {
        var a4 = this.sci_Vector4__f_data4;
        var this$2 = $n(a4);
        var a4c = $n(this$2).clone__O();
        var $x_3 = $n(a4c);
        var a3 = $n(a4c).get(i4);
        var this$3 = $n(a3);
        var a3c = $n(this$3).clone__O();
        var $x_2 = $n(a3c);
        var a2 = $n(a3c).get(i3);
        var this$4 = $n(a2);
        var a2c = $n(this$4).clone__O();
        var $x_1 = $n(a2c);
        var a1 = $n(a2c).get(i2);
        var this$5 = $n(a1);
        var a1c = $n(this$5).clone__O();
        $n(a1c).set(i1, elem);
        $x_1.set(i2, a1c);
        $x_2.set(i3, a2c);
        $x_3.set(i4, a3c);
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector4__f_len1;
        var x$4 = this.sci_Vector4__f_prefix2;
        var x$5 = this.sci_Vector4__f_len12;
        var x$6 = this.sci_Vector4__f_prefix3;
        var x$7 = this.sci_Vector4__f_len123;
        var x$8 = this.sci_Vector4__f_suffix3;
        var x$9 = this.sci_Vector4__f_suffix2;
        var x$10 = this.sci_BigVector__f_suffix1;
        var x$11 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$2, x$3, x$4, x$5, x$6, x$7, a4c, x$8, x$9, x$10, x$11);
      } else if ((i3 < $n(this.sci_Vector4__f_suffix3).u.length)) {
        var a3$1 = this.sci_Vector4__f_suffix3;
        var this$7 = $n(a3$1);
        var a3c$1 = $n(this$7).clone__O();
        var $x_5 = $n(a3c$1);
        var a2$1 = $n(a3c$1).get(i3);
        var this$8 = $n(a2$1);
        var a2c$1 = $n(this$8).clone__O();
        var $x_4 = $n(a2c$1);
        var a1$1 = $n(a2c$1).get(i2);
        var this$9 = $n(a1$1);
        var a1c$1 = $n(this$9).clone__O();
        $n(a1c$1).set(i1, elem);
        $x_4.set(i2, a1c$1);
        $x_5.set(i3, a2c$1);
        var x$13 = this.sci_Vector__f_prefix1;
        var x$14 = this.sci_Vector4__f_len1;
        var x$15 = this.sci_Vector4__f_prefix2;
        var x$16 = this.sci_Vector4__f_len12;
        var x$17 = this.sci_Vector4__f_prefix3;
        var x$18 = this.sci_Vector4__f_len123;
        var x$19 = this.sci_Vector4__f_data4;
        var x$20 = this.sci_Vector4__f_suffix2;
        var x$21 = this.sci_BigVector__f_suffix1;
        var x$22 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$13, x$14, x$15, x$16, x$17, x$18, x$19, a3c$1, x$20, x$21, x$22);
      } else if ((i2 < $n(this.sci_Vector4__f_suffix2).u.length)) {
        var a2$2 = this.sci_Vector4__f_suffix2;
        var this$11 = $n(a2$2);
        var a2c$2 = $n(this$11).clone__O();
        var $x_6 = $n(a2c$2);
        var a1$2 = $n(a2c$2).get(i2);
        var this$12 = $n(a1$2);
        var a1c$2 = $n(this$12).clone__O();
        $n(a1c$2).set(i1, elem);
        $x_6.set(i2, a1c$2);
        var x$24 = this.sci_Vector__f_prefix1;
        var x$25 = this.sci_Vector4__f_len1;
        var x$26 = this.sci_Vector4__f_prefix2;
        var x$27 = this.sci_Vector4__f_len12;
        var x$28 = this.sci_Vector4__f_prefix3;
        var x$29 = this.sci_Vector4__f_len123;
        var x$30 = this.sci_Vector4__f_data4;
        var x$31 = this.sci_Vector4__f_suffix3;
        var x$32 = this.sci_BigVector__f_suffix1;
        var x$33 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, a2c$2, x$32, x$33);
      } else {
        var a1$3 = this.sci_BigVector__f_suffix1;
        var this$14 = $n(a1$3);
        var a1c$3 = $n(this$14).clone__O();
        $n(a1c$3).set(i1, elem);
        var x$35 = this.sci_Vector__f_prefix1;
        var x$36 = this.sci_Vector4__f_len1;
        var x$37 = this.sci_Vector4__f_prefix2;
        var x$38 = this.sci_Vector4__f_len12;
        var x$39 = this.sci_Vector4__f_prefix3;
        var x$40 = this.sci_Vector4__f_len123;
        var x$41 = this.sci_Vector4__f_data4;
        var x$42 = this.sci_Vector4__f_suffix3;
        var x$43 = this.sci_Vector4__f_suffix2;
        var x$44 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector4(x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, a1c$3, x$44);
      }
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      var a3$2 = this.sci_Vector4__f_prefix3;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var this$16 = $n(a3$2);
      var a3c$2 = $n(this$16).clone__O();
      var $x_8 = $n(a3c$2);
      var a2$3 = $n(a3c$2).get(idx3);
      var this$17 = $n(a2$3);
      var a2c$3 = $n(this$17).clone__O();
      var $x_7 = $n(a2c$3);
      var a1$4 = $n(a2c$3).get(idx2);
      var this$18 = $n(a1$4);
      var a1c$4 = $n(this$18).clone__O();
      $n(a1c$4).set(idx1, elem);
      $x_7.set(idx2, a1c$4);
      $x_8.set(idx3, a2c$3);
      var x$46 = this.sci_Vector__f_prefix1;
      var x$47 = this.sci_Vector4__f_len1;
      var x$48 = this.sci_Vector4__f_prefix2;
      var x$49 = this.sci_Vector4__f_len12;
      var x$50 = this.sci_Vector4__f_len123;
      var x$51 = this.sci_Vector4__f_data4;
      var x$52 = this.sci_Vector4__f_suffix3;
      var x$53 = this.sci_Vector4__f_suffix2;
      var x$54 = this.sci_BigVector__f_suffix1;
      var x$55 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(x$46, x$47, x$48, x$49, a3c$2, x$50, x$51, x$52, x$53, x$54, x$55);
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      var a2$4 = this.sci_Vector4__f_prefix2;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var this$20 = $n(a2$4);
      var a2c$4 = $n(this$20).clone__O();
      var $x_9 = $n(a2c$4);
      var a1$5 = $n(a2c$4).get(idx2$1);
      var this$21 = $n(a1$5);
      var a1c$5 = $n(this$21).clone__O();
      $n(a1c$5).set(idx1$1, elem);
      $x_9.set(idx2$1, a1c$5);
      var x$57 = this.sci_Vector__f_prefix1;
      var x$58 = this.sci_Vector4__f_len1;
      var x$59 = this.sci_Vector4__f_len12;
      var x$60 = this.sci_Vector4__f_prefix3;
      var x$61 = this.sci_Vector4__f_len123;
      var x$62 = this.sci_Vector4__f_data4;
      var x$63 = this.sci_Vector4__f_suffix3;
      var x$64 = this.sci_Vector4__f_suffix2;
      var x$65 = this.sci_BigVector__f_suffix1;
      var x$66 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(x$57, x$58, a2c$4, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66);
    } else {
      var a1$6 = this.sci_Vector__f_prefix1;
      var this$23 = $n(a1$6);
      var a1c$6 = $n(this$23).clone__O();
      $n(a1c$6).set(index, elem);
      var len1 = this.sci_Vector4__f_len1;
      var prefix2 = this.sci_Vector4__f_prefix2;
      var len12 = this.sci_Vector4__f_len12;
      var prefix3 = this.sci_Vector4__f_prefix3;
      var len123 = this.sci_Vector4__f_len123;
      var data4 = this.sci_Vector4__f_data4;
      var suffix3 = this.sci_Vector4__f_suffix3;
      var suffix2 = this.sci_Vector4__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector4(a1c$6, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, suffix1, length0);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector4.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector4__f_len1;
    var x$5 = this.sci_Vector4__f_prefix2;
    var x$6 = this.sci_Vector4__f_len12;
    var x$7 = this.sci_Vector4__f_prefix3;
    var x$8 = this.sci_Vector4__f_len123;
    var x$9 = this.sci_Vector4__f_data4;
    var x$10 = this.sci_Vector4__f_suffix3;
    var x$11 = this.sci_Vector4__f_suffix2;
    return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2);
  } else if (($n(this.sci_Vector4__f_suffix2).u.length < 31)) {
    var x$12 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$15 = this.sci_Vector__f_prefix1;
    var x$16 = this.sci_Vector4__f_len1;
    var x$17 = this.sci_Vector4__f_prefix2;
    var x$18 = this.sci_Vector4__f_len12;
    var x$19 = this.sci_Vector4__f_prefix3;
    var x$20 = this.sci_Vector4__f_len123;
    var x$21 = this.sci_Vector4__f_data4;
    var x$22 = this.sci_Vector4__f_suffix3;
    return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14);
  } else if (($n(this.sci_Vector4__f_suffix3).u.length < 31)) {
    var x$23 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$27 = this.sci_Vector__f_prefix1;
    var x$28 = this.sci_Vector4__f_len1;
    var x$29 = this.sci_Vector4__f_prefix2;
    var x$30 = this.sci_Vector4__f_len12;
    var x$31 = this.sci_Vector4__f_prefix3;
    var x$32 = this.sci_Vector4__f_len123;
    var x$33 = this.sci_Vector4__f_data4;
    return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26);
  } else if (($n(this.sci_Vector4__f_data4).u.length < 30)) {
    var x$34 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector4__f_len1;
    var x$41 = this.sci_Vector4__f_prefix2;
    var x$42 = this.sci_Vector4__f_len12;
    var x$43 = this.sci_Vector4__f_prefix3;
    var x$44 = this.sci_Vector4__f_len123;
    return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38);
  } else {
    var $x_11 = this.sci_Vector__f_prefix1;
    var $x_10 = this.sci_Vector4__f_len1;
    var $x_9 = this.sci_Vector4__f_prefix2;
    var $x_8 = this.sci_Vector4__f_len12;
    var $x_7 = this.sci_Vector4__f_prefix3;
    var $x_6 = this.sci_Vector4__f_len123;
    var $x_5 = this.sci_Vector4__f_data4;
    var $x_4 = this.sci_Vector4__f_len123;
    var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$3).set(0, x);
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.sci_BigVector__f_length0) | 0));
  }
});
$c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
  return 7;
});
$c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector4__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector4__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector4__f_data4;
      break;
    }
    case 4: {
      return this.sci_Vector4__f_suffix3;
      break;
    }
    case 5: {
      return this.sci_Vector4__f_suffix2;
      break;
    }
    case 6: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector4.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector4__f_len123) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
    } else if ((index >= this.sci_Vector4__f_len12)) {
      var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
      return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector4__f_len1)) {
      var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
      return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector4(obj) {
  return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"));
}
function $isArrayOf_sci_Vector4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector4)));
}
function $asArrayOf_sci_Vector4(obj, depth) {
  return (($isArrayOf_sci_Vector4(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector4;", depth));
}
var $d_sci_Vector4 = new $TypeData().initClass($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  sci_Vector4: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector5__f_len1 = 0;
  this.sci_Vector5__f_prefix2 = null;
  this.sci_Vector5__f_len12 = 0;
  this.sci_Vector5__f_prefix3 = null;
  this.sci_Vector5__f_len123 = 0;
  this.sci_Vector5__f_prefix4 = null;
  this.sci_Vector5__f_len1234 = 0;
  this.sci_Vector5__f_data5 = null;
  this.sci_Vector5__f_suffix4 = null;
  this.sci_Vector5__f_suffix3 = null;
  this.sci_Vector5__f_suffix2 = null;
  this.sci_Vector5__f_len1 = len1;
  this.sci_Vector5__f_prefix2 = prefix2;
  this.sci_Vector5__f_len12 = len12;
  this.sci_Vector5__f_prefix3 = prefix3;
  this.sci_Vector5__f_len123 = len123;
  this.sci_Vector5__f_prefix4 = prefix4;
  this.sci_Vector5__f_len1234 = len1234;
  this.sci_Vector5__f_data5 = data5;
  this.sci_Vector5__f_suffix4 = suffix4;
  this.sci_Vector5__f_suffix3 = suffix3;
  this.sci_Vector5__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector5.prototype = new $h_sci_BigVector();
$c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $c_sci_Vector5.prototype;
$c_sci_Vector5.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector5.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector5__f_len1234)) {
      var io = ((index - this.sci_Vector5__f_len1234) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < $n(this.sci_Vector5__f_data5).u.length)) {
        var a5 = this.sci_Vector5__f_data5;
        var this$2 = $n(a5);
        var a5c = $n(this$2).clone__O();
        var $x_4 = $n(a5c);
        var a4 = $n(a5c).get(i5);
        var this$3 = $n(a4);
        var a4c = $n(this$3).clone__O();
        var $x_3 = $n(a4c);
        var a3 = $n(a4c).get(i4);
        var this$4 = $n(a3);
        var a3c = $n(this$4).clone__O();
        var $x_2 = $n(a3c);
        var a2 = $n(a3c).get(i3);
        var this$5 = $n(a2);
        var a2c = $n(this$5).clone__O();
        var $x_1 = $n(a2c);
        var a1 = $n(a2c).get(i2);
        var this$6 = $n(a1);
        var a1c = $n(this$6).clone__O();
        $n(a1c).set(i1, elem);
        $x_1.set(i2, a1c);
        $x_2.set(i3, a2c);
        $x_3.set(i4, a3c);
        $x_4.set(i5, a4c);
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector5__f_len1;
        var x$4 = this.sci_Vector5__f_prefix2;
        var x$5 = this.sci_Vector5__f_len12;
        var x$6 = this.sci_Vector5__f_prefix3;
        var x$7 = this.sci_Vector5__f_len123;
        var x$8 = this.sci_Vector5__f_prefix4;
        var x$9 = this.sci_Vector5__f_len1234;
        var x$10 = this.sci_Vector5__f_suffix4;
        var x$11 = this.sci_Vector5__f_suffix3;
        var x$12 = this.sci_Vector5__f_suffix2;
        var x$13 = this.sci_BigVector__f_suffix1;
        var x$14 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, a5c, x$10, x$11, x$12, x$13, x$14);
      } else if ((i4 < $n(this.sci_Vector5__f_suffix4).u.length)) {
        var a4$1 = this.sci_Vector5__f_suffix4;
        var this$8 = $n(a4$1);
        var a4c$1 = $n(this$8).clone__O();
        var $x_7 = $n(a4c$1);
        var a3$1 = $n(a4c$1).get(i4);
        var this$9 = $n(a3$1);
        var a3c$1 = $n(this$9).clone__O();
        var $x_6 = $n(a3c$1);
        var a2$1 = $n(a3c$1).get(i3);
        var this$10 = $n(a2$1);
        var a2c$1 = $n(this$10).clone__O();
        var $x_5 = $n(a2c$1);
        var a1$1 = $n(a2c$1).get(i2);
        var this$11 = $n(a1$1);
        var a1c$1 = $n(this$11).clone__O();
        $n(a1c$1).set(i1, elem);
        $x_5.set(i2, a1c$1);
        $x_6.set(i3, a2c$1);
        $x_7.set(i4, a3c$1);
        var x$16 = this.sci_Vector__f_prefix1;
        var x$17 = this.sci_Vector5__f_len1;
        var x$18 = this.sci_Vector5__f_prefix2;
        var x$19 = this.sci_Vector5__f_len12;
        var x$20 = this.sci_Vector5__f_prefix3;
        var x$21 = this.sci_Vector5__f_len123;
        var x$22 = this.sci_Vector5__f_prefix4;
        var x$23 = this.sci_Vector5__f_len1234;
        var x$24 = this.sci_Vector5__f_data5;
        var x$25 = this.sci_Vector5__f_suffix3;
        var x$26 = this.sci_Vector5__f_suffix2;
        var x$27 = this.sci_BigVector__f_suffix1;
        var x$28 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$23, x$24, a4c$1, x$25, x$26, x$27, x$28);
      } else if ((i3 < $n(this.sci_Vector5__f_suffix3).u.length)) {
        var a3$2 = this.sci_Vector5__f_suffix3;
        var this$13 = $n(a3$2);
        var a3c$2 = $n(this$13).clone__O();
        var $x_9 = $n(a3c$2);
        var a2$2 = $n(a3c$2).get(i3);
        var this$14 = $n(a2$2);
        var a2c$2 = $n(this$14).clone__O();
        var $x_8 = $n(a2c$2);
        var a1$2 = $n(a2c$2).get(i2);
        var this$15 = $n(a1$2);
        var a1c$2 = $n(this$15).clone__O();
        $n(a1c$2).set(i1, elem);
        $x_8.set(i2, a1c$2);
        $x_9.set(i3, a2c$2);
        var x$30 = this.sci_Vector__f_prefix1;
        var x$31 = this.sci_Vector5__f_len1;
        var x$32 = this.sci_Vector5__f_prefix2;
        var x$33 = this.sci_Vector5__f_len12;
        var x$34 = this.sci_Vector5__f_prefix3;
        var x$35 = this.sci_Vector5__f_len123;
        var x$36 = this.sci_Vector5__f_prefix4;
        var x$37 = this.sci_Vector5__f_len1234;
        var x$38 = this.sci_Vector5__f_data5;
        var x$39 = this.sci_Vector5__f_suffix4;
        var x$40 = this.sci_Vector5__f_suffix2;
        var x$41 = this.sci_BigVector__f_suffix1;
        var x$42 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, a3c$2, x$40, x$41, x$42);
      } else if ((i2 < $n(this.sci_Vector5__f_suffix2).u.length)) {
        var a2$3 = this.sci_Vector5__f_suffix2;
        var this$17 = $n(a2$3);
        var a2c$3 = $n(this$17).clone__O();
        var $x_10 = $n(a2c$3);
        var a1$3 = $n(a2c$3).get(i2);
        var this$18 = $n(a1$3);
        var a1c$3 = $n(this$18).clone__O();
        $n(a1c$3).set(i1, elem);
        $x_10.set(i2, a1c$3);
        var x$44 = this.sci_Vector__f_prefix1;
        var x$45 = this.sci_Vector5__f_len1;
        var x$46 = this.sci_Vector5__f_prefix2;
        var x$47 = this.sci_Vector5__f_len12;
        var x$48 = this.sci_Vector5__f_prefix3;
        var x$49 = this.sci_Vector5__f_len123;
        var x$50 = this.sci_Vector5__f_prefix4;
        var x$51 = this.sci_Vector5__f_len1234;
        var x$52 = this.sci_Vector5__f_data5;
        var x$53 = this.sci_Vector5__f_suffix4;
        var x$54 = this.sci_Vector5__f_suffix3;
        var x$55 = this.sci_BigVector__f_suffix1;
        var x$56 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$52, x$53, x$54, a2c$3, x$55, x$56);
      } else {
        var a1$4 = this.sci_BigVector__f_suffix1;
        var this$20 = $n(a1$4);
        var a1c$4 = $n(this$20).clone__O();
        $n(a1c$4).set(i1, elem);
        var x$58 = this.sci_Vector__f_prefix1;
        var x$59 = this.sci_Vector5__f_len1;
        var x$60 = this.sci_Vector5__f_prefix2;
        var x$61 = this.sci_Vector5__f_len12;
        var x$62 = this.sci_Vector5__f_prefix3;
        var x$63 = this.sci_Vector5__f_len123;
        var x$64 = this.sci_Vector5__f_prefix4;
        var x$65 = this.sci_Vector5__f_len1234;
        var x$66 = this.sci_Vector5__f_data5;
        var x$67 = this.sci_Vector5__f_suffix4;
        var x$68 = this.sci_Vector5__f_suffix3;
        var x$69 = this.sci_Vector5__f_suffix2;
        var x$70 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector5(x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, a1c$4, x$70);
      }
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      var a4$2 = this.sci_Vector5__f_prefix4;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var this$22 = $n(a4$2);
      var a4c$2 = $n(this$22).clone__O();
      var $x_13 = $n(a4c$2);
      var a3$3 = $n(a4c$2).get(idx4);
      var this$23 = $n(a3$3);
      var a3c$3 = $n(this$23).clone__O();
      var $x_12 = $n(a3c$3);
      var a2$4 = $n(a3c$3).get(idx3);
      var this$24 = $n(a2$4);
      var a2c$4 = $n(this$24).clone__O();
      var $x_11 = $n(a2c$4);
      var a1$5 = $n(a2c$4).get(idx2);
      var this$25 = $n(a1$5);
      var a1c$5 = $n(this$25).clone__O();
      $n(a1c$5).set(idx1, elem);
      $x_11.set(idx2, a1c$5);
      $x_12.set(idx3, a2c$4);
      $x_13.set(idx4, a3c$3);
      var x$72 = this.sci_Vector__f_prefix1;
      var x$73 = this.sci_Vector5__f_len1;
      var x$74 = this.sci_Vector5__f_prefix2;
      var x$75 = this.sci_Vector5__f_len12;
      var x$76 = this.sci_Vector5__f_prefix3;
      var x$77 = this.sci_Vector5__f_len123;
      var x$78 = this.sci_Vector5__f_len1234;
      var x$79 = this.sci_Vector5__f_data5;
      var x$80 = this.sci_Vector5__f_suffix4;
      var x$81 = this.sci_Vector5__f_suffix3;
      var x$82 = this.sci_Vector5__f_suffix2;
      var x$83 = this.sci_BigVector__f_suffix1;
      var x$84 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$72, x$73, x$74, x$75, x$76, x$77, a4c$2, x$78, x$79, x$80, x$81, x$82, x$83, x$84);
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      var a3$4 = this.sci_Vector5__f_prefix3;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var this$27 = $n(a3$4);
      var a3c$4 = $n(this$27).clone__O();
      var $x_15 = $n(a3c$4);
      var a2$5 = $n(a3c$4).get(idx3$1);
      var this$28 = $n(a2$5);
      var a2c$5 = $n(this$28).clone__O();
      var $x_14 = $n(a2c$5);
      var a1$6 = $n(a2c$5).get(idx2$1);
      var this$29 = $n(a1$6);
      var a1c$6 = $n(this$29).clone__O();
      $n(a1c$6).set(idx1$1, elem);
      $x_14.set(idx2$1, a1c$6);
      $x_15.set(idx3$1, a2c$5);
      var x$86 = this.sci_Vector__f_prefix1;
      var x$87 = this.sci_Vector5__f_len1;
      var x$88 = this.sci_Vector5__f_prefix2;
      var x$89 = this.sci_Vector5__f_len12;
      var x$90 = this.sci_Vector5__f_len123;
      var x$91 = this.sci_Vector5__f_prefix4;
      var x$92 = this.sci_Vector5__f_len1234;
      var x$93 = this.sci_Vector5__f_data5;
      var x$94 = this.sci_Vector5__f_suffix4;
      var x$95 = this.sci_Vector5__f_suffix3;
      var x$96 = this.sci_Vector5__f_suffix2;
      var x$97 = this.sci_BigVector__f_suffix1;
      var x$98 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$86, x$87, x$88, x$89, a3c$4, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98);
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      var a2$6 = this.sci_Vector5__f_prefix2;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var this$31 = $n(a2$6);
      var a2c$6 = $n(this$31).clone__O();
      var $x_16 = $n(a2c$6);
      var a1$7 = $n(a2c$6).get(idx2$2);
      var this$32 = $n(a1$7);
      var a1c$7 = $n(this$32).clone__O();
      $n(a1c$7).set(idx1$2, elem);
      $x_16.set(idx2$2, a1c$7);
      var x$100 = this.sci_Vector__f_prefix1;
      var x$101 = this.sci_Vector5__f_len1;
      var x$102 = this.sci_Vector5__f_len12;
      var x$103 = this.sci_Vector5__f_prefix3;
      var x$104 = this.sci_Vector5__f_len123;
      var x$105 = this.sci_Vector5__f_prefix4;
      var x$106 = this.sci_Vector5__f_len1234;
      var x$107 = this.sci_Vector5__f_data5;
      var x$108 = this.sci_Vector5__f_suffix4;
      var x$109 = this.sci_Vector5__f_suffix3;
      var x$110 = this.sci_Vector5__f_suffix2;
      var x$111 = this.sci_BigVector__f_suffix1;
      var x$112 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(x$100, x$101, a2c$6, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, x$112);
    } else {
      var a1$8 = this.sci_Vector__f_prefix1;
      var this$34 = $n(a1$8);
      var a1c$8 = $n(this$34).clone__O();
      $n(a1c$8).set(index, elem);
      var len1 = this.sci_Vector5__f_len1;
      var prefix2 = this.sci_Vector5__f_prefix2;
      var len12 = this.sci_Vector5__f_len12;
      var prefix3 = this.sci_Vector5__f_prefix3;
      var len123 = this.sci_Vector5__f_len123;
      var prefix4 = this.sci_Vector5__f_prefix4;
      var len1234 = this.sci_Vector5__f_len1234;
      var data5 = this.sci_Vector5__f_data5;
      var suffix4 = this.sci_Vector5__f_suffix4;
      var suffix3 = this.sci_Vector5__f_suffix3;
      var suffix2 = this.sci_Vector5__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector5(a1c$8, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, suffix1, length0);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector5.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector5__f_len1;
    var x$5 = this.sci_Vector5__f_prefix2;
    var x$6 = this.sci_Vector5__f_len12;
    var x$7 = this.sci_Vector5__f_prefix3;
    var x$8 = this.sci_Vector5__f_len123;
    var x$9 = this.sci_Vector5__f_prefix4;
    var x$10 = this.sci_Vector5__f_len1234;
    var x$11 = this.sci_Vector5__f_data5;
    var x$12 = this.sci_Vector5__f_suffix4;
    var x$13 = this.sci_Vector5__f_suffix3;
    var x$14 = this.sci_Vector5__f_suffix2;
    return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2);
  } else if (($n(this.sci_Vector5__f_suffix2).u.length < 31)) {
    var x$15 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$18 = this.sci_Vector__f_prefix1;
    var x$19 = this.sci_Vector5__f_len1;
    var x$20 = this.sci_Vector5__f_prefix2;
    var x$21 = this.sci_Vector5__f_len12;
    var x$22 = this.sci_Vector5__f_prefix3;
    var x$23 = this.sci_Vector5__f_len123;
    var x$24 = this.sci_Vector5__f_prefix4;
    var x$25 = this.sci_Vector5__f_len1234;
    var x$26 = this.sci_Vector5__f_data5;
    var x$27 = this.sci_Vector5__f_suffix4;
    var x$28 = this.sci_Vector5__f_suffix3;
    return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17);
  } else if (($n(this.sci_Vector5__f_suffix3).u.length < 31)) {
    var x$29 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$33 = this.sci_Vector__f_prefix1;
    var x$34 = this.sci_Vector5__f_len1;
    var x$35 = this.sci_Vector5__f_prefix2;
    var x$36 = this.sci_Vector5__f_len12;
    var x$37 = this.sci_Vector5__f_prefix3;
    var x$38 = this.sci_Vector5__f_len123;
    var x$39 = this.sci_Vector5__f_prefix4;
    var x$40 = this.sci_Vector5__f_len1234;
    var x$41 = this.sci_Vector5__f_data5;
    var x$42 = this.sci_Vector5__f_suffix4;
    return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32);
  } else if (($n(this.sci_Vector5__f_suffix4).u.length < 31)) {
    var x$43 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$48 = this.sci_Vector__f_prefix1;
    var x$49 = this.sci_Vector5__f_len1;
    var x$50 = this.sci_Vector5__f_prefix2;
    var x$51 = this.sci_Vector5__f_len12;
    var x$52 = this.sci_Vector5__f_prefix3;
    var x$53 = this.sci_Vector5__f_len123;
    var x$54 = this.sci_Vector5__f_prefix4;
    var x$55 = this.sci_Vector5__f_len1234;
    var x$56 = this.sci_Vector5__f_data5;
    return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47);
  } else if (($n(this.sci_Vector5__f_data5).u.length < 30)) {
    var x$57 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$63 = this.sci_Vector__f_prefix1;
    var x$64 = this.sci_Vector5__f_len1;
    var x$65 = this.sci_Vector5__f_prefix2;
    var x$66 = this.sci_Vector5__f_len12;
    var x$67 = this.sci_Vector5__f_prefix3;
    var x$68 = this.sci_Vector5__f_len123;
    var x$69 = this.sci_Vector5__f_prefix4;
    var x$70 = this.sci_Vector5__f_len1234;
    return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62);
  } else {
    var $x_14 = this.sci_Vector__f_prefix1;
    var $x_13 = this.sci_Vector5__f_len1;
    var $x_12 = this.sci_Vector5__f_prefix2;
    var $x_11 = this.sci_Vector5__f_len12;
    var $x_10 = this.sci_Vector5__f_prefix3;
    var $x_9 = this.sci_Vector5__f_len123;
    var $x_8 = this.sci_Vector5__f_prefix4;
    var $x_7 = this.sci_Vector5__f_len1234;
    var $x_6 = this.sci_Vector5__f_data5;
    var $x_5 = this.sci_Vector5__f_len1234;
    var $x_4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
    var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
    $n(a$4).set(0, x);
    var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$5 = new $ac_O(1);
    $n(a$5).set(0, elem);
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.sci_BigVector__f_length0) | 0));
  }
});
$c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
  return 9;
});
$c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector5__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector5__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector5__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector5__f_data5;
      break;
    }
    case 5: {
      return this.sci_Vector5__f_suffix4;
      break;
    }
    case 6: {
      return this.sci_Vector5__f_suffix3;
      break;
    }
    case 7: {
      return this.sci_Vector5__f_suffix2;
      break;
    }
    case 8: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector5.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector5__f_len1234) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
    } else if ((index >= this.sci_Vector5__f_len123)) {
      var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector5__f_len12)) {
      var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
      return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector5__f_len1)) {
      var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
      return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector5(obj) {
  return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"));
}
function $isArrayOf_sci_Vector5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector5)));
}
function $asArrayOf_sci_Vector5(obj, depth) {
  return (($isArrayOf_sci_Vector5(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector5;", depth));
}
var $d_sci_Vector5 = new $TypeData().initClass($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  sci_Vector5: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.sci_Vector__f_prefix1 = null;
  this.sci_BigVector__f_suffix1 = null;
  this.sci_BigVector__f_length0 = 0;
  this.sci_Vector6__f_len1 = 0;
  this.sci_Vector6__f_prefix2 = null;
  this.sci_Vector6__f_len12 = 0;
  this.sci_Vector6__f_prefix3 = null;
  this.sci_Vector6__f_len123 = 0;
  this.sci_Vector6__f_prefix4 = null;
  this.sci_Vector6__f_len1234 = 0;
  this.sci_Vector6__f_prefix5 = null;
  this.sci_Vector6__f_len12345 = 0;
  this.sci_Vector6__f_data6 = null;
  this.sci_Vector6__f_suffix5 = null;
  this.sci_Vector6__f_suffix4 = null;
  this.sci_Vector6__f_suffix3 = null;
  this.sci_Vector6__f_suffix2 = null;
  this.sci_Vector6__f_len1 = len1;
  this.sci_Vector6__f_prefix2 = prefix2;
  this.sci_Vector6__f_len12 = len12;
  this.sci_Vector6__f_prefix3 = prefix3;
  this.sci_Vector6__f_len123 = len123;
  this.sci_Vector6__f_prefix4 = prefix4;
  this.sci_Vector6__f_len1234 = len1234;
  this.sci_Vector6__f_prefix5 = prefix5;
  this.sci_Vector6__f_len12345 = len12345;
  this.sci_Vector6__f_data6 = data6;
  this.sci_Vector6__f_suffix5 = suffix5;
  this.sci_Vector6__f_suffix4 = suffix4;
  this.sci_Vector6__f_suffix3 = suffix3;
  this.sci_Vector6__f_suffix2 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$c_sci_Vector6.prototype = new $h_sci_BigVector();
$c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $c_sci_Vector6.prototype;
$c_sci_Vector6.prototype.apply__I__O = (function(index) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector6.prototype.updated__I__O__sci_Vector = (function(index, elem) {
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    if ((index >= this.sci_Vector6__f_len12345)) {
      var io = ((index - this.sci_Vector6__f_len12345) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < $n(this.sci_Vector6__f_data6).u.length)) {
        var a6 = this.sci_Vector6__f_data6;
        var this$2 = $n(a6);
        var a6c = $n(this$2).clone__O();
        var $x_5 = $n(a6c);
        var a5 = $n(a6c).get(i6);
        var this$3 = $n(a5);
        var a5c = $n(this$3).clone__O();
        var $x_4 = $n(a5c);
        var a4 = $n(a5c).get(i5);
        var this$4 = $n(a4);
        var a4c = $n(this$4).clone__O();
        var $x_3 = $n(a4c);
        var a3 = $n(a4c).get(i4);
        var this$5 = $n(a3);
        var a3c = $n(this$5).clone__O();
        var $x_2 = $n(a3c);
        var a2 = $n(a3c).get(i3);
        var this$6 = $n(a2);
        var a2c = $n(this$6).clone__O();
        var $x_1 = $n(a2c);
        var a1 = $n(a2c).get(i2);
        var this$7 = $n(a1);
        var a1c = $n(this$7).clone__O();
        $n(a1c).set(i1, elem);
        $x_1.set(i2, a1c);
        $x_2.set(i3, a2c);
        $x_3.set(i4, a3c);
        $x_4.set(i5, a4c);
        $x_5.set(i6, a5c);
        var x$2 = this.sci_Vector__f_prefix1;
        var x$3 = this.sci_Vector6__f_len1;
        var x$4 = this.sci_Vector6__f_prefix2;
        var x$5 = this.sci_Vector6__f_len12;
        var x$6 = this.sci_Vector6__f_prefix3;
        var x$7 = this.sci_Vector6__f_len123;
        var x$8 = this.sci_Vector6__f_prefix4;
        var x$9 = this.sci_Vector6__f_len1234;
        var x$10 = this.sci_Vector6__f_prefix5;
        var x$11 = this.sci_Vector6__f_len12345;
        var x$12 = this.sci_Vector6__f_suffix5;
        var x$13 = this.sci_Vector6__f_suffix4;
        var x$14 = this.sci_Vector6__f_suffix3;
        var x$15 = this.sci_Vector6__f_suffix2;
        var x$16 = this.sci_BigVector__f_suffix1;
        var x$17 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, a6c, x$12, x$13, x$14, x$15, x$16, x$17);
      } else if ((i5 < $n(this.sci_Vector6__f_suffix5).u.length)) {
        var a5$1 = this.sci_Vector6__f_suffix5;
        var this$9 = $n(a5$1);
        var a5c$1 = $n(this$9).clone__O();
        var $x_9 = $n(a5c$1);
        var a4$1 = $n(a5c$1).get(i5);
        var this$10 = $n(a4$1);
        var a4c$1 = $n(this$10).clone__O();
        var $x_8 = $n(a4c$1);
        var a3$1 = $n(a4c$1).get(i4);
        var this$11 = $n(a3$1);
        var a3c$1 = $n(this$11).clone__O();
        var $x_7 = $n(a3c$1);
        var a2$1 = $n(a3c$1).get(i3);
        var this$12 = $n(a2$1);
        var a2c$1 = $n(this$12).clone__O();
        var $x_6 = $n(a2c$1);
        var a1$1 = $n(a2c$1).get(i2);
        var this$13 = $n(a1$1);
        var a1c$1 = $n(this$13).clone__O();
        $n(a1c$1).set(i1, elem);
        $x_6.set(i2, a1c$1);
        $x_7.set(i3, a2c$1);
        $x_8.set(i4, a3c$1);
        $x_9.set(i5, a4c$1);
        var x$19 = this.sci_Vector__f_prefix1;
        var x$20 = this.sci_Vector6__f_len1;
        var x$21 = this.sci_Vector6__f_prefix2;
        var x$22 = this.sci_Vector6__f_len12;
        var x$23 = this.sci_Vector6__f_prefix3;
        var x$24 = this.sci_Vector6__f_len123;
        var x$25 = this.sci_Vector6__f_prefix4;
        var x$26 = this.sci_Vector6__f_len1234;
        var x$27 = this.sci_Vector6__f_prefix5;
        var x$28 = this.sci_Vector6__f_len12345;
        var x$29 = this.sci_Vector6__f_data6;
        var x$30 = this.sci_Vector6__f_suffix4;
        var x$31 = this.sci_Vector6__f_suffix3;
        var x$32 = this.sci_Vector6__f_suffix2;
        var x$33 = this.sci_BigVector__f_suffix1;
        var x$34 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, a5c$1, x$30, x$31, x$32, x$33, x$34);
      } else if ((i4 < $n(this.sci_Vector6__f_suffix4).u.length)) {
        var a4$2 = this.sci_Vector6__f_suffix4;
        var this$15 = $n(a4$2);
        var a4c$2 = $n(this$15).clone__O();
        var $x_12 = $n(a4c$2);
        var a3$2 = $n(a4c$2).get(i4);
        var this$16 = $n(a3$2);
        var a3c$2 = $n(this$16).clone__O();
        var $x_11 = $n(a3c$2);
        var a2$2 = $n(a3c$2).get(i3);
        var this$17 = $n(a2$2);
        var a2c$2 = $n(this$17).clone__O();
        var $x_10 = $n(a2c$2);
        var a1$2 = $n(a2c$2).get(i2);
        var this$18 = $n(a1$2);
        var a1c$2 = $n(this$18).clone__O();
        $n(a1c$2).set(i1, elem);
        $x_10.set(i2, a1c$2);
        $x_11.set(i3, a2c$2);
        $x_12.set(i4, a3c$2);
        var x$36 = this.sci_Vector__f_prefix1;
        var x$37 = this.sci_Vector6__f_len1;
        var x$38 = this.sci_Vector6__f_prefix2;
        var x$39 = this.sci_Vector6__f_len12;
        var x$40 = this.sci_Vector6__f_prefix3;
        var x$41 = this.sci_Vector6__f_len123;
        var x$42 = this.sci_Vector6__f_prefix4;
        var x$43 = this.sci_Vector6__f_len1234;
        var x$44 = this.sci_Vector6__f_prefix5;
        var x$45 = this.sci_Vector6__f_len12345;
        var x$46 = this.sci_Vector6__f_data6;
        var x$47 = this.sci_Vector6__f_suffix5;
        var x$48 = this.sci_Vector6__f_suffix3;
        var x$49 = this.sci_Vector6__f_suffix2;
        var x$50 = this.sci_BigVector__f_suffix1;
        var x$51 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, a4c$2, x$48, x$49, x$50, x$51);
      } else if ((i3 < $n(this.sci_Vector6__f_suffix3).u.length)) {
        var a3$3 = this.sci_Vector6__f_suffix3;
        var this$20 = $n(a3$3);
        var a3c$3 = $n(this$20).clone__O();
        var $x_14 = $n(a3c$3);
        var a2$3 = $n(a3c$3).get(i3);
        var this$21 = $n(a2$3);
        var a2c$3 = $n(this$21).clone__O();
        var $x_13 = $n(a2c$3);
        var a1$3 = $n(a2c$3).get(i2);
        var this$22 = $n(a1$3);
        var a1c$3 = $n(this$22).clone__O();
        $n(a1c$3).set(i1, elem);
        $x_13.set(i2, a1c$3);
        $x_14.set(i3, a2c$3);
        var x$53 = this.sci_Vector__f_prefix1;
        var x$54 = this.sci_Vector6__f_len1;
        var x$55 = this.sci_Vector6__f_prefix2;
        var x$56 = this.sci_Vector6__f_len12;
        var x$57 = this.sci_Vector6__f_prefix3;
        var x$58 = this.sci_Vector6__f_len123;
        var x$59 = this.sci_Vector6__f_prefix4;
        var x$60 = this.sci_Vector6__f_len1234;
        var x$61 = this.sci_Vector6__f_prefix5;
        var x$62 = this.sci_Vector6__f_len12345;
        var x$63 = this.sci_Vector6__f_data6;
        var x$64 = this.sci_Vector6__f_suffix5;
        var x$65 = this.sci_Vector6__f_suffix4;
        var x$66 = this.sci_Vector6__f_suffix2;
        var x$67 = this.sci_BigVector__f_suffix1;
        var x$68 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, a3c$3, x$66, x$67, x$68);
      } else if ((i2 < $n(this.sci_Vector6__f_suffix2).u.length)) {
        var a2$4 = this.sci_Vector6__f_suffix2;
        var this$24 = $n(a2$4);
        var a2c$4 = $n(this$24).clone__O();
        var $x_15 = $n(a2c$4);
        var a1$4 = $n(a2c$4).get(i2);
        var this$25 = $n(a1$4);
        var a1c$4 = $n(this$25).clone__O();
        $n(a1c$4).set(i1, elem);
        $x_15.set(i2, a1c$4);
        var x$70 = this.sci_Vector__f_prefix1;
        var x$71 = this.sci_Vector6__f_len1;
        var x$72 = this.sci_Vector6__f_prefix2;
        var x$73 = this.sci_Vector6__f_len12;
        var x$74 = this.sci_Vector6__f_prefix3;
        var x$75 = this.sci_Vector6__f_len123;
        var x$76 = this.sci_Vector6__f_prefix4;
        var x$77 = this.sci_Vector6__f_len1234;
        var x$78 = this.sci_Vector6__f_prefix5;
        var x$79 = this.sci_Vector6__f_len12345;
        var x$80 = this.sci_Vector6__f_data6;
        var x$81 = this.sci_Vector6__f_suffix5;
        var x$82 = this.sci_Vector6__f_suffix4;
        var x$83 = this.sci_Vector6__f_suffix3;
        var x$84 = this.sci_BigVector__f_suffix1;
        var x$85 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, a2c$4, x$84, x$85);
      } else {
        var a1$5 = this.sci_BigVector__f_suffix1;
        var this$27 = $n(a1$5);
        var a1c$5 = $n(this$27).clone__O();
        $n(a1c$5).set(i1, elem);
        var x$87 = this.sci_Vector__f_prefix1;
        var x$88 = this.sci_Vector6__f_len1;
        var x$89 = this.sci_Vector6__f_prefix2;
        var x$90 = this.sci_Vector6__f_len12;
        var x$91 = this.sci_Vector6__f_prefix3;
        var x$92 = this.sci_Vector6__f_len123;
        var x$93 = this.sci_Vector6__f_prefix4;
        var x$94 = this.sci_Vector6__f_len1234;
        var x$95 = this.sci_Vector6__f_prefix5;
        var x$96 = this.sci_Vector6__f_len12345;
        var x$97 = this.sci_Vector6__f_data6;
        var x$98 = this.sci_Vector6__f_suffix5;
        var x$99 = this.sci_Vector6__f_suffix4;
        var x$100 = this.sci_Vector6__f_suffix3;
        var x$101 = this.sci_Vector6__f_suffix2;
        var x$102 = this.sci_BigVector__f_length0;
        return new $c_sci_Vector6(x$87, x$88, x$89, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, a1c$5, x$102);
      }
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      var a5$2 = this.sci_Vector6__f_prefix5;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var this$29 = $n(a5$2);
      var a5c$2 = $n(this$29).clone__O();
      var $x_19 = $n(a5c$2);
      var a4$3 = $n(a5c$2).get(idx5);
      var this$30 = $n(a4$3);
      var a4c$3 = $n(this$30).clone__O();
      var $x_18 = $n(a4c$3);
      var a3$4 = $n(a4c$3).get(idx4);
      var this$31 = $n(a3$4);
      var a3c$4 = $n(this$31).clone__O();
      var $x_17 = $n(a3c$4);
      var a2$5 = $n(a3c$4).get(idx3);
      var this$32 = $n(a2$5);
      var a2c$5 = $n(this$32).clone__O();
      var $x_16 = $n(a2c$5);
      var a1$6 = $n(a2c$5).get(idx2);
      var this$33 = $n(a1$6);
      var a1c$6 = $n(this$33).clone__O();
      $n(a1c$6).set(idx1, elem);
      $x_16.set(idx2, a1c$6);
      $x_17.set(idx3, a2c$5);
      $x_18.set(idx4, a3c$4);
      $x_19.set(idx5, a4c$3);
      var x$104 = this.sci_Vector__f_prefix1;
      var x$105 = this.sci_Vector6__f_len1;
      var x$106 = this.sci_Vector6__f_prefix2;
      var x$107 = this.sci_Vector6__f_len12;
      var x$108 = this.sci_Vector6__f_prefix3;
      var x$109 = this.sci_Vector6__f_len123;
      var x$110 = this.sci_Vector6__f_prefix4;
      var x$111 = this.sci_Vector6__f_len1234;
      var x$112 = this.sci_Vector6__f_len12345;
      var x$113 = this.sci_Vector6__f_data6;
      var x$114 = this.sci_Vector6__f_suffix5;
      var x$115 = this.sci_Vector6__f_suffix4;
      var x$116 = this.sci_Vector6__f_suffix3;
      var x$117 = this.sci_Vector6__f_suffix2;
      var x$118 = this.sci_BigVector__f_suffix1;
      var x$119 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, a5c$2, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119);
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      var a4$4 = this.sci_Vector6__f_prefix4;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var this$35 = $n(a4$4);
      var a4c$4 = $n(this$35).clone__O();
      var $x_22 = $n(a4c$4);
      var a3$5 = $n(a4c$4).get(idx4$1);
      var this$36 = $n(a3$5);
      var a3c$5 = $n(this$36).clone__O();
      var $x_21 = $n(a3c$5);
      var a2$6 = $n(a3c$5).get(idx3$1);
      var this$37 = $n(a2$6);
      var a2c$6 = $n(this$37).clone__O();
      var $x_20 = $n(a2c$6);
      var a1$7 = $n(a2c$6).get(idx2$1);
      var this$38 = $n(a1$7);
      var a1c$7 = $n(this$38).clone__O();
      $n(a1c$7).set(idx1$1, elem);
      $x_20.set(idx2$1, a1c$7);
      $x_21.set(idx3$1, a2c$6);
      $x_22.set(idx4$1, a3c$5);
      var x$121 = this.sci_Vector__f_prefix1;
      var x$122 = this.sci_Vector6__f_len1;
      var x$123 = this.sci_Vector6__f_prefix2;
      var x$124 = this.sci_Vector6__f_len12;
      var x$125 = this.sci_Vector6__f_prefix3;
      var x$126 = this.sci_Vector6__f_len123;
      var x$127 = this.sci_Vector6__f_len1234;
      var x$128 = this.sci_Vector6__f_prefix5;
      var x$129 = this.sci_Vector6__f_len12345;
      var x$130 = this.sci_Vector6__f_data6;
      var x$131 = this.sci_Vector6__f_suffix5;
      var x$132 = this.sci_Vector6__f_suffix4;
      var x$133 = this.sci_Vector6__f_suffix3;
      var x$134 = this.sci_Vector6__f_suffix2;
      var x$135 = this.sci_BigVector__f_suffix1;
      var x$136 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$121, x$122, x$123, x$124, x$125, x$126, a4c$4, x$127, x$128, x$129, x$130, x$131, x$132, x$133, x$134, x$135, x$136);
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      var a3$6 = this.sci_Vector6__f_prefix3;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var this$40 = $n(a3$6);
      var a3c$6 = $n(this$40).clone__O();
      var $x_24 = $n(a3c$6);
      var a2$7 = $n(a3c$6).get(idx3$2);
      var this$41 = $n(a2$7);
      var a2c$7 = $n(this$41).clone__O();
      var $x_23 = $n(a2c$7);
      var a1$8 = $n(a2c$7).get(idx2$2);
      var this$42 = $n(a1$8);
      var a1c$8 = $n(this$42).clone__O();
      $n(a1c$8).set(idx1$2, elem);
      $x_23.set(idx2$2, a1c$8);
      $x_24.set(idx3$2, a2c$7);
      var x$138 = this.sci_Vector__f_prefix1;
      var x$139 = this.sci_Vector6__f_len1;
      var x$140 = this.sci_Vector6__f_prefix2;
      var x$141 = this.sci_Vector6__f_len12;
      var x$142 = this.sci_Vector6__f_len123;
      var x$143 = this.sci_Vector6__f_prefix4;
      var x$144 = this.sci_Vector6__f_len1234;
      var x$145 = this.sci_Vector6__f_prefix5;
      var x$146 = this.sci_Vector6__f_len12345;
      var x$147 = this.sci_Vector6__f_data6;
      var x$148 = this.sci_Vector6__f_suffix5;
      var x$149 = this.sci_Vector6__f_suffix4;
      var x$150 = this.sci_Vector6__f_suffix3;
      var x$151 = this.sci_Vector6__f_suffix2;
      var x$152 = this.sci_BigVector__f_suffix1;
      var x$153 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$138, x$139, x$140, x$141, a3c$6, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$150, x$151, x$152, x$153);
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      var a2$8 = this.sci_Vector6__f_prefix2;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var this$44 = $n(a2$8);
      var a2c$8 = $n(this$44).clone__O();
      var $x_25 = $n(a2c$8);
      var a1$9 = $n(a2c$8).get(idx2$3);
      var this$45 = $n(a1$9);
      var a1c$9 = $n(this$45).clone__O();
      $n(a1c$9).set(idx1$3, elem);
      $x_25.set(idx2$3, a1c$9);
      var x$155 = this.sci_Vector__f_prefix1;
      var x$156 = this.sci_Vector6__f_len1;
      var x$157 = this.sci_Vector6__f_len12;
      var x$158 = this.sci_Vector6__f_prefix3;
      var x$159 = this.sci_Vector6__f_len123;
      var x$160 = this.sci_Vector6__f_prefix4;
      var x$161 = this.sci_Vector6__f_len1234;
      var x$162 = this.sci_Vector6__f_prefix5;
      var x$163 = this.sci_Vector6__f_len12345;
      var x$164 = this.sci_Vector6__f_data6;
      var x$165 = this.sci_Vector6__f_suffix5;
      var x$166 = this.sci_Vector6__f_suffix4;
      var x$167 = this.sci_Vector6__f_suffix3;
      var x$168 = this.sci_Vector6__f_suffix2;
      var x$169 = this.sci_BigVector__f_suffix1;
      var x$170 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(x$155, x$156, a2c$8, x$157, x$158, x$159, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$170);
    } else {
      var a1$10 = this.sci_Vector__f_prefix1;
      var this$47 = $n(a1$10);
      var a1c$10 = $n(this$47).clone__O();
      $n(a1c$10).set(index, elem);
      var len1 = this.sci_Vector6__f_len1;
      var prefix2 = this.sci_Vector6__f_prefix2;
      var len12 = this.sci_Vector6__f_len12;
      var prefix3 = this.sci_Vector6__f_prefix3;
      var len123 = this.sci_Vector6__f_len123;
      var prefix4 = this.sci_Vector6__f_prefix4;
      var len1234 = this.sci_Vector6__f_len1234;
      var prefix5 = this.sci_Vector6__f_prefix5;
      var len12345 = this.sci_Vector6__f_len12345;
      var data6 = this.sci_Vector6__f_data6;
      var suffix5 = this.sci_Vector6__f_suffix5;
      var suffix4 = this.sci_Vector6__f_suffix4;
      var suffix3 = this.sci_Vector6__f_suffix3;
      var suffix2 = this.sci_Vector6__f_suffix2;
      var suffix1 = this.sci_BigVector__f_suffix1;
      var length0 = this.sci_BigVector__f_length0;
      return new $c_sci_Vector6(a1c$10, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, suffix1, length0);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
$c_sci_Vector6.prototype.appended__O__sci_Vector = (function(elem) {
  if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
    var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
    var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$3 = this.sci_Vector__f_prefix1;
    var x$4 = this.sci_Vector6__f_len1;
    var x$5 = this.sci_Vector6__f_prefix2;
    var x$6 = this.sci_Vector6__f_len12;
    var x$7 = this.sci_Vector6__f_prefix3;
    var x$8 = this.sci_Vector6__f_len123;
    var x$9 = this.sci_Vector6__f_prefix4;
    var x$10 = this.sci_Vector6__f_len1234;
    var x$11 = this.sci_Vector6__f_prefix5;
    var x$12 = this.sci_Vector6__f_len12345;
    var x$13 = this.sci_Vector6__f_data6;
    var x$14 = this.sci_Vector6__f_suffix5;
    var x$15 = this.sci_Vector6__f_suffix4;
    var x$16 = this.sci_Vector6__f_suffix3;
    var x$17 = this.sci_Vector6__f_suffix2;
    return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2);
  } else if (($n(this.sci_Vector6__f_suffix2).u.length < 31)) {
    var x$18 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1), 2);
    var a = new $ac_O(1);
    $n(a).set(0, elem);
    var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$21 = this.sci_Vector__f_prefix1;
    var x$22 = this.sci_Vector6__f_len1;
    var x$23 = this.sci_Vector6__f_prefix2;
    var x$24 = this.sci_Vector6__f_len12;
    var x$25 = this.sci_Vector6__f_prefix3;
    var x$26 = this.sci_Vector6__f_len123;
    var x$27 = this.sci_Vector6__f_prefix4;
    var x$28 = this.sci_Vector6__f_len1234;
    var x$29 = this.sci_Vector6__f_prefix5;
    var x$30 = this.sci_Vector6__f_len12345;
    var x$31 = this.sci_Vector6__f_data6;
    var x$32 = this.sci_Vector6__f_suffix5;
    var x$33 = this.sci_Vector6__f_suffix4;
    var x$34 = this.sci_Vector6__f_suffix3;
    return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20);
  } else if (($n(this.sci_Vector6__f_suffix3).u.length < 31)) {
    var x$35 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
    var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$1 = new $ac_O(1);
    $n(a$1).set(0, elem);
    var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$39 = this.sci_Vector__f_prefix1;
    var x$40 = this.sci_Vector6__f_len1;
    var x$41 = this.sci_Vector6__f_prefix2;
    var x$42 = this.sci_Vector6__f_len12;
    var x$43 = this.sci_Vector6__f_prefix3;
    var x$44 = this.sci_Vector6__f_len123;
    var x$45 = this.sci_Vector6__f_prefix4;
    var x$46 = this.sci_Vector6__f_len1234;
    var x$47 = this.sci_Vector6__f_prefix5;
    var x$48 = this.sci_Vector6__f_len12345;
    var x$49 = this.sci_Vector6__f_data6;
    var x$50 = this.sci_Vector6__f_suffix5;
    var x$51 = this.sci_Vector6__f_suffix4;
    return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38);
  } else if (($n(this.sci_Vector6__f_suffix4).u.length < 31)) {
    var x$52 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
    var x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$2 = new $ac_O(1);
    $n(a$2).set(0, elem);
    var x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$57 = this.sci_Vector__f_prefix1;
    var x$58 = this.sci_Vector6__f_len1;
    var x$59 = this.sci_Vector6__f_prefix2;
    var x$60 = this.sci_Vector6__f_len12;
    var x$61 = this.sci_Vector6__f_prefix3;
    var x$62 = this.sci_Vector6__f_len123;
    var x$63 = this.sci_Vector6__f_prefix4;
    var x$64 = this.sci_Vector6__f_len1234;
    var x$65 = this.sci_Vector6__f_prefix5;
    var x$66 = this.sci_Vector6__f_len12345;
    var x$67 = this.sci_Vector6__f_data6;
    var x$68 = this.sci_Vector6__f_suffix5;
    return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56);
  } else if (($n(this.sci_Vector6__f_suffix5).u.length < 31)) {
    var x$69 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
    var x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$3 = new $ac_O(1);
    $n(a$3).set(0, elem);
    var x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$75 = this.sci_Vector__f_prefix1;
    var x$76 = this.sci_Vector6__f_len1;
    var x$77 = this.sci_Vector6__f_prefix2;
    var x$78 = this.sci_Vector6__f_len12;
    var x$79 = this.sci_Vector6__f_prefix3;
    var x$80 = this.sci_Vector6__f_len123;
    var x$81 = this.sci_Vector6__f_prefix4;
    var x$82 = this.sci_Vector6__f_len1234;
    var x$83 = this.sci_Vector6__f_prefix5;
    var x$84 = this.sci_Vector6__f_len12345;
    var x$85 = this.sci_Vector6__f_data6;
    return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74);
  } else if (($n(this.sci_Vector6__f_data6).u.length < 62)) {
    var x$86 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))))), 6);
    var x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
    var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
    var x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
    var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
    var a$4 = new $ac_O(1);
    $n(a$4).set(0, elem);
    var x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
    var x$93 = this.sci_Vector__f_prefix1;
    var x$94 = this.sci_Vector6__f_len1;
    var x$95 = this.sci_Vector6__f_prefix2;
    var x$96 = this.sci_Vector6__f_len12;
    var x$97 = this.sci_Vector6__f_prefix3;
    var x$98 = this.sci_Vector6__f_len123;
    var x$99 = this.sci_Vector6__f_prefix4;
    var x$100 = this.sci_Vector6__f_len1234;
    var x$101 = this.sci_Vector6__f_prefix5;
    var x$102 = this.sci_Vector6__f_len12345;
    return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
  return 11;
});
$c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
  switch (idx) {
    case 0: {
      return this.sci_Vector__f_prefix1;
      break;
    }
    case 1: {
      return this.sci_Vector6__f_prefix2;
      break;
    }
    case 2: {
      return this.sci_Vector6__f_prefix3;
      break;
    }
    case 3: {
      return this.sci_Vector6__f_prefix4;
      break;
    }
    case 4: {
      return this.sci_Vector6__f_prefix5;
      break;
    }
    case 5: {
      return this.sci_Vector6__f_data6;
      break;
    }
    case 6: {
      return this.sci_Vector6__f_suffix5;
      break;
    }
    case 7: {
      return this.sci_Vector6__f_suffix4;
      break;
    }
    case 8: {
      return this.sci_Vector6__f_suffix3;
      break;
    }
    case 9: {
      return this.sci_Vector6__f_suffix2;
      break;
    }
    case 10: {
      return this.sci_BigVector__f_suffix1;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$c_sci_Vector6.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
    var io = ((index - this.sci_Vector6__f_len12345) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
    } else if ((index >= this.sci_Vector6__f_len1234)) {
      var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
      return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
    } else if ((index >= this.sci_Vector6__f_len123)) {
      var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
      return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
    } else if ((index >= this.sci_Vector6__f_len12)) {
      var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
      return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
    } else if ((index >= this.sci_Vector6__f_len1)) {
      var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
      return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
    } else {
      return $n(this.sci_Vector__f_prefix1).get(index);
    }
  } else {
    throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
  }
});
function $as_sci_Vector6(obj) {
  return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"));
}
function $isArrayOf_sci_Vector6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector6)));
}
function $asArrayOf_sci_Vector6(obj, depth) {
  return (($isArrayOf_sci_Vector6(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector6;", depth));
}
var $d_sci_Vector6 = new $TypeData().initClass($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  sci_Vector6: 1,
  sci_BigVector: 1,
  sci_VectorImpl: 1,
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.scm_StringBuilder__f_underlying = null;
}
$c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $c_scm_StringBuilder.prototype;
$c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  var x = $n(this.scm_StringBuilder__f_underlying).length__I();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_StringBuilder.prototype.sizeHint__I__V = (function(size) {
});
$c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$c_scm_StringBuilder.prototype.length__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.knownSize__I = (function() {
  return $n(this.scm_StringBuilder__f_underlying).length__I();
});
$c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
  var this$1 = $n(this.scm_StringBuilder__f_underlying);
  var str = ("" + $cToS(x));
  this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
  return this;
});
$c_scm_StringBuilder.prototype.toString__T = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
  return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
});
$c_scm_StringBuilder.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_IndexedSeq$();
});
$c_scm_StringBuilder.prototype.result__O = (function() {
  return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
});
$c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__C__scm_StringBuilder($uC(elem));
});
$c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
$c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
  return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
});
var $d_scm_StringBuilder = new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
}));
function $as_scm_LinkedHashMap(obj) {
  return ((false || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.LinkedHashMap"));
}
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_LinkedHashMap)));
}
function $asArrayOf_scm_LinkedHashMap(obj, depth) {
  return (($isArrayOf_scm_LinkedHashMap(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.LinkedHashMap;", depth));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = null;
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
  this.scm_ListBuffer__f_mutationCount = 0;
  this.scm_ListBuffer__f_first = $m_sci_Nil$();
  this.scm_ListBuffer__f_last0 = null;
  this.scm_ListBuffer__f_aliased = false;
  this.scm_ListBuffer__f_len = 0;
}
$c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $c_scm_ListBuffer.prototype;
$c_scm_ListBuffer.prototype.sizeHint__I__V = (function(size) {
});
$c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
  return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scm_ListBuffer__f_mutationCount)));
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ListBuffer$();
});
$c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
$c_scm_ListBuffer.prototype.length__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.knownSize__I = (function() {
  return this.scm_ListBuffer__f_len;
});
$c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
  return (this.scm_ListBuffer__f_len === 0);
});
$c_scm_ListBuffer.prototype.toList__sci_List = (function() {
  this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
  return this.scm_ListBuffer__f_first;
});
$c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.scm_ListBuffer__f_len === 0)) {
    this.scm_ListBuffer__f_first = last1;
  } else {
    $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1;
  }
  this.scm_ListBuffer__f_last0 = last1;
  this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
  return this;
});
$c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
    this.scm_ListBuffer__f_first = last0;
    while ($n(it).hasNext__Z()) {
      var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
      $n(last0).sci_$colon$colon__f_next = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.scm_ListBuffer__f_len = len;
    this.scm_ListBuffer__f_last0 = last0;
  }
  return this;
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
  var it = $n(xs).iterator__sc_Iterator();
  if ($n(it).hasNext__Z()) {
    var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = $n(fresh).scm_ListBuffer__f_first;
    } else {
      $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = $n(fresh).scm_ListBuffer__f_first;
    }
    this.scm_ListBuffer__f_last0 = $n(fresh).scm_ListBuffer__f_last0;
    this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + $n(fresh).scm_ListBuffer__f_len) | 0);
  }
  return this;
});
$c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
  return "ListBuffer";
});
$c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_ListBuffer(elems);
});
$c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ListBuffer(elem);
});
$c_scm_ListBuffer.prototype.result__O = (function() {
  return this.toList__sci_List();
});
$c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
  var i = $uI(v1);
  var this$1 = $n(this.scm_ListBuffer__f_first);
  return $f_sc_LinearSeqOps__apply__I__O(this$1, i);
});
$c_scm_ListBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ListBuffer$();
});
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"));
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)));
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth));
}
var $d_scm_ListBuffer = new $TypeData().initClass($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_mutationCount = 0;
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.scm_ArrayBuffer__f_mutationCount = 0;
  this.scm_ArrayBuffer__f_array = null;
  this.scm_ArrayBuffer__f_size0 = 0;
}
$c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$c_scm_ArrayBuffer.prototype.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $c_scm_ArrayBuffer.prototype;
$c_scm_ArrayBuffer.prototype.iterator__sc_Iterator = (function() {
  return $n(this.view__scm_ArrayBufferView()).iterator__sc_Iterator();
});
$c_scm_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  var x = this.scm_ArrayBuffer__f_size0;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_scm_ArrayBuffer.prototype.knownSize__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.ensureSize__I__V = (function(n) {
  this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n);
});
$c_scm_ArrayBuffer.prototype.sizeHint__I__V = (function(size) {
  if (((size > this.scm_ArrayBuffer__f_size0) && (size >= 1))) {
    this.ensureSize__I__V(size);
  }
});
$c_scm_ArrayBuffer.prototype.apply__I__O = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"));
  }
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((((((-1) + hi) | 0) + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"));
  }
  return $n(this.scm_ArrayBuffer__f_array).get(n);
});
$c_scm_ArrayBuffer.prototype.update__I__O__V = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"));
  }
  if ((hi > this.scm_ArrayBuffer__f_size0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ((((((-1) + hi) | 0) + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"));
  }
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  $n(this.scm_ArrayBuffer__f_array).set(index, elem);
});
$c_scm_ArrayBuffer.prototype.length__I = (function() {
  return this.scm_ArrayBuffer__f_size0;
});
$c_scm_ArrayBuffer.prototype.view__scm_ArrayBufferView = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sjsr_AnonFunction0((() => this.scm_ArrayBuffer__f_mutationCount)));
});
$c_scm_ArrayBuffer.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_scm_ArrayBuffer$();
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_ArrayBuffer = (function(elem) {
  this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
  var newSize = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
  this.ensureSize__I__V(newSize);
  this.scm_ArrayBuffer__f_size0 = newSize;
  this.update__I__O__V((((-1) + this.scm_ArrayBuffer__f_size0) | 0), elem);
  return this;
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_ArrayBuffer = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var x2 = $as_scm_ArrayBuffer(elems);
    var elemsLength = $n(x2).scm_ArrayBuffer__f_size0;
    if ((elemsLength > 0)) {
      this.scm_ArrayBuffer__f_mutationCount = ((1 + this.scm_ArrayBuffer__f_mutationCount) | 0);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V($n(x2).scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, elemsLength);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$c_scm_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer";
});
$c_scm_ArrayBuffer.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
  var srcLen = this.scm_ArrayBuffer__f_size0;
  var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().copy__O__I__O__I__I__V(this.scm_ArrayBuffer__f_array, 0, xs, start, copied);
  }
  return copied;
});
$c_scm_ArrayBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
  return this.addAll__sc_IterableOnce__scm_ArrayBuffer(elems);
});
$c_scm_ArrayBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__scm_ArrayBuffer(elem);
});
$c_scm_ArrayBuffer.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_scm_ArrayBuffer$();
});
$c_scm_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O($uI(v1));
});
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"));
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)));
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth));
}
var $d_scm_ArrayBuffer = new $TypeData().initClass($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
}
$c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $c_sjs_js_WrappedArray.prototype;
$c_sjs_js_WrappedArray.prototype.sizeHint__I__V = (function(size) {
});
$c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
  return "IndexedSeq";
});
$c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
  var this$1 = new $c_sc_IndexedSeqView$Id(this);
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this$1);
});
$c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_SeqFactory = (function() {
  return $m_sjs_js_WrappedArray$();
});
$c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.length__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
  return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
});
$c_sjs_js_WrappedArray.prototype.className__T = (function() {
  return "WrappedArray";
});
$c_sjs_js_WrappedArray.prototype.result__O = (function() {
  return this;
});
$c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
  this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
  return this;
});
$c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
  var index = $uI(v1);
  return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
});
$c_sjs_js_WrappedArray.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $m_sjs_js_WrappedArray$();
});
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"));
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)));
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth));
}
var $d_sjs_js_WrappedArray = new $TypeData().initClass($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.zero = $L0;
$s_Lorg_squawk_web_WebREPL__main__AT__V(new ($d_T.getArrayOf().constr)([]));
}).call(this);
//# sourceMappingURL=squawk-fastopt.js.map