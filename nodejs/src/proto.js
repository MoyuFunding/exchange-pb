/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mexc = (function() {

    /**
     * Namespace mexc.
     * @exports mexc
     * @namespace
     */
    var mexc = {};

    mexc.PrivateAccountV3Api = (function() {

        /**
         * Properties of a PrivateAccountV3Api.
         * @memberof mexc
         * @interface IPrivateAccountV3Api
         * @property {string|null} [vcoinName] PrivateAccountV3Api vcoinName
         * @property {string|null} [coinId] PrivateAccountV3Api coinId
         * @property {string|null} [balanceAmount] PrivateAccountV3Api balanceAmount
         * @property {string|null} [balanceAmountChange] PrivateAccountV3Api balanceAmountChange
         * @property {string|null} [frozenAmount] PrivateAccountV3Api frozenAmount
         * @property {string|null} [frozenAmountChange] PrivateAccountV3Api frozenAmountChange
         * @property {string|null} [type] PrivateAccountV3Api type
         * @property {number|null} [time] PrivateAccountV3Api time
         */

        /**
         * Constructs a new PrivateAccountV3Api.
         * @memberof mexc
         * @classdesc Represents a PrivateAccountV3Api.
         * @implements IPrivateAccountV3Api
         * @constructor
         * @param {mexc.IPrivateAccountV3Api=} [properties] Properties to set
         */
        function PrivateAccountV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateAccountV3Api vcoinName.
         * @member {string} vcoinName
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.vcoinName = "";

        /**
         * PrivateAccountV3Api coinId.
         * @member {string} coinId
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.coinId = "";

        /**
         * PrivateAccountV3Api balanceAmount.
         * @member {string} balanceAmount
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.balanceAmount = "";

        /**
         * PrivateAccountV3Api balanceAmountChange.
         * @member {string} balanceAmountChange
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.balanceAmountChange = "";

        /**
         * PrivateAccountV3Api frozenAmount.
         * @member {string} frozenAmount
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.frozenAmount = "";

        /**
         * PrivateAccountV3Api frozenAmountChange.
         * @member {string} frozenAmountChange
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.frozenAmountChange = "";

        /**
         * PrivateAccountV3Api type.
         * @member {string} type
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.type = "";

        /**
         * PrivateAccountV3Api time.
         * @member {number} time
         * @memberof mexc.PrivateAccountV3Api
         * @instance
         */
        PrivateAccountV3Api.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PrivateAccountV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {mexc.IPrivateAccountV3Api=} [properties] Properties to set
         * @returns {mexc.PrivateAccountV3Api} PrivateAccountV3Api instance
         */
        PrivateAccountV3Api.create = function create(properties) {
            return new PrivateAccountV3Api(properties);
        };

        /**
         * Encodes the specified PrivateAccountV3Api message. Does not implicitly {@link mexc.PrivateAccountV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {mexc.IPrivateAccountV3Api} message PrivateAccountV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateAccountV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vcoinName != null && Object.hasOwnProperty.call(message, "vcoinName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.vcoinName);
            if (message.coinId != null && Object.hasOwnProperty.call(message, "coinId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.coinId);
            if (message.balanceAmount != null && Object.hasOwnProperty.call(message, "balanceAmount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.balanceAmount);
            if (message.balanceAmountChange != null && Object.hasOwnProperty.call(message, "balanceAmountChange"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.balanceAmountChange);
            if (message.frozenAmount != null && Object.hasOwnProperty.call(message, "frozenAmount"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.frozenAmount);
            if (message.frozenAmountChange != null && Object.hasOwnProperty.call(message, "frozenAmountChange"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.frozenAmountChange);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.type);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified PrivateAccountV3Api message, length delimited. Does not implicitly {@link mexc.PrivateAccountV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {mexc.IPrivateAccountV3Api} message PrivateAccountV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateAccountV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateAccountV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PrivateAccountV3Api} PrivateAccountV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateAccountV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PrivateAccountV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.vcoinName = reader.string();
                        break;
                    }
                case 2: {
                        message.coinId = reader.string();
                        break;
                    }
                case 3: {
                        message.balanceAmount = reader.string();
                        break;
                    }
                case 4: {
                        message.balanceAmountChange = reader.string();
                        break;
                    }
                case 5: {
                        message.frozenAmount = reader.string();
                        break;
                    }
                case 6: {
                        message.frozenAmountChange = reader.string();
                        break;
                    }
                case 7: {
                        message.type = reader.string();
                        break;
                    }
                case 8: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateAccountV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PrivateAccountV3Api} PrivateAccountV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateAccountV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PrivateAccountV3Api
         * @function getTypeUrl
         * @memberof mexc.PrivateAccountV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivateAccountV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PrivateAccountV3Api";
        };

        return PrivateAccountV3Api;
    })();

    mexc.PrivateDealsV3Api = (function() {

        /**
         * Properties of a PrivateDealsV3Api.
         * @memberof mexc
         * @interface IPrivateDealsV3Api
         * @property {string|null} [price] PrivateDealsV3Api price
         * @property {string|null} [quantity] PrivateDealsV3Api quantity
         * @property {string|null} [amount] PrivateDealsV3Api amount
         * @property {number|null} [tradeType] PrivateDealsV3Api tradeType
         * @property {boolean|null} [isMaker] PrivateDealsV3Api isMaker
         * @property {boolean|null} [isSelfTrade] PrivateDealsV3Api isSelfTrade
         * @property {string|null} [tradeId] PrivateDealsV3Api tradeId
         * @property {string|null} [clientOrderId] PrivateDealsV3Api clientOrderId
         * @property {string|null} [orderId] PrivateDealsV3Api orderId
         * @property {string|null} [feeAmount] PrivateDealsV3Api feeAmount
         * @property {string|null} [feeCurrency] PrivateDealsV3Api feeCurrency
         * @property {number|null} [time] PrivateDealsV3Api time
         */

        /**
         * Constructs a new PrivateDealsV3Api.
         * @memberof mexc
         * @classdesc Represents a PrivateDealsV3Api.
         * @implements IPrivateDealsV3Api
         * @constructor
         * @param {mexc.IPrivateDealsV3Api=} [properties] Properties to set
         */
        function PrivateDealsV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateDealsV3Api price.
         * @member {string} price
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.price = "";

        /**
         * PrivateDealsV3Api quantity.
         * @member {string} quantity
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.quantity = "";

        /**
         * PrivateDealsV3Api amount.
         * @member {string} amount
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.amount = "";

        /**
         * PrivateDealsV3Api tradeType.
         * @member {number} tradeType
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.tradeType = 0;

        /**
         * PrivateDealsV3Api isMaker.
         * @member {boolean} isMaker
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.isMaker = false;

        /**
         * PrivateDealsV3Api isSelfTrade.
         * @member {boolean} isSelfTrade
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.isSelfTrade = false;

        /**
         * PrivateDealsV3Api tradeId.
         * @member {string} tradeId
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.tradeId = "";

        /**
         * PrivateDealsV3Api clientOrderId.
         * @member {string} clientOrderId
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.clientOrderId = "";

        /**
         * PrivateDealsV3Api orderId.
         * @member {string} orderId
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.orderId = "";

        /**
         * PrivateDealsV3Api feeAmount.
         * @member {string} feeAmount
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.feeAmount = "";

        /**
         * PrivateDealsV3Api feeCurrency.
         * @member {string} feeCurrency
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.feeCurrency = "";

        /**
         * PrivateDealsV3Api time.
         * @member {number} time
         * @memberof mexc.PrivateDealsV3Api
         * @instance
         */
        PrivateDealsV3Api.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PrivateDealsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {mexc.IPrivateDealsV3Api=} [properties] Properties to set
         * @returns {mexc.PrivateDealsV3Api} PrivateDealsV3Api instance
         */
        PrivateDealsV3Api.create = function create(properties) {
            return new PrivateDealsV3Api(properties);
        };

        /**
         * Encodes the specified PrivateDealsV3Api message. Does not implicitly {@link mexc.PrivateDealsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {mexc.IPrivateDealsV3Api} message PrivateDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateDealsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.amount);
            if (message.tradeType != null && Object.hasOwnProperty.call(message, "tradeType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tradeType);
            if (message.isMaker != null && Object.hasOwnProperty.call(message, "isMaker"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isMaker);
            if (message.isSelfTrade != null && Object.hasOwnProperty.call(message, "isSelfTrade"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isSelfTrade);
            if (message.tradeId != null && Object.hasOwnProperty.call(message, "tradeId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.tradeId);
            if (message.clientOrderId != null && Object.hasOwnProperty.call(message, "clientOrderId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.clientOrderId);
            if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.orderId);
            if (message.feeAmount != null && Object.hasOwnProperty.call(message, "feeAmount"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.feeAmount);
            if (message.feeCurrency != null && Object.hasOwnProperty.call(message, "feeCurrency"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.feeCurrency);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified PrivateDealsV3Api message, length delimited. Does not implicitly {@link mexc.PrivateDealsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {mexc.IPrivateDealsV3Api} message PrivateDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateDealsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateDealsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PrivateDealsV3Api} PrivateDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateDealsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PrivateDealsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                case 3: {
                        message.amount = reader.string();
                        break;
                    }
                case 4: {
                        message.tradeType = reader.int32();
                        break;
                    }
                case 5: {
                        message.isMaker = reader.bool();
                        break;
                    }
                case 6: {
                        message.isSelfTrade = reader.bool();
                        break;
                    }
                case 7: {
                        message.tradeId = reader.string();
                        break;
                    }
                case 8: {
                        message.clientOrderId = reader.string();
                        break;
                    }
                case 9: {
                        message.orderId = reader.string();
                        break;
                    }
                case 10: {
                        message.feeAmount = reader.string();
                        break;
                    }
                case 11: {
                        message.feeCurrency = reader.string();
                        break;
                    }
                case 12: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateDealsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PrivateDealsV3Api} PrivateDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateDealsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PrivateDealsV3Api
         * @function getTypeUrl
         * @memberof mexc.PrivateDealsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivateDealsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PrivateDealsV3Api";
        };

        return PrivateDealsV3Api;
    })();

    mexc.PrivateOrdersV3Api = (function() {

        /**
         * Properties of a PrivateOrdersV3Api.
         * @memberof mexc
         * @interface IPrivateOrdersV3Api
         * @property {string|null} [id] PrivateOrdersV3Api id
         * @property {string|null} [clientId] PrivateOrdersV3Api clientId
         * @property {string|null} [price] PrivateOrdersV3Api price
         * @property {string|null} [quantity] PrivateOrdersV3Api quantity
         * @property {string|null} [amount] PrivateOrdersV3Api amount
         * @property {string|null} [avgPrice] PrivateOrdersV3Api avgPrice
         * @property {number|null} [orderType] PrivateOrdersV3Api orderType
         * @property {number|null} [tradeType] PrivateOrdersV3Api tradeType
         * @property {boolean|null} [isMaker] PrivateOrdersV3Api isMaker
         * @property {string|null} [remainAmount] PrivateOrdersV3Api remainAmount
         * @property {string|null} [remainQuantity] PrivateOrdersV3Api remainQuantity
         * @property {string|null} [lastDealQuantity] PrivateOrdersV3Api lastDealQuantity
         * @property {string|null} [cumulativeQuantity] PrivateOrdersV3Api cumulativeQuantity
         * @property {string|null} [cumulativeAmount] PrivateOrdersV3Api cumulativeAmount
         * @property {number|null} [status] PrivateOrdersV3Api status
         * @property {number|null} [createTime] PrivateOrdersV3Api createTime
         * @property {string|null} [market] PrivateOrdersV3Api market
         * @property {number|null} [triggerType] PrivateOrdersV3Api triggerType
         * @property {string|null} [triggerPrice] PrivateOrdersV3Api triggerPrice
         * @property {number|null} [state] PrivateOrdersV3Api state
         * @property {string|null} [ocoId] PrivateOrdersV3Api ocoId
         * @property {string|null} [routeFactor] PrivateOrdersV3Api routeFactor
         * @property {string|null} [symbolId] PrivateOrdersV3Api symbolId
         * @property {string|null} [marketId] PrivateOrdersV3Api marketId
         * @property {string|null} [marketCurrencyId] PrivateOrdersV3Api marketCurrencyId
         * @property {string|null} [currencyId] PrivateOrdersV3Api currencyId
         */

        /**
         * Constructs a new PrivateOrdersV3Api.
         * @memberof mexc
         * @classdesc Represents a PrivateOrdersV3Api.
         * @implements IPrivateOrdersV3Api
         * @constructor
         * @param {mexc.IPrivateOrdersV3Api=} [properties] Properties to set
         */
        function PrivateOrdersV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateOrdersV3Api id.
         * @member {string} id
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.id = "";

        /**
         * PrivateOrdersV3Api clientId.
         * @member {string} clientId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.clientId = "";

        /**
         * PrivateOrdersV3Api price.
         * @member {string} price
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.price = "";

        /**
         * PrivateOrdersV3Api quantity.
         * @member {string} quantity
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.quantity = "";

        /**
         * PrivateOrdersV3Api amount.
         * @member {string} amount
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.amount = "";

        /**
         * PrivateOrdersV3Api avgPrice.
         * @member {string} avgPrice
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.avgPrice = "";

        /**
         * PrivateOrdersV3Api orderType.
         * @member {number} orderType
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.orderType = 0;

        /**
         * PrivateOrdersV3Api tradeType.
         * @member {number} tradeType
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.tradeType = 0;

        /**
         * PrivateOrdersV3Api isMaker.
         * @member {boolean} isMaker
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.isMaker = false;

        /**
         * PrivateOrdersV3Api remainAmount.
         * @member {string} remainAmount
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.remainAmount = "";

        /**
         * PrivateOrdersV3Api remainQuantity.
         * @member {string} remainQuantity
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.remainQuantity = "";

        /**
         * PrivateOrdersV3Api lastDealQuantity.
         * @member {string} lastDealQuantity
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.lastDealQuantity = "";

        /**
         * PrivateOrdersV3Api cumulativeQuantity.
         * @member {string} cumulativeQuantity
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.cumulativeQuantity = "";

        /**
         * PrivateOrdersV3Api cumulativeAmount.
         * @member {string} cumulativeAmount
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.cumulativeAmount = "";

        /**
         * PrivateOrdersV3Api status.
         * @member {number} status
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.status = 0;

        /**
         * PrivateOrdersV3Api createTime.
         * @member {number} createTime
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PrivateOrdersV3Api market.
         * @member {string} market
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.market = "";

        /**
         * PrivateOrdersV3Api triggerType.
         * @member {number} triggerType
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.triggerType = 0;

        /**
         * PrivateOrdersV3Api triggerPrice.
         * @member {string} triggerPrice
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.triggerPrice = "";

        /**
         * PrivateOrdersV3Api state.
         * @member {number} state
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.state = 0;

        /**
         * PrivateOrdersV3Api ocoId.
         * @member {string} ocoId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.ocoId = "";

        /**
         * PrivateOrdersV3Api routeFactor.
         * @member {string} routeFactor
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.routeFactor = "";

        /**
         * PrivateOrdersV3Api symbolId.
         * @member {string} symbolId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.symbolId = "";

        /**
         * PrivateOrdersV3Api marketId.
         * @member {string} marketId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.marketId = "";

        /**
         * PrivateOrdersV3Api marketCurrencyId.
         * @member {string} marketCurrencyId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.marketCurrencyId = "";

        /**
         * PrivateOrdersV3Api currencyId.
         * @member {string} currencyId
         * @memberof mexc.PrivateOrdersV3Api
         * @instance
         */
        PrivateOrdersV3Api.prototype.currencyId = "";

        /**
         * Creates a new PrivateOrdersV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {mexc.IPrivateOrdersV3Api=} [properties] Properties to set
         * @returns {mexc.PrivateOrdersV3Api} PrivateOrdersV3Api instance
         */
        PrivateOrdersV3Api.create = function create(properties) {
            return new PrivateOrdersV3Api(properties);
        };

        /**
         * Encodes the specified PrivateOrdersV3Api message. Does not implicitly {@link mexc.PrivateOrdersV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {mexc.IPrivateOrdersV3Api} message PrivateOrdersV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateOrdersV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientId);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.quantity);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount);
            if (message.avgPrice != null && Object.hasOwnProperty.call(message, "avgPrice"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.avgPrice);
            if (message.orderType != null && Object.hasOwnProperty.call(message, "orderType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.orderType);
            if (message.tradeType != null && Object.hasOwnProperty.call(message, "tradeType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.tradeType);
            if (message.isMaker != null && Object.hasOwnProperty.call(message, "isMaker"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isMaker);
            if (message.remainAmount != null && Object.hasOwnProperty.call(message, "remainAmount"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.remainAmount);
            if (message.remainQuantity != null && Object.hasOwnProperty.call(message, "remainQuantity"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.remainQuantity);
            if (message.lastDealQuantity != null && Object.hasOwnProperty.call(message, "lastDealQuantity"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.lastDealQuantity);
            if (message.cumulativeQuantity != null && Object.hasOwnProperty.call(message, "cumulativeQuantity"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.cumulativeQuantity);
            if (message.cumulativeAmount != null && Object.hasOwnProperty.call(message, "cumulativeAmount"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.cumulativeAmount);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.status);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.createTime);
            if (message.market != null && Object.hasOwnProperty.call(message, "market"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.market);
            if (message.triggerType != null && Object.hasOwnProperty.call(message, "triggerType"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.triggerType);
            if (message.triggerPrice != null && Object.hasOwnProperty.call(message, "triggerPrice"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.triggerPrice);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.state);
            if (message.ocoId != null && Object.hasOwnProperty.call(message, "ocoId"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.ocoId);
            if (message.routeFactor != null && Object.hasOwnProperty.call(message, "routeFactor"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.routeFactor);
            if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.symbolId);
            if (message.marketId != null && Object.hasOwnProperty.call(message, "marketId"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.marketId);
            if (message.marketCurrencyId != null && Object.hasOwnProperty.call(message, "marketCurrencyId"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.marketCurrencyId);
            if (message.currencyId != null && Object.hasOwnProperty.call(message, "currencyId"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.currencyId);
            return writer;
        };

        /**
         * Encodes the specified PrivateOrdersV3Api message, length delimited. Does not implicitly {@link mexc.PrivateOrdersV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {mexc.IPrivateOrdersV3Api} message PrivateOrdersV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateOrdersV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateOrdersV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PrivateOrdersV3Api} PrivateOrdersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateOrdersV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PrivateOrdersV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.clientId = reader.string();
                        break;
                    }
                case 3: {
                        message.price = reader.string();
                        break;
                    }
                case 4: {
                        message.quantity = reader.string();
                        break;
                    }
                case 5: {
                        message.amount = reader.string();
                        break;
                    }
                case 6: {
                        message.avgPrice = reader.string();
                        break;
                    }
                case 7: {
                        message.orderType = reader.int32();
                        break;
                    }
                case 8: {
                        message.tradeType = reader.int32();
                        break;
                    }
                case 9: {
                        message.isMaker = reader.bool();
                        break;
                    }
                case 10: {
                        message.remainAmount = reader.string();
                        break;
                    }
                case 11: {
                        message.remainQuantity = reader.string();
                        break;
                    }
                case 12: {
                        message.lastDealQuantity = reader.string();
                        break;
                    }
                case 13: {
                        message.cumulativeQuantity = reader.string();
                        break;
                    }
                case 14: {
                        message.cumulativeAmount = reader.string();
                        break;
                    }
                case 15: {
                        message.status = reader.int32();
                        break;
                    }
                case 16: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 17: {
                        message.market = reader.string();
                        break;
                    }
                case 18: {
                        message.triggerType = reader.int32();
                        break;
                    }
                case 19: {
                        message.triggerPrice = reader.string();
                        break;
                    }
                case 20: {
                        message.state = reader.int32();
                        break;
                    }
                case 21: {
                        message.ocoId = reader.string();
                        break;
                    }
                case 22: {
                        message.routeFactor = reader.string();
                        break;
                    }
                case 23: {
                        message.symbolId = reader.string();
                        break;
                    }
                case 24: {
                        message.marketId = reader.string();
                        break;
                    }
                case 25: {
                        message.marketCurrencyId = reader.string();
                        break;
                    }
                case 26: {
                        message.currencyId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateOrdersV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PrivateOrdersV3Api} PrivateOrdersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateOrdersV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PrivateOrdersV3Api
         * @function getTypeUrl
         * @memberof mexc.PrivateOrdersV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivateOrdersV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PrivateOrdersV3Api";
        };

        return PrivateOrdersV3Api;
    })();

    mexc.PublicAggreBookTickerV3Api = (function() {

        /**
         * Properties of a PublicAggreBookTickerV3Api.
         * @memberof mexc
         * @interface IPublicAggreBookTickerV3Api
         * @property {string|null} [bidPrice] PublicAggreBookTickerV3Api bidPrice
         * @property {string|null} [bidQuantity] PublicAggreBookTickerV3Api bidQuantity
         * @property {string|null} [askPrice] PublicAggreBookTickerV3Api askPrice
         * @property {string|null} [askQuantity] PublicAggreBookTickerV3Api askQuantity
         */

        /**
         * Constructs a new PublicAggreBookTickerV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicAggreBookTickerV3Api.
         * @implements IPublicAggreBookTickerV3Api
         * @constructor
         * @param {mexc.IPublicAggreBookTickerV3Api=} [properties] Properties to set
         */
        function PublicAggreBookTickerV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicAggreBookTickerV3Api bidPrice.
         * @member {string} bidPrice
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @instance
         */
        PublicAggreBookTickerV3Api.prototype.bidPrice = "";

        /**
         * PublicAggreBookTickerV3Api bidQuantity.
         * @member {string} bidQuantity
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @instance
         */
        PublicAggreBookTickerV3Api.prototype.bidQuantity = "";

        /**
         * PublicAggreBookTickerV3Api askPrice.
         * @member {string} askPrice
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @instance
         */
        PublicAggreBookTickerV3Api.prototype.askPrice = "";

        /**
         * PublicAggreBookTickerV3Api askQuantity.
         * @member {string} askQuantity
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @instance
         */
        PublicAggreBookTickerV3Api.prototype.askQuantity = "";

        /**
         * Creates a new PublicAggreBookTickerV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {mexc.IPublicAggreBookTickerV3Api=} [properties] Properties to set
         * @returns {mexc.PublicAggreBookTickerV3Api} PublicAggreBookTickerV3Api instance
         */
        PublicAggreBookTickerV3Api.create = function create(properties) {
            return new PublicAggreBookTickerV3Api(properties);
        };

        /**
         * Encodes the specified PublicAggreBookTickerV3Api message. Does not implicitly {@link mexc.PublicAggreBookTickerV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {mexc.IPublicAggreBookTickerV3Api} message PublicAggreBookTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreBookTickerV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bidPrice != null && Object.hasOwnProperty.call(message, "bidPrice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bidPrice);
            if (message.bidQuantity != null && Object.hasOwnProperty.call(message, "bidQuantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bidQuantity);
            if (message.askPrice != null && Object.hasOwnProperty.call(message, "askPrice"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.askPrice);
            if (message.askQuantity != null && Object.hasOwnProperty.call(message, "askQuantity"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.askQuantity);
            return writer;
        };

        /**
         * Encodes the specified PublicAggreBookTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreBookTickerV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {mexc.IPublicAggreBookTickerV3Api} message PublicAggreBookTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreBookTickerV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicAggreBookTickerV3Api} PublicAggreBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreBookTickerV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicAggreBookTickerV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bidPrice = reader.string();
                        break;
                    }
                case 2: {
                        message.bidQuantity = reader.string();
                        break;
                    }
                case 3: {
                        message.askPrice = reader.string();
                        break;
                    }
                case 4: {
                        message.askQuantity = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicAggreBookTickerV3Api} PublicAggreBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreBookTickerV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicAggreBookTickerV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicAggreBookTickerV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicAggreBookTickerV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicAggreBookTickerV3Api";
        };

        return PublicAggreBookTickerV3Api;
    })();

    mexc.PublicAggreDealsV3Api = (function() {

        /**
         * Properties of a PublicAggreDealsV3Api.
         * @memberof mexc
         * @interface IPublicAggreDealsV3Api
         * @property {Array.<mexc.IPublicAggreDealsV3ApiItem>|null} [deals] PublicAggreDealsV3Api deals
         * @property {string|null} [eventType] PublicAggreDealsV3Api eventType
         */

        /**
         * Constructs a new PublicAggreDealsV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicAggreDealsV3Api.
         * @implements IPublicAggreDealsV3Api
         * @constructor
         * @param {mexc.IPublicAggreDealsV3Api=} [properties] Properties to set
         */
        function PublicAggreDealsV3Api(properties) {
            this.deals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicAggreDealsV3Api deals.
         * @member {Array.<mexc.IPublicAggreDealsV3ApiItem>} deals
         * @memberof mexc.PublicAggreDealsV3Api
         * @instance
         */
        PublicAggreDealsV3Api.prototype.deals = $util.emptyArray;

        /**
         * PublicAggreDealsV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicAggreDealsV3Api
         * @instance
         */
        PublicAggreDealsV3Api.prototype.eventType = "";

        /**
         * Creates a new PublicAggreDealsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {mexc.IPublicAggreDealsV3Api=} [properties] Properties to set
         * @returns {mexc.PublicAggreDealsV3Api} PublicAggreDealsV3Api instance
         */
        PublicAggreDealsV3Api.create = function create(properties) {
            return new PublicAggreDealsV3Api(properties);
        };

        /**
         * Encodes the specified PublicAggreDealsV3Api message. Does not implicitly {@link mexc.PublicAggreDealsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {mexc.IPublicAggreDealsV3Api} message PublicAggreDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDealsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deals != null && message.deals.length)
                for (var i = 0; i < message.deals.length; ++i)
                    $root.mexc.PublicAggreDealsV3ApiItem.encode(message.deals[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventType);
            return writer;
        };

        /**
         * Encodes the specified PublicAggreDealsV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreDealsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {mexc.IPublicAggreDealsV3Api} message PublicAggreDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDealsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicAggreDealsV3Api} PublicAggreDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDealsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicAggreDealsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.deals && message.deals.length))
                            message.deals = [];
                        message.deals.push($root.mexc.PublicAggreDealsV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.eventType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicAggreDealsV3Api} PublicAggreDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDealsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicAggreDealsV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicAggreDealsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicAggreDealsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicAggreDealsV3Api";
        };

        return PublicAggreDealsV3Api;
    })();

    mexc.PublicAggreDealsV3ApiItem = (function() {

        /**
         * Properties of a PublicAggreDealsV3ApiItem.
         * @memberof mexc
         * @interface IPublicAggreDealsV3ApiItem
         * @property {string|null} [price] PublicAggreDealsV3ApiItem price
         * @property {string|null} [quantity] PublicAggreDealsV3ApiItem quantity
         * @property {number|null} [tradeType] PublicAggreDealsV3ApiItem tradeType
         * @property {number|null} [time] PublicAggreDealsV3ApiItem time
         */

        /**
         * Constructs a new PublicAggreDealsV3ApiItem.
         * @memberof mexc
         * @classdesc Represents a PublicAggreDealsV3ApiItem.
         * @implements IPublicAggreDealsV3ApiItem
         * @constructor
         * @param {mexc.IPublicAggreDealsV3ApiItem=} [properties] Properties to set
         */
        function PublicAggreDealsV3ApiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicAggreDealsV3ApiItem price.
         * @member {string} price
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @instance
         */
        PublicAggreDealsV3ApiItem.prototype.price = "";

        /**
         * PublicAggreDealsV3ApiItem quantity.
         * @member {string} quantity
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @instance
         */
        PublicAggreDealsV3ApiItem.prototype.quantity = "";

        /**
         * PublicAggreDealsV3ApiItem tradeType.
         * @member {number} tradeType
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @instance
         */
        PublicAggreDealsV3ApiItem.prototype.tradeType = 0;

        /**
         * PublicAggreDealsV3ApiItem time.
         * @member {number} time
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @instance
         */
        PublicAggreDealsV3ApiItem.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PublicAggreDealsV3ApiItem instance using the specified properties.
         * @function create
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDealsV3ApiItem=} [properties] Properties to set
         * @returns {mexc.PublicAggreDealsV3ApiItem} PublicAggreDealsV3ApiItem instance
         */
        PublicAggreDealsV3ApiItem.create = function create(properties) {
            return new PublicAggreDealsV3ApiItem(properties);
        };

        /**
         * Encodes the specified PublicAggreDealsV3ApiItem message. Does not implicitly {@link mexc.PublicAggreDealsV3ApiItem.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDealsV3ApiItem} message PublicAggreDealsV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDealsV3ApiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            if (message.tradeType != null && Object.hasOwnProperty.call(message, "tradeType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tradeType);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified PublicAggreDealsV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicAggreDealsV3ApiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDealsV3ApiItem} message PublicAggreDealsV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDealsV3ApiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicAggreDealsV3ApiItem} PublicAggreDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDealsV3ApiItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicAggreDealsV3ApiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                case 3: {
                        message.tradeType = reader.int32();
                        break;
                    }
                case 4: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicAggreDealsV3ApiItem} PublicAggreDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDealsV3ApiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicAggreDealsV3ApiItem
         * @function getTypeUrl
         * @memberof mexc.PublicAggreDealsV3ApiItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicAggreDealsV3ApiItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicAggreDealsV3ApiItem";
        };

        return PublicAggreDealsV3ApiItem;
    })();

    mexc.PublicAggreDepthsV3Api = (function() {

        /**
         * Properties of a PublicAggreDepthsV3Api.
         * @memberof mexc
         * @interface IPublicAggreDepthsV3Api
         * @property {Array.<mexc.IPublicAggreDepthV3ApiItem>|null} [asks] PublicAggreDepthsV3Api asks
         * @property {Array.<mexc.IPublicAggreDepthV3ApiItem>|null} [bids] PublicAggreDepthsV3Api bids
         * @property {string|null} [eventType] PublicAggreDepthsV3Api eventType
         * @property {string|null} [fromVersion] PublicAggreDepthsV3Api fromVersion
         * @property {string|null} [toVersion] PublicAggreDepthsV3Api toVersion
         */

        /**
         * Constructs a new PublicAggreDepthsV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicAggreDepthsV3Api.
         * @implements IPublicAggreDepthsV3Api
         * @constructor
         * @param {mexc.IPublicAggreDepthsV3Api=} [properties] Properties to set
         */
        function PublicAggreDepthsV3Api(properties) {
            this.asks = [];
            this.bids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicAggreDepthsV3Api asks.
         * @member {Array.<mexc.IPublicAggreDepthV3ApiItem>} asks
         * @memberof mexc.PublicAggreDepthsV3Api
         * @instance
         */
        PublicAggreDepthsV3Api.prototype.asks = $util.emptyArray;

        /**
         * PublicAggreDepthsV3Api bids.
         * @member {Array.<mexc.IPublicAggreDepthV3ApiItem>} bids
         * @memberof mexc.PublicAggreDepthsV3Api
         * @instance
         */
        PublicAggreDepthsV3Api.prototype.bids = $util.emptyArray;

        /**
         * PublicAggreDepthsV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicAggreDepthsV3Api
         * @instance
         */
        PublicAggreDepthsV3Api.prototype.eventType = "";

        /**
         * PublicAggreDepthsV3Api fromVersion.
         * @member {string} fromVersion
         * @memberof mexc.PublicAggreDepthsV3Api
         * @instance
         */
        PublicAggreDepthsV3Api.prototype.fromVersion = "";

        /**
         * PublicAggreDepthsV3Api toVersion.
         * @member {string} toVersion
         * @memberof mexc.PublicAggreDepthsV3Api
         * @instance
         */
        PublicAggreDepthsV3Api.prototype.toVersion = "";

        /**
         * Creates a new PublicAggreDepthsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {mexc.IPublicAggreDepthsV3Api=} [properties] Properties to set
         * @returns {mexc.PublicAggreDepthsV3Api} PublicAggreDepthsV3Api instance
         */
        PublicAggreDepthsV3Api.create = function create(properties) {
            return new PublicAggreDepthsV3Api(properties);
        };

        /**
         * Encodes the specified PublicAggreDepthsV3Api message. Does not implicitly {@link mexc.PublicAggreDepthsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {mexc.IPublicAggreDepthsV3Api} message PublicAggreDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDepthsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asks != null && message.asks.length)
                for (var i = 0; i < message.asks.length; ++i)
                    $root.mexc.PublicAggreDepthV3ApiItem.encode(message.asks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bids != null && message.bids.length)
                for (var i = 0; i < message.bids.length; ++i)
                    $root.mexc.PublicAggreDepthV3ApiItem.encode(message.bids[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventType);
            if (message.fromVersion != null && Object.hasOwnProperty.call(message, "fromVersion"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.fromVersion);
            if (message.toVersion != null && Object.hasOwnProperty.call(message, "toVersion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.toVersion);
            return writer;
        };

        /**
         * Encodes the specified PublicAggreDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreDepthsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {mexc.IPublicAggreDepthsV3Api} message PublicAggreDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDepthsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicAggreDepthsV3Api} PublicAggreDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDepthsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicAggreDepthsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.asks && message.asks.length))
                            message.asks = [];
                        message.asks.push($root.mexc.PublicAggreDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.bids && message.bids.length))
                            message.bids = [];
                        message.bids.push($root.mexc.PublicAggreDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.eventType = reader.string();
                        break;
                    }
                case 4: {
                        message.fromVersion = reader.string();
                        break;
                    }
                case 5: {
                        message.toVersion = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicAggreDepthsV3Api} PublicAggreDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDepthsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicAggreDepthsV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicAggreDepthsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicAggreDepthsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicAggreDepthsV3Api";
        };

        return PublicAggreDepthsV3Api;
    })();

    mexc.PublicAggreDepthV3ApiItem = (function() {

        /**
         * Properties of a PublicAggreDepthV3ApiItem.
         * @memberof mexc
         * @interface IPublicAggreDepthV3ApiItem
         * @property {string|null} [price] PublicAggreDepthV3ApiItem price
         * @property {string|null} [quantity] PublicAggreDepthV3ApiItem quantity
         */

        /**
         * Constructs a new PublicAggreDepthV3ApiItem.
         * @memberof mexc
         * @classdesc Represents a PublicAggreDepthV3ApiItem.
         * @implements IPublicAggreDepthV3ApiItem
         * @constructor
         * @param {mexc.IPublicAggreDepthV3ApiItem=} [properties] Properties to set
         */
        function PublicAggreDepthV3ApiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicAggreDepthV3ApiItem price.
         * @member {string} price
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @instance
         */
        PublicAggreDepthV3ApiItem.prototype.price = "";

        /**
         * PublicAggreDepthV3ApiItem quantity.
         * @member {string} quantity
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @instance
         */
        PublicAggreDepthV3ApiItem.prototype.quantity = "";

        /**
         * Creates a new PublicAggreDepthV3ApiItem instance using the specified properties.
         * @function create
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDepthV3ApiItem=} [properties] Properties to set
         * @returns {mexc.PublicAggreDepthV3ApiItem} PublicAggreDepthV3ApiItem instance
         */
        PublicAggreDepthV3ApiItem.create = function create(properties) {
            return new PublicAggreDepthV3ApiItem(properties);
        };

        /**
         * Encodes the specified PublicAggreDepthV3ApiItem message. Does not implicitly {@link mexc.PublicAggreDepthV3ApiItem.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDepthV3ApiItem} message PublicAggreDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDepthV3ApiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified PublicAggreDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicAggreDepthV3ApiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {mexc.IPublicAggreDepthV3ApiItem} message PublicAggreDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicAggreDepthV3ApiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicAggreDepthV3ApiItem} PublicAggreDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDepthV3ApiItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicAggreDepthV3ApiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicAggreDepthV3ApiItem} PublicAggreDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicAggreDepthV3ApiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicAggreDepthV3ApiItem
         * @function getTypeUrl
         * @memberof mexc.PublicAggreDepthV3ApiItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicAggreDepthV3ApiItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicAggreDepthV3ApiItem";
        };

        return PublicAggreDepthV3ApiItem;
    })();

    mexc.PublicBookTickerBatchV3Api = (function() {

        /**
         * Properties of a PublicBookTickerBatchV3Api.
         * @memberof mexc
         * @interface IPublicBookTickerBatchV3Api
         * @property {Array.<mexc.IPublicBookTickerV3Api>|null} [items] PublicBookTickerBatchV3Api items
         */

        /**
         * Constructs a new PublicBookTickerBatchV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicBookTickerBatchV3Api.
         * @implements IPublicBookTickerBatchV3Api
         * @constructor
         * @param {mexc.IPublicBookTickerBatchV3Api=} [properties] Properties to set
         */
        function PublicBookTickerBatchV3Api(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicBookTickerBatchV3Api items.
         * @member {Array.<mexc.IPublicBookTickerV3Api>} items
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @instance
         */
        PublicBookTickerBatchV3Api.prototype.items = $util.emptyArray;

        /**
         * Creates a new PublicBookTickerBatchV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {mexc.IPublicBookTickerBatchV3Api=} [properties] Properties to set
         * @returns {mexc.PublicBookTickerBatchV3Api} PublicBookTickerBatchV3Api instance
         */
        PublicBookTickerBatchV3Api.create = function create(properties) {
            return new PublicBookTickerBatchV3Api(properties);
        };

        /**
         * Encodes the specified PublicBookTickerBatchV3Api message. Does not implicitly {@link mexc.PublicBookTickerBatchV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {mexc.IPublicBookTickerBatchV3Api} message PublicBookTickerBatchV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicBookTickerBatchV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.mexc.PublicBookTickerV3Api.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PublicBookTickerBatchV3Api message, length delimited. Does not implicitly {@link mexc.PublicBookTickerBatchV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {mexc.IPublicBookTickerBatchV3Api} message PublicBookTickerBatchV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicBookTickerBatchV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicBookTickerBatchV3Api} PublicBookTickerBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicBookTickerBatchV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicBookTickerBatchV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.mexc.PublicBookTickerV3Api.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicBookTickerBatchV3Api} PublicBookTickerBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicBookTickerBatchV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicBookTickerBatchV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicBookTickerBatchV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicBookTickerBatchV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicBookTickerBatchV3Api";
        };

        return PublicBookTickerBatchV3Api;
    })();

    mexc.PublicBookTickerV3Api = (function() {

        /**
         * Properties of a PublicBookTickerV3Api.
         * @memberof mexc
         * @interface IPublicBookTickerV3Api
         * @property {string|null} [bidPrice] PublicBookTickerV3Api bidPrice
         * @property {string|null} [bidQuantity] PublicBookTickerV3Api bidQuantity
         * @property {string|null} [askPrice] PublicBookTickerV3Api askPrice
         * @property {string|null} [askQuantity] PublicBookTickerV3Api askQuantity
         */

        /**
         * Constructs a new PublicBookTickerV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicBookTickerV3Api.
         * @implements IPublicBookTickerV3Api
         * @constructor
         * @param {mexc.IPublicBookTickerV3Api=} [properties] Properties to set
         */
        function PublicBookTickerV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicBookTickerV3Api bidPrice.
         * @member {string} bidPrice
         * @memberof mexc.PublicBookTickerV3Api
         * @instance
         */
        PublicBookTickerV3Api.prototype.bidPrice = "";

        /**
         * PublicBookTickerV3Api bidQuantity.
         * @member {string} bidQuantity
         * @memberof mexc.PublicBookTickerV3Api
         * @instance
         */
        PublicBookTickerV3Api.prototype.bidQuantity = "";

        /**
         * PublicBookTickerV3Api askPrice.
         * @member {string} askPrice
         * @memberof mexc.PublicBookTickerV3Api
         * @instance
         */
        PublicBookTickerV3Api.prototype.askPrice = "";

        /**
         * PublicBookTickerV3Api askQuantity.
         * @member {string} askQuantity
         * @memberof mexc.PublicBookTickerV3Api
         * @instance
         */
        PublicBookTickerV3Api.prototype.askQuantity = "";

        /**
         * Creates a new PublicBookTickerV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {mexc.IPublicBookTickerV3Api=} [properties] Properties to set
         * @returns {mexc.PublicBookTickerV3Api} PublicBookTickerV3Api instance
         */
        PublicBookTickerV3Api.create = function create(properties) {
            return new PublicBookTickerV3Api(properties);
        };

        /**
         * Encodes the specified PublicBookTickerV3Api message. Does not implicitly {@link mexc.PublicBookTickerV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {mexc.IPublicBookTickerV3Api} message PublicBookTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicBookTickerV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bidPrice != null && Object.hasOwnProperty.call(message, "bidPrice"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bidPrice);
            if (message.bidQuantity != null && Object.hasOwnProperty.call(message, "bidQuantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bidQuantity);
            if (message.askPrice != null && Object.hasOwnProperty.call(message, "askPrice"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.askPrice);
            if (message.askQuantity != null && Object.hasOwnProperty.call(message, "askQuantity"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.askQuantity);
            return writer;
        };

        /**
         * Encodes the specified PublicBookTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicBookTickerV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {mexc.IPublicBookTickerV3Api} message PublicBookTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicBookTickerV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicBookTickerV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicBookTickerV3Api} PublicBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicBookTickerV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicBookTickerV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bidPrice = reader.string();
                        break;
                    }
                case 2: {
                        message.bidQuantity = reader.string();
                        break;
                    }
                case 3: {
                        message.askPrice = reader.string();
                        break;
                    }
                case 4: {
                        message.askQuantity = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicBookTickerV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicBookTickerV3Api} PublicBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicBookTickerV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicBookTickerV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicBookTickerV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicBookTickerV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicBookTickerV3Api";
        };

        return PublicBookTickerV3Api;
    })();

    mexc.PublicDealsV3Api = (function() {

        /**
         * Properties of a PublicDealsV3Api.
         * @memberof mexc
         * @interface IPublicDealsV3Api
         * @property {Array.<mexc.IPublicDealsV3ApiItem>|null} [deals] PublicDealsV3Api deals
         * @property {string|null} [eventType] PublicDealsV3Api eventType
         */

        /**
         * Constructs a new PublicDealsV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicDealsV3Api.
         * @implements IPublicDealsV3Api
         * @constructor
         * @param {mexc.IPublicDealsV3Api=} [properties] Properties to set
         */
        function PublicDealsV3Api(properties) {
            this.deals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicDealsV3Api deals.
         * @member {Array.<mexc.IPublicDealsV3ApiItem>} deals
         * @memberof mexc.PublicDealsV3Api
         * @instance
         */
        PublicDealsV3Api.prototype.deals = $util.emptyArray;

        /**
         * PublicDealsV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicDealsV3Api
         * @instance
         */
        PublicDealsV3Api.prototype.eventType = "";

        /**
         * Creates a new PublicDealsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {mexc.IPublicDealsV3Api=} [properties] Properties to set
         * @returns {mexc.PublicDealsV3Api} PublicDealsV3Api instance
         */
        PublicDealsV3Api.create = function create(properties) {
            return new PublicDealsV3Api(properties);
        };

        /**
         * Encodes the specified PublicDealsV3Api message. Does not implicitly {@link mexc.PublicDealsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {mexc.IPublicDealsV3Api} message PublicDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicDealsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deals != null && message.deals.length)
                for (var i = 0; i < message.deals.length; ++i)
                    $root.mexc.PublicDealsV3ApiItem.encode(message.deals[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventType);
            return writer;
        };

        /**
         * Encodes the specified PublicDealsV3Api message, length delimited. Does not implicitly {@link mexc.PublicDealsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {mexc.IPublicDealsV3Api} message PublicDealsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicDealsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicDealsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicDealsV3Api} PublicDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicDealsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicDealsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.deals && message.deals.length))
                            message.deals = [];
                        message.deals.push($root.mexc.PublicDealsV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.eventType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicDealsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicDealsV3Api} PublicDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicDealsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicDealsV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicDealsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicDealsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicDealsV3Api";
        };

        return PublicDealsV3Api;
    })();

    mexc.PublicDealsV3ApiItem = (function() {

        /**
         * Properties of a PublicDealsV3ApiItem.
         * @memberof mexc
         * @interface IPublicDealsV3ApiItem
         * @property {string|null} [price] PublicDealsV3ApiItem price
         * @property {string|null} [quantity] PublicDealsV3ApiItem quantity
         * @property {number|null} [tradeType] PublicDealsV3ApiItem tradeType
         * @property {number|null} [time] PublicDealsV3ApiItem time
         */

        /**
         * Constructs a new PublicDealsV3ApiItem.
         * @memberof mexc
         * @classdesc Represents a PublicDealsV3ApiItem.
         * @implements IPublicDealsV3ApiItem
         * @constructor
         * @param {mexc.IPublicDealsV3ApiItem=} [properties] Properties to set
         */
        function PublicDealsV3ApiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicDealsV3ApiItem price.
         * @member {string} price
         * @memberof mexc.PublicDealsV3ApiItem
         * @instance
         */
        PublicDealsV3ApiItem.prototype.price = "";

        /**
         * PublicDealsV3ApiItem quantity.
         * @member {string} quantity
         * @memberof mexc.PublicDealsV3ApiItem
         * @instance
         */
        PublicDealsV3ApiItem.prototype.quantity = "";

        /**
         * PublicDealsV3ApiItem tradeType.
         * @member {number} tradeType
         * @memberof mexc.PublicDealsV3ApiItem
         * @instance
         */
        PublicDealsV3ApiItem.prototype.tradeType = 0;

        /**
         * PublicDealsV3ApiItem time.
         * @member {number} time
         * @memberof mexc.PublicDealsV3ApiItem
         * @instance
         */
        PublicDealsV3ApiItem.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PublicDealsV3ApiItem instance using the specified properties.
         * @function create
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {mexc.IPublicDealsV3ApiItem=} [properties] Properties to set
         * @returns {mexc.PublicDealsV3ApiItem} PublicDealsV3ApiItem instance
         */
        PublicDealsV3ApiItem.create = function create(properties) {
            return new PublicDealsV3ApiItem(properties);
        };

        /**
         * Encodes the specified PublicDealsV3ApiItem message. Does not implicitly {@link mexc.PublicDealsV3ApiItem.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {mexc.IPublicDealsV3ApiItem} message PublicDealsV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicDealsV3ApiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            if (message.tradeType != null && Object.hasOwnProperty.call(message, "tradeType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tradeType);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.time);
            return writer;
        };

        /**
         * Encodes the specified PublicDealsV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicDealsV3ApiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {mexc.IPublicDealsV3ApiItem} message PublicDealsV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicDealsV3ApiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicDealsV3ApiItem} PublicDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicDealsV3ApiItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicDealsV3ApiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                case 3: {
                        message.tradeType = reader.int32();
                        break;
                    }
                case 4: {
                        message.time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicDealsV3ApiItem} PublicDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicDealsV3ApiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicDealsV3ApiItem
         * @function getTypeUrl
         * @memberof mexc.PublicDealsV3ApiItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicDealsV3ApiItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicDealsV3ApiItem";
        };

        return PublicDealsV3ApiItem;
    })();

    mexc.PublicIncreaseDepthsBatchV3Api = (function() {

        /**
         * Properties of a PublicIncreaseDepthsBatchV3Api.
         * @memberof mexc
         * @interface IPublicIncreaseDepthsBatchV3Api
         * @property {Array.<mexc.IPublicIncreaseDepthsV3Api>|null} [items] PublicIncreaseDepthsBatchV3Api items
         * @property {string|null} [eventType] PublicIncreaseDepthsBatchV3Api eventType
         */

        /**
         * Constructs a new PublicIncreaseDepthsBatchV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicIncreaseDepthsBatchV3Api.
         * @implements IPublicIncreaseDepthsBatchV3Api
         * @constructor
         * @param {mexc.IPublicIncreaseDepthsBatchV3Api=} [properties] Properties to set
         */
        function PublicIncreaseDepthsBatchV3Api(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicIncreaseDepthsBatchV3Api items.
         * @member {Array.<mexc.IPublicIncreaseDepthsV3Api>} items
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @instance
         */
        PublicIncreaseDepthsBatchV3Api.prototype.items = $util.emptyArray;

        /**
         * PublicIncreaseDepthsBatchV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @instance
         */
        PublicIncreaseDepthsBatchV3Api.prototype.eventType = "";

        /**
         * Creates a new PublicIncreaseDepthsBatchV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsBatchV3Api=} [properties] Properties to set
         * @returns {mexc.PublicIncreaseDepthsBatchV3Api} PublicIncreaseDepthsBatchV3Api instance
         */
        PublicIncreaseDepthsBatchV3Api.create = function create(properties) {
            return new PublicIncreaseDepthsBatchV3Api(properties);
        };

        /**
         * Encodes the specified PublicIncreaseDepthsBatchV3Api message. Does not implicitly {@link mexc.PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsBatchV3Api} message PublicIncreaseDepthsBatchV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthsBatchV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.mexc.PublicIncreaseDepthsV3Api.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventType);
            return writer;
        };

        /**
         * Encodes the specified PublicIncreaseDepthsBatchV3Api message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsBatchV3Api} message PublicIncreaseDepthsBatchV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthsBatchV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicIncreaseDepthsBatchV3Api} PublicIncreaseDepthsBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthsBatchV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicIncreaseDepthsBatchV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.mexc.PublicIncreaseDepthsV3Api.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.eventType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicIncreaseDepthsBatchV3Api} PublicIncreaseDepthsBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthsBatchV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicIncreaseDepthsBatchV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicIncreaseDepthsBatchV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicIncreaseDepthsBatchV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicIncreaseDepthsBatchV3Api";
        };

        return PublicIncreaseDepthsBatchV3Api;
    })();

    mexc.PublicIncreaseDepthsV3Api = (function() {

        /**
         * Properties of a PublicIncreaseDepthsV3Api.
         * @memberof mexc
         * @interface IPublicIncreaseDepthsV3Api
         * @property {Array.<mexc.IPublicIncreaseDepthV3ApiItem>|null} [asks] PublicIncreaseDepthsV3Api asks
         * @property {Array.<mexc.IPublicIncreaseDepthV3ApiItem>|null} [bids] PublicIncreaseDepthsV3Api bids
         * @property {string|null} [eventType] PublicIncreaseDepthsV3Api eventType
         * @property {string|null} [version] PublicIncreaseDepthsV3Api version
         */

        /**
         * Constructs a new PublicIncreaseDepthsV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicIncreaseDepthsV3Api.
         * @implements IPublicIncreaseDepthsV3Api
         * @constructor
         * @param {mexc.IPublicIncreaseDepthsV3Api=} [properties] Properties to set
         */
        function PublicIncreaseDepthsV3Api(properties) {
            this.asks = [];
            this.bids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicIncreaseDepthsV3Api asks.
         * @member {Array.<mexc.IPublicIncreaseDepthV3ApiItem>} asks
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @instance
         */
        PublicIncreaseDepthsV3Api.prototype.asks = $util.emptyArray;

        /**
         * PublicIncreaseDepthsV3Api bids.
         * @member {Array.<mexc.IPublicIncreaseDepthV3ApiItem>} bids
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @instance
         */
        PublicIncreaseDepthsV3Api.prototype.bids = $util.emptyArray;

        /**
         * PublicIncreaseDepthsV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @instance
         */
        PublicIncreaseDepthsV3Api.prototype.eventType = "";

        /**
         * PublicIncreaseDepthsV3Api version.
         * @member {string} version
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @instance
         */
        PublicIncreaseDepthsV3Api.prototype.version = "";

        /**
         * Creates a new PublicIncreaseDepthsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsV3Api=} [properties] Properties to set
         * @returns {mexc.PublicIncreaseDepthsV3Api} PublicIncreaseDepthsV3Api instance
         */
        PublicIncreaseDepthsV3Api.create = function create(properties) {
            return new PublicIncreaseDepthsV3Api(properties);
        };

        /**
         * Encodes the specified PublicIncreaseDepthsV3Api message. Does not implicitly {@link mexc.PublicIncreaseDepthsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsV3Api} message PublicIncreaseDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asks != null && message.asks.length)
                for (var i = 0; i < message.asks.length; ++i)
                    $root.mexc.PublicIncreaseDepthV3ApiItem.encode(message.asks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bids != null && message.bids.length)
                for (var i = 0; i < message.bids.length; ++i)
                    $root.mexc.PublicIncreaseDepthV3ApiItem.encode(message.bids[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventType);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified PublicIncreaseDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {mexc.IPublicIncreaseDepthsV3Api} message PublicIncreaseDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicIncreaseDepthsV3Api} PublicIncreaseDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicIncreaseDepthsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.asks && message.asks.length))
                            message.asks = [];
                        message.asks.push($root.mexc.PublicIncreaseDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.bids && message.bids.length))
                            message.bids = [];
                        message.bids.push($root.mexc.PublicIncreaseDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.eventType = reader.string();
                        break;
                    }
                case 4: {
                        message.version = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicIncreaseDepthsV3Api} PublicIncreaseDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicIncreaseDepthsV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicIncreaseDepthsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicIncreaseDepthsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicIncreaseDepthsV3Api";
        };

        return PublicIncreaseDepthsV3Api;
    })();

    mexc.PublicIncreaseDepthV3ApiItem = (function() {

        /**
         * Properties of a PublicIncreaseDepthV3ApiItem.
         * @memberof mexc
         * @interface IPublicIncreaseDepthV3ApiItem
         * @property {string|null} [price] PublicIncreaseDepthV3ApiItem price
         * @property {string|null} [quantity] PublicIncreaseDepthV3ApiItem quantity
         */

        /**
         * Constructs a new PublicIncreaseDepthV3ApiItem.
         * @memberof mexc
         * @classdesc Represents a PublicIncreaseDepthV3ApiItem.
         * @implements IPublicIncreaseDepthV3ApiItem
         * @constructor
         * @param {mexc.IPublicIncreaseDepthV3ApiItem=} [properties] Properties to set
         */
        function PublicIncreaseDepthV3ApiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicIncreaseDepthV3ApiItem price.
         * @member {string} price
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @instance
         */
        PublicIncreaseDepthV3ApiItem.prototype.price = "";

        /**
         * PublicIncreaseDepthV3ApiItem quantity.
         * @member {string} quantity
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @instance
         */
        PublicIncreaseDepthV3ApiItem.prototype.quantity = "";

        /**
         * Creates a new PublicIncreaseDepthV3ApiItem instance using the specified properties.
         * @function create
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {mexc.IPublicIncreaseDepthV3ApiItem=} [properties] Properties to set
         * @returns {mexc.PublicIncreaseDepthV3ApiItem} PublicIncreaseDepthV3ApiItem instance
         */
        PublicIncreaseDepthV3ApiItem.create = function create(properties) {
            return new PublicIncreaseDepthV3ApiItem(properties);
        };

        /**
         * Encodes the specified PublicIncreaseDepthV3ApiItem message. Does not implicitly {@link mexc.PublicIncreaseDepthV3ApiItem.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {mexc.IPublicIncreaseDepthV3ApiItem} message PublicIncreaseDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthV3ApiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified PublicIncreaseDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthV3ApiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {mexc.IPublicIncreaseDepthV3ApiItem} message PublicIncreaseDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicIncreaseDepthV3ApiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicIncreaseDepthV3ApiItem} PublicIncreaseDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthV3ApiItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicIncreaseDepthV3ApiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicIncreaseDepthV3ApiItem} PublicIncreaseDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicIncreaseDepthV3ApiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicIncreaseDepthV3ApiItem
         * @function getTypeUrl
         * @memberof mexc.PublicIncreaseDepthV3ApiItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicIncreaseDepthV3ApiItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicIncreaseDepthV3ApiItem";
        };

        return PublicIncreaseDepthV3ApiItem;
    })();

    mexc.PublicLimitDepthsV3Api = (function() {

        /**
         * Properties of a PublicLimitDepthsV3Api.
         * @memberof mexc
         * @interface IPublicLimitDepthsV3Api
         * @property {Array.<mexc.IPublicLimitDepthV3ApiItem>|null} [asks] PublicLimitDepthsV3Api asks
         * @property {Array.<mexc.IPublicLimitDepthV3ApiItem>|null} [bids] PublicLimitDepthsV3Api bids
         * @property {string|null} [eventType] PublicLimitDepthsV3Api eventType
         * @property {string|null} [version] PublicLimitDepthsV3Api version
         */

        /**
         * Constructs a new PublicLimitDepthsV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicLimitDepthsV3Api.
         * @implements IPublicLimitDepthsV3Api
         * @constructor
         * @param {mexc.IPublicLimitDepthsV3Api=} [properties] Properties to set
         */
        function PublicLimitDepthsV3Api(properties) {
            this.asks = [];
            this.bids = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicLimitDepthsV3Api asks.
         * @member {Array.<mexc.IPublicLimitDepthV3ApiItem>} asks
         * @memberof mexc.PublicLimitDepthsV3Api
         * @instance
         */
        PublicLimitDepthsV3Api.prototype.asks = $util.emptyArray;

        /**
         * PublicLimitDepthsV3Api bids.
         * @member {Array.<mexc.IPublicLimitDepthV3ApiItem>} bids
         * @memberof mexc.PublicLimitDepthsV3Api
         * @instance
         */
        PublicLimitDepthsV3Api.prototype.bids = $util.emptyArray;

        /**
         * PublicLimitDepthsV3Api eventType.
         * @member {string} eventType
         * @memberof mexc.PublicLimitDepthsV3Api
         * @instance
         */
        PublicLimitDepthsV3Api.prototype.eventType = "";

        /**
         * PublicLimitDepthsV3Api version.
         * @member {string} version
         * @memberof mexc.PublicLimitDepthsV3Api
         * @instance
         */
        PublicLimitDepthsV3Api.prototype.version = "";

        /**
         * Creates a new PublicLimitDepthsV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {mexc.IPublicLimitDepthsV3Api=} [properties] Properties to set
         * @returns {mexc.PublicLimitDepthsV3Api} PublicLimitDepthsV3Api instance
         */
        PublicLimitDepthsV3Api.create = function create(properties) {
            return new PublicLimitDepthsV3Api(properties);
        };

        /**
         * Encodes the specified PublicLimitDepthsV3Api message. Does not implicitly {@link mexc.PublicLimitDepthsV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {mexc.IPublicLimitDepthsV3Api} message PublicLimitDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicLimitDepthsV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asks != null && message.asks.length)
                for (var i = 0; i < message.asks.length; ++i)
                    $root.mexc.PublicLimitDepthV3ApiItem.encode(message.asks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bids != null && message.bids.length)
                for (var i = 0; i < message.bids.length; ++i)
                    $root.mexc.PublicLimitDepthV3ApiItem.encode(message.bids[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.eventType);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified PublicLimitDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicLimitDepthsV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {mexc.IPublicLimitDepthsV3Api} message PublicLimitDepthsV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicLimitDepthsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicLimitDepthsV3Api} PublicLimitDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicLimitDepthsV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicLimitDepthsV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.asks && message.asks.length))
                            message.asks = [];
                        message.asks.push($root.mexc.PublicLimitDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.bids && message.bids.length))
                            message.bids = [];
                        message.bids.push($root.mexc.PublicLimitDepthV3ApiItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.eventType = reader.string();
                        break;
                    }
                case 4: {
                        message.version = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicLimitDepthsV3Api} PublicLimitDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicLimitDepthsV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicLimitDepthsV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicLimitDepthsV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicLimitDepthsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicLimitDepthsV3Api";
        };

        return PublicLimitDepthsV3Api;
    })();

    mexc.PublicLimitDepthV3ApiItem = (function() {

        /**
         * Properties of a PublicLimitDepthV3ApiItem.
         * @memberof mexc
         * @interface IPublicLimitDepthV3ApiItem
         * @property {string|null} [price] PublicLimitDepthV3ApiItem price
         * @property {string|null} [quantity] PublicLimitDepthV3ApiItem quantity
         */

        /**
         * Constructs a new PublicLimitDepthV3ApiItem.
         * @memberof mexc
         * @classdesc Represents a PublicLimitDepthV3ApiItem.
         * @implements IPublicLimitDepthV3ApiItem
         * @constructor
         * @param {mexc.IPublicLimitDepthV3ApiItem=} [properties] Properties to set
         */
        function PublicLimitDepthV3ApiItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicLimitDepthV3ApiItem price.
         * @member {string} price
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @instance
         */
        PublicLimitDepthV3ApiItem.prototype.price = "";

        /**
         * PublicLimitDepthV3ApiItem quantity.
         * @member {string} quantity
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @instance
         */
        PublicLimitDepthV3ApiItem.prototype.quantity = "";

        /**
         * Creates a new PublicLimitDepthV3ApiItem instance using the specified properties.
         * @function create
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {mexc.IPublicLimitDepthV3ApiItem=} [properties] Properties to set
         * @returns {mexc.PublicLimitDepthV3ApiItem} PublicLimitDepthV3ApiItem instance
         */
        PublicLimitDepthV3ApiItem.create = function create(properties) {
            return new PublicLimitDepthV3ApiItem(properties);
        };

        /**
         * Encodes the specified PublicLimitDepthV3ApiItem message. Does not implicitly {@link mexc.PublicLimitDepthV3ApiItem.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {mexc.IPublicLimitDepthV3ApiItem} message PublicLimitDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicLimitDepthV3ApiItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified PublicLimitDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicLimitDepthV3ApiItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {mexc.IPublicLimitDepthV3ApiItem} message PublicLimitDepthV3ApiItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicLimitDepthV3ApiItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicLimitDepthV3ApiItem} PublicLimitDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicLimitDepthV3ApiItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicLimitDepthV3ApiItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.price = reader.string();
                        break;
                    }
                case 2: {
                        message.quantity = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicLimitDepthV3ApiItem} PublicLimitDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicLimitDepthV3ApiItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicLimitDepthV3ApiItem
         * @function getTypeUrl
         * @memberof mexc.PublicLimitDepthV3ApiItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicLimitDepthV3ApiItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicLimitDepthV3ApiItem";
        };

        return PublicLimitDepthV3ApiItem;
    })();

    mexc.PublicMiniTickerV3Api = (function() {

        /**
         * Properties of a PublicMiniTickerV3Api.
         * @memberof mexc
         * @interface IPublicMiniTickerV3Api
         * @property {string|null} [symbol] PublicMiniTickerV3Api symbol
         * @property {string|null} [price] PublicMiniTickerV3Api price
         * @property {string|null} [rate] PublicMiniTickerV3Api rate
         * @property {string|null} [zonedRate] PublicMiniTickerV3Api zonedRate
         * @property {string|null} [high] PublicMiniTickerV3Api high
         * @property {string|null} [low] PublicMiniTickerV3Api low
         * @property {string|null} [volume] PublicMiniTickerV3Api volume
         * @property {string|null} [quantity] PublicMiniTickerV3Api quantity
         * @property {string|null} [lastCloseRate] PublicMiniTickerV3Api lastCloseRate
         * @property {string|null} [lastCloseZonedRate] PublicMiniTickerV3Api lastCloseZonedRate
         * @property {string|null} [lastCloseHigh] PublicMiniTickerV3Api lastCloseHigh
         * @property {string|null} [lastCloseLow] PublicMiniTickerV3Api lastCloseLow
         */

        /**
         * Constructs a new PublicMiniTickerV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicMiniTickerV3Api.
         * @implements IPublicMiniTickerV3Api
         * @constructor
         * @param {mexc.IPublicMiniTickerV3Api=} [properties] Properties to set
         */
        function PublicMiniTickerV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicMiniTickerV3Api symbol.
         * @member {string} symbol
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.symbol = "";

        /**
         * PublicMiniTickerV3Api price.
         * @member {string} price
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.price = "";

        /**
         * PublicMiniTickerV3Api rate.
         * @member {string} rate
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.rate = "";

        /**
         * PublicMiniTickerV3Api zonedRate.
         * @member {string} zonedRate
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.zonedRate = "";

        /**
         * PublicMiniTickerV3Api high.
         * @member {string} high
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.high = "";

        /**
         * PublicMiniTickerV3Api low.
         * @member {string} low
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.low = "";

        /**
         * PublicMiniTickerV3Api volume.
         * @member {string} volume
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.volume = "";

        /**
         * PublicMiniTickerV3Api quantity.
         * @member {string} quantity
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.quantity = "";

        /**
         * PublicMiniTickerV3Api lastCloseRate.
         * @member {string} lastCloseRate
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.lastCloseRate = "";

        /**
         * PublicMiniTickerV3Api lastCloseZonedRate.
         * @member {string} lastCloseZonedRate
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.lastCloseZonedRate = "";

        /**
         * PublicMiniTickerV3Api lastCloseHigh.
         * @member {string} lastCloseHigh
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.lastCloseHigh = "";

        /**
         * PublicMiniTickerV3Api lastCloseLow.
         * @member {string} lastCloseLow
         * @memberof mexc.PublicMiniTickerV3Api
         * @instance
         */
        PublicMiniTickerV3Api.prototype.lastCloseLow = "";

        /**
         * Creates a new PublicMiniTickerV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {mexc.IPublicMiniTickerV3Api=} [properties] Properties to set
         * @returns {mexc.PublicMiniTickerV3Api} PublicMiniTickerV3Api instance
         */
        PublicMiniTickerV3Api.create = function create(properties) {
            return new PublicMiniTickerV3Api(properties);
        };

        /**
         * Encodes the specified PublicMiniTickerV3Api message. Does not implicitly {@link mexc.PublicMiniTickerV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {mexc.IPublicMiniTickerV3Api} message PublicMiniTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMiniTickerV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.price);
            if (message.rate != null && Object.hasOwnProperty.call(message, "rate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rate);
            if (message.zonedRate != null && Object.hasOwnProperty.call(message, "zonedRate"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.zonedRate);
            if (message.high != null && Object.hasOwnProperty.call(message, "high"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.high);
            if (message.low != null && Object.hasOwnProperty.call(message, "low"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.low);
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.volume);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.quantity);
            if (message.lastCloseRate != null && Object.hasOwnProperty.call(message, "lastCloseRate"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.lastCloseRate);
            if (message.lastCloseZonedRate != null && Object.hasOwnProperty.call(message, "lastCloseZonedRate"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lastCloseZonedRate);
            if (message.lastCloseHigh != null && Object.hasOwnProperty.call(message, "lastCloseHigh"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.lastCloseHigh);
            if (message.lastCloseLow != null && Object.hasOwnProperty.call(message, "lastCloseLow"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.lastCloseLow);
            return writer;
        };

        /**
         * Encodes the specified PublicMiniTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicMiniTickerV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {mexc.IPublicMiniTickerV3Api} message PublicMiniTickerV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMiniTickerV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicMiniTickerV3Api} PublicMiniTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMiniTickerV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicMiniTickerV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.symbol = reader.string();
                        break;
                    }
                case 2: {
                        message.price = reader.string();
                        break;
                    }
                case 3: {
                        message.rate = reader.string();
                        break;
                    }
                case 4: {
                        message.zonedRate = reader.string();
                        break;
                    }
                case 5: {
                        message.high = reader.string();
                        break;
                    }
                case 6: {
                        message.low = reader.string();
                        break;
                    }
                case 7: {
                        message.volume = reader.string();
                        break;
                    }
                case 8: {
                        message.quantity = reader.string();
                        break;
                    }
                case 9: {
                        message.lastCloseRate = reader.string();
                        break;
                    }
                case 10: {
                        message.lastCloseZonedRate = reader.string();
                        break;
                    }
                case 11: {
                        message.lastCloseHigh = reader.string();
                        break;
                    }
                case 12: {
                        message.lastCloseLow = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicMiniTickerV3Api} PublicMiniTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMiniTickerV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicMiniTickerV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicMiniTickerV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicMiniTickerV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicMiniTickerV3Api";
        };

        return PublicMiniTickerV3Api;
    })();

    mexc.PublicMiniTickersV3Api = (function() {

        /**
         * Properties of a PublicMiniTickersV3Api.
         * @memberof mexc
         * @interface IPublicMiniTickersV3Api
         * @property {Array.<mexc.IPublicMiniTickerV3Api>|null} [items] PublicMiniTickersV3Api items
         */

        /**
         * Constructs a new PublicMiniTickersV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicMiniTickersV3Api.
         * @implements IPublicMiniTickersV3Api
         * @constructor
         * @param {mexc.IPublicMiniTickersV3Api=} [properties] Properties to set
         */
        function PublicMiniTickersV3Api(properties) {
            this.items = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicMiniTickersV3Api items.
         * @member {Array.<mexc.IPublicMiniTickerV3Api>} items
         * @memberof mexc.PublicMiniTickersV3Api
         * @instance
         */
        PublicMiniTickersV3Api.prototype.items = $util.emptyArray;

        /**
         * Creates a new PublicMiniTickersV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {mexc.IPublicMiniTickersV3Api=} [properties] Properties to set
         * @returns {mexc.PublicMiniTickersV3Api} PublicMiniTickersV3Api instance
         */
        PublicMiniTickersV3Api.create = function create(properties) {
            return new PublicMiniTickersV3Api(properties);
        };

        /**
         * Encodes the specified PublicMiniTickersV3Api message. Does not implicitly {@link mexc.PublicMiniTickersV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {mexc.IPublicMiniTickersV3Api} message PublicMiniTickersV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMiniTickersV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.mexc.PublicMiniTickerV3Api.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PublicMiniTickersV3Api message, length delimited. Does not implicitly {@link mexc.PublicMiniTickersV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {mexc.IPublicMiniTickersV3Api} message PublicMiniTickersV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMiniTickersV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicMiniTickersV3Api} PublicMiniTickersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMiniTickersV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicMiniTickersV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.mexc.PublicMiniTickerV3Api.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicMiniTickersV3Api} PublicMiniTickersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMiniTickersV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicMiniTickersV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicMiniTickersV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicMiniTickersV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicMiniTickersV3Api";
        };

        return PublicMiniTickersV3Api;
    })();

    mexc.PublicSpotKlineV3Api = (function() {

        /**
         * Properties of a PublicSpotKlineV3Api.
         * @memberof mexc
         * @interface IPublicSpotKlineV3Api
         * @property {string|null} [interval] PublicSpotKlineV3Api interval
         * @property {number|null} [windowStart] PublicSpotKlineV3Api windowStart
         * @property {string|null} [openingPrice] PublicSpotKlineV3Api openingPrice
         * @property {string|null} [closingPrice] PublicSpotKlineV3Api closingPrice
         * @property {string|null} [highestPrice] PublicSpotKlineV3Api highestPrice
         * @property {string|null} [lowestPrice] PublicSpotKlineV3Api lowestPrice
         * @property {string|null} [volume] PublicSpotKlineV3Api volume
         * @property {string|null} [amount] PublicSpotKlineV3Api amount
         * @property {number|null} [windowEnd] PublicSpotKlineV3Api windowEnd
         */

        /**
         * Constructs a new PublicSpotKlineV3Api.
         * @memberof mexc
         * @classdesc Represents a PublicSpotKlineV3Api.
         * @implements IPublicSpotKlineV3Api
         * @constructor
         * @param {mexc.IPublicSpotKlineV3Api=} [properties] Properties to set
         */
        function PublicSpotKlineV3Api(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicSpotKlineV3Api interval.
         * @member {string} interval
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.interval = "";

        /**
         * PublicSpotKlineV3Api windowStart.
         * @member {number} windowStart
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.windowStart = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PublicSpotKlineV3Api openingPrice.
         * @member {string} openingPrice
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.openingPrice = "";

        /**
         * PublicSpotKlineV3Api closingPrice.
         * @member {string} closingPrice
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.closingPrice = "";

        /**
         * PublicSpotKlineV3Api highestPrice.
         * @member {string} highestPrice
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.highestPrice = "";

        /**
         * PublicSpotKlineV3Api lowestPrice.
         * @member {string} lowestPrice
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.lowestPrice = "";

        /**
         * PublicSpotKlineV3Api volume.
         * @member {string} volume
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.volume = "";

        /**
         * PublicSpotKlineV3Api amount.
         * @member {string} amount
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.amount = "";

        /**
         * PublicSpotKlineV3Api windowEnd.
         * @member {number} windowEnd
         * @memberof mexc.PublicSpotKlineV3Api
         * @instance
         */
        PublicSpotKlineV3Api.prototype.windowEnd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PublicSpotKlineV3Api instance using the specified properties.
         * @function create
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {mexc.IPublicSpotKlineV3Api=} [properties] Properties to set
         * @returns {mexc.PublicSpotKlineV3Api} PublicSpotKlineV3Api instance
         */
        PublicSpotKlineV3Api.create = function create(properties) {
            return new PublicSpotKlineV3Api(properties);
        };

        /**
         * Encodes the specified PublicSpotKlineV3Api message. Does not implicitly {@link mexc.PublicSpotKlineV3Api.verify|verify} messages.
         * @function encode
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {mexc.IPublicSpotKlineV3Api} message PublicSpotKlineV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicSpotKlineV3Api.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.interval != null && Object.hasOwnProperty.call(message, "interval"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.interval);
            if (message.windowStart != null && Object.hasOwnProperty.call(message, "windowStart"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.windowStart);
            if (message.openingPrice != null && Object.hasOwnProperty.call(message, "openingPrice"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.openingPrice);
            if (message.closingPrice != null && Object.hasOwnProperty.call(message, "closingPrice"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.closingPrice);
            if (message.highestPrice != null && Object.hasOwnProperty.call(message, "highestPrice"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.highestPrice);
            if (message.lowestPrice != null && Object.hasOwnProperty.call(message, "lowestPrice"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.lowestPrice);
            if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.volume);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.amount);
            if (message.windowEnd != null && Object.hasOwnProperty.call(message, "windowEnd"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.windowEnd);
            return writer;
        };

        /**
         * Encodes the specified PublicSpotKlineV3Api message, length delimited. Does not implicitly {@link mexc.PublicSpotKlineV3Api.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {mexc.IPublicSpotKlineV3Api} message PublicSpotKlineV3Api message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicSpotKlineV3Api.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PublicSpotKlineV3Api} PublicSpotKlineV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicSpotKlineV3Api.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PublicSpotKlineV3Api();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.interval = reader.string();
                        break;
                    }
                case 2: {
                        message.windowStart = reader.int64();
                        break;
                    }
                case 3: {
                        message.openingPrice = reader.string();
                        break;
                    }
                case 4: {
                        message.closingPrice = reader.string();
                        break;
                    }
                case 5: {
                        message.highestPrice = reader.string();
                        break;
                    }
                case 6: {
                        message.lowestPrice = reader.string();
                        break;
                    }
                case 7: {
                        message.volume = reader.string();
                        break;
                    }
                case 8: {
                        message.amount = reader.string();
                        break;
                    }
                case 9: {
                        message.windowEnd = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PublicSpotKlineV3Api} PublicSpotKlineV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicSpotKlineV3Api.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PublicSpotKlineV3Api
         * @function getTypeUrl
         * @memberof mexc.PublicSpotKlineV3Api
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PublicSpotKlineV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PublicSpotKlineV3Api";
        };

        return PublicSpotKlineV3Api;
    })();

    mexc.PushDataV3ApiWrapper = (function() {

        /**
         * Properties of a PushDataV3ApiWrapper.
         * @memberof mexc
         * @interface IPushDataV3ApiWrapper
         * @property {string|null} [channel] 频道
         * @property {mexc.IPublicDealsV3Api|null} [publicDeals] PushDataV3ApiWrapper publicDeals
         * @property {mexc.IPublicIncreaseDepthsV3Api|null} [publicIncreaseDepths] PushDataV3ApiWrapper publicIncreaseDepths
         * @property {mexc.IPublicLimitDepthsV3Api|null} [publicLimitDepths] PushDataV3ApiWrapper publicLimitDepths
         * @property {mexc.IPrivateOrdersV3Api|null} [privateOrders] PushDataV3ApiWrapper privateOrders
         * @property {mexc.IPublicBookTickerV3Api|null} [publicBookTicker] PushDataV3ApiWrapper publicBookTicker
         * @property {mexc.IPrivateDealsV3Api|null} [privateDeals] PushDataV3ApiWrapper privateDeals
         * @property {mexc.IPrivateAccountV3Api|null} [privateAccount] PushDataV3ApiWrapper privateAccount
         * @property {mexc.IPublicSpotKlineV3Api|null} [publicSpotKline] PushDataV3ApiWrapper publicSpotKline
         * @property {mexc.IPublicMiniTickerV3Api|null} [publicMiniTicker] PushDataV3ApiWrapper publicMiniTicker
         * @property {mexc.IPublicMiniTickersV3Api|null} [publicMiniTickers] PushDataV3ApiWrapper publicMiniTickers
         * @property {mexc.IPublicBookTickerBatchV3Api|null} [publicBookTickerBatch] PushDataV3ApiWrapper publicBookTickerBatch
         * @property {mexc.IPublicIncreaseDepthsBatchV3Api|null} [publicIncreaseDepthsBatch] PushDataV3ApiWrapper publicIncreaseDepthsBatch
         * @property {mexc.IPublicAggreDepthsV3Api|null} [publicAggreDepths] PushDataV3ApiWrapper publicAggreDepths
         * @property {mexc.IPublicAggreDealsV3Api|null} [publicAggreDeals] PushDataV3ApiWrapper publicAggreDeals
         * @property {mexc.IPublicAggreBookTickerV3Api|null} [publicAggreBookTicker] PushDataV3ApiWrapper publicAggreBookTicker
         * @property {string|null} [symbol] 交易对
         * @property {string|null} [symbolId] 交易对ID
         * @property {number|null} [createTime] 消息生成时间
         * @property {number|null} [sendTime] 消息推送时间
         */

        /**
         * Constructs a new PushDataV3ApiWrapper.
         * @memberof mexc
         * @classdesc Represents a PushDataV3ApiWrapper.
         * @implements IPushDataV3ApiWrapper
         * @constructor
         * @param {mexc.IPushDataV3ApiWrapper=} [properties] Properties to set
         */
        function PushDataV3ApiWrapper(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * 频道
         * @member {string} channel
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.channel = "";

        /**
         * PushDataV3ApiWrapper publicDeals.
         * @member {mexc.IPublicDealsV3Api|null|undefined} publicDeals
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicDeals = null;

        /**
         * PushDataV3ApiWrapper publicIncreaseDepths.
         * @member {mexc.IPublicIncreaseDepthsV3Api|null|undefined} publicIncreaseDepths
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicIncreaseDepths = null;

        /**
         * PushDataV3ApiWrapper publicLimitDepths.
         * @member {mexc.IPublicLimitDepthsV3Api|null|undefined} publicLimitDepths
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicLimitDepths = null;

        /**
         * PushDataV3ApiWrapper privateOrders.
         * @member {mexc.IPrivateOrdersV3Api|null|undefined} privateOrders
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.privateOrders = null;

        /**
         * PushDataV3ApiWrapper publicBookTicker.
         * @member {mexc.IPublicBookTickerV3Api|null|undefined} publicBookTicker
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicBookTicker = null;

        /**
         * PushDataV3ApiWrapper privateDeals.
         * @member {mexc.IPrivateDealsV3Api|null|undefined} privateDeals
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.privateDeals = null;

        /**
         * PushDataV3ApiWrapper privateAccount.
         * @member {mexc.IPrivateAccountV3Api|null|undefined} privateAccount
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.privateAccount = null;

        /**
         * PushDataV3ApiWrapper publicSpotKline.
         * @member {mexc.IPublicSpotKlineV3Api|null|undefined} publicSpotKline
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicSpotKline = null;

        /**
         * PushDataV3ApiWrapper publicMiniTicker.
         * @member {mexc.IPublicMiniTickerV3Api|null|undefined} publicMiniTicker
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicMiniTicker = null;

        /**
         * PushDataV3ApiWrapper publicMiniTickers.
         * @member {mexc.IPublicMiniTickersV3Api|null|undefined} publicMiniTickers
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicMiniTickers = null;

        /**
         * PushDataV3ApiWrapper publicBookTickerBatch.
         * @member {mexc.IPublicBookTickerBatchV3Api|null|undefined} publicBookTickerBatch
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicBookTickerBatch = null;

        /**
         * PushDataV3ApiWrapper publicIncreaseDepthsBatch.
         * @member {mexc.IPublicIncreaseDepthsBatchV3Api|null|undefined} publicIncreaseDepthsBatch
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicIncreaseDepthsBatch = null;

        /**
         * PushDataV3ApiWrapper publicAggreDepths.
         * @member {mexc.IPublicAggreDepthsV3Api|null|undefined} publicAggreDepths
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicAggreDepths = null;

        /**
         * PushDataV3ApiWrapper publicAggreDeals.
         * @member {mexc.IPublicAggreDealsV3Api|null|undefined} publicAggreDeals
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicAggreDeals = null;

        /**
         * PushDataV3ApiWrapper publicAggreBookTicker.
         * @member {mexc.IPublicAggreBookTickerV3Api|null|undefined} publicAggreBookTicker
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.publicAggreBookTicker = null;

        /**
         * 交易对
         * @member {string} symbol
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.symbol = "";

        /**
         * 交易对ID
         * @member {string} symbolId
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.symbolId = "";

        /**
         * 消息生成时间
         * @member {number} createTime
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * 消息推送时间
         * @member {number} sendTime
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        PushDataV3ApiWrapper.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * 数据，NOTE：因为不能重复，所以类型和变量名尽量使用全名
         * @member {"publicDeals"|"publicIncreaseDepths"|"publicLimitDepths"|"privateOrders"|"publicBookTicker"|"privateDeals"|"privateAccount"|"publicSpotKline"|"publicMiniTicker"|"publicMiniTickers"|"publicBookTickerBatch"|"publicIncreaseDepthsBatch"|"publicAggreDepths"|"publicAggreDeals"|"publicAggreBookTicker"|undefined} body
         * @memberof mexc.PushDataV3ApiWrapper
         * @instance
         */
        Object.defineProperty(PushDataV3ApiWrapper.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["publicDeals", "publicIncreaseDepths", "publicLimitDepths", "privateOrders", "publicBookTicker", "privateDeals", "privateAccount", "publicSpotKline", "publicMiniTicker", "publicMiniTickers", "publicBookTickerBatch", "publicIncreaseDepthsBatch", "publicAggreDepths", "publicAggreDeals", "publicAggreBookTicker"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PushDataV3ApiWrapper instance using the specified properties.
         * @function create
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {mexc.IPushDataV3ApiWrapper=} [properties] Properties to set
         * @returns {mexc.PushDataV3ApiWrapper} PushDataV3ApiWrapper instance
         */
        PushDataV3ApiWrapper.create = function create(properties) {
            return new PushDataV3ApiWrapper(properties);
        };

        /**
         * Encodes the specified PushDataV3ApiWrapper message. Does not implicitly {@link mexc.PushDataV3ApiWrapper.verify|verify} messages.
         * @function encode
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {mexc.IPushDataV3ApiWrapper} message PushDataV3ApiWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushDataV3ApiWrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
            if (message.symbolId != null && Object.hasOwnProperty.call(message, "symbolId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.symbolId);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createTime);
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.sendTime);
            if (message.publicDeals != null && Object.hasOwnProperty.call(message, "publicDeals"))
                $root.mexc.PublicDealsV3Api.encode(message.publicDeals, writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
            if (message.publicIncreaseDepths != null && Object.hasOwnProperty.call(message, "publicIncreaseDepths"))
                $root.mexc.PublicIncreaseDepthsV3Api.encode(message.publicIncreaseDepths, writer.uint32(/* id 302, wireType 2 =*/2418).fork()).ldelim();
            if (message.publicLimitDepths != null && Object.hasOwnProperty.call(message, "publicLimitDepths"))
                $root.mexc.PublicLimitDepthsV3Api.encode(message.publicLimitDepths, writer.uint32(/* id 303, wireType 2 =*/2426).fork()).ldelim();
            if (message.privateOrders != null && Object.hasOwnProperty.call(message, "privateOrders"))
                $root.mexc.PrivateOrdersV3Api.encode(message.privateOrders, writer.uint32(/* id 304, wireType 2 =*/2434).fork()).ldelim();
            if (message.publicBookTicker != null && Object.hasOwnProperty.call(message, "publicBookTicker"))
                $root.mexc.PublicBookTickerV3Api.encode(message.publicBookTicker, writer.uint32(/* id 305, wireType 2 =*/2442).fork()).ldelim();
            if (message.privateDeals != null && Object.hasOwnProperty.call(message, "privateDeals"))
                $root.mexc.PrivateDealsV3Api.encode(message.privateDeals, writer.uint32(/* id 306, wireType 2 =*/2450).fork()).ldelim();
            if (message.privateAccount != null && Object.hasOwnProperty.call(message, "privateAccount"))
                $root.mexc.PrivateAccountV3Api.encode(message.privateAccount, writer.uint32(/* id 307, wireType 2 =*/2458).fork()).ldelim();
            if (message.publicSpotKline != null && Object.hasOwnProperty.call(message, "publicSpotKline"))
                $root.mexc.PublicSpotKlineV3Api.encode(message.publicSpotKline, writer.uint32(/* id 308, wireType 2 =*/2466).fork()).ldelim();
            if (message.publicMiniTicker != null && Object.hasOwnProperty.call(message, "publicMiniTicker"))
                $root.mexc.PublicMiniTickerV3Api.encode(message.publicMiniTicker, writer.uint32(/* id 309, wireType 2 =*/2474).fork()).ldelim();
            if (message.publicMiniTickers != null && Object.hasOwnProperty.call(message, "publicMiniTickers"))
                $root.mexc.PublicMiniTickersV3Api.encode(message.publicMiniTickers, writer.uint32(/* id 310, wireType 2 =*/2482).fork()).ldelim();
            if (message.publicBookTickerBatch != null && Object.hasOwnProperty.call(message, "publicBookTickerBatch"))
                $root.mexc.PublicBookTickerBatchV3Api.encode(message.publicBookTickerBatch, writer.uint32(/* id 311, wireType 2 =*/2490).fork()).ldelim();
            if (message.publicIncreaseDepthsBatch != null && Object.hasOwnProperty.call(message, "publicIncreaseDepthsBatch"))
                $root.mexc.PublicIncreaseDepthsBatchV3Api.encode(message.publicIncreaseDepthsBatch, writer.uint32(/* id 312, wireType 2 =*/2498).fork()).ldelim();
            if (message.publicAggreDepths != null && Object.hasOwnProperty.call(message, "publicAggreDepths"))
                $root.mexc.PublicAggreDepthsV3Api.encode(message.publicAggreDepths, writer.uint32(/* id 313, wireType 2 =*/2506).fork()).ldelim();
            if (message.publicAggreDeals != null && Object.hasOwnProperty.call(message, "publicAggreDeals"))
                $root.mexc.PublicAggreDealsV3Api.encode(message.publicAggreDeals, writer.uint32(/* id 314, wireType 2 =*/2514).fork()).ldelim();
            if (message.publicAggreBookTicker != null && Object.hasOwnProperty.call(message, "publicAggreBookTicker"))
                $root.mexc.PublicAggreBookTickerV3Api.encode(message.publicAggreBookTicker, writer.uint32(/* id 315, wireType 2 =*/2522).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushDataV3ApiWrapper message, length delimited. Does not implicitly {@link mexc.PushDataV3ApiWrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {mexc.IPushDataV3ApiWrapper} message PushDataV3ApiWrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushDataV3ApiWrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer.
         * @function decode
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mexc.PushDataV3ApiWrapper} PushDataV3ApiWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushDataV3ApiWrapper.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mexc.PushDataV3ApiWrapper();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.channel = reader.string();
                        break;
                    }
                case 301: {
                        message.publicDeals = $root.mexc.PublicDealsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 302: {
                        message.publicIncreaseDepths = $root.mexc.PublicIncreaseDepthsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 303: {
                        message.publicLimitDepths = $root.mexc.PublicLimitDepthsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 304: {
                        message.privateOrders = $root.mexc.PrivateOrdersV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 305: {
                        message.publicBookTicker = $root.mexc.PublicBookTickerV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 306: {
                        message.privateDeals = $root.mexc.PrivateDealsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 307: {
                        message.privateAccount = $root.mexc.PrivateAccountV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 308: {
                        message.publicSpotKline = $root.mexc.PublicSpotKlineV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 309: {
                        message.publicMiniTicker = $root.mexc.PublicMiniTickerV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 310: {
                        message.publicMiniTickers = $root.mexc.PublicMiniTickersV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 311: {
                        message.publicBookTickerBatch = $root.mexc.PublicBookTickerBatchV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 312: {
                        message.publicIncreaseDepthsBatch = $root.mexc.PublicIncreaseDepthsBatchV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 313: {
                        message.publicAggreDepths = $root.mexc.PublicAggreDepthsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 314: {
                        message.publicAggreDeals = $root.mexc.PublicAggreDealsV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 315: {
                        message.publicAggreBookTicker = $root.mexc.PublicAggreBookTickerV3Api.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.symbol = reader.string();
                        break;
                    }
                case 4: {
                        message.symbolId = reader.string();
                        break;
                    }
                case 5: {
                        message.createTime = reader.int64();
                        break;
                    }
                case 6: {
                        message.sendTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mexc.PushDataV3ApiWrapper} PushDataV3ApiWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushDataV3ApiWrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the default type url for PushDataV3ApiWrapper
         * @function getTypeUrl
         * @memberof mexc.PushDataV3ApiWrapper
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushDataV3ApiWrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mexc.PushDataV3ApiWrapper";
        };

        return PushDataV3ApiWrapper;
    })();

    return mexc;
})();

module.exports = $root;
