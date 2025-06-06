import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace mexc. */
export namespace mexc {

    /** Properties of a PrivateAccountV3Api. */
    interface IPrivateAccountV3Api {

        /** PrivateAccountV3Api vcoinName */
        vcoinName?: (string|null);

        /** PrivateAccountV3Api coinId */
        coinId?: (string|null);

        /** PrivateAccountV3Api balanceAmount */
        balanceAmount?: (string|null);

        /** PrivateAccountV3Api balanceAmountChange */
        balanceAmountChange?: (string|null);

        /** PrivateAccountV3Api frozenAmount */
        frozenAmount?: (string|null);

        /** PrivateAccountV3Api frozenAmountChange */
        frozenAmountChange?: (string|null);

        /** PrivateAccountV3Api type */
        type?: (string|null);

        /** PrivateAccountV3Api time */
        time?: (number|null);
    }

    /** Represents a PrivateAccountV3Api. */
    class PrivateAccountV3Api implements IPrivateAccountV3Api {

        /**
         * Constructs a new PrivateAccountV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPrivateAccountV3Api);

        /** PrivateAccountV3Api vcoinName. */
        public vcoinName: string;

        /** PrivateAccountV3Api coinId. */
        public coinId: string;

        /** PrivateAccountV3Api balanceAmount. */
        public balanceAmount: string;

        /** PrivateAccountV3Api balanceAmountChange. */
        public balanceAmountChange: string;

        /** PrivateAccountV3Api frozenAmount. */
        public frozenAmount: string;

        /** PrivateAccountV3Api frozenAmountChange. */
        public frozenAmountChange: string;

        /** PrivateAccountV3Api type. */
        public type: string;

        /** PrivateAccountV3Api time. */
        public time: number;

        /**
         * Creates a new PrivateAccountV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateAccountV3Api instance
         */
        public static create(properties?: mexc.IPrivateAccountV3Api): mexc.PrivateAccountV3Api;

        /**
         * Encodes the specified PrivateAccountV3Api message. Does not implicitly {@link mexc.PrivateAccountV3Api.verify|verify} messages.
         * @param message PrivateAccountV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPrivateAccountV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateAccountV3Api message, length delimited. Does not implicitly {@link mexc.PrivateAccountV3Api.verify|verify} messages.
         * @param message PrivateAccountV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPrivateAccountV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateAccountV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateAccountV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PrivateAccountV3Api;

        /**
         * Decodes a PrivateAccountV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateAccountV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PrivateAccountV3Api;

        /**
         * Creates a PrivateAccountV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateAccountV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PrivateAccountV3Api;

        /**
         * Creates a plain object from a PrivateAccountV3Api message. Also converts values to other types if specified.
         * @param message PrivateAccountV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PrivateAccountV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateAccountV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PrivateAccountV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PrivateDealsV3Api. */
    interface IPrivateDealsV3Api {

        /** PrivateDealsV3Api price */
        price?: (string|null);

        /** PrivateDealsV3Api quantity */
        quantity?: (string|null);

        /** PrivateDealsV3Api amount */
        amount?: (string|null);

        /** PrivateDealsV3Api tradeType */
        tradeType?: (number|null);

        /** PrivateDealsV3Api isMaker */
        isMaker?: (boolean|null);

        /** PrivateDealsV3Api isSelfTrade */
        isSelfTrade?: (boolean|null);

        /** PrivateDealsV3Api tradeId */
        tradeId?: (string|null);

        /** PrivateDealsV3Api clientOrderId */
        clientOrderId?: (string|null);

        /** PrivateDealsV3Api orderId */
        orderId?: (string|null);

        /** PrivateDealsV3Api feeAmount */
        feeAmount?: (string|null);

        /** PrivateDealsV3Api feeCurrency */
        feeCurrency?: (string|null);

        /** PrivateDealsV3Api time */
        time?: (number|null);
    }

    /** Represents a PrivateDealsV3Api. */
    class PrivateDealsV3Api implements IPrivateDealsV3Api {

        /**
         * Constructs a new PrivateDealsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPrivateDealsV3Api);

        /** PrivateDealsV3Api price. */
        public price: string;

        /** PrivateDealsV3Api quantity. */
        public quantity: string;

        /** PrivateDealsV3Api amount. */
        public amount: string;

        /** PrivateDealsV3Api tradeType. */
        public tradeType: number;

        /** PrivateDealsV3Api isMaker. */
        public isMaker: boolean;

        /** PrivateDealsV3Api isSelfTrade. */
        public isSelfTrade: boolean;

        /** PrivateDealsV3Api tradeId. */
        public tradeId: string;

        /** PrivateDealsV3Api clientOrderId. */
        public clientOrderId: string;

        /** PrivateDealsV3Api orderId. */
        public orderId: string;

        /** PrivateDealsV3Api feeAmount. */
        public feeAmount: string;

        /** PrivateDealsV3Api feeCurrency. */
        public feeCurrency: string;

        /** PrivateDealsV3Api time. */
        public time: number;

        /**
         * Creates a new PrivateDealsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateDealsV3Api instance
         */
        public static create(properties?: mexc.IPrivateDealsV3Api): mexc.PrivateDealsV3Api;

        /**
         * Encodes the specified PrivateDealsV3Api message. Does not implicitly {@link mexc.PrivateDealsV3Api.verify|verify} messages.
         * @param message PrivateDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPrivateDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateDealsV3Api message, length delimited. Does not implicitly {@link mexc.PrivateDealsV3Api.verify|verify} messages.
         * @param message PrivateDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPrivateDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateDealsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PrivateDealsV3Api;

        /**
         * Decodes a PrivateDealsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PrivateDealsV3Api;

        /**
         * Creates a PrivateDealsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateDealsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PrivateDealsV3Api;

        /**
         * Creates a plain object from a PrivateDealsV3Api message. Also converts values to other types if specified.
         * @param message PrivateDealsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PrivateDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateDealsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PrivateDealsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PrivateOrdersV3Api. */
    interface IPrivateOrdersV3Api {

        /** PrivateOrdersV3Api id */
        id?: (string|null);

        /** PrivateOrdersV3Api clientId */
        clientId?: (string|null);

        /** PrivateOrdersV3Api price */
        price?: (string|null);

        /** PrivateOrdersV3Api quantity */
        quantity?: (string|null);

        /** PrivateOrdersV3Api amount */
        amount?: (string|null);

        /** PrivateOrdersV3Api avgPrice */
        avgPrice?: (string|null);

        /** PrivateOrdersV3Api orderType */
        orderType?: (number|null);

        /** PrivateOrdersV3Api tradeType */
        tradeType?: (number|null);

        /** PrivateOrdersV3Api isMaker */
        isMaker?: (boolean|null);

        /** PrivateOrdersV3Api remainAmount */
        remainAmount?: (string|null);

        /** PrivateOrdersV3Api remainQuantity */
        remainQuantity?: (string|null);

        /** PrivateOrdersV3Api lastDealQuantity */
        lastDealQuantity?: (string|null);

        /** PrivateOrdersV3Api cumulativeQuantity */
        cumulativeQuantity?: (string|null);

        /** PrivateOrdersV3Api cumulativeAmount */
        cumulativeAmount?: (string|null);

        /** PrivateOrdersV3Api status */
        status?: (number|null);

        /** PrivateOrdersV3Api createTime */
        createTime?: (number|null);

        /** PrivateOrdersV3Api market */
        market?: (string|null);

        /** PrivateOrdersV3Api triggerType */
        triggerType?: (number|null);

        /** PrivateOrdersV3Api triggerPrice */
        triggerPrice?: (string|null);

        /** PrivateOrdersV3Api state */
        state?: (number|null);

        /** PrivateOrdersV3Api ocoId */
        ocoId?: (string|null);

        /** PrivateOrdersV3Api routeFactor */
        routeFactor?: (string|null);

        /** PrivateOrdersV3Api symbolId */
        symbolId?: (string|null);

        /** PrivateOrdersV3Api marketId */
        marketId?: (string|null);

        /** PrivateOrdersV3Api marketCurrencyId */
        marketCurrencyId?: (string|null);

        /** PrivateOrdersV3Api currencyId */
        currencyId?: (string|null);
    }

    /** Represents a PrivateOrdersV3Api. */
    class PrivateOrdersV3Api implements IPrivateOrdersV3Api {

        /**
         * Constructs a new PrivateOrdersV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPrivateOrdersV3Api);

        /** PrivateOrdersV3Api id. */
        public id: string;

        /** PrivateOrdersV3Api clientId. */
        public clientId: string;

        /** PrivateOrdersV3Api price. */
        public price: string;

        /** PrivateOrdersV3Api quantity. */
        public quantity: string;

        /** PrivateOrdersV3Api amount. */
        public amount: string;

        /** PrivateOrdersV3Api avgPrice. */
        public avgPrice: string;

        /** PrivateOrdersV3Api orderType. */
        public orderType: number;

        /** PrivateOrdersV3Api tradeType. */
        public tradeType: number;

        /** PrivateOrdersV3Api isMaker. */
        public isMaker: boolean;

        /** PrivateOrdersV3Api remainAmount. */
        public remainAmount: string;

        /** PrivateOrdersV3Api remainQuantity. */
        public remainQuantity: string;

        /** PrivateOrdersV3Api lastDealQuantity. */
        public lastDealQuantity: string;

        /** PrivateOrdersV3Api cumulativeQuantity. */
        public cumulativeQuantity: string;

        /** PrivateOrdersV3Api cumulativeAmount. */
        public cumulativeAmount: string;

        /** PrivateOrdersV3Api status. */
        public status: number;

        /** PrivateOrdersV3Api createTime. */
        public createTime: number;

        /** PrivateOrdersV3Api market. */
        public market: string;

        /** PrivateOrdersV3Api triggerType. */
        public triggerType: number;

        /** PrivateOrdersV3Api triggerPrice. */
        public triggerPrice: string;

        /** PrivateOrdersV3Api state. */
        public state: number;

        /** PrivateOrdersV3Api ocoId. */
        public ocoId: string;

        /** PrivateOrdersV3Api routeFactor. */
        public routeFactor: string;

        /** PrivateOrdersV3Api symbolId. */
        public symbolId: string;

        /** PrivateOrdersV3Api marketId. */
        public marketId: string;

        /** PrivateOrdersV3Api marketCurrencyId. */
        public marketCurrencyId: string;

        /** PrivateOrdersV3Api currencyId. */
        public currencyId: string;

        /**
         * Creates a new PrivateOrdersV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateOrdersV3Api instance
         */
        public static create(properties?: mexc.IPrivateOrdersV3Api): mexc.PrivateOrdersV3Api;

        /**
         * Encodes the specified PrivateOrdersV3Api message. Does not implicitly {@link mexc.PrivateOrdersV3Api.verify|verify} messages.
         * @param message PrivateOrdersV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPrivateOrdersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateOrdersV3Api message, length delimited. Does not implicitly {@link mexc.PrivateOrdersV3Api.verify|verify} messages.
         * @param message PrivateOrdersV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPrivateOrdersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateOrdersV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateOrdersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PrivateOrdersV3Api;

        /**
         * Decodes a PrivateOrdersV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateOrdersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PrivateOrdersV3Api;

        /**
         * Creates a PrivateOrdersV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateOrdersV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PrivateOrdersV3Api;

        /**
         * Creates a plain object from a PrivateOrdersV3Api message. Also converts values to other types if specified.
         * @param message PrivateOrdersV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PrivateOrdersV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateOrdersV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PrivateOrdersV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicAggreBookTickerV3Api. */
    interface IPublicAggreBookTickerV3Api {

        /** PublicAggreBookTickerV3Api bidPrice */
        bidPrice?: (string|null);

        /** PublicAggreBookTickerV3Api bidQuantity */
        bidQuantity?: (string|null);

        /** PublicAggreBookTickerV3Api askPrice */
        askPrice?: (string|null);

        /** PublicAggreBookTickerV3Api askQuantity */
        askQuantity?: (string|null);
    }

    /** Represents a PublicAggreBookTickerV3Api. */
    class PublicAggreBookTickerV3Api implements IPublicAggreBookTickerV3Api {

        /**
         * Constructs a new PublicAggreBookTickerV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicAggreBookTickerV3Api);

        /** PublicAggreBookTickerV3Api bidPrice. */
        public bidPrice: string;

        /** PublicAggreBookTickerV3Api bidQuantity. */
        public bidQuantity: string;

        /** PublicAggreBookTickerV3Api askPrice. */
        public askPrice: string;

        /** PublicAggreBookTickerV3Api askQuantity. */
        public askQuantity: string;

        /**
         * Creates a new PublicAggreBookTickerV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicAggreBookTickerV3Api instance
         */
        public static create(properties?: mexc.IPublicAggreBookTickerV3Api): mexc.PublicAggreBookTickerV3Api;

        /**
         * Encodes the specified PublicAggreBookTickerV3Api message. Does not implicitly {@link mexc.PublicAggreBookTickerV3Api.verify|verify} messages.
         * @param message PublicAggreBookTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicAggreBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicAggreBookTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreBookTickerV3Api.verify|verify} messages.
         * @param message PublicAggreBookTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicAggreBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicAggreBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicAggreBookTickerV3Api;

        /**
         * Decodes a PublicAggreBookTickerV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicAggreBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicAggreBookTickerV3Api;

        /**
         * Creates a PublicAggreBookTickerV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicAggreBookTickerV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicAggreBookTickerV3Api;

        /**
         * Creates a plain object from a PublicAggreBookTickerV3Api message. Also converts values to other types if specified.
         * @param message PublicAggreBookTickerV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicAggreBookTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicAggreBookTickerV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicAggreBookTickerV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicAggreDealsV3Api. */
    interface IPublicAggreDealsV3Api {

        /** PublicAggreDealsV3Api deals */
        deals?: (mexc.IPublicAggreDealsV3ApiItem[]|null);

        /** PublicAggreDealsV3Api eventType */
        eventType?: (string|null);
    }

    /** Represents a PublicAggreDealsV3Api. */
    class PublicAggreDealsV3Api implements IPublicAggreDealsV3Api {

        /**
         * Constructs a new PublicAggreDealsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicAggreDealsV3Api);

        /** PublicAggreDealsV3Api deals. */
        public deals: mexc.IPublicAggreDealsV3ApiItem[];

        /** PublicAggreDealsV3Api eventType. */
        public eventType: string;

        /**
         * Creates a new PublicAggreDealsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicAggreDealsV3Api instance
         */
        public static create(properties?: mexc.IPublicAggreDealsV3Api): mexc.PublicAggreDealsV3Api;

        /**
         * Encodes the specified PublicAggreDealsV3Api message. Does not implicitly {@link mexc.PublicAggreDealsV3Api.verify|verify} messages.
         * @param message PublicAggreDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicAggreDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicAggreDealsV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreDealsV3Api.verify|verify} messages.
         * @param message PublicAggreDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicAggreDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicAggreDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicAggreDealsV3Api;

        /**
         * Decodes a PublicAggreDealsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicAggreDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicAggreDealsV3Api;

        /**
         * Creates a PublicAggreDealsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicAggreDealsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicAggreDealsV3Api;

        /**
         * Creates a plain object from a PublicAggreDealsV3Api message. Also converts values to other types if specified.
         * @param message PublicAggreDealsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicAggreDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicAggreDealsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicAggreDealsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicAggreDealsV3ApiItem. */
    interface IPublicAggreDealsV3ApiItem {

        /** PublicAggreDealsV3ApiItem price */
        price?: (string|null);

        /** PublicAggreDealsV3ApiItem quantity */
        quantity?: (string|null);

        /** PublicAggreDealsV3ApiItem tradeType */
        tradeType?: (number|null);

        /** PublicAggreDealsV3ApiItem time */
        time?: (number|null);
    }

    /** Represents a PublicAggreDealsV3ApiItem. */
    class PublicAggreDealsV3ApiItem implements IPublicAggreDealsV3ApiItem {

        /**
         * Constructs a new PublicAggreDealsV3ApiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicAggreDealsV3ApiItem);

        /** PublicAggreDealsV3ApiItem price. */
        public price: string;

        /** PublicAggreDealsV3ApiItem quantity. */
        public quantity: string;

        /** PublicAggreDealsV3ApiItem tradeType. */
        public tradeType: number;

        /** PublicAggreDealsV3ApiItem time. */
        public time: number;

        /**
         * Creates a new PublicAggreDealsV3ApiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicAggreDealsV3ApiItem instance
         */
        public static create(properties?: mexc.IPublicAggreDealsV3ApiItem): mexc.PublicAggreDealsV3ApiItem;

        /**
         * Encodes the specified PublicAggreDealsV3ApiItem message. Does not implicitly {@link mexc.PublicAggreDealsV3ApiItem.verify|verify} messages.
         * @param message PublicAggreDealsV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicAggreDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicAggreDealsV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicAggreDealsV3ApiItem.verify|verify} messages.
         * @param message PublicAggreDealsV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicAggreDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicAggreDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicAggreDealsV3ApiItem;

        /**
         * Decodes a PublicAggreDealsV3ApiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicAggreDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicAggreDealsV3ApiItem;

        /**
         * Creates a PublicAggreDealsV3ApiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicAggreDealsV3ApiItem
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicAggreDealsV3ApiItem;

        /**
         * Creates a plain object from a PublicAggreDealsV3ApiItem message. Also converts values to other types if specified.
         * @param message PublicAggreDealsV3ApiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicAggreDealsV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicAggreDealsV3ApiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicAggreDealsV3ApiItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicAggreDepthsV3Api. */
    interface IPublicAggreDepthsV3Api {

        /** PublicAggreDepthsV3Api asks */
        asks?: (mexc.IPublicAggreDepthV3ApiItem[]|null);

        /** PublicAggreDepthsV3Api bids */
        bids?: (mexc.IPublicAggreDepthV3ApiItem[]|null);

        /** PublicAggreDepthsV3Api eventType */
        eventType?: (string|null);

        /** PublicAggreDepthsV3Api fromVersion */
        fromVersion?: (string|null);

        /** PublicAggreDepthsV3Api toVersion */
        toVersion?: (string|null);
    }

    /** Represents a PublicAggreDepthsV3Api. */
    class PublicAggreDepthsV3Api implements IPublicAggreDepthsV3Api {

        /**
         * Constructs a new PublicAggreDepthsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicAggreDepthsV3Api);

        /** PublicAggreDepthsV3Api asks. */
        public asks: mexc.IPublicAggreDepthV3ApiItem[];

        /** PublicAggreDepthsV3Api bids. */
        public bids: mexc.IPublicAggreDepthV3ApiItem[];

        /** PublicAggreDepthsV3Api eventType. */
        public eventType: string;

        /** PublicAggreDepthsV3Api fromVersion. */
        public fromVersion: string;

        /** PublicAggreDepthsV3Api toVersion. */
        public toVersion: string;

        /**
         * Creates a new PublicAggreDepthsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicAggreDepthsV3Api instance
         */
        public static create(properties?: mexc.IPublicAggreDepthsV3Api): mexc.PublicAggreDepthsV3Api;

        /**
         * Encodes the specified PublicAggreDepthsV3Api message. Does not implicitly {@link mexc.PublicAggreDepthsV3Api.verify|verify} messages.
         * @param message PublicAggreDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicAggreDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicAggreDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicAggreDepthsV3Api.verify|verify} messages.
         * @param message PublicAggreDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicAggreDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicAggreDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicAggreDepthsV3Api;

        /**
         * Decodes a PublicAggreDepthsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicAggreDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicAggreDepthsV3Api;

        /**
         * Creates a PublicAggreDepthsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicAggreDepthsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicAggreDepthsV3Api;

        /**
         * Creates a plain object from a PublicAggreDepthsV3Api message. Also converts values to other types if specified.
         * @param message PublicAggreDepthsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicAggreDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicAggreDepthsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicAggreDepthsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicAggreDepthV3ApiItem. */
    interface IPublicAggreDepthV3ApiItem {

        /** PublicAggreDepthV3ApiItem price */
        price?: (string|null);

        /** PublicAggreDepthV3ApiItem quantity */
        quantity?: (string|null);
    }

    /** Represents a PublicAggreDepthV3ApiItem. */
    class PublicAggreDepthV3ApiItem implements IPublicAggreDepthV3ApiItem {

        /**
         * Constructs a new PublicAggreDepthV3ApiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicAggreDepthV3ApiItem);

        /** PublicAggreDepthV3ApiItem price. */
        public price: string;

        /** PublicAggreDepthV3ApiItem quantity. */
        public quantity: string;

        /**
         * Creates a new PublicAggreDepthV3ApiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicAggreDepthV3ApiItem instance
         */
        public static create(properties?: mexc.IPublicAggreDepthV3ApiItem): mexc.PublicAggreDepthV3ApiItem;

        /**
         * Encodes the specified PublicAggreDepthV3ApiItem message. Does not implicitly {@link mexc.PublicAggreDepthV3ApiItem.verify|verify} messages.
         * @param message PublicAggreDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicAggreDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicAggreDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicAggreDepthV3ApiItem.verify|verify} messages.
         * @param message PublicAggreDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicAggreDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicAggreDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicAggreDepthV3ApiItem;

        /**
         * Decodes a PublicAggreDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicAggreDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicAggreDepthV3ApiItem;

        /**
         * Creates a PublicAggreDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicAggreDepthV3ApiItem
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicAggreDepthV3ApiItem;

        /**
         * Creates a plain object from a PublicAggreDepthV3ApiItem message. Also converts values to other types if specified.
         * @param message PublicAggreDepthV3ApiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicAggreDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicAggreDepthV3ApiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicAggreDepthV3ApiItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicBookTickerBatchV3Api. */
    interface IPublicBookTickerBatchV3Api {

        /** PublicBookTickerBatchV3Api items */
        items?: (mexc.IPublicBookTickerV3Api[]|null);
    }

    /** Represents a PublicBookTickerBatchV3Api. */
    class PublicBookTickerBatchV3Api implements IPublicBookTickerBatchV3Api {

        /**
         * Constructs a new PublicBookTickerBatchV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicBookTickerBatchV3Api);

        /** PublicBookTickerBatchV3Api items. */
        public items: mexc.IPublicBookTickerV3Api[];

        /**
         * Creates a new PublicBookTickerBatchV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicBookTickerBatchV3Api instance
         */
        public static create(properties?: mexc.IPublicBookTickerBatchV3Api): mexc.PublicBookTickerBatchV3Api;

        /**
         * Encodes the specified PublicBookTickerBatchV3Api message. Does not implicitly {@link mexc.PublicBookTickerBatchV3Api.verify|verify} messages.
         * @param message PublicBookTickerBatchV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicBookTickerBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicBookTickerBatchV3Api message, length delimited. Does not implicitly {@link mexc.PublicBookTickerBatchV3Api.verify|verify} messages.
         * @param message PublicBookTickerBatchV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicBookTickerBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicBookTickerBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicBookTickerBatchV3Api;

        /**
         * Decodes a PublicBookTickerBatchV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicBookTickerBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicBookTickerBatchV3Api;

        /**
         * Creates a PublicBookTickerBatchV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicBookTickerBatchV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicBookTickerBatchV3Api;

        /**
         * Creates a plain object from a PublicBookTickerBatchV3Api message. Also converts values to other types if specified.
         * @param message PublicBookTickerBatchV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicBookTickerBatchV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicBookTickerBatchV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicBookTickerBatchV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicBookTickerV3Api. */
    interface IPublicBookTickerV3Api {

        /** PublicBookTickerV3Api bidPrice */
        bidPrice?: (string|null);

        /** PublicBookTickerV3Api bidQuantity */
        bidQuantity?: (string|null);

        /** PublicBookTickerV3Api askPrice */
        askPrice?: (string|null);

        /** PublicBookTickerV3Api askQuantity */
        askQuantity?: (string|null);
    }

    /** Represents a PublicBookTickerV3Api. */
    class PublicBookTickerV3Api implements IPublicBookTickerV3Api {

        /**
         * Constructs a new PublicBookTickerV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicBookTickerV3Api);

        /** PublicBookTickerV3Api bidPrice. */
        public bidPrice: string;

        /** PublicBookTickerV3Api bidQuantity. */
        public bidQuantity: string;

        /** PublicBookTickerV3Api askPrice. */
        public askPrice: string;

        /** PublicBookTickerV3Api askQuantity. */
        public askQuantity: string;

        /**
         * Creates a new PublicBookTickerV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicBookTickerV3Api instance
         */
        public static create(properties?: mexc.IPublicBookTickerV3Api): mexc.PublicBookTickerV3Api;

        /**
         * Encodes the specified PublicBookTickerV3Api message. Does not implicitly {@link mexc.PublicBookTickerV3Api.verify|verify} messages.
         * @param message PublicBookTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicBookTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicBookTickerV3Api.verify|verify} messages.
         * @param message PublicBookTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicBookTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicBookTickerV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicBookTickerV3Api;

        /**
         * Decodes a PublicBookTickerV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicBookTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicBookTickerV3Api;

        /**
         * Creates a PublicBookTickerV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicBookTickerV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicBookTickerV3Api;

        /**
         * Creates a plain object from a PublicBookTickerV3Api message. Also converts values to other types if specified.
         * @param message PublicBookTickerV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicBookTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicBookTickerV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicBookTickerV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicDealsV3Api. */
    interface IPublicDealsV3Api {

        /** PublicDealsV3Api deals */
        deals?: (mexc.IPublicDealsV3ApiItem[]|null);

        /** PublicDealsV3Api eventType */
        eventType?: (string|null);
    }

    /** Represents a PublicDealsV3Api. */
    class PublicDealsV3Api implements IPublicDealsV3Api {

        /**
         * Constructs a new PublicDealsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicDealsV3Api);

        /** PublicDealsV3Api deals. */
        public deals: mexc.IPublicDealsV3ApiItem[];

        /** PublicDealsV3Api eventType. */
        public eventType: string;

        /**
         * Creates a new PublicDealsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicDealsV3Api instance
         */
        public static create(properties?: mexc.IPublicDealsV3Api): mexc.PublicDealsV3Api;

        /**
         * Encodes the specified PublicDealsV3Api message. Does not implicitly {@link mexc.PublicDealsV3Api.verify|verify} messages.
         * @param message PublicDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicDealsV3Api message, length delimited. Does not implicitly {@link mexc.PublicDealsV3Api.verify|verify} messages.
         * @param message PublicDealsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicDealsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicDealsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicDealsV3Api;

        /**
         * Decodes a PublicDealsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicDealsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicDealsV3Api;

        /**
         * Creates a PublicDealsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicDealsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicDealsV3Api;

        /**
         * Creates a plain object from a PublicDealsV3Api message. Also converts values to other types if specified.
         * @param message PublicDealsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicDealsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicDealsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicDealsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicDealsV3ApiItem. */
    interface IPublicDealsV3ApiItem {

        /** PublicDealsV3ApiItem price */
        price?: (string|null);

        /** PublicDealsV3ApiItem quantity */
        quantity?: (string|null);

        /** PublicDealsV3ApiItem tradeType */
        tradeType?: (number|null);

        /** PublicDealsV3ApiItem time */
        time?: (number|null);
    }

    /** Represents a PublicDealsV3ApiItem. */
    class PublicDealsV3ApiItem implements IPublicDealsV3ApiItem {

        /**
         * Constructs a new PublicDealsV3ApiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicDealsV3ApiItem);

        /** PublicDealsV3ApiItem price. */
        public price: string;

        /** PublicDealsV3ApiItem quantity. */
        public quantity: string;

        /** PublicDealsV3ApiItem tradeType. */
        public tradeType: number;

        /** PublicDealsV3ApiItem time. */
        public time: number;

        /**
         * Creates a new PublicDealsV3ApiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicDealsV3ApiItem instance
         */
        public static create(properties?: mexc.IPublicDealsV3ApiItem): mexc.PublicDealsV3ApiItem;

        /**
         * Encodes the specified PublicDealsV3ApiItem message. Does not implicitly {@link mexc.PublicDealsV3ApiItem.verify|verify} messages.
         * @param message PublicDealsV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicDealsV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicDealsV3ApiItem.verify|verify} messages.
         * @param message PublicDealsV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicDealsV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicDealsV3ApiItem;

        /**
         * Decodes a PublicDealsV3ApiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicDealsV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicDealsV3ApiItem;

        /**
         * Creates a PublicDealsV3ApiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicDealsV3ApiItem
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicDealsV3ApiItem;

        /**
         * Creates a plain object from a PublicDealsV3ApiItem message. Also converts values to other types if specified.
         * @param message PublicDealsV3ApiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicDealsV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicDealsV3ApiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicDealsV3ApiItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicIncreaseDepthsBatchV3Api. */
    interface IPublicIncreaseDepthsBatchV3Api {

        /** PublicIncreaseDepthsBatchV3Api items */
        items?: (mexc.IPublicIncreaseDepthsV3Api[]|null);

        /** PublicIncreaseDepthsBatchV3Api eventType */
        eventType?: (string|null);
    }

    /** Represents a PublicIncreaseDepthsBatchV3Api. */
    class PublicIncreaseDepthsBatchV3Api implements IPublicIncreaseDepthsBatchV3Api {

        /**
         * Constructs a new PublicIncreaseDepthsBatchV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicIncreaseDepthsBatchV3Api);

        /** PublicIncreaseDepthsBatchV3Api items. */
        public items: mexc.IPublicIncreaseDepthsV3Api[];

        /** PublicIncreaseDepthsBatchV3Api eventType. */
        public eventType: string;

        /**
         * Creates a new PublicIncreaseDepthsBatchV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicIncreaseDepthsBatchV3Api instance
         */
        public static create(properties?: mexc.IPublicIncreaseDepthsBatchV3Api): mexc.PublicIncreaseDepthsBatchV3Api;

        /**
         * Encodes the specified PublicIncreaseDepthsBatchV3Api message. Does not implicitly {@link mexc.PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
         * @param message PublicIncreaseDepthsBatchV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicIncreaseDepthsBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicIncreaseDepthsBatchV3Api message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthsBatchV3Api.verify|verify} messages.
         * @param message PublicIncreaseDepthsBatchV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicIncreaseDepthsBatchV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicIncreaseDepthsBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicIncreaseDepthsBatchV3Api;

        /**
         * Decodes a PublicIncreaseDepthsBatchV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicIncreaseDepthsBatchV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicIncreaseDepthsBatchV3Api;

        /**
         * Creates a PublicIncreaseDepthsBatchV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicIncreaseDepthsBatchV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicIncreaseDepthsBatchV3Api;

        /**
         * Creates a plain object from a PublicIncreaseDepthsBatchV3Api message. Also converts values to other types if specified.
         * @param message PublicIncreaseDepthsBatchV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicIncreaseDepthsBatchV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicIncreaseDepthsBatchV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicIncreaseDepthsBatchV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicIncreaseDepthsV3Api. */
    interface IPublicIncreaseDepthsV3Api {

        /** PublicIncreaseDepthsV3Api asks */
        asks?: (mexc.IPublicIncreaseDepthV3ApiItem[]|null);

        /** PublicIncreaseDepthsV3Api bids */
        bids?: (mexc.IPublicIncreaseDepthV3ApiItem[]|null);

        /** PublicIncreaseDepthsV3Api eventType */
        eventType?: (string|null);

        /** PublicIncreaseDepthsV3Api version */
        version?: (string|null);
    }

    /** Represents a PublicIncreaseDepthsV3Api. */
    class PublicIncreaseDepthsV3Api implements IPublicIncreaseDepthsV3Api {

        /**
         * Constructs a new PublicIncreaseDepthsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicIncreaseDepthsV3Api);

        /** PublicIncreaseDepthsV3Api asks. */
        public asks: mexc.IPublicIncreaseDepthV3ApiItem[];

        /** PublicIncreaseDepthsV3Api bids. */
        public bids: mexc.IPublicIncreaseDepthV3ApiItem[];

        /** PublicIncreaseDepthsV3Api eventType. */
        public eventType: string;

        /** PublicIncreaseDepthsV3Api version. */
        public version: string;

        /**
         * Creates a new PublicIncreaseDepthsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicIncreaseDepthsV3Api instance
         */
        public static create(properties?: mexc.IPublicIncreaseDepthsV3Api): mexc.PublicIncreaseDepthsV3Api;

        /**
         * Encodes the specified PublicIncreaseDepthsV3Api message. Does not implicitly {@link mexc.PublicIncreaseDepthsV3Api.verify|verify} messages.
         * @param message PublicIncreaseDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicIncreaseDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicIncreaseDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthsV3Api.verify|verify} messages.
         * @param message PublicIncreaseDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicIncreaseDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicIncreaseDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicIncreaseDepthsV3Api;

        /**
         * Decodes a PublicIncreaseDepthsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicIncreaseDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicIncreaseDepthsV3Api;

        /**
         * Creates a PublicIncreaseDepthsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicIncreaseDepthsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicIncreaseDepthsV3Api;

        /**
         * Creates a plain object from a PublicIncreaseDepthsV3Api message. Also converts values to other types if specified.
         * @param message PublicIncreaseDepthsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicIncreaseDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicIncreaseDepthsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicIncreaseDepthsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicIncreaseDepthV3ApiItem. */
    interface IPublicIncreaseDepthV3ApiItem {

        /** PublicIncreaseDepthV3ApiItem price */
        price?: (string|null);

        /** PublicIncreaseDepthV3ApiItem quantity */
        quantity?: (string|null);
    }

    /** Represents a PublicIncreaseDepthV3ApiItem. */
    class PublicIncreaseDepthV3ApiItem implements IPublicIncreaseDepthV3ApiItem {

        /**
         * Constructs a new PublicIncreaseDepthV3ApiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicIncreaseDepthV3ApiItem);

        /** PublicIncreaseDepthV3ApiItem price. */
        public price: string;

        /** PublicIncreaseDepthV3ApiItem quantity. */
        public quantity: string;

        /**
         * Creates a new PublicIncreaseDepthV3ApiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicIncreaseDepthV3ApiItem instance
         */
        public static create(properties?: mexc.IPublicIncreaseDepthV3ApiItem): mexc.PublicIncreaseDepthV3ApiItem;

        /**
         * Encodes the specified PublicIncreaseDepthV3ApiItem message. Does not implicitly {@link mexc.PublicIncreaseDepthV3ApiItem.verify|verify} messages.
         * @param message PublicIncreaseDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicIncreaseDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicIncreaseDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicIncreaseDepthV3ApiItem.verify|verify} messages.
         * @param message PublicIncreaseDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicIncreaseDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicIncreaseDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicIncreaseDepthV3ApiItem;

        /**
         * Decodes a PublicIncreaseDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicIncreaseDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicIncreaseDepthV3ApiItem;

        /**
         * Creates a PublicIncreaseDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicIncreaseDepthV3ApiItem
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicIncreaseDepthV3ApiItem;

        /**
         * Creates a plain object from a PublicIncreaseDepthV3ApiItem message. Also converts values to other types if specified.
         * @param message PublicIncreaseDepthV3ApiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicIncreaseDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicIncreaseDepthV3ApiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicIncreaseDepthV3ApiItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicLimitDepthsV3Api. */
    interface IPublicLimitDepthsV3Api {

        /** PublicLimitDepthsV3Api asks */
        asks?: (mexc.IPublicLimitDepthV3ApiItem[]|null);

        /** PublicLimitDepthsV3Api bids */
        bids?: (mexc.IPublicLimitDepthV3ApiItem[]|null);

        /** PublicLimitDepthsV3Api eventType */
        eventType?: (string|null);

        /** PublicLimitDepthsV3Api version */
        version?: (string|null);
    }

    /** Represents a PublicLimitDepthsV3Api. */
    class PublicLimitDepthsV3Api implements IPublicLimitDepthsV3Api {

        /**
         * Constructs a new PublicLimitDepthsV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicLimitDepthsV3Api);

        /** PublicLimitDepthsV3Api asks. */
        public asks: mexc.IPublicLimitDepthV3ApiItem[];

        /** PublicLimitDepthsV3Api bids. */
        public bids: mexc.IPublicLimitDepthV3ApiItem[];

        /** PublicLimitDepthsV3Api eventType. */
        public eventType: string;

        /** PublicLimitDepthsV3Api version. */
        public version: string;

        /**
         * Creates a new PublicLimitDepthsV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicLimitDepthsV3Api instance
         */
        public static create(properties?: mexc.IPublicLimitDepthsV3Api): mexc.PublicLimitDepthsV3Api;

        /**
         * Encodes the specified PublicLimitDepthsV3Api message. Does not implicitly {@link mexc.PublicLimitDepthsV3Api.verify|verify} messages.
         * @param message PublicLimitDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicLimitDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicLimitDepthsV3Api message, length delimited. Does not implicitly {@link mexc.PublicLimitDepthsV3Api.verify|verify} messages.
         * @param message PublicLimitDepthsV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicLimitDepthsV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicLimitDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicLimitDepthsV3Api;

        /**
         * Decodes a PublicLimitDepthsV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicLimitDepthsV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicLimitDepthsV3Api;

        /**
         * Creates a PublicLimitDepthsV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicLimitDepthsV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicLimitDepthsV3Api;

        /**
         * Creates a plain object from a PublicLimitDepthsV3Api message. Also converts values to other types if specified.
         * @param message PublicLimitDepthsV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicLimitDepthsV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicLimitDepthsV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicLimitDepthsV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicLimitDepthV3ApiItem. */
    interface IPublicLimitDepthV3ApiItem {

        /** PublicLimitDepthV3ApiItem price */
        price?: (string|null);

        /** PublicLimitDepthV3ApiItem quantity */
        quantity?: (string|null);
    }

    /** Represents a PublicLimitDepthV3ApiItem. */
    class PublicLimitDepthV3ApiItem implements IPublicLimitDepthV3ApiItem {

        /**
         * Constructs a new PublicLimitDepthV3ApiItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicLimitDepthV3ApiItem);

        /** PublicLimitDepthV3ApiItem price. */
        public price: string;

        /** PublicLimitDepthV3ApiItem quantity. */
        public quantity: string;

        /**
         * Creates a new PublicLimitDepthV3ApiItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicLimitDepthV3ApiItem instance
         */
        public static create(properties?: mexc.IPublicLimitDepthV3ApiItem): mexc.PublicLimitDepthV3ApiItem;

        /**
         * Encodes the specified PublicLimitDepthV3ApiItem message. Does not implicitly {@link mexc.PublicLimitDepthV3ApiItem.verify|verify} messages.
         * @param message PublicLimitDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicLimitDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicLimitDepthV3ApiItem message, length delimited. Does not implicitly {@link mexc.PublicLimitDepthV3ApiItem.verify|verify} messages.
         * @param message PublicLimitDepthV3ApiItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicLimitDepthV3ApiItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicLimitDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicLimitDepthV3ApiItem;

        /**
         * Decodes a PublicLimitDepthV3ApiItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicLimitDepthV3ApiItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicLimitDepthV3ApiItem;

        /**
         * Creates a PublicLimitDepthV3ApiItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicLimitDepthV3ApiItem
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicLimitDepthV3ApiItem;

        /**
         * Creates a plain object from a PublicLimitDepthV3ApiItem message. Also converts values to other types if specified.
         * @param message PublicLimitDepthV3ApiItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicLimitDepthV3ApiItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicLimitDepthV3ApiItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicLimitDepthV3ApiItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicMiniTickerV3Api. */
    interface IPublicMiniTickerV3Api {

        /** PublicMiniTickerV3Api symbol */
        symbol?: (string|null);

        /** PublicMiniTickerV3Api price */
        price?: (string|null);

        /** PublicMiniTickerV3Api rate */
        rate?: (string|null);

        /** PublicMiniTickerV3Api zonedRate */
        zonedRate?: (string|null);

        /** PublicMiniTickerV3Api high */
        high?: (string|null);

        /** PublicMiniTickerV3Api low */
        low?: (string|null);

        /** PublicMiniTickerV3Api volume */
        volume?: (string|null);

        /** PublicMiniTickerV3Api quantity */
        quantity?: (string|null);

        /** PublicMiniTickerV3Api lastCloseRate */
        lastCloseRate?: (string|null);

        /** PublicMiniTickerV3Api lastCloseZonedRate */
        lastCloseZonedRate?: (string|null);

        /** PublicMiniTickerV3Api lastCloseHigh */
        lastCloseHigh?: (string|null);

        /** PublicMiniTickerV3Api lastCloseLow */
        lastCloseLow?: (string|null);
    }

    /** Represents a PublicMiniTickerV3Api. */
    class PublicMiniTickerV3Api implements IPublicMiniTickerV3Api {

        /**
         * Constructs a new PublicMiniTickerV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicMiniTickerV3Api);

        /** PublicMiniTickerV3Api symbol. */
        public symbol: string;

        /** PublicMiniTickerV3Api price. */
        public price: string;

        /** PublicMiniTickerV3Api rate. */
        public rate: string;

        /** PublicMiniTickerV3Api zonedRate. */
        public zonedRate: string;

        /** PublicMiniTickerV3Api high. */
        public high: string;

        /** PublicMiniTickerV3Api low. */
        public low: string;

        /** PublicMiniTickerV3Api volume. */
        public volume: string;

        /** PublicMiniTickerV3Api quantity. */
        public quantity: string;

        /** PublicMiniTickerV3Api lastCloseRate. */
        public lastCloseRate: string;

        /** PublicMiniTickerV3Api lastCloseZonedRate. */
        public lastCloseZonedRate: string;

        /** PublicMiniTickerV3Api lastCloseHigh. */
        public lastCloseHigh: string;

        /** PublicMiniTickerV3Api lastCloseLow. */
        public lastCloseLow: string;

        /**
         * Creates a new PublicMiniTickerV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicMiniTickerV3Api instance
         */
        public static create(properties?: mexc.IPublicMiniTickerV3Api): mexc.PublicMiniTickerV3Api;

        /**
         * Encodes the specified PublicMiniTickerV3Api message. Does not implicitly {@link mexc.PublicMiniTickerV3Api.verify|verify} messages.
         * @param message PublicMiniTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicMiniTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicMiniTickerV3Api message, length delimited. Does not implicitly {@link mexc.PublicMiniTickerV3Api.verify|verify} messages.
         * @param message PublicMiniTickerV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicMiniTickerV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicMiniTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicMiniTickerV3Api;

        /**
         * Decodes a PublicMiniTickerV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicMiniTickerV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicMiniTickerV3Api;

        /**
         * Creates a PublicMiniTickerV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicMiniTickerV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicMiniTickerV3Api;

        /**
         * Creates a plain object from a PublicMiniTickerV3Api message. Also converts values to other types if specified.
         * @param message PublicMiniTickerV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicMiniTickerV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicMiniTickerV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicMiniTickerV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicMiniTickersV3Api. */
    interface IPublicMiniTickersV3Api {

        /** PublicMiniTickersV3Api items */
        items?: (mexc.IPublicMiniTickerV3Api[]|null);
    }

    /** Represents a PublicMiniTickersV3Api. */
    class PublicMiniTickersV3Api implements IPublicMiniTickersV3Api {

        /**
         * Constructs a new PublicMiniTickersV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicMiniTickersV3Api);

        /** PublicMiniTickersV3Api items. */
        public items: mexc.IPublicMiniTickerV3Api[];

        /**
         * Creates a new PublicMiniTickersV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicMiniTickersV3Api instance
         */
        public static create(properties?: mexc.IPublicMiniTickersV3Api): mexc.PublicMiniTickersV3Api;

        /**
         * Encodes the specified PublicMiniTickersV3Api message. Does not implicitly {@link mexc.PublicMiniTickersV3Api.verify|verify} messages.
         * @param message PublicMiniTickersV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicMiniTickersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicMiniTickersV3Api message, length delimited. Does not implicitly {@link mexc.PublicMiniTickersV3Api.verify|verify} messages.
         * @param message PublicMiniTickersV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicMiniTickersV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicMiniTickersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicMiniTickersV3Api;

        /**
         * Decodes a PublicMiniTickersV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicMiniTickersV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicMiniTickersV3Api;

        /**
         * Creates a PublicMiniTickersV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicMiniTickersV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicMiniTickersV3Api;

        /**
         * Creates a plain object from a PublicMiniTickersV3Api message. Also converts values to other types if specified.
         * @param message PublicMiniTickersV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicMiniTickersV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicMiniTickersV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicMiniTickersV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PublicSpotKlineV3Api. */
    interface IPublicSpotKlineV3Api {

        /** PublicSpotKlineV3Api interval */
        interval?: (string|null);

        /** PublicSpotKlineV3Api windowStart */
        windowStart?: (number|null);

        /** PublicSpotKlineV3Api openingPrice */
        openingPrice?: (string|null);

        /** PublicSpotKlineV3Api closingPrice */
        closingPrice?: (string|null);

        /** PublicSpotKlineV3Api highestPrice */
        highestPrice?: (string|null);

        /** PublicSpotKlineV3Api lowestPrice */
        lowestPrice?: (string|null);

        /** PublicSpotKlineV3Api volume */
        volume?: (string|null);

        /** PublicSpotKlineV3Api amount */
        amount?: (string|null);

        /** PublicSpotKlineV3Api windowEnd */
        windowEnd?: (number|null);
    }

    /** Represents a PublicSpotKlineV3Api. */
    class PublicSpotKlineV3Api implements IPublicSpotKlineV3Api {

        /**
         * Constructs a new PublicSpotKlineV3Api.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPublicSpotKlineV3Api);

        /** PublicSpotKlineV3Api interval. */
        public interval: string;

        /** PublicSpotKlineV3Api windowStart. */
        public windowStart: number;

        /** PublicSpotKlineV3Api openingPrice. */
        public openingPrice: string;

        /** PublicSpotKlineV3Api closingPrice. */
        public closingPrice: string;

        /** PublicSpotKlineV3Api highestPrice. */
        public highestPrice: string;

        /** PublicSpotKlineV3Api lowestPrice. */
        public lowestPrice: string;

        /** PublicSpotKlineV3Api volume. */
        public volume: string;

        /** PublicSpotKlineV3Api amount. */
        public amount: string;

        /** PublicSpotKlineV3Api windowEnd. */
        public windowEnd: number;

        /**
         * Creates a new PublicSpotKlineV3Api instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicSpotKlineV3Api instance
         */
        public static create(properties?: mexc.IPublicSpotKlineV3Api): mexc.PublicSpotKlineV3Api;

        /**
         * Encodes the specified PublicSpotKlineV3Api message. Does not implicitly {@link mexc.PublicSpotKlineV3Api.verify|verify} messages.
         * @param message PublicSpotKlineV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPublicSpotKlineV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicSpotKlineV3Api message, length delimited. Does not implicitly {@link mexc.PublicSpotKlineV3Api.verify|verify} messages.
         * @param message PublicSpotKlineV3Api message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPublicSpotKlineV3Api, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicSpotKlineV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PublicSpotKlineV3Api;

        /**
         * Decodes a PublicSpotKlineV3Api message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicSpotKlineV3Api
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PublicSpotKlineV3Api;

        /**
         * Creates a PublicSpotKlineV3Api message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicSpotKlineV3Api
         */
        public static fromObject(object: { [k: string]: any }): mexc.PublicSpotKlineV3Api;

        /**
         * Creates a plain object from a PublicSpotKlineV3Api message. Also converts values to other types if specified.
         * @param message PublicSpotKlineV3Api
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PublicSpotKlineV3Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicSpotKlineV3Api to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PublicSpotKlineV3Api
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PushDataV3ApiWrapper. */
    interface IPushDataV3ApiWrapper {

        /** 频道 */
        channel?: (string|null);

        /** PushDataV3ApiWrapper publicDeals */
        publicDeals?: (mexc.IPublicDealsV3Api|null);

        /** PushDataV3ApiWrapper publicIncreaseDepths */
        publicIncreaseDepths?: (mexc.IPublicIncreaseDepthsV3Api|null);

        /** PushDataV3ApiWrapper publicLimitDepths */
        publicLimitDepths?: (mexc.IPublicLimitDepthsV3Api|null);

        /** PushDataV3ApiWrapper privateOrders */
        privateOrders?: (mexc.IPrivateOrdersV3Api|null);

        /** PushDataV3ApiWrapper publicBookTicker */
        publicBookTicker?: (mexc.IPublicBookTickerV3Api|null);

        /** PushDataV3ApiWrapper privateDeals */
        privateDeals?: (mexc.IPrivateDealsV3Api|null);

        /** PushDataV3ApiWrapper privateAccount */
        privateAccount?: (mexc.IPrivateAccountV3Api|null);

        /** PushDataV3ApiWrapper publicSpotKline */
        publicSpotKline?: (mexc.IPublicSpotKlineV3Api|null);

        /** PushDataV3ApiWrapper publicMiniTicker */
        publicMiniTicker?: (mexc.IPublicMiniTickerV3Api|null);

        /** PushDataV3ApiWrapper publicMiniTickers */
        publicMiniTickers?: (mexc.IPublicMiniTickersV3Api|null);

        /** PushDataV3ApiWrapper publicBookTickerBatch */
        publicBookTickerBatch?: (mexc.IPublicBookTickerBatchV3Api|null);

        /** PushDataV3ApiWrapper publicIncreaseDepthsBatch */
        publicIncreaseDepthsBatch?: (mexc.IPublicIncreaseDepthsBatchV3Api|null);

        /** PushDataV3ApiWrapper publicAggreDepths */
        publicAggreDepths?: (mexc.IPublicAggreDepthsV3Api|null);

        /** PushDataV3ApiWrapper publicAggreDeals */
        publicAggreDeals?: (mexc.IPublicAggreDealsV3Api|null);

        /** PushDataV3ApiWrapper publicAggreBookTicker */
        publicAggreBookTicker?: (mexc.IPublicAggreBookTickerV3Api|null);

        /** 交易对 */
        symbol?: (string|null);

        /** 交易对ID */
        symbolId?: (string|null);

        /** 消息生成时间 */
        createTime?: (number|null);

        /** 消息推送时间 */
        sendTime?: (number|null);
    }

    /** Represents a PushDataV3ApiWrapper. */
    class PushDataV3ApiWrapper implements IPushDataV3ApiWrapper {

        /**
         * Constructs a new PushDataV3ApiWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: mexc.IPushDataV3ApiWrapper);

        /** 频道 */
        public channel: string;

        /** PushDataV3ApiWrapper publicDeals. */
        public publicDeals?: (mexc.IPublicDealsV3Api|null);

        /** PushDataV3ApiWrapper publicIncreaseDepths. */
        public publicIncreaseDepths?: (mexc.IPublicIncreaseDepthsV3Api|null);

        /** PushDataV3ApiWrapper publicLimitDepths. */
        public publicLimitDepths?: (mexc.IPublicLimitDepthsV3Api|null);

        /** PushDataV3ApiWrapper privateOrders. */
        public privateOrders?: (mexc.IPrivateOrdersV3Api|null);

        /** PushDataV3ApiWrapper publicBookTicker. */
        public publicBookTicker?: (mexc.IPublicBookTickerV3Api|null);

        /** PushDataV3ApiWrapper privateDeals. */
        public privateDeals?: (mexc.IPrivateDealsV3Api|null);

        /** PushDataV3ApiWrapper privateAccount. */
        public privateAccount?: (mexc.IPrivateAccountV3Api|null);

        /** PushDataV3ApiWrapper publicSpotKline. */
        public publicSpotKline?: (mexc.IPublicSpotKlineV3Api|null);

        /** PushDataV3ApiWrapper publicMiniTicker. */
        public publicMiniTicker?: (mexc.IPublicMiniTickerV3Api|null);

        /** PushDataV3ApiWrapper publicMiniTickers. */
        public publicMiniTickers?: (mexc.IPublicMiniTickersV3Api|null);

        /** PushDataV3ApiWrapper publicBookTickerBatch. */
        public publicBookTickerBatch?: (mexc.IPublicBookTickerBatchV3Api|null);

        /** PushDataV3ApiWrapper publicIncreaseDepthsBatch. */
        public publicIncreaseDepthsBatch?: (mexc.IPublicIncreaseDepthsBatchV3Api|null);

        /** PushDataV3ApiWrapper publicAggreDepths. */
        public publicAggreDepths?: (mexc.IPublicAggreDepthsV3Api|null);

        /** PushDataV3ApiWrapper publicAggreDeals. */
        public publicAggreDeals?: (mexc.IPublicAggreDealsV3Api|null);

        /** PushDataV3ApiWrapper publicAggreBookTicker. */
        public publicAggreBookTicker?: (mexc.IPublicAggreBookTickerV3Api|null);

        /** 交易对 */
        public symbol: string;

        /** 交易对ID */
        public symbolId: string;

        /** 消息生成时间 */
        public createTime: number;

        /** 消息推送时间 */
        public sendTime: number;

        /** 数据，NOTE：因为不能重复，所以类型和变量名尽量使用全名 */
        public body?: ("publicDeals"|"publicIncreaseDepths"|"publicLimitDepths"|"privateOrders"|"publicBookTicker"|"privateDeals"|"privateAccount"|"publicSpotKline"|"publicMiniTicker"|"publicMiniTickers"|"publicBookTickerBatch"|"publicIncreaseDepthsBatch"|"publicAggreDepths"|"publicAggreDeals"|"publicAggreBookTicker");

        /**
         * Creates a new PushDataV3ApiWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushDataV3ApiWrapper instance
         */
        public static create(properties?: mexc.IPushDataV3ApiWrapper): mexc.PushDataV3ApiWrapper;

        /**
         * Encodes the specified PushDataV3ApiWrapper message. Does not implicitly {@link mexc.PushDataV3ApiWrapper.verify|verify} messages.
         * @param message PushDataV3ApiWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mexc.IPushDataV3ApiWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushDataV3ApiWrapper message, length delimited. Does not implicitly {@link mexc.PushDataV3ApiWrapper.verify|verify} messages.
         * @param message PushDataV3ApiWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mexc.IPushDataV3ApiWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushDataV3ApiWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mexc.PushDataV3ApiWrapper;

        /**
         * Decodes a PushDataV3ApiWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushDataV3ApiWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mexc.PushDataV3ApiWrapper;

        /**
         * Creates a PushDataV3ApiWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushDataV3ApiWrapper
         */
        public static fromObject(object: { [k: string]: any }): mexc.PushDataV3ApiWrapper;

        /**
         * Creates a plain object from a PushDataV3ApiWrapper message. Also converts values to other types if specified.
         * @param message PushDataV3ApiWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mexc.PushDataV3ApiWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushDataV3ApiWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PushDataV3ApiWrapper
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
