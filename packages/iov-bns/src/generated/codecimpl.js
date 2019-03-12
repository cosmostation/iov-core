/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.app = (function() {

    /**
     * Namespace app.
     * @exports app
     * @namespace
     */
    var app = {};

    app.ResultSet = (function() {

        /**
         * Properties of a ResultSet.
         * @memberof app
         * @interface IResultSet
         * @property {Array.<Uint8Array>|null} [results] ResultSet results
         */

        /**
         * Constructs a new ResultSet.
         * @memberof app
         * @classdesc ResultSet contains a list of keys or values
         * @implements IResultSet
         * @constructor
         * @param {app.IResultSet=} [properties] Properties to set
         */
        function ResultSet(properties) {
            this.results = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultSet results.
         * @member {Array.<Uint8Array>} results
         * @memberof app.ResultSet
         * @instance
         */
        ResultSet.prototype.results = $util.emptyArray;

        /**
         * Creates a new ResultSet instance using the specified properties.
         * @function create
         * @memberof app.ResultSet
         * @static
         * @param {app.IResultSet=} [properties] Properties to set
         * @returns {app.ResultSet} ResultSet instance
         */
        ResultSet.create = function create(properties) {
            return new ResultSet(properties);
        };

        /**
         * Encodes the specified ResultSet message. Does not implicitly {@link app.ResultSet.verify|verify} messages.
         * @function encode
         * @memberof app.ResultSet
         * @static
         * @param {app.IResultSet} message ResultSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (var i = 0; i < message.results.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.results[i]);
            return writer;
        };

        /**
         * Encodes the specified ResultSet message, length delimited. Does not implicitly {@link app.ResultSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.ResultSet
         * @static
         * @param {app.IResultSet} message ResultSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultSet message from the specified reader or buffer.
         * @function decode
         * @memberof app.ResultSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.ResultSet} ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.ResultSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResultSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.ResultSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.ResultSet} ResultSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultSet message.
         * @function verify
         * @memberof app.ResultSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (var i = 0; i < message.results.length; ++i)
                    if (!(message.results[i] && typeof message.results[i].length === "number" || $util.isString(message.results[i])))
                        return "results: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ResultSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.ResultSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.ResultSet} ResultSet
         */
        ResultSet.fromObject = function fromObject(object) {
            if (object instanceof $root.app.ResultSet)
                return object;
            var message = new $root.app.ResultSet();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".app.ResultSet.results: array expected");
                message.results = [];
                for (var i = 0; i < object.results.length; ++i)
                    if (typeof object.results[i] === "string")
                        $util.base64.decode(object.results[i], message.results[i] = $util.newBuffer($util.base64.length(object.results[i])), 0);
                    else if (object.results[i].length)
                        message.results[i] = object.results[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ResultSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.ResultSet
         * @static
         * @param {app.ResultSet} message ResultSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (var j = 0; j < message.results.length; ++j)
                    object.results[j] = options.bytes === String ? $util.base64.encode(message.results[j], 0, message.results[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.results[j]) : message.results[j];
            }
            return object;
        };

        /**
         * Converts this ResultSet to JSON.
         * @function toJSON
         * @memberof app.ResultSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultSet;
    })();

    app.Tx = (function() {

        /**
         * Properties of a Tx.
         * @memberof app
         * @interface ITx
         * @property {cash.IFeeInfo|null} [fees] Tx fees
         * @property {Array.<sigs.IStdSignature>|null} [signatures] Tx signatures
         * @property {Uint8Array|null} [preimage] Preimage for hashlock.
         * @property {Array.<Uint8Array>|null} [multisig] ID of a multisig contract.
         * @property {cash.ISendMsg|null} [sendMsg] Tx sendMsg
         * @property {escrow.ICreateEscrowMsg|null} [createEscrowMsg] Tx createEscrowMsg
         * @property {escrow.IReleaseEscrowMsg|null} [releaseEscrowMsg] Tx releaseEscrowMsg
         * @property {escrow.IReturnEscrowMsg|null} [returnEscrowMsg] Tx returnEscrowMsg
         * @property {escrow.IUpdateEscrowPartiesMsg|null} [updateEscrowMsg] Tx updateEscrowMsg
         * @property {multisig.ICreateContractMsg|null} [createContractMsg] Tx createContractMsg
         * @property {multisig.IUpdateContractMsg|null} [updateContractMsg] Tx updateContractMsg
         * @property {validators.ISetValidatorsMsg|null} [setValidatorsMsg] Tx setValidatorsMsg
         * @property {currency.INewTokenInfoMsg|null} [newTokenInfoMsg] Tx newTokenInfoMsg
         * @property {nft.IAddApprovalMsg|null} [addApprovalMsg] BatchMsg batch_msg = 60;
         * @property {nft.IRemoveApprovalMsg|null} [removeApprovalMsg] Tx removeApprovalMsg
         * @property {username.IIssueTokenMsg|null} [issueUsernameNftMsg] Tx issueUsernameNftMsg
         * @property {username.IAddChainAddressMsg|null} [addUsernameAddressNftMsg] Tx addUsernameAddressNftMsg
         * @property {username.IRemoveChainAddressMsg|null} [removeUsernameAddressMsg] Tx removeUsernameAddressMsg
         * @property {distribution.INewRevenueMsg|null} [newRevenueMsg] Tx newRevenueMsg
         * @property {distribution.IDistributeMsg|null} [distributeMsg] Tx distributeMsg
         * @property {distribution.IResetRevenueMsg|null} [resetRevenueMsg] Tx resetRevenueMsg
         */

        /**
         * Constructs a new Tx.
         * @memberof app
         * @classdesc clarity).
         * @implements ITx
         * @constructor
         * @param {app.ITx=} [properties] Properties to set
         */
        function Tx(properties) {
            this.signatures = [];
            this.multisig = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Tx fees.
         * @member {cash.IFeeInfo|null|undefined} fees
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.fees = null;

        /**
         * Tx signatures.
         * @member {Array.<sigs.IStdSignature>} signatures
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.signatures = $util.emptyArray;

        /**
         * Preimage for hashlock.
         * @member {Uint8Array} preimage
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.preimage = $util.newBuffer([]);

        /**
         * ID of a multisig contract.
         * @member {Array.<Uint8Array>} multisig
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.multisig = $util.emptyArray;

        /**
         * Tx sendMsg.
         * @member {cash.ISendMsg|null|undefined} sendMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.sendMsg = null;

        /**
         * Tx createEscrowMsg.
         * @member {escrow.ICreateEscrowMsg|null|undefined} createEscrowMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.createEscrowMsg = null;

        /**
         * Tx releaseEscrowMsg.
         * @member {escrow.IReleaseEscrowMsg|null|undefined} releaseEscrowMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.releaseEscrowMsg = null;

        /**
         * Tx returnEscrowMsg.
         * @member {escrow.IReturnEscrowMsg|null|undefined} returnEscrowMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.returnEscrowMsg = null;

        /**
         * Tx updateEscrowMsg.
         * @member {escrow.IUpdateEscrowPartiesMsg|null|undefined} updateEscrowMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.updateEscrowMsg = null;

        /**
         * Tx createContractMsg.
         * @member {multisig.ICreateContractMsg|null|undefined} createContractMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.createContractMsg = null;

        /**
         * Tx updateContractMsg.
         * @member {multisig.IUpdateContractMsg|null|undefined} updateContractMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.updateContractMsg = null;

        /**
         * Tx setValidatorsMsg.
         * @member {validators.ISetValidatorsMsg|null|undefined} setValidatorsMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.setValidatorsMsg = null;

        /**
         * Tx newTokenInfoMsg.
         * @member {currency.INewTokenInfoMsg|null|undefined} newTokenInfoMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.newTokenInfoMsg = null;

        /**
         * BatchMsg batch_msg = 60;
         * @member {nft.IAddApprovalMsg|null|undefined} addApprovalMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.addApprovalMsg = null;

        /**
         * Tx removeApprovalMsg.
         * @member {nft.IRemoveApprovalMsg|null|undefined} removeApprovalMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.removeApprovalMsg = null;

        /**
         * Tx issueUsernameNftMsg.
         * @member {username.IIssueTokenMsg|null|undefined} issueUsernameNftMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.issueUsernameNftMsg = null;

        /**
         * Tx addUsernameAddressNftMsg.
         * @member {username.IAddChainAddressMsg|null|undefined} addUsernameAddressNftMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.addUsernameAddressNftMsg = null;

        /**
         * Tx removeUsernameAddressMsg.
         * @member {username.IRemoveChainAddressMsg|null|undefined} removeUsernameAddressMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.removeUsernameAddressMsg = null;

        /**
         * Tx newRevenueMsg.
         * @member {distribution.INewRevenueMsg|null|undefined} newRevenueMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.newRevenueMsg = null;

        /**
         * Tx distributeMsg.
         * @member {distribution.IDistributeMsg|null|undefined} distributeMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.distributeMsg = null;

        /**
         * Tx resetRevenueMsg.
         * @member {distribution.IResetRevenueMsg|null|undefined} resetRevenueMsg
         * @memberof app.Tx
         * @instance
         */
        Tx.prototype.resetRevenueMsg = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * msg is a sum type over all allowed messages on this chain.
         * @member {"sendMsg"|"createEscrowMsg"|"releaseEscrowMsg"|"returnEscrowMsg"|"updateEscrowMsg"|"createContractMsg"|"updateContractMsg"|"setValidatorsMsg"|"newTokenInfoMsg"|"addApprovalMsg"|"removeApprovalMsg"|"issueUsernameNftMsg"|"addUsernameAddressNftMsg"|"removeUsernameAddressMsg"|"newRevenueMsg"|"distributeMsg"|"resetRevenueMsg"|undefined} sum
         * @memberof app.Tx
         * @instance
         */
        Object.defineProperty(Tx.prototype, "sum", {
            get: $util.oneOfGetter($oneOfFields = ["sendMsg", "createEscrowMsg", "releaseEscrowMsg", "returnEscrowMsg", "updateEscrowMsg", "createContractMsg", "updateContractMsg", "setValidatorsMsg", "newTokenInfoMsg", "addApprovalMsg", "removeApprovalMsg", "issueUsernameNftMsg", "addUsernameAddressNftMsg", "removeUsernameAddressMsg", "newRevenueMsg", "distributeMsg", "resetRevenueMsg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Tx instance using the specified properties.
         * @function create
         * @memberof app.Tx
         * @static
         * @param {app.ITx=} [properties] Properties to set
         * @returns {app.Tx} Tx instance
         */
        Tx.create = function create(properties) {
            return new Tx(properties);
        };

        /**
         * Encodes the specified Tx message. Does not implicitly {@link app.Tx.verify|verify} messages.
         * @function encode
         * @memberof app.Tx
         * @static
         * @param {app.ITx} message Tx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fees != null && message.hasOwnProperty("fees"))
                $root.cash.FeeInfo.encode(message.fees, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.signatures != null && message.signatures.length)
                for (var i = 0; i < message.signatures.length; ++i)
                    $root.sigs.StdSignature.encode(message.signatures[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.preimage != null && message.hasOwnProperty("preimage"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.preimage);
            if (message.multisig != null && message.multisig.length)
                for (var i = 0; i < message.multisig.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.multisig[i]);
            if (message.sendMsg != null && message.hasOwnProperty("sendMsg"))
                $root.cash.SendMsg.encode(message.sendMsg, writer.uint32(/* id 51, wireType 2 =*/410).fork()).ldelim();
            if (message.createEscrowMsg != null && message.hasOwnProperty("createEscrowMsg"))
                $root.escrow.CreateEscrowMsg.encode(message.createEscrowMsg, writer.uint32(/* id 52, wireType 2 =*/418).fork()).ldelim();
            if (message.releaseEscrowMsg != null && message.hasOwnProperty("releaseEscrowMsg"))
                $root.escrow.ReleaseEscrowMsg.encode(message.releaseEscrowMsg, writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
            if (message.returnEscrowMsg != null && message.hasOwnProperty("returnEscrowMsg"))
                $root.escrow.ReturnEscrowMsg.encode(message.returnEscrowMsg, writer.uint32(/* id 54, wireType 2 =*/434).fork()).ldelim();
            if (message.updateEscrowMsg != null && message.hasOwnProperty("updateEscrowMsg"))
                $root.escrow.UpdateEscrowPartiesMsg.encode(message.updateEscrowMsg, writer.uint32(/* id 55, wireType 2 =*/442).fork()).ldelim();
            if (message.createContractMsg != null && message.hasOwnProperty("createContractMsg"))
                $root.multisig.CreateContractMsg.encode(message.createContractMsg, writer.uint32(/* id 56, wireType 2 =*/450).fork()).ldelim();
            if (message.updateContractMsg != null && message.hasOwnProperty("updateContractMsg"))
                $root.multisig.UpdateContractMsg.encode(message.updateContractMsg, writer.uint32(/* id 57, wireType 2 =*/458).fork()).ldelim();
            if (message.setValidatorsMsg != null && message.hasOwnProperty("setValidatorsMsg"))
                $root.validators.SetValidatorsMsg.encode(message.setValidatorsMsg, writer.uint32(/* id 58, wireType 2 =*/466).fork()).ldelim();
            if (message.newTokenInfoMsg != null && message.hasOwnProperty("newTokenInfoMsg"))
                $root.currency.NewTokenInfoMsg.encode(message.newTokenInfoMsg, writer.uint32(/* id 59, wireType 2 =*/474).fork()).ldelim();
            if (message.addApprovalMsg != null && message.hasOwnProperty("addApprovalMsg"))
                $root.nft.AddApprovalMsg.encode(message.addApprovalMsg, writer.uint32(/* id 61, wireType 2 =*/490).fork()).ldelim();
            if (message.removeApprovalMsg != null && message.hasOwnProperty("removeApprovalMsg"))
                $root.nft.RemoveApprovalMsg.encode(message.removeApprovalMsg, writer.uint32(/* id 62, wireType 2 =*/498).fork()).ldelim();
            if (message.issueUsernameNftMsg != null && message.hasOwnProperty("issueUsernameNftMsg"))
                $root.username.IssueTokenMsg.encode(message.issueUsernameNftMsg, writer.uint32(/* id 63, wireType 2 =*/506).fork()).ldelim();
            if (message.addUsernameAddressNftMsg != null && message.hasOwnProperty("addUsernameAddressNftMsg"))
                $root.username.AddChainAddressMsg.encode(message.addUsernameAddressNftMsg, writer.uint32(/* id 64, wireType 2 =*/514).fork()).ldelim();
            if (message.removeUsernameAddressMsg != null && message.hasOwnProperty("removeUsernameAddressMsg"))
                $root.username.RemoveChainAddressMsg.encode(message.removeUsernameAddressMsg, writer.uint32(/* id 65, wireType 2 =*/522).fork()).ldelim();
            if (message.newRevenueMsg != null && message.hasOwnProperty("newRevenueMsg"))
                $root.distribution.NewRevenueMsg.encode(message.newRevenueMsg, writer.uint32(/* id 66, wireType 2 =*/530).fork()).ldelim();
            if (message.distributeMsg != null && message.hasOwnProperty("distributeMsg"))
                $root.distribution.DistributeMsg.encode(message.distributeMsg, writer.uint32(/* id 67, wireType 2 =*/538).fork()).ldelim();
            if (message.resetRevenueMsg != null && message.hasOwnProperty("resetRevenueMsg"))
                $root.distribution.ResetRevenueMsg.encode(message.resetRevenueMsg, writer.uint32(/* id 68, wireType 2 =*/546).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Tx message, length delimited. Does not implicitly {@link app.Tx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof app.Tx
         * @static
         * @param {app.ITx} message Tx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Tx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Tx message from the specified reader or buffer.
         * @function decode
         * @memberof app.Tx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {app.Tx} Tx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.app.Tx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.fees = $root.cash.FeeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.signatures && message.signatures.length))
                        message.signatures = [];
                    message.signatures.push($root.sigs.StdSignature.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.preimage = reader.bytes();
                    break;
                case 4:
                    if (!(message.multisig && message.multisig.length))
                        message.multisig = [];
                    message.multisig.push(reader.bytes());
                    break;
                case 51:
                    message.sendMsg = $root.cash.SendMsg.decode(reader, reader.uint32());
                    break;
                case 52:
                    message.createEscrowMsg = $root.escrow.CreateEscrowMsg.decode(reader, reader.uint32());
                    break;
                case 53:
                    message.releaseEscrowMsg = $root.escrow.ReleaseEscrowMsg.decode(reader, reader.uint32());
                    break;
                case 54:
                    message.returnEscrowMsg = $root.escrow.ReturnEscrowMsg.decode(reader, reader.uint32());
                    break;
                case 55:
                    message.updateEscrowMsg = $root.escrow.UpdateEscrowPartiesMsg.decode(reader, reader.uint32());
                    break;
                case 56:
                    message.createContractMsg = $root.multisig.CreateContractMsg.decode(reader, reader.uint32());
                    break;
                case 57:
                    message.updateContractMsg = $root.multisig.UpdateContractMsg.decode(reader, reader.uint32());
                    break;
                case 58:
                    message.setValidatorsMsg = $root.validators.SetValidatorsMsg.decode(reader, reader.uint32());
                    break;
                case 59:
                    message.newTokenInfoMsg = $root.currency.NewTokenInfoMsg.decode(reader, reader.uint32());
                    break;
                case 61:
                    message.addApprovalMsg = $root.nft.AddApprovalMsg.decode(reader, reader.uint32());
                    break;
                case 62:
                    message.removeApprovalMsg = $root.nft.RemoveApprovalMsg.decode(reader, reader.uint32());
                    break;
                case 63:
                    message.issueUsernameNftMsg = $root.username.IssueTokenMsg.decode(reader, reader.uint32());
                    break;
                case 64:
                    message.addUsernameAddressNftMsg = $root.username.AddChainAddressMsg.decode(reader, reader.uint32());
                    break;
                case 65:
                    message.removeUsernameAddressMsg = $root.username.RemoveChainAddressMsg.decode(reader, reader.uint32());
                    break;
                case 66:
                    message.newRevenueMsg = $root.distribution.NewRevenueMsg.decode(reader, reader.uint32());
                    break;
                case 67:
                    message.distributeMsg = $root.distribution.DistributeMsg.decode(reader, reader.uint32());
                    break;
                case 68:
                    message.resetRevenueMsg = $root.distribution.ResetRevenueMsg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Tx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof app.Tx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {app.Tx} Tx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Tx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Tx message.
         * @function verify
         * @memberof app.Tx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Tx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.fees != null && message.hasOwnProperty("fees")) {
                var error = $root.cash.FeeInfo.verify(message.fees);
                if (error)
                    return "fees." + error;
            }
            if (message.signatures != null && message.hasOwnProperty("signatures")) {
                if (!Array.isArray(message.signatures))
                    return "signatures: array expected";
                for (var i = 0; i < message.signatures.length; ++i) {
                    var error = $root.sigs.StdSignature.verify(message.signatures[i]);
                    if (error)
                        return "signatures." + error;
                }
            }
            if (message.preimage != null && message.hasOwnProperty("preimage"))
                if (!(message.preimage && typeof message.preimage.length === "number" || $util.isString(message.preimage)))
                    return "preimage: buffer expected";
            if (message.multisig != null && message.hasOwnProperty("multisig")) {
                if (!Array.isArray(message.multisig))
                    return "multisig: array expected";
                for (var i = 0; i < message.multisig.length; ++i)
                    if (!(message.multisig[i] && typeof message.multisig[i].length === "number" || $util.isString(message.multisig[i])))
                        return "multisig: buffer[] expected";
            }
            if (message.sendMsg != null && message.hasOwnProperty("sendMsg")) {
                properties.sum = 1;
                {
                    var error = $root.cash.SendMsg.verify(message.sendMsg);
                    if (error)
                        return "sendMsg." + error;
                }
            }
            if (message.createEscrowMsg != null && message.hasOwnProperty("createEscrowMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.escrow.CreateEscrowMsg.verify(message.createEscrowMsg);
                    if (error)
                        return "createEscrowMsg." + error;
                }
            }
            if (message.releaseEscrowMsg != null && message.hasOwnProperty("releaseEscrowMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.escrow.ReleaseEscrowMsg.verify(message.releaseEscrowMsg);
                    if (error)
                        return "releaseEscrowMsg." + error;
                }
            }
            if (message.returnEscrowMsg != null && message.hasOwnProperty("returnEscrowMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.escrow.ReturnEscrowMsg.verify(message.returnEscrowMsg);
                    if (error)
                        return "returnEscrowMsg." + error;
                }
            }
            if (message.updateEscrowMsg != null && message.hasOwnProperty("updateEscrowMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.escrow.UpdateEscrowPartiesMsg.verify(message.updateEscrowMsg);
                    if (error)
                        return "updateEscrowMsg." + error;
                }
            }
            if (message.createContractMsg != null && message.hasOwnProperty("createContractMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.multisig.CreateContractMsg.verify(message.createContractMsg);
                    if (error)
                        return "createContractMsg." + error;
                }
            }
            if (message.updateContractMsg != null && message.hasOwnProperty("updateContractMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.multisig.UpdateContractMsg.verify(message.updateContractMsg);
                    if (error)
                        return "updateContractMsg." + error;
                }
            }
            if (message.setValidatorsMsg != null && message.hasOwnProperty("setValidatorsMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.validators.SetValidatorsMsg.verify(message.setValidatorsMsg);
                    if (error)
                        return "setValidatorsMsg." + error;
                }
            }
            if (message.newTokenInfoMsg != null && message.hasOwnProperty("newTokenInfoMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.currency.NewTokenInfoMsg.verify(message.newTokenInfoMsg);
                    if (error)
                        return "newTokenInfoMsg." + error;
                }
            }
            if (message.addApprovalMsg != null && message.hasOwnProperty("addApprovalMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.nft.AddApprovalMsg.verify(message.addApprovalMsg);
                    if (error)
                        return "addApprovalMsg." + error;
                }
            }
            if (message.removeApprovalMsg != null && message.hasOwnProperty("removeApprovalMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.nft.RemoveApprovalMsg.verify(message.removeApprovalMsg);
                    if (error)
                        return "removeApprovalMsg." + error;
                }
            }
            if (message.issueUsernameNftMsg != null && message.hasOwnProperty("issueUsernameNftMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.username.IssueTokenMsg.verify(message.issueUsernameNftMsg);
                    if (error)
                        return "issueUsernameNftMsg." + error;
                }
            }
            if (message.addUsernameAddressNftMsg != null && message.hasOwnProperty("addUsernameAddressNftMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.username.AddChainAddressMsg.verify(message.addUsernameAddressNftMsg);
                    if (error)
                        return "addUsernameAddressNftMsg." + error;
                }
            }
            if (message.removeUsernameAddressMsg != null && message.hasOwnProperty("removeUsernameAddressMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.username.RemoveChainAddressMsg.verify(message.removeUsernameAddressMsg);
                    if (error)
                        return "removeUsernameAddressMsg." + error;
                }
            }
            if (message.newRevenueMsg != null && message.hasOwnProperty("newRevenueMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.distribution.NewRevenueMsg.verify(message.newRevenueMsg);
                    if (error)
                        return "newRevenueMsg." + error;
                }
            }
            if (message.distributeMsg != null && message.hasOwnProperty("distributeMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.distribution.DistributeMsg.verify(message.distributeMsg);
                    if (error)
                        return "distributeMsg." + error;
                }
            }
            if (message.resetRevenueMsg != null && message.hasOwnProperty("resetRevenueMsg")) {
                if (properties.sum === 1)
                    return "sum: multiple values";
                properties.sum = 1;
                {
                    var error = $root.distribution.ResetRevenueMsg.verify(message.resetRevenueMsg);
                    if (error)
                        return "resetRevenueMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Tx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof app.Tx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {app.Tx} Tx
         */
        Tx.fromObject = function fromObject(object) {
            if (object instanceof $root.app.Tx)
                return object;
            var message = new $root.app.Tx();
            if (object.fees != null) {
                if (typeof object.fees !== "object")
                    throw TypeError(".app.Tx.fees: object expected");
                message.fees = $root.cash.FeeInfo.fromObject(object.fees);
            }
            if (object.signatures) {
                if (!Array.isArray(object.signatures))
                    throw TypeError(".app.Tx.signatures: array expected");
                message.signatures = [];
                for (var i = 0; i < object.signatures.length; ++i) {
                    if (typeof object.signatures[i] !== "object")
                        throw TypeError(".app.Tx.signatures: object expected");
                    message.signatures[i] = $root.sigs.StdSignature.fromObject(object.signatures[i]);
                }
            }
            if (object.preimage != null)
                if (typeof object.preimage === "string")
                    $util.base64.decode(object.preimage, message.preimage = $util.newBuffer($util.base64.length(object.preimage)), 0);
                else if (object.preimage.length)
                    message.preimage = object.preimage;
            if (object.multisig) {
                if (!Array.isArray(object.multisig))
                    throw TypeError(".app.Tx.multisig: array expected");
                message.multisig = [];
                for (var i = 0; i < object.multisig.length; ++i)
                    if (typeof object.multisig[i] === "string")
                        $util.base64.decode(object.multisig[i], message.multisig[i] = $util.newBuffer($util.base64.length(object.multisig[i])), 0);
                    else if (object.multisig[i].length)
                        message.multisig[i] = object.multisig[i];
            }
            if (object.sendMsg != null) {
                if (typeof object.sendMsg !== "object")
                    throw TypeError(".app.Tx.sendMsg: object expected");
                message.sendMsg = $root.cash.SendMsg.fromObject(object.sendMsg);
            }
            if (object.createEscrowMsg != null) {
                if (typeof object.createEscrowMsg !== "object")
                    throw TypeError(".app.Tx.createEscrowMsg: object expected");
                message.createEscrowMsg = $root.escrow.CreateEscrowMsg.fromObject(object.createEscrowMsg);
            }
            if (object.releaseEscrowMsg != null) {
                if (typeof object.releaseEscrowMsg !== "object")
                    throw TypeError(".app.Tx.releaseEscrowMsg: object expected");
                message.releaseEscrowMsg = $root.escrow.ReleaseEscrowMsg.fromObject(object.releaseEscrowMsg);
            }
            if (object.returnEscrowMsg != null) {
                if (typeof object.returnEscrowMsg !== "object")
                    throw TypeError(".app.Tx.returnEscrowMsg: object expected");
                message.returnEscrowMsg = $root.escrow.ReturnEscrowMsg.fromObject(object.returnEscrowMsg);
            }
            if (object.updateEscrowMsg != null) {
                if (typeof object.updateEscrowMsg !== "object")
                    throw TypeError(".app.Tx.updateEscrowMsg: object expected");
                message.updateEscrowMsg = $root.escrow.UpdateEscrowPartiesMsg.fromObject(object.updateEscrowMsg);
            }
            if (object.createContractMsg != null) {
                if (typeof object.createContractMsg !== "object")
                    throw TypeError(".app.Tx.createContractMsg: object expected");
                message.createContractMsg = $root.multisig.CreateContractMsg.fromObject(object.createContractMsg);
            }
            if (object.updateContractMsg != null) {
                if (typeof object.updateContractMsg !== "object")
                    throw TypeError(".app.Tx.updateContractMsg: object expected");
                message.updateContractMsg = $root.multisig.UpdateContractMsg.fromObject(object.updateContractMsg);
            }
            if (object.setValidatorsMsg != null) {
                if (typeof object.setValidatorsMsg !== "object")
                    throw TypeError(".app.Tx.setValidatorsMsg: object expected");
                message.setValidatorsMsg = $root.validators.SetValidatorsMsg.fromObject(object.setValidatorsMsg);
            }
            if (object.newTokenInfoMsg != null) {
                if (typeof object.newTokenInfoMsg !== "object")
                    throw TypeError(".app.Tx.newTokenInfoMsg: object expected");
                message.newTokenInfoMsg = $root.currency.NewTokenInfoMsg.fromObject(object.newTokenInfoMsg);
            }
            if (object.addApprovalMsg != null) {
                if (typeof object.addApprovalMsg !== "object")
                    throw TypeError(".app.Tx.addApprovalMsg: object expected");
                message.addApprovalMsg = $root.nft.AddApprovalMsg.fromObject(object.addApprovalMsg);
            }
            if (object.removeApprovalMsg != null) {
                if (typeof object.removeApprovalMsg !== "object")
                    throw TypeError(".app.Tx.removeApprovalMsg: object expected");
                message.removeApprovalMsg = $root.nft.RemoveApprovalMsg.fromObject(object.removeApprovalMsg);
            }
            if (object.issueUsernameNftMsg != null) {
                if (typeof object.issueUsernameNftMsg !== "object")
                    throw TypeError(".app.Tx.issueUsernameNftMsg: object expected");
                message.issueUsernameNftMsg = $root.username.IssueTokenMsg.fromObject(object.issueUsernameNftMsg);
            }
            if (object.addUsernameAddressNftMsg != null) {
                if (typeof object.addUsernameAddressNftMsg !== "object")
                    throw TypeError(".app.Tx.addUsernameAddressNftMsg: object expected");
                message.addUsernameAddressNftMsg = $root.username.AddChainAddressMsg.fromObject(object.addUsernameAddressNftMsg);
            }
            if (object.removeUsernameAddressMsg != null) {
                if (typeof object.removeUsernameAddressMsg !== "object")
                    throw TypeError(".app.Tx.removeUsernameAddressMsg: object expected");
                message.removeUsernameAddressMsg = $root.username.RemoveChainAddressMsg.fromObject(object.removeUsernameAddressMsg);
            }
            if (object.newRevenueMsg != null) {
                if (typeof object.newRevenueMsg !== "object")
                    throw TypeError(".app.Tx.newRevenueMsg: object expected");
                message.newRevenueMsg = $root.distribution.NewRevenueMsg.fromObject(object.newRevenueMsg);
            }
            if (object.distributeMsg != null) {
                if (typeof object.distributeMsg !== "object")
                    throw TypeError(".app.Tx.distributeMsg: object expected");
                message.distributeMsg = $root.distribution.DistributeMsg.fromObject(object.distributeMsg);
            }
            if (object.resetRevenueMsg != null) {
                if (typeof object.resetRevenueMsg !== "object")
                    throw TypeError(".app.Tx.resetRevenueMsg: object expected");
                message.resetRevenueMsg = $root.distribution.ResetRevenueMsg.fromObject(object.resetRevenueMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a Tx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof app.Tx
         * @static
         * @param {app.Tx} message Tx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Tx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.signatures = [];
                object.multisig = [];
            }
            if (options.defaults) {
                object.fees = null;
                if (options.bytes === String)
                    object.preimage = "";
                else {
                    object.preimage = [];
                    if (options.bytes !== Array)
                        object.preimage = $util.newBuffer(object.preimage);
                }
            }
            if (message.fees != null && message.hasOwnProperty("fees"))
                object.fees = $root.cash.FeeInfo.toObject(message.fees, options);
            if (message.signatures && message.signatures.length) {
                object.signatures = [];
                for (var j = 0; j < message.signatures.length; ++j)
                    object.signatures[j] = $root.sigs.StdSignature.toObject(message.signatures[j], options);
            }
            if (message.preimage != null && message.hasOwnProperty("preimage"))
                object.preimage = options.bytes === String ? $util.base64.encode(message.preimage, 0, message.preimage.length) : options.bytes === Array ? Array.prototype.slice.call(message.preimage) : message.preimage;
            if (message.multisig && message.multisig.length) {
                object.multisig = [];
                for (var j = 0; j < message.multisig.length; ++j)
                    object.multisig[j] = options.bytes === String ? $util.base64.encode(message.multisig[j], 0, message.multisig[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.multisig[j]) : message.multisig[j];
            }
            if (message.sendMsg != null && message.hasOwnProperty("sendMsg")) {
                object.sendMsg = $root.cash.SendMsg.toObject(message.sendMsg, options);
                if (options.oneofs)
                    object.sum = "sendMsg";
            }
            if (message.createEscrowMsg != null && message.hasOwnProperty("createEscrowMsg")) {
                object.createEscrowMsg = $root.escrow.CreateEscrowMsg.toObject(message.createEscrowMsg, options);
                if (options.oneofs)
                    object.sum = "createEscrowMsg";
            }
            if (message.releaseEscrowMsg != null && message.hasOwnProperty("releaseEscrowMsg")) {
                object.releaseEscrowMsg = $root.escrow.ReleaseEscrowMsg.toObject(message.releaseEscrowMsg, options);
                if (options.oneofs)
                    object.sum = "releaseEscrowMsg";
            }
            if (message.returnEscrowMsg != null && message.hasOwnProperty("returnEscrowMsg")) {
                object.returnEscrowMsg = $root.escrow.ReturnEscrowMsg.toObject(message.returnEscrowMsg, options);
                if (options.oneofs)
                    object.sum = "returnEscrowMsg";
            }
            if (message.updateEscrowMsg != null && message.hasOwnProperty("updateEscrowMsg")) {
                object.updateEscrowMsg = $root.escrow.UpdateEscrowPartiesMsg.toObject(message.updateEscrowMsg, options);
                if (options.oneofs)
                    object.sum = "updateEscrowMsg";
            }
            if (message.createContractMsg != null && message.hasOwnProperty("createContractMsg")) {
                object.createContractMsg = $root.multisig.CreateContractMsg.toObject(message.createContractMsg, options);
                if (options.oneofs)
                    object.sum = "createContractMsg";
            }
            if (message.updateContractMsg != null && message.hasOwnProperty("updateContractMsg")) {
                object.updateContractMsg = $root.multisig.UpdateContractMsg.toObject(message.updateContractMsg, options);
                if (options.oneofs)
                    object.sum = "updateContractMsg";
            }
            if (message.setValidatorsMsg != null && message.hasOwnProperty("setValidatorsMsg")) {
                object.setValidatorsMsg = $root.validators.SetValidatorsMsg.toObject(message.setValidatorsMsg, options);
                if (options.oneofs)
                    object.sum = "setValidatorsMsg";
            }
            if (message.newTokenInfoMsg != null && message.hasOwnProperty("newTokenInfoMsg")) {
                object.newTokenInfoMsg = $root.currency.NewTokenInfoMsg.toObject(message.newTokenInfoMsg, options);
                if (options.oneofs)
                    object.sum = "newTokenInfoMsg";
            }
            if (message.addApprovalMsg != null && message.hasOwnProperty("addApprovalMsg")) {
                object.addApprovalMsg = $root.nft.AddApprovalMsg.toObject(message.addApprovalMsg, options);
                if (options.oneofs)
                    object.sum = "addApprovalMsg";
            }
            if (message.removeApprovalMsg != null && message.hasOwnProperty("removeApprovalMsg")) {
                object.removeApprovalMsg = $root.nft.RemoveApprovalMsg.toObject(message.removeApprovalMsg, options);
                if (options.oneofs)
                    object.sum = "removeApprovalMsg";
            }
            if (message.issueUsernameNftMsg != null && message.hasOwnProperty("issueUsernameNftMsg")) {
                object.issueUsernameNftMsg = $root.username.IssueTokenMsg.toObject(message.issueUsernameNftMsg, options);
                if (options.oneofs)
                    object.sum = "issueUsernameNftMsg";
            }
            if (message.addUsernameAddressNftMsg != null && message.hasOwnProperty("addUsernameAddressNftMsg")) {
                object.addUsernameAddressNftMsg = $root.username.AddChainAddressMsg.toObject(message.addUsernameAddressNftMsg, options);
                if (options.oneofs)
                    object.sum = "addUsernameAddressNftMsg";
            }
            if (message.removeUsernameAddressMsg != null && message.hasOwnProperty("removeUsernameAddressMsg")) {
                object.removeUsernameAddressMsg = $root.username.RemoveChainAddressMsg.toObject(message.removeUsernameAddressMsg, options);
                if (options.oneofs)
                    object.sum = "removeUsernameAddressMsg";
            }
            if (message.newRevenueMsg != null && message.hasOwnProperty("newRevenueMsg")) {
                object.newRevenueMsg = $root.distribution.NewRevenueMsg.toObject(message.newRevenueMsg, options);
                if (options.oneofs)
                    object.sum = "newRevenueMsg";
            }
            if (message.distributeMsg != null && message.hasOwnProperty("distributeMsg")) {
                object.distributeMsg = $root.distribution.DistributeMsg.toObject(message.distributeMsg, options);
                if (options.oneofs)
                    object.sum = "distributeMsg";
            }
            if (message.resetRevenueMsg != null && message.hasOwnProperty("resetRevenueMsg")) {
                object.resetRevenueMsg = $root.distribution.ResetRevenueMsg.toObject(message.resetRevenueMsg, options);
                if (options.oneofs)
                    object.sum = "resetRevenueMsg";
            }
            return object;
        };

        /**
         * Converts this Tx to JSON.
         * @function toJSON
         * @memberof app.Tx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Tx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Tx;
    })();

    return app;
})();

$root.username = (function() {

    /**
     * Namespace username.
     * @exports username
     * @namespace
     */
    var username = {};

    username.UsernameToken = (function() {

        /**
         * Properties of a UsernameToken.
         * @memberof username
         * @interface IUsernameToken
         * @property {nft.INonFungibleToken|null} [base] UsernameToken base
         * @property {username.ITokenDetails|null} [details] UsernameToken details
         */

        /**
         * Constructs a new UsernameToken.
         * @memberof username
         * @classdesc Represents a UsernameToken.
         * @implements IUsernameToken
         * @constructor
         * @param {username.IUsernameToken=} [properties] Properties to set
         */
        function UsernameToken(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UsernameToken base.
         * @member {nft.INonFungibleToken|null|undefined} base
         * @memberof username.UsernameToken
         * @instance
         */
        UsernameToken.prototype.base = null;

        /**
         * UsernameToken details.
         * @member {username.ITokenDetails|null|undefined} details
         * @memberof username.UsernameToken
         * @instance
         */
        UsernameToken.prototype.details = null;

        /**
         * Creates a new UsernameToken instance using the specified properties.
         * @function create
         * @memberof username.UsernameToken
         * @static
         * @param {username.IUsernameToken=} [properties] Properties to set
         * @returns {username.UsernameToken} UsernameToken instance
         */
        UsernameToken.create = function create(properties) {
            return new UsernameToken(properties);
        };

        /**
         * Encodes the specified UsernameToken message. Does not implicitly {@link username.UsernameToken.verify|verify} messages.
         * @function encode
         * @memberof username.UsernameToken
         * @static
         * @param {username.IUsernameToken} message UsernameToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsernameToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.base != null && message.hasOwnProperty("base"))
                $root.nft.NonFungibleToken.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.details != null && message.hasOwnProperty("details"))
                $root.username.TokenDetails.encode(message.details, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UsernameToken message, length delimited. Does not implicitly {@link username.UsernameToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.UsernameToken
         * @static
         * @param {username.IUsernameToken} message UsernameToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UsernameToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UsernameToken message from the specified reader or buffer.
         * @function decode
         * @memberof username.UsernameToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.UsernameToken} UsernameToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsernameToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.UsernameToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.base = $root.nft.NonFungibleToken.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.details = $root.username.TokenDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UsernameToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.UsernameToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.UsernameToken} UsernameToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UsernameToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UsernameToken message.
         * @function verify
         * @memberof username.UsernameToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UsernameToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.base != null && message.hasOwnProperty("base")) {
                var error = $root.nft.NonFungibleToken.verify(message.base);
                if (error)
                    return "base." + error;
            }
            if (message.details != null && message.hasOwnProperty("details")) {
                var error = $root.username.TokenDetails.verify(message.details);
                if (error)
                    return "details." + error;
            }
            return null;
        };

        /**
         * Creates a UsernameToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.UsernameToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.UsernameToken} UsernameToken
         */
        UsernameToken.fromObject = function fromObject(object) {
            if (object instanceof $root.username.UsernameToken)
                return object;
            var message = new $root.username.UsernameToken();
            if (object.base != null) {
                if (typeof object.base !== "object")
                    throw TypeError(".username.UsernameToken.base: object expected");
                message.base = $root.nft.NonFungibleToken.fromObject(object.base);
            }
            if (object.details != null) {
                if (typeof object.details !== "object")
                    throw TypeError(".username.UsernameToken.details: object expected");
                message.details = $root.username.TokenDetails.fromObject(object.details);
            }
            return message;
        };

        /**
         * Creates a plain object from a UsernameToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.UsernameToken
         * @static
         * @param {username.UsernameToken} message UsernameToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UsernameToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.base = null;
                object.details = null;
            }
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = $root.nft.NonFungibleToken.toObject(message.base, options);
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = $root.username.TokenDetails.toObject(message.details, options);
            return object;
        };

        /**
         * Converts this UsernameToken to JSON.
         * @function toJSON
         * @memberof username.UsernameToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UsernameToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UsernameToken;
    })();

    username.TokenDetails = (function() {

        /**
         * Properties of a TokenDetails.
         * @memberof username
         * @interface ITokenDetails
         * @property {Array.<username.IChainAddress>|null} [addresses] TokenDetails addresses
         */

        /**
         * Constructs a new TokenDetails.
         * @memberof username
         * @classdesc Represents a TokenDetails.
         * @implements ITokenDetails
         * @constructor
         * @param {username.ITokenDetails=} [properties] Properties to set
         */
        function TokenDetails(properties) {
            this.addresses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenDetails addresses.
         * @member {Array.<username.IChainAddress>} addresses
         * @memberof username.TokenDetails
         * @instance
         */
        TokenDetails.prototype.addresses = $util.emptyArray;

        /**
         * Creates a new TokenDetails instance using the specified properties.
         * @function create
         * @memberof username.TokenDetails
         * @static
         * @param {username.ITokenDetails=} [properties] Properties to set
         * @returns {username.TokenDetails} TokenDetails instance
         */
        TokenDetails.create = function create(properties) {
            return new TokenDetails(properties);
        };

        /**
         * Encodes the specified TokenDetails message. Does not implicitly {@link username.TokenDetails.verify|verify} messages.
         * @function encode
         * @memberof username.TokenDetails
         * @static
         * @param {username.ITokenDetails} message TokenDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addresses != null && message.addresses.length)
                for (var i = 0; i < message.addresses.length; ++i)
                    $root.username.ChainAddress.encode(message.addresses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TokenDetails message, length delimited. Does not implicitly {@link username.TokenDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.TokenDetails
         * @static
         * @param {username.ITokenDetails} message TokenDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenDetails message from the specified reader or buffer.
         * @function decode
         * @memberof username.TokenDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.TokenDetails} TokenDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.TokenDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addresses && message.addresses.length))
                        message.addresses = [];
                    message.addresses.push($root.username.ChainAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.TokenDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.TokenDetails} TokenDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenDetails message.
         * @function verify
         * @memberof username.TokenDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addresses != null && message.hasOwnProperty("addresses")) {
                if (!Array.isArray(message.addresses))
                    return "addresses: array expected";
                for (var i = 0; i < message.addresses.length; ++i) {
                    var error = $root.username.ChainAddress.verify(message.addresses[i]);
                    if (error)
                        return "addresses." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TokenDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.TokenDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.TokenDetails} TokenDetails
         */
        TokenDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.username.TokenDetails)
                return object;
            var message = new $root.username.TokenDetails();
            if (object.addresses) {
                if (!Array.isArray(object.addresses))
                    throw TypeError(".username.TokenDetails.addresses: array expected");
                message.addresses = [];
                for (var i = 0; i < object.addresses.length; ++i) {
                    if (typeof object.addresses[i] !== "object")
                        throw TypeError(".username.TokenDetails.addresses: object expected");
                    message.addresses[i] = $root.username.ChainAddress.fromObject(object.addresses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TokenDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.TokenDetails
         * @static
         * @param {username.TokenDetails} message TokenDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.addresses = [];
            if (message.addresses && message.addresses.length) {
                object.addresses = [];
                for (var j = 0; j < message.addresses.length; ++j)
                    object.addresses[j] = $root.username.ChainAddress.toObject(message.addresses[j], options);
            }
            return object;
        };

        /**
         * Converts this TokenDetails to JSON.
         * @function toJSON
         * @memberof username.TokenDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TokenDetails;
    })();

    username.ChainAddress = (function() {

        /**
         * Properties of a ChainAddress.
         * @memberof username
         * @interface IChainAddress
         * @property {Uint8Array|null} [blockchainId] validating it.
         * @property {string|null} [address] blockchain.
         */

        /**
         * Constructs a new ChainAddress.
         * @memberof username
         * @classdesc ChainAddress is an address bind to a specific blockchain chain.
         * @implements IChainAddress
         * @constructor
         * @param {username.IChainAddress=} [properties] Properties to set
         */
        function ChainAddress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * validating it.
         * @member {Uint8Array} blockchainId
         * @memberof username.ChainAddress
         * @instance
         */
        ChainAddress.prototype.blockchainId = $util.newBuffer([]);

        /**
         * blockchain.
         * @member {string} address
         * @memberof username.ChainAddress
         * @instance
         */
        ChainAddress.prototype.address = "";

        /**
         * Creates a new ChainAddress instance using the specified properties.
         * @function create
         * @memberof username.ChainAddress
         * @static
         * @param {username.IChainAddress=} [properties] Properties to set
         * @returns {username.ChainAddress} ChainAddress instance
         */
        ChainAddress.create = function create(properties) {
            return new ChainAddress(properties);
        };

        /**
         * Encodes the specified ChainAddress message. Does not implicitly {@link username.ChainAddress.verify|verify} messages.
         * @function encode
         * @memberof username.ChainAddress
         * @static
         * @param {username.IChainAddress} message ChainAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blockchainId);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified ChainAddress message, length delimited. Does not implicitly {@link username.ChainAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.ChainAddress
         * @static
         * @param {username.IChainAddress} message ChainAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChainAddress message from the specified reader or buffer.
         * @function decode
         * @memberof username.ChainAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.ChainAddress} ChainAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainAddress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.ChainAddress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.blockchainId = reader.bytes();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChainAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.ChainAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.ChainAddress} ChainAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChainAddress message.
         * @function verify
         * @memberof username.ChainAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChainAddress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                if (!(message.blockchainId && typeof message.blockchainId.length === "number" || $util.isString(message.blockchainId)))
                    return "blockchainId: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates a ChainAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.ChainAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.ChainAddress} ChainAddress
         */
        ChainAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.username.ChainAddress)
                return object;
            var message = new $root.username.ChainAddress();
            if (object.blockchainId != null)
                if (typeof object.blockchainId === "string")
                    $util.base64.decode(object.blockchainId, message.blockchainId = $util.newBuffer($util.base64.length(object.blockchainId)), 0);
                else if (object.blockchainId.length)
                    message.blockchainId = object.blockchainId;
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from a ChainAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.ChainAddress
         * @static
         * @param {username.ChainAddress} message ChainAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChainAddress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.blockchainId = "";
                else {
                    object.blockchainId = [];
                    if (options.bytes !== Array)
                        object.blockchainId = $util.newBuffer(object.blockchainId);
                }
                object.address = "";
            }
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                object.blockchainId = options.bytes === String ? $util.base64.encode(message.blockchainId, 0, message.blockchainId.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockchainId) : message.blockchainId;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this ChainAddress to JSON.
         * @function toJSON
         * @memberof username.ChainAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChainAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChainAddress;
    })();

    username.IssueTokenMsg = (function() {

        /**
         * Properties of an IssueTokenMsg.
         * @memberof username
         * @interface IIssueTokenMsg
         * @property {Uint8Array|null} [id] IssueTokenMsg id
         * @property {Uint8Array|null} [owner] IssueTokenMsg owner
         * @property {Array.<nft.IActionApprovals>|null} [approvals] IssueTokenMsg approvals
         * @property {username.ITokenDetails|null} [details] IssueTokenMsg details
         */

        /**
         * Constructs a new IssueTokenMsg.
         * @memberof username
         * @classdesc Represents an IssueTokenMsg.
         * @implements IIssueTokenMsg
         * @constructor
         * @param {username.IIssueTokenMsg=} [properties] Properties to set
         */
        function IssueTokenMsg(properties) {
            this.approvals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IssueTokenMsg id.
         * @member {Uint8Array} id
         * @memberof username.IssueTokenMsg
         * @instance
         */
        IssueTokenMsg.prototype.id = $util.newBuffer([]);

        /**
         * IssueTokenMsg owner.
         * @member {Uint8Array} owner
         * @memberof username.IssueTokenMsg
         * @instance
         */
        IssueTokenMsg.prototype.owner = $util.newBuffer([]);

        /**
         * IssueTokenMsg approvals.
         * @member {Array.<nft.IActionApprovals>} approvals
         * @memberof username.IssueTokenMsg
         * @instance
         */
        IssueTokenMsg.prototype.approvals = $util.emptyArray;

        /**
         * IssueTokenMsg details.
         * @member {username.ITokenDetails|null|undefined} details
         * @memberof username.IssueTokenMsg
         * @instance
         */
        IssueTokenMsg.prototype.details = null;

        /**
         * Creates a new IssueTokenMsg instance using the specified properties.
         * @function create
         * @memberof username.IssueTokenMsg
         * @static
         * @param {username.IIssueTokenMsg=} [properties] Properties to set
         * @returns {username.IssueTokenMsg} IssueTokenMsg instance
         */
        IssueTokenMsg.create = function create(properties) {
            return new IssueTokenMsg(properties);
        };

        /**
         * Encodes the specified IssueTokenMsg message. Does not implicitly {@link username.IssueTokenMsg.verify|verify} messages.
         * @function encode
         * @memberof username.IssueTokenMsg
         * @static
         * @param {username.IIssueTokenMsg} message IssueTokenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IssueTokenMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.owner);
            if (message.approvals != null && message.approvals.length)
                for (var i = 0; i < message.approvals.length; ++i)
                    $root.nft.ActionApprovals.encode(message.approvals[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.details != null && message.hasOwnProperty("details"))
                $root.username.TokenDetails.encode(message.details, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IssueTokenMsg message, length delimited. Does not implicitly {@link username.IssueTokenMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.IssueTokenMsg
         * @static
         * @param {username.IIssueTokenMsg} message IssueTokenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IssueTokenMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IssueTokenMsg message from the specified reader or buffer.
         * @function decode
         * @memberof username.IssueTokenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.IssueTokenMsg} IssueTokenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IssueTokenMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.IssueTokenMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.owner = reader.bytes();
                    break;
                case 3:
                    if (!(message.approvals && message.approvals.length))
                        message.approvals = [];
                    message.approvals.push($root.nft.ActionApprovals.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.details = $root.username.TokenDetails.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IssueTokenMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.IssueTokenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.IssueTokenMsg} IssueTokenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IssueTokenMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IssueTokenMsg message.
         * @function verify
         * @memberof username.IssueTokenMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IssueTokenMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!(message.owner && typeof message.owner.length === "number" || $util.isString(message.owner)))
                    return "owner: buffer expected";
            if (message.approvals != null && message.hasOwnProperty("approvals")) {
                if (!Array.isArray(message.approvals))
                    return "approvals: array expected";
                for (var i = 0; i < message.approvals.length; ++i) {
                    var error = $root.nft.ActionApprovals.verify(message.approvals[i]);
                    if (error)
                        return "approvals." + error;
                }
            }
            if (message.details != null && message.hasOwnProperty("details")) {
                var error = $root.username.TokenDetails.verify(message.details);
                if (error)
                    return "details." + error;
            }
            return null;
        };

        /**
         * Creates an IssueTokenMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.IssueTokenMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.IssueTokenMsg} IssueTokenMsg
         */
        IssueTokenMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.username.IssueTokenMsg)
                return object;
            var message = new $root.username.IssueTokenMsg();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.owner != null)
                if (typeof object.owner === "string")
                    $util.base64.decode(object.owner, message.owner = $util.newBuffer($util.base64.length(object.owner)), 0);
                else if (object.owner.length)
                    message.owner = object.owner;
            if (object.approvals) {
                if (!Array.isArray(object.approvals))
                    throw TypeError(".username.IssueTokenMsg.approvals: array expected");
                message.approvals = [];
                for (var i = 0; i < object.approvals.length; ++i) {
                    if (typeof object.approvals[i] !== "object")
                        throw TypeError(".username.IssueTokenMsg.approvals: object expected");
                    message.approvals[i] = $root.nft.ActionApprovals.fromObject(object.approvals[i]);
                }
            }
            if (object.details != null) {
                if (typeof object.details !== "object")
                    throw TypeError(".username.IssueTokenMsg.details: object expected");
                message.details = $root.username.TokenDetails.fromObject(object.details);
            }
            return message;
        };

        /**
         * Creates a plain object from an IssueTokenMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.IssueTokenMsg
         * @static
         * @param {username.IssueTokenMsg} message IssueTokenMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IssueTokenMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.approvals = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.owner = "";
                else {
                    object.owner = [];
                    if (options.bytes !== Array)
                        object.owner = $util.newBuffer(object.owner);
                }
                object.details = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = options.bytes === String ? $util.base64.encode(message.owner, 0, message.owner.length) : options.bytes === Array ? Array.prototype.slice.call(message.owner) : message.owner;
            if (message.approvals && message.approvals.length) {
                object.approvals = [];
                for (var j = 0; j < message.approvals.length; ++j)
                    object.approvals[j] = $root.nft.ActionApprovals.toObject(message.approvals[j], options);
            }
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = $root.username.TokenDetails.toObject(message.details, options);
            return object;
        };

        /**
         * Converts this IssueTokenMsg to JSON.
         * @function toJSON
         * @memberof username.IssueTokenMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IssueTokenMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IssueTokenMsg;
    })();

    username.AddChainAddressMsg = (function() {

        /**
         * Properties of an AddChainAddressMsg.
         * @memberof username
         * @interface IAddChainAddressMsg
         * @property {Uint8Array|null} [usernameId] AddChainAddressMsg usernameId
         * @property {Uint8Array|null} [blockchainId] AddChainAddressMsg blockchainId
         * @property {string|null} [address] AddChainAddressMsg address
         */

        /**
         * Constructs a new AddChainAddressMsg.
         * @memberof username
         * @classdesc Represents an AddChainAddressMsg.
         * @implements IAddChainAddressMsg
         * @constructor
         * @param {username.IAddChainAddressMsg=} [properties] Properties to set
         */
        function AddChainAddressMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddChainAddressMsg usernameId.
         * @member {Uint8Array} usernameId
         * @memberof username.AddChainAddressMsg
         * @instance
         */
        AddChainAddressMsg.prototype.usernameId = $util.newBuffer([]);

        /**
         * AddChainAddressMsg blockchainId.
         * @member {Uint8Array} blockchainId
         * @memberof username.AddChainAddressMsg
         * @instance
         */
        AddChainAddressMsg.prototype.blockchainId = $util.newBuffer([]);

        /**
         * AddChainAddressMsg address.
         * @member {string} address
         * @memberof username.AddChainAddressMsg
         * @instance
         */
        AddChainAddressMsg.prototype.address = "";

        /**
         * Creates a new AddChainAddressMsg instance using the specified properties.
         * @function create
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {username.IAddChainAddressMsg=} [properties] Properties to set
         * @returns {username.AddChainAddressMsg} AddChainAddressMsg instance
         */
        AddChainAddressMsg.create = function create(properties) {
            return new AddChainAddressMsg(properties);
        };

        /**
         * Encodes the specified AddChainAddressMsg message. Does not implicitly {@link username.AddChainAddressMsg.verify|verify} messages.
         * @function encode
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {username.IAddChainAddressMsg} message AddChainAddressMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddChainAddressMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.usernameId);
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.blockchainId);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified AddChainAddressMsg message, length delimited. Does not implicitly {@link username.AddChainAddressMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {username.IAddChainAddressMsg} message AddChainAddressMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddChainAddressMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddChainAddressMsg message from the specified reader or buffer.
         * @function decode
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.AddChainAddressMsg} AddChainAddressMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddChainAddressMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.AddChainAddressMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.usernameId = reader.bytes();
                    break;
                case 2:
                    message.blockchainId = reader.bytes();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddChainAddressMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.AddChainAddressMsg} AddChainAddressMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddChainAddressMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddChainAddressMsg message.
         * @function verify
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddChainAddressMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                if (!(message.usernameId && typeof message.usernameId.length === "number" || $util.isString(message.usernameId)))
                    return "usernameId: buffer expected";
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                if (!(message.blockchainId && typeof message.blockchainId.length === "number" || $util.isString(message.blockchainId)))
                    return "blockchainId: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates an AddChainAddressMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.AddChainAddressMsg} AddChainAddressMsg
         */
        AddChainAddressMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.username.AddChainAddressMsg)
                return object;
            var message = new $root.username.AddChainAddressMsg();
            if (object.usernameId != null)
                if (typeof object.usernameId === "string")
                    $util.base64.decode(object.usernameId, message.usernameId = $util.newBuffer($util.base64.length(object.usernameId)), 0);
                else if (object.usernameId.length)
                    message.usernameId = object.usernameId;
            if (object.blockchainId != null)
                if (typeof object.blockchainId === "string")
                    $util.base64.decode(object.blockchainId, message.blockchainId = $util.newBuffer($util.base64.length(object.blockchainId)), 0);
                else if (object.blockchainId.length)
                    message.blockchainId = object.blockchainId;
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from an AddChainAddressMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.AddChainAddressMsg
         * @static
         * @param {username.AddChainAddressMsg} message AddChainAddressMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddChainAddressMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.usernameId = "";
                else {
                    object.usernameId = [];
                    if (options.bytes !== Array)
                        object.usernameId = $util.newBuffer(object.usernameId);
                }
                if (options.bytes === String)
                    object.blockchainId = "";
                else {
                    object.blockchainId = [];
                    if (options.bytes !== Array)
                        object.blockchainId = $util.newBuffer(object.blockchainId);
                }
                object.address = "";
            }
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                object.usernameId = options.bytes === String ? $util.base64.encode(message.usernameId, 0, message.usernameId.length) : options.bytes === Array ? Array.prototype.slice.call(message.usernameId) : message.usernameId;
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                object.blockchainId = options.bytes === String ? $util.base64.encode(message.blockchainId, 0, message.blockchainId.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockchainId) : message.blockchainId;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this AddChainAddressMsg to JSON.
         * @function toJSON
         * @memberof username.AddChainAddressMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddChainAddressMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddChainAddressMsg;
    })();

    username.RemoveChainAddressMsg = (function() {

        /**
         * Properties of a RemoveChainAddressMsg.
         * @memberof username
         * @interface IRemoveChainAddressMsg
         * @property {Uint8Array|null} [usernameId] RemoveChainAddressMsg usernameId
         * @property {Uint8Array|null} [blockchainId] RemoveChainAddressMsg blockchainId
         * @property {string|null} [address] RemoveChainAddressMsg address
         */

        /**
         * Constructs a new RemoveChainAddressMsg.
         * @memberof username
         * @classdesc Represents a RemoveChainAddressMsg.
         * @implements IRemoveChainAddressMsg
         * @constructor
         * @param {username.IRemoveChainAddressMsg=} [properties] Properties to set
         */
        function RemoveChainAddressMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveChainAddressMsg usernameId.
         * @member {Uint8Array} usernameId
         * @memberof username.RemoveChainAddressMsg
         * @instance
         */
        RemoveChainAddressMsg.prototype.usernameId = $util.newBuffer([]);

        /**
         * RemoveChainAddressMsg blockchainId.
         * @member {Uint8Array} blockchainId
         * @memberof username.RemoveChainAddressMsg
         * @instance
         */
        RemoveChainAddressMsg.prototype.blockchainId = $util.newBuffer([]);

        /**
         * RemoveChainAddressMsg address.
         * @member {string} address
         * @memberof username.RemoveChainAddressMsg
         * @instance
         */
        RemoveChainAddressMsg.prototype.address = "";

        /**
         * Creates a new RemoveChainAddressMsg instance using the specified properties.
         * @function create
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {username.IRemoveChainAddressMsg=} [properties] Properties to set
         * @returns {username.RemoveChainAddressMsg} RemoveChainAddressMsg instance
         */
        RemoveChainAddressMsg.create = function create(properties) {
            return new RemoveChainAddressMsg(properties);
        };

        /**
         * Encodes the specified RemoveChainAddressMsg message. Does not implicitly {@link username.RemoveChainAddressMsg.verify|verify} messages.
         * @function encode
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {username.IRemoveChainAddressMsg} message RemoveChainAddressMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveChainAddressMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.usernameId);
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.blockchainId);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.address);
            return writer;
        };

        /**
         * Encodes the specified RemoveChainAddressMsg message, length delimited. Does not implicitly {@link username.RemoveChainAddressMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {username.IRemoveChainAddressMsg} message RemoveChainAddressMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveChainAddressMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveChainAddressMsg message from the specified reader or buffer.
         * @function decode
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {username.RemoveChainAddressMsg} RemoveChainAddressMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveChainAddressMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.username.RemoveChainAddressMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.usernameId = reader.bytes();
                    break;
                case 2:
                    message.blockchainId = reader.bytes();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveChainAddressMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {username.RemoveChainAddressMsg} RemoveChainAddressMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveChainAddressMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveChainAddressMsg message.
         * @function verify
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveChainAddressMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                if (!(message.usernameId && typeof message.usernameId.length === "number" || $util.isString(message.usernameId)))
                    return "usernameId: buffer expected";
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                if (!(message.blockchainId && typeof message.blockchainId.length === "number" || $util.isString(message.blockchainId)))
                    return "blockchainId: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            return null;
        };

        /**
         * Creates a RemoveChainAddressMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {username.RemoveChainAddressMsg} RemoveChainAddressMsg
         */
        RemoveChainAddressMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.username.RemoveChainAddressMsg)
                return object;
            var message = new $root.username.RemoveChainAddressMsg();
            if (object.usernameId != null)
                if (typeof object.usernameId === "string")
                    $util.base64.decode(object.usernameId, message.usernameId = $util.newBuffer($util.base64.length(object.usernameId)), 0);
                else if (object.usernameId.length)
                    message.usernameId = object.usernameId;
            if (object.blockchainId != null)
                if (typeof object.blockchainId === "string")
                    $util.base64.decode(object.blockchainId, message.blockchainId = $util.newBuffer($util.base64.length(object.blockchainId)), 0);
                else if (object.blockchainId.length)
                    message.blockchainId = object.blockchainId;
            if (object.address != null)
                message.address = String(object.address);
            return message;
        };

        /**
         * Creates a plain object from a RemoveChainAddressMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof username.RemoveChainAddressMsg
         * @static
         * @param {username.RemoveChainAddressMsg} message RemoveChainAddressMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveChainAddressMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.usernameId = "";
                else {
                    object.usernameId = [];
                    if (options.bytes !== Array)
                        object.usernameId = $util.newBuffer(object.usernameId);
                }
                if (options.bytes === String)
                    object.blockchainId = "";
                else {
                    object.blockchainId = [];
                    if (options.bytes !== Array)
                        object.blockchainId = $util.newBuffer(object.blockchainId);
                }
                object.address = "";
            }
            if (message.usernameId != null && message.hasOwnProperty("usernameId"))
                object.usernameId = options.bytes === String ? $util.base64.encode(message.usernameId, 0, message.usernameId.length) : options.bytes === Array ? Array.prototype.slice.call(message.usernameId) : message.usernameId;
            if (message.blockchainId != null && message.hasOwnProperty("blockchainId"))
                object.blockchainId = options.bytes === String ? $util.base64.encode(message.blockchainId, 0, message.blockchainId.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockchainId) : message.blockchainId;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            return object;
        };

        /**
         * Converts this RemoveChainAddressMsg to JSON.
         * @function toJSON
         * @memberof username.RemoveChainAddressMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveChainAddressMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveChainAddressMsg;
    })();

    return username;
})();

$root.coin = (function() {

    /**
     * Namespace coin.
     * @exports coin
     * @namespace
     */
    var coin = {};

    coin.Coin = (function() {

        /**
         * Properties of a Coin.
         * @memberof coin
         * @interface ICoin
         * @property {number|Long|null} [whole] Whole coins, -10^15 < integer < 10^15
         * @property {number|Long|null} [fractional] If fractional != 0, must have same sign as integer
         * @property {string|null} [ticker] all Coins of the same currency can be combined
         */

        /**
         * Constructs a new Coin.
         * @memberof coin
         * @classdesc own type, possibly borrowing from this code.
         * @implements ICoin
         * @constructor
         * @param {coin.ICoin=} [properties] Properties to set
         */
        function Coin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Whole coins, -10^15 < integer < 10^15
         * @member {number|Long} whole
         * @memberof coin.Coin
         * @instance
         */
        Coin.prototype.whole = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * If fractional != 0, must have same sign as integer
         * @member {number|Long} fractional
         * @memberof coin.Coin
         * @instance
         */
        Coin.prototype.fractional = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * all Coins of the same currency can be combined
         * @member {string} ticker
         * @memberof coin.Coin
         * @instance
         */
        Coin.prototype.ticker = "";

        /**
         * Creates a new Coin instance using the specified properties.
         * @function create
         * @memberof coin.Coin
         * @static
         * @param {coin.ICoin=} [properties] Properties to set
         * @returns {coin.Coin} Coin instance
         */
        Coin.create = function create(properties) {
            return new Coin(properties);
        };

        /**
         * Encodes the specified Coin message. Does not implicitly {@link coin.Coin.verify|verify} messages.
         * @function encode
         * @memberof coin.Coin
         * @static
         * @param {coin.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.whole != null && message.hasOwnProperty("whole"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.whole);
            if (message.fractional != null && message.hasOwnProperty("fractional"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.fractional);
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ticker);
            return writer;
        };

        /**
         * Encodes the specified Coin message, length delimited. Does not implicitly {@link coin.Coin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coin.Coin
         * @static
         * @param {coin.ICoin} message Coin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @function decode
         * @memberof coin.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coin.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coin.Coin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.whole = reader.int64();
                    break;
                case 2:
                    message.fractional = reader.int64();
                    break;
                case 3:
                    message.ticker = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Coin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coin.Coin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coin.Coin} Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Coin message.
         * @function verify
         * @memberof coin.Coin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Coin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.whole != null && message.hasOwnProperty("whole"))
                if (!$util.isInteger(message.whole) && !(message.whole && $util.isInteger(message.whole.low) && $util.isInteger(message.whole.high)))
                    return "whole: integer|Long expected";
            if (message.fractional != null && message.hasOwnProperty("fractional"))
                if (!$util.isInteger(message.fractional) && !(message.fractional && $util.isInteger(message.fractional.low) && $util.isInteger(message.fractional.high)))
                    return "fractional: integer|Long expected";
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                if (!$util.isString(message.ticker))
                    return "ticker: string expected";
            return null;
        };

        /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coin.Coin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coin.Coin} Coin
         */
        Coin.fromObject = function fromObject(object) {
            if (object instanceof $root.coin.Coin)
                return object;
            var message = new $root.coin.Coin();
            if (object.whole != null)
                if ($util.Long)
                    (message.whole = $util.Long.fromValue(object.whole)).unsigned = false;
                else if (typeof object.whole === "string")
                    message.whole = parseInt(object.whole, 10);
                else if (typeof object.whole === "number")
                    message.whole = object.whole;
                else if (typeof object.whole === "object")
                    message.whole = new $util.LongBits(object.whole.low >>> 0, object.whole.high >>> 0).toNumber();
            if (object.fractional != null)
                if ($util.Long)
                    (message.fractional = $util.Long.fromValue(object.fractional)).unsigned = false;
                else if (typeof object.fractional === "string")
                    message.fractional = parseInt(object.fractional, 10);
                else if (typeof object.fractional === "number")
                    message.fractional = object.fractional;
                else if (typeof object.fractional === "object")
                    message.fractional = new $util.LongBits(object.fractional.low >>> 0, object.fractional.high >>> 0).toNumber();
            if (object.ticker != null)
                message.ticker = String(object.ticker);
            return message;
        };

        /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coin.Coin
         * @static
         * @param {coin.Coin} message Coin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Coin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.whole = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.whole = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.fractional = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fractional = options.longs === String ? "0" : 0;
                object.ticker = "";
            }
            if (message.whole != null && message.hasOwnProperty("whole"))
                if (typeof message.whole === "number")
                    object.whole = options.longs === String ? String(message.whole) : message.whole;
                else
                    object.whole = options.longs === String ? $util.Long.prototype.toString.call(message.whole) : options.longs === Number ? new $util.LongBits(message.whole.low >>> 0, message.whole.high >>> 0).toNumber() : message.whole;
            if (message.fractional != null && message.hasOwnProperty("fractional"))
                if (typeof message.fractional === "number")
                    object.fractional = options.longs === String ? String(message.fractional) : message.fractional;
                else
                    object.fractional = options.longs === String ? $util.Long.prototype.toString.call(message.fractional) : options.longs === Number ? new $util.LongBits(message.fractional.low >>> 0, message.fractional.high >>> 0).toNumber() : message.fractional;
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                object.ticker = message.ticker;
            return object;
        };

        /**
         * Converts this Coin to JSON.
         * @function toJSON
         * @memberof coin.Coin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Coin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Coin;
    })();

    return coin;
})();

$root.crypto = (function() {

    /**
     * Namespace crypto.
     * @exports crypto
     * @namespace
     */
    var crypto = {};

    crypto.PublicKey = (function() {

        /**
         * Properties of a PublicKey.
         * @memberof crypto
         * @interface IPublicKey
         * @property {Uint8Array|null} [ed25519] PublicKey ed25519
         */

        /**
         * Constructs a new PublicKey.
         * @memberof crypto
         * @classdesc Represents a PublicKey.
         * @implements IPublicKey
         * @constructor
         * @param {crypto.IPublicKey=} [properties] Properties to set
         */
        function PublicKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicKey ed25519.
         * @member {Uint8Array} ed25519
         * @memberof crypto.PublicKey
         * @instance
         */
        PublicKey.prototype.ed25519 = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * PublicKey pub.
         * @member {"ed25519"|undefined} pub
         * @memberof crypto.PublicKey
         * @instance
         */
        Object.defineProperty(PublicKey.prototype, "pub", {
            get: $util.oneOfGetter($oneOfFields = ["ed25519"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PublicKey instance using the specified properties.
         * @function create
         * @memberof crypto.PublicKey
         * @static
         * @param {crypto.IPublicKey=} [properties] Properties to set
         * @returns {crypto.PublicKey} PublicKey instance
         */
        PublicKey.create = function create(properties) {
            return new PublicKey(properties);
        };

        /**
         * Encodes the specified PublicKey message. Does not implicitly {@link crypto.PublicKey.verify|verify} messages.
         * @function encode
         * @memberof crypto.PublicKey
         * @static
         * @param {crypto.IPublicKey} message PublicKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ed25519 != null && message.hasOwnProperty("ed25519"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ed25519);
            return writer;
        };

        /**
         * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link crypto.PublicKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crypto.PublicKey
         * @static
         * @param {crypto.IPublicKey} message PublicKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicKey message from the specified reader or buffer.
         * @function decode
         * @memberof crypto.PublicKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crypto.PublicKey} PublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.crypto.PublicKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crypto.PublicKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crypto.PublicKey} PublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PublicKey message.
         * @function verify
         * @memberof crypto.PublicKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublicKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                properties.pub = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crypto.PublicKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crypto.PublicKey} PublicKey
         */
        PublicKey.fromObject = function fromObject(object) {
            if (object instanceof $root.crypto.PublicKey)
                return object;
            var message = new $root.crypto.PublicKey();
            if (object.ed25519 != null)
                if (typeof object.ed25519 === "string")
                    $util.base64.decode(object.ed25519, message.ed25519 = $util.newBuffer($util.base64.length(object.ed25519)), 0);
                else if (object.ed25519.length)
                    message.ed25519 = object.ed25519;
            return message;
        };

        /**
         * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crypto.PublicKey
         * @static
         * @param {crypto.PublicKey} message PublicKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublicKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.pub = "ed25519";
            }
            return object;
        };

        /**
         * Converts this PublicKey to JSON.
         * @function toJSON
         * @memberof crypto.PublicKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublicKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PublicKey;
    })();

    crypto.PrivateKey = (function() {

        /**
         * Properties of a PrivateKey.
         * @memberof crypto
         * @interface IPrivateKey
         * @property {Uint8Array|null} [ed25519] PrivateKey ed25519
         */

        /**
         * Constructs a new PrivateKey.
         * @memberof crypto
         * @classdesc Represents a PrivateKey.
         * @implements IPrivateKey
         * @constructor
         * @param {crypto.IPrivateKey=} [properties] Properties to set
         */
        function PrivateKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateKey ed25519.
         * @member {Uint8Array} ed25519
         * @memberof crypto.PrivateKey
         * @instance
         */
        PrivateKey.prototype.ed25519 = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * PrivateKey priv.
         * @member {"ed25519"|undefined} priv
         * @memberof crypto.PrivateKey
         * @instance
         */
        Object.defineProperty(PrivateKey.prototype, "priv", {
            get: $util.oneOfGetter($oneOfFields = ["ed25519"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrivateKey instance using the specified properties.
         * @function create
         * @memberof crypto.PrivateKey
         * @static
         * @param {crypto.IPrivateKey=} [properties] Properties to set
         * @returns {crypto.PrivateKey} PrivateKey instance
         */
        PrivateKey.create = function create(properties) {
            return new PrivateKey(properties);
        };

        /**
         * Encodes the specified PrivateKey message. Does not implicitly {@link crypto.PrivateKey.verify|verify} messages.
         * @function encode
         * @memberof crypto.PrivateKey
         * @static
         * @param {crypto.IPrivateKey} message PrivateKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ed25519 != null && message.hasOwnProperty("ed25519"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ed25519);
            return writer;
        };

        /**
         * Encodes the specified PrivateKey message, length delimited. Does not implicitly {@link crypto.PrivateKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crypto.PrivateKey
         * @static
         * @param {crypto.IPrivateKey} message PrivateKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateKey message from the specified reader or buffer.
         * @function decode
         * @memberof crypto.PrivateKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crypto.PrivateKey} PrivateKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.crypto.PrivateKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crypto.PrivateKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crypto.PrivateKey} PrivateKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateKey message.
         * @function verify
         * @memberof crypto.PrivateKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                properties.priv = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PrivateKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crypto.PrivateKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crypto.PrivateKey} PrivateKey
         */
        PrivateKey.fromObject = function fromObject(object) {
            if (object instanceof $root.crypto.PrivateKey)
                return object;
            var message = new $root.crypto.PrivateKey();
            if (object.ed25519 != null)
                if (typeof object.ed25519 === "string")
                    $util.base64.decode(object.ed25519, message.ed25519 = $util.newBuffer($util.base64.length(object.ed25519)), 0);
                else if (object.ed25519.length)
                    message.ed25519 = object.ed25519;
            return message;
        };

        /**
         * Creates a plain object from a PrivateKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crypto.PrivateKey
         * @static
         * @param {crypto.PrivateKey} message PrivateKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.priv = "ed25519";
            }
            return object;
        };

        /**
         * Converts this PrivateKey to JSON.
         * @function toJSON
         * @memberof crypto.PrivateKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivateKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateKey;
    })();

    crypto.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof crypto
         * @interface ISignature
         * @property {Uint8Array|null} [ed25519] Signature ed25519
         */

        /**
         * Constructs a new Signature.
         * @memberof crypto
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {crypto.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature ed25519.
         * @member {Uint8Array} ed25519
         * @memberof crypto.Signature
         * @instance
         */
        Signature.prototype.ed25519 = $util.newBuffer([]);

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Signature sig.
         * @member {"ed25519"|undefined} sig
         * @memberof crypto.Signature
         * @instance
         */
        Object.defineProperty(Signature.prototype, "sig", {
            get: $util.oneOfGetter($oneOfFields = ["ed25519"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof crypto.Signature
         * @static
         * @param {crypto.ISignature=} [properties] Properties to set
         * @returns {crypto.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link crypto.Signature.verify|verify} messages.
         * @function encode
         * @memberof crypto.Signature
         * @static
         * @param {crypto.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ed25519 != null && message.hasOwnProperty("ed25519"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ed25519);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link crypto.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crypto.Signature
         * @static
         * @param {crypto.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof crypto.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crypto.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.crypto.Signature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crypto.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crypto.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof crypto.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                properties.sig = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crypto.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crypto.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.crypto.Signature)
                return object;
            var message = new $root.crypto.Signature();
            if (object.ed25519 != null)
                if (typeof object.ed25519 === "string")
                    $util.base64.decode(object.ed25519, message.ed25519 = $util.newBuffer($util.base64.length(object.ed25519)), 0);
                else if (object.ed25519.length)
                    message.ed25519 = object.ed25519;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crypto.Signature
         * @static
         * @param {crypto.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.sig = "ed25519";
            }
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof crypto.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signature;
    })();

    return crypto;
})();

$root.orm = (function() {

    /**
     * Namespace orm.
     * @exports orm
     * @namespace
     */
    var orm = {};

    orm.MultiRef = (function() {

        /**
         * Properties of a MultiRef.
         * @memberof orm
         * @interface IMultiRef
         * @property {Array.<Uint8Array>|null} [refs] MultiRef refs
         */

        /**
         * Constructs a new MultiRef.
         * @memberof orm
         * @classdesc MultiRef contains a list of references to pks
         * @implements IMultiRef
         * @constructor
         * @param {orm.IMultiRef=} [properties] Properties to set
         */
        function MultiRef(properties) {
            this.refs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MultiRef refs.
         * @member {Array.<Uint8Array>} refs
         * @memberof orm.MultiRef
         * @instance
         */
        MultiRef.prototype.refs = $util.emptyArray;

        /**
         * Creates a new MultiRef instance using the specified properties.
         * @function create
         * @memberof orm.MultiRef
         * @static
         * @param {orm.IMultiRef=} [properties] Properties to set
         * @returns {orm.MultiRef} MultiRef instance
         */
        MultiRef.create = function create(properties) {
            return new MultiRef(properties);
        };

        /**
         * Encodes the specified MultiRef message. Does not implicitly {@link orm.MultiRef.verify|verify} messages.
         * @function encode
         * @memberof orm.MultiRef
         * @static
         * @param {orm.IMultiRef} message MultiRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiRef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.refs != null && message.refs.length)
                for (var i = 0; i < message.refs.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.refs[i]);
            return writer;
        };

        /**
         * Encodes the specified MultiRef message, length delimited. Does not implicitly {@link orm.MultiRef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orm.MultiRef
         * @static
         * @param {orm.IMultiRef} message MultiRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MultiRef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MultiRef message from the specified reader or buffer.
         * @function decode
         * @memberof orm.MultiRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orm.MultiRef} MultiRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiRef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orm.MultiRef();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.refs && message.refs.length))
                        message.refs = [];
                    message.refs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MultiRef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orm.MultiRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orm.MultiRef} MultiRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MultiRef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MultiRef message.
         * @function verify
         * @memberof orm.MultiRef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MultiRef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.refs != null && message.hasOwnProperty("refs")) {
                if (!Array.isArray(message.refs))
                    return "refs: array expected";
                for (var i = 0; i < message.refs.length; ++i)
                    if (!(message.refs[i] && typeof message.refs[i].length === "number" || $util.isString(message.refs[i])))
                        return "refs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a MultiRef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orm.MultiRef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orm.MultiRef} MultiRef
         */
        MultiRef.fromObject = function fromObject(object) {
            if (object instanceof $root.orm.MultiRef)
                return object;
            var message = new $root.orm.MultiRef();
            if (object.refs) {
                if (!Array.isArray(object.refs))
                    throw TypeError(".orm.MultiRef.refs: array expected");
                message.refs = [];
                for (var i = 0; i < object.refs.length; ++i)
                    if (typeof object.refs[i] === "string")
                        $util.base64.decode(object.refs[i], message.refs[i] = $util.newBuffer($util.base64.length(object.refs[i])), 0);
                    else if (object.refs[i].length)
                        message.refs[i] = object.refs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a MultiRef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orm.MultiRef
         * @static
         * @param {orm.MultiRef} message MultiRef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MultiRef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.refs = [];
            if (message.refs && message.refs.length) {
                object.refs = [];
                for (var j = 0; j < message.refs.length; ++j)
                    object.refs[j] = options.bytes === String ? $util.base64.encode(message.refs[j], 0, message.refs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.refs[j]) : message.refs[j];
            }
            return object;
        };

        /**
         * Converts this MultiRef to JSON.
         * @function toJSON
         * @memberof orm.MultiRef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MultiRef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MultiRef;
    })();

    orm.Counter = (function() {

        /**
         * Properties of a Counter.
         * @memberof orm
         * @interface ICounter
         * @property {number|Long|null} [count] Counter count
         */

        /**
         * Constructs a new Counter.
         * @memberof orm
         * @classdesc Counter could be used for sequence, but mainly just for test
         * @implements ICounter
         * @constructor
         * @param {orm.ICounter=} [properties] Properties to set
         */
        function Counter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Counter count.
         * @member {number|Long} count
         * @memberof orm.Counter
         * @instance
         */
        Counter.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Counter instance using the specified properties.
         * @function create
         * @memberof orm.Counter
         * @static
         * @param {orm.ICounter=} [properties] Properties to set
         * @returns {orm.Counter} Counter instance
         */
        Counter.create = function create(properties) {
            return new Counter(properties);
        };

        /**
         * Encodes the specified Counter message. Does not implicitly {@link orm.Counter.verify|verify} messages.
         * @function encode
         * @memberof orm.Counter
         * @static
         * @param {orm.ICounter} message Counter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Counter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.count);
            return writer;
        };

        /**
         * Encodes the specified Counter message, length delimited. Does not implicitly {@link orm.Counter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof orm.Counter
         * @static
         * @param {orm.ICounter} message Counter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Counter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Counter message from the specified reader or buffer.
         * @function decode
         * @memberof orm.Counter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {orm.Counter} Counter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Counter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.orm.Counter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Counter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof orm.Counter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {orm.Counter} Counter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Counter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Counter message.
         * @function verify
         * @memberof orm.Counter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Counter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            return null;
        };

        /**
         * Creates a Counter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof orm.Counter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {orm.Counter} Counter
         */
        Counter.fromObject = function fromObject(object) {
            if (object instanceof $root.orm.Counter)
                return object;
            var message = new $root.orm.Counter();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Counter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof orm.Counter
         * @static
         * @param {orm.Counter} message Counter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Counter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            return object;
        };

        /**
         * Converts this Counter to JSON.
         * @function toJSON
         * @memberof orm.Counter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Counter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Counter;
    })();

    return orm;
})();

$root.batch = (function() {

    /**
     * Namespace batch.
     * @exports batch
     * @namespace
     */
    var batch = {};

    batch.ByteArrayList = (function() {

        /**
         * Properties of a ByteArrayList.
         * @memberof batch
         * @interface IByteArrayList
         * @property {Array.<Uint8Array>|null} [elements] ByteArrayList elements
         */

        /**
         * Constructs a new ByteArrayList.
         * @memberof batch
         * @classdesc Represents a ByteArrayList.
         * @implements IByteArrayList
         * @constructor
         * @param {batch.IByteArrayList=} [properties] Properties to set
         */
        function ByteArrayList(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ByteArrayList elements.
         * @member {Array.<Uint8Array>} elements
         * @memberof batch.ByteArrayList
         * @instance
         */
        ByteArrayList.prototype.elements = $util.emptyArray;

        /**
         * Creates a new ByteArrayList instance using the specified properties.
         * @function create
         * @memberof batch.ByteArrayList
         * @static
         * @param {batch.IByteArrayList=} [properties] Properties to set
         * @returns {batch.ByteArrayList} ByteArrayList instance
         */
        ByteArrayList.create = function create(properties) {
            return new ByteArrayList(properties);
        };

        /**
         * Encodes the specified ByteArrayList message. Does not implicitly {@link batch.ByteArrayList.verify|verify} messages.
         * @function encode
         * @memberof batch.ByteArrayList
         * @static
         * @param {batch.IByteArrayList} message ByteArrayList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ByteArrayList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.elements[i]);
            return writer;
        };

        /**
         * Encodes the specified ByteArrayList message, length delimited. Does not implicitly {@link batch.ByteArrayList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof batch.ByteArrayList
         * @static
         * @param {batch.IByteArrayList} message ByteArrayList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ByteArrayList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ByteArrayList message from the specified reader or buffer.
         * @function decode
         * @memberof batch.ByteArrayList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {batch.ByteArrayList} ByteArrayList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ByteArrayList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.batch.ByteArrayList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.elements && message.elements.length))
                        message.elements = [];
                    message.elements.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ByteArrayList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof batch.ByteArrayList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {batch.ByteArrayList} ByteArrayList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ByteArrayList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ByteArrayList message.
         * @function verify
         * @memberof batch.ByteArrayList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ByteArrayList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i)
                    if (!(message.elements[i] && typeof message.elements[i].length === "number" || $util.isString(message.elements[i])))
                        return "elements: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ByteArrayList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof batch.ByteArrayList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {batch.ByteArrayList} ByteArrayList
         */
        ByteArrayList.fromObject = function fromObject(object) {
            if (object instanceof $root.batch.ByteArrayList)
                return object;
            var message = new $root.batch.ByteArrayList();
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".batch.ByteArrayList.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i)
                    if (typeof object.elements[i] === "string")
                        $util.base64.decode(object.elements[i], message.elements[i] = $util.newBuffer($util.base64.length(object.elements[i])), 0);
                    else if (object.elements[i].length)
                        message.elements[i] = object.elements[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ByteArrayList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof batch.ByteArrayList
         * @static
         * @param {batch.ByteArrayList} message ByteArrayList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ByteArrayList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = options.bytes === String ? $util.base64.encode(message.elements[j], 0, message.elements[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.elements[j]) : message.elements[j];
            }
            return object;
        };

        /**
         * Converts this ByteArrayList to JSON.
         * @function toJSON
         * @memberof batch.ByteArrayList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ByteArrayList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ByteArrayList;
    })();

    return batch;
})();

$root.cash = (function() {

    /**
     * Namespace cash.
     * @exports cash
     * @namespace
     */
    var cash = {};

    cash.Set = (function() {

        /**
         * Properties of a Set.
         * @memberof cash
         * @interface ISet
         * @property {Array.<coin.ICoin>|null} [coins] Set coins
         */

        /**
         * Constructs a new Set.
         * @memberof cash
         * @classdesc It handles adding and subtracting sets of currencies.
         * @implements ISet
         * @constructor
         * @param {cash.ISet=} [properties] Properties to set
         */
        function Set(properties) {
            this.coins = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Set coins.
         * @member {Array.<coin.ICoin>} coins
         * @memberof cash.Set
         * @instance
         */
        Set.prototype.coins = $util.emptyArray;

        /**
         * Creates a new Set instance using the specified properties.
         * @function create
         * @memberof cash.Set
         * @static
         * @param {cash.ISet=} [properties] Properties to set
         * @returns {cash.Set} Set instance
         */
        Set.create = function create(properties) {
            return new Set(properties);
        };

        /**
         * Encodes the specified Set message. Does not implicitly {@link cash.Set.verify|verify} messages.
         * @function encode
         * @memberof cash.Set
         * @static
         * @param {cash.ISet} message Set message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Set.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coins != null && message.coins.length)
                for (var i = 0; i < message.coins.length; ++i)
                    $root.coin.Coin.encode(message.coins[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Set message, length delimited. Does not implicitly {@link cash.Set.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cash.Set
         * @static
         * @param {cash.ISet} message Set message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Set.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Set message from the specified reader or buffer.
         * @function decode
         * @memberof cash.Set
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cash.Set} Set
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Set.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cash.Set();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.coins && message.coins.length))
                        message.coins = [];
                    message.coins.push($root.coin.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Set message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cash.Set
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cash.Set} Set
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Set.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Set message.
         * @function verify
         * @memberof cash.Set
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Set.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coins != null && message.hasOwnProperty("coins")) {
                if (!Array.isArray(message.coins))
                    return "coins: array expected";
                for (var i = 0; i < message.coins.length; ++i) {
                    var error = $root.coin.Coin.verify(message.coins[i]);
                    if (error)
                        return "coins." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Set message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cash.Set
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cash.Set} Set
         */
        Set.fromObject = function fromObject(object) {
            if (object instanceof $root.cash.Set)
                return object;
            var message = new $root.cash.Set();
            if (object.coins) {
                if (!Array.isArray(object.coins))
                    throw TypeError(".cash.Set.coins: array expected");
                message.coins = [];
                for (var i = 0; i < object.coins.length; ++i) {
                    if (typeof object.coins[i] !== "object")
                        throw TypeError(".cash.Set.coins: object expected");
                    message.coins[i] = $root.coin.Coin.fromObject(object.coins[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Set message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cash.Set
         * @static
         * @param {cash.Set} message Set
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Set.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.coins = [];
            if (message.coins && message.coins.length) {
                object.coins = [];
                for (var j = 0; j < message.coins.length; ++j)
                    object.coins[j] = $root.coin.Coin.toObject(message.coins[j], options);
            }
            return object;
        };

        /**
         * Converts this Set to JSON.
         * @function toJSON
         * @memberof cash.Set
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Set.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Set;
    })();

    cash.SendMsg = (function() {

        /**
         * Properties of a SendMsg.
         * @memberof cash
         * @interface ISendMsg
         * @property {Uint8Array|null} [src] SendMsg src
         * @property {Uint8Array|null} [dest] SendMsg dest
         * @property {coin.ICoin|null} [amount] SendMsg amount
         * @property {string|null} [memo] max length 128 character
         * @property {Uint8Array|null} [ref] max length 64 bytes
         */

        /**
         * Constructs a new SendMsg.
         * @memberof cash
         * @classdesc eg. tx hash
         * @implements ISendMsg
         * @constructor
         * @param {cash.ISendMsg=} [properties] Properties to set
         */
        function SendMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMsg src.
         * @member {Uint8Array} src
         * @memberof cash.SendMsg
         * @instance
         */
        SendMsg.prototype.src = $util.newBuffer([]);

        /**
         * SendMsg dest.
         * @member {Uint8Array} dest
         * @memberof cash.SendMsg
         * @instance
         */
        SendMsg.prototype.dest = $util.newBuffer([]);

        /**
         * SendMsg amount.
         * @member {coin.ICoin|null|undefined} amount
         * @memberof cash.SendMsg
         * @instance
         */
        SendMsg.prototype.amount = null;

        /**
         * max length 128 character
         * @member {string} memo
         * @memberof cash.SendMsg
         * @instance
         */
        SendMsg.prototype.memo = "";

        /**
         * max length 64 bytes
         * @member {Uint8Array} ref
         * @memberof cash.SendMsg
         * @instance
         */
        SendMsg.prototype.ref = $util.newBuffer([]);

        /**
         * Creates a new SendMsg instance using the specified properties.
         * @function create
         * @memberof cash.SendMsg
         * @static
         * @param {cash.ISendMsg=} [properties] Properties to set
         * @returns {cash.SendMsg} SendMsg instance
         */
        SendMsg.create = function create(properties) {
            return new SendMsg(properties);
        };

        /**
         * Encodes the specified SendMsg message. Does not implicitly {@link cash.SendMsg.verify|verify} messages.
         * @function encode
         * @memberof cash.SendMsg
         * @static
         * @param {cash.ISendMsg} message SendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && message.hasOwnProperty("src"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.src);
            if (message.dest != null && message.hasOwnProperty("dest"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dest);
            if (message.amount != null && message.hasOwnProperty("amount"))
                $root.coin.Coin.encode(message.amount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.memo);
            if (message.ref != null && message.hasOwnProperty("ref"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.ref);
            return writer;
        };

        /**
         * Encodes the specified SendMsg message, length delimited. Does not implicitly {@link cash.SendMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cash.SendMsg
         * @static
         * @param {cash.ISendMsg} message SendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMsg message from the specified reader or buffer.
         * @function decode
         * @memberof cash.SendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cash.SendMsg} SendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cash.SendMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.src = reader.bytes();
                    break;
                case 2:
                    message.dest = reader.bytes();
                    break;
                case 3:
                    message.amount = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.memo = reader.string();
                    break;
                case 5:
                    message.ref = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cash.SendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cash.SendMsg} SendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMsg message.
         * @function verify
         * @memberof cash.SendMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!(message.src && typeof message.src.length === "number" || $util.isString(message.src)))
                    return "src: buffer expected";
            if (message.dest != null && message.hasOwnProperty("dest"))
                if (!(message.dest && typeof message.dest.length === "number" || $util.isString(message.dest)))
                    return "dest: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount")) {
                var error = $root.coin.Coin.verify(message.amount);
                if (error)
                    return "amount." + error;
            }
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.ref != null && message.hasOwnProperty("ref"))
                if (!(message.ref && typeof message.ref.length === "number" || $util.isString(message.ref)))
                    return "ref: buffer expected";
            return null;
        };

        /**
         * Creates a SendMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cash.SendMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cash.SendMsg} SendMsg
         */
        SendMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.cash.SendMsg)
                return object;
            var message = new $root.cash.SendMsg();
            if (object.src != null)
                if (typeof object.src === "string")
                    $util.base64.decode(object.src, message.src = $util.newBuffer($util.base64.length(object.src)), 0);
                else if (object.src.length)
                    message.src = object.src;
            if (object.dest != null)
                if (typeof object.dest === "string")
                    $util.base64.decode(object.dest, message.dest = $util.newBuffer($util.base64.length(object.dest)), 0);
                else if (object.dest.length)
                    message.dest = object.dest;
            if (object.amount != null) {
                if (typeof object.amount !== "object")
                    throw TypeError(".cash.SendMsg.amount: object expected");
                message.amount = $root.coin.Coin.fromObject(object.amount);
            }
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.ref != null)
                if (typeof object.ref === "string")
                    $util.base64.decode(object.ref, message.ref = $util.newBuffer($util.base64.length(object.ref)), 0);
                else if (object.ref.length)
                    message.ref = object.ref;
            return message;
        };

        /**
         * Creates a plain object from a SendMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cash.SendMsg
         * @static
         * @param {cash.SendMsg} message SendMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.src = "";
                else {
                    object.src = [];
                    if (options.bytes !== Array)
                        object.src = $util.newBuffer(object.src);
                }
                if (options.bytes === String)
                    object.dest = "";
                else {
                    object.dest = [];
                    if (options.bytes !== Array)
                        object.dest = $util.newBuffer(object.dest);
                }
                object.amount = null;
                object.memo = "";
                if (options.bytes === String)
                    object.ref = "";
                else {
                    object.ref = [];
                    if (options.bytes !== Array)
                        object.ref = $util.newBuffer(object.ref);
                }
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = options.bytes === String ? $util.base64.encode(message.src, 0, message.src.length) : options.bytes === Array ? Array.prototype.slice.call(message.src) : message.src;
            if (message.dest != null && message.hasOwnProperty("dest"))
                object.dest = options.bytes === String ? $util.base64.encode(message.dest, 0, message.dest.length) : options.bytes === Array ? Array.prototype.slice.call(message.dest) : message.dest;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = $root.coin.Coin.toObject(message.amount, options);
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.ref != null && message.hasOwnProperty("ref"))
                object.ref = options.bytes === String ? $util.base64.encode(message.ref, 0, message.ref.length) : options.bytes === Array ? Array.prototype.slice.call(message.ref) : message.ref;
            return object;
        };

        /**
         * Converts this SendMsg to JSON.
         * @function toJSON
         * @memberof cash.SendMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMsg;
    })();

    cash.FeeInfo = (function() {

        /**
         * Properties of a FeeInfo.
         * @memberof cash
         * @interface IFeeInfo
         * @property {Uint8Array|null} [payer] FeeInfo payer
         * @property {coin.ICoin|null} [fees] FeeInfo fees
         */

        /**
         * Constructs a new FeeInfo.
         * @memberof cash
         * @classdesc message processed
         * @implements IFeeInfo
         * @constructor
         * @param {cash.IFeeInfo=} [properties] Properties to set
         */
        function FeeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeeInfo payer.
         * @member {Uint8Array} payer
         * @memberof cash.FeeInfo
         * @instance
         */
        FeeInfo.prototype.payer = $util.newBuffer([]);

        /**
         * FeeInfo fees.
         * @member {coin.ICoin|null|undefined} fees
         * @memberof cash.FeeInfo
         * @instance
         */
        FeeInfo.prototype.fees = null;

        /**
         * Creates a new FeeInfo instance using the specified properties.
         * @function create
         * @memberof cash.FeeInfo
         * @static
         * @param {cash.IFeeInfo=} [properties] Properties to set
         * @returns {cash.FeeInfo} FeeInfo instance
         */
        FeeInfo.create = function create(properties) {
            return new FeeInfo(properties);
        };

        /**
         * Encodes the specified FeeInfo message. Does not implicitly {@link cash.FeeInfo.verify|verify} messages.
         * @function encode
         * @memberof cash.FeeInfo
         * @static
         * @param {cash.IFeeInfo} message FeeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payer != null && message.hasOwnProperty("payer"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.payer);
            if (message.fees != null && message.hasOwnProperty("fees"))
                $root.coin.Coin.encode(message.fees, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeeInfo message, length delimited. Does not implicitly {@link cash.FeeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cash.FeeInfo
         * @static
         * @param {cash.IFeeInfo} message FeeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof cash.FeeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cash.FeeInfo} FeeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cash.FeeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payer = reader.bytes();
                    break;
                case 2:
                    message.fees = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cash.FeeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cash.FeeInfo} FeeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeInfo message.
         * @function verify
         * @memberof cash.FeeInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payer != null && message.hasOwnProperty("payer"))
                if (!(message.payer && typeof message.payer.length === "number" || $util.isString(message.payer)))
                    return "payer: buffer expected";
            if (message.fees != null && message.hasOwnProperty("fees")) {
                var error = $root.coin.Coin.verify(message.fees);
                if (error)
                    return "fees." + error;
            }
            return null;
        };

        /**
         * Creates a FeeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cash.FeeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cash.FeeInfo} FeeInfo
         */
        FeeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.cash.FeeInfo)
                return object;
            var message = new $root.cash.FeeInfo();
            if (object.payer != null)
                if (typeof object.payer === "string")
                    $util.base64.decode(object.payer, message.payer = $util.newBuffer($util.base64.length(object.payer)), 0);
                else if (object.payer.length)
                    message.payer = object.payer;
            if (object.fees != null) {
                if (typeof object.fees !== "object")
                    throw TypeError(".cash.FeeInfo.fees: object expected");
                message.fees = $root.coin.Coin.fromObject(object.fees);
            }
            return message;
        };

        /**
         * Creates a plain object from a FeeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cash.FeeInfo
         * @static
         * @param {cash.FeeInfo} message FeeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.payer = "";
                else {
                    object.payer = [];
                    if (options.bytes !== Array)
                        object.payer = $util.newBuffer(object.payer);
                }
                object.fees = null;
            }
            if (message.payer != null && message.hasOwnProperty("payer"))
                object.payer = options.bytes === String ? $util.base64.encode(message.payer, 0, message.payer.length) : options.bytes === Array ? Array.prototype.slice.call(message.payer) : message.payer;
            if (message.fees != null && message.hasOwnProperty("fees"))
                object.fees = $root.coin.Coin.toObject(message.fees, options);
            return object;
        };

        /**
         * Converts this FeeInfo to JSON.
         * @function toJSON
         * @memberof cash.FeeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FeeInfo;
    })();

    return cash;
})();

$root.currency = (function() {

    /**
     * Namespace currency.
     * @exports currency
     * @namespace
     */
    var currency = {};

    currency.TokenInfo = (function() {

        /**
         * Properties of a TokenInfo.
         * @memberof currency
         * @interface ITokenInfo
         * @property {string|null} [name] TokenInfo name
         */

        /**
         * Constructs a new TokenInfo.
         * @memberof currency
         * @classdesc alternative solution to hardcoding supported currencies information.
         * @implements ITokenInfo
         * @constructor
         * @param {currency.ITokenInfo=} [properties] Properties to set
         */
        function TokenInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenInfo name.
         * @member {string} name
         * @memberof currency.TokenInfo
         * @instance
         */
        TokenInfo.prototype.name = "";

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @function create
         * @memberof currency.TokenInfo
         * @static
         * @param {currency.ITokenInfo=} [properties] Properties to set
         * @returns {currency.TokenInfo} TokenInfo instance
         */
        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link currency.TokenInfo.verify|verify} messages.
         * @function encode
         * @memberof currency.TokenInfo
         * @static
         * @param {currency.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link currency.TokenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency.TokenInfo
         * @static
         * @param {currency.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof currency.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency.TokenInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInfo message.
         * @function verify
         * @memberof currency.TokenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency.TokenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency.TokenInfo} TokenInfo
         */
        TokenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.currency.TokenInfo)
                return object;
            var message = new $root.currency.TokenInfo();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency.TokenInfo
         * @static
         * @param {currency.TokenInfo} message TokenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this TokenInfo to JSON.
         * @function toJSON
         * @memberof currency.TokenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TokenInfo;
    })();

    currency.NewTokenInfoMsg = (function() {

        /**
         * Properties of a NewTokenInfoMsg.
         * @memberof currency
         * @interface INewTokenInfoMsg
         * @property {string|null} [ticker] NewTokenInfoMsg ticker
         * @property {string|null} [name] NewTokenInfoMsg name
         */

        /**
         * Constructs a new NewTokenInfoMsg.
         * @memberof currency
         * @classdesc be registered only once.
         * @implements INewTokenInfoMsg
         * @constructor
         * @param {currency.INewTokenInfoMsg=} [properties] Properties to set
         */
        function NewTokenInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewTokenInfoMsg ticker.
         * @member {string} ticker
         * @memberof currency.NewTokenInfoMsg
         * @instance
         */
        NewTokenInfoMsg.prototype.ticker = "";

        /**
         * NewTokenInfoMsg name.
         * @member {string} name
         * @memberof currency.NewTokenInfoMsg
         * @instance
         */
        NewTokenInfoMsg.prototype.name = "";

        /**
         * Creates a new NewTokenInfoMsg instance using the specified properties.
         * @function create
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {currency.INewTokenInfoMsg=} [properties] Properties to set
         * @returns {currency.NewTokenInfoMsg} NewTokenInfoMsg instance
         */
        NewTokenInfoMsg.create = function create(properties) {
            return new NewTokenInfoMsg(properties);
        };

        /**
         * Encodes the specified NewTokenInfoMsg message. Does not implicitly {@link currency.NewTokenInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {currency.INewTokenInfoMsg} message NewTokenInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTokenInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticker);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified NewTokenInfoMsg message, length delimited. Does not implicitly {@link currency.NewTokenInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {currency.INewTokenInfoMsg} message NewTokenInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTokenInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewTokenInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {currency.NewTokenInfoMsg} NewTokenInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTokenInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.currency.NewTokenInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewTokenInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {currency.NewTokenInfoMsg} NewTokenInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTokenInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewTokenInfoMsg message.
         * @function verify
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewTokenInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                if (!$util.isString(message.ticker))
                    return "ticker: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a NewTokenInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {currency.NewTokenInfoMsg} NewTokenInfoMsg
         */
        NewTokenInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.currency.NewTokenInfoMsg)
                return object;
            var message = new $root.currency.NewTokenInfoMsg();
            if (object.ticker != null)
                message.ticker = String(object.ticker);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a NewTokenInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof currency.NewTokenInfoMsg
         * @static
         * @param {currency.NewTokenInfoMsg} message NewTokenInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewTokenInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ticker = "";
                object.name = "";
            }
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                object.ticker = message.ticker;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this NewTokenInfoMsg to JSON.
         * @function toJSON
         * @memberof currency.NewTokenInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewTokenInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewTokenInfoMsg;
    })();

    return currency;
})();

$root.distribution = (function() {

    /**
     * Namespace distribution.
     * @exports distribution
     * @namespace
     */
    var distribution = {};

    distribution.Revenue = (function() {

        /**
         * Properties of a Revenue.
         * @memberof distribution
         * @interface IRevenue
         * @property {Uint8Array|null} [admin] While not enforced it is best to use a multisig contract here.
         * @property {Array.<distribution.IRecipient>|null} [recipients] distributed to. Must be at least one.
         */

        /**
         * Constructs a new Revenue.
         * @memberof distribution
         * @classdesc the owners.
         * @implements IRevenue
         * @constructor
         * @param {distribution.IRevenue=} [properties] Properties to set
         */
        function Revenue(properties) {
            this.recipients = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * While not enforced it is best to use a multisig contract here.
         * @member {Uint8Array} admin
         * @memberof distribution.Revenue
         * @instance
         */
        Revenue.prototype.admin = $util.newBuffer([]);

        /**
         * distributed to. Must be at least one.
         * @member {Array.<distribution.IRecipient>} recipients
         * @memberof distribution.Revenue
         * @instance
         */
        Revenue.prototype.recipients = $util.emptyArray;

        /**
         * Creates a new Revenue instance using the specified properties.
         * @function create
         * @memberof distribution.Revenue
         * @static
         * @param {distribution.IRevenue=} [properties] Properties to set
         * @returns {distribution.Revenue} Revenue instance
         */
        Revenue.create = function create(properties) {
            return new Revenue(properties);
        };

        /**
         * Encodes the specified Revenue message. Does not implicitly {@link distribution.Revenue.verify|verify} messages.
         * @function encode
         * @memberof distribution.Revenue
         * @static
         * @param {distribution.IRevenue} message Revenue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.admin != null && message.hasOwnProperty("admin"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.admin);
            if (message.recipients != null && message.recipients.length)
                for (var i = 0; i < message.recipients.length; ++i)
                    $root.distribution.Recipient.encode(message.recipients[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Revenue message, length delimited. Does not implicitly {@link distribution.Revenue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof distribution.Revenue
         * @static
         * @param {distribution.IRevenue} message Revenue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Revenue message from the specified reader or buffer.
         * @function decode
         * @memberof distribution.Revenue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {distribution.Revenue} Revenue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.distribution.Revenue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.admin = reader.bytes();
                    break;
                case 2:
                    if (!(message.recipients && message.recipients.length))
                        message.recipients = [];
                    message.recipients.push($root.distribution.Recipient.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Revenue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof distribution.Revenue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {distribution.Revenue} Revenue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Revenue message.
         * @function verify
         * @memberof distribution.Revenue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Revenue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.admin != null && message.hasOwnProperty("admin"))
                if (!(message.admin && typeof message.admin.length === "number" || $util.isString(message.admin)))
                    return "admin: buffer expected";
            if (message.recipients != null && message.hasOwnProperty("recipients")) {
                if (!Array.isArray(message.recipients))
                    return "recipients: array expected";
                for (var i = 0; i < message.recipients.length; ++i) {
                    var error = $root.distribution.Recipient.verify(message.recipients[i]);
                    if (error)
                        return "recipients." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Revenue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof distribution.Revenue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {distribution.Revenue} Revenue
         */
        Revenue.fromObject = function fromObject(object) {
            if (object instanceof $root.distribution.Revenue)
                return object;
            var message = new $root.distribution.Revenue();
            if (object.admin != null)
                if (typeof object.admin === "string")
                    $util.base64.decode(object.admin, message.admin = $util.newBuffer($util.base64.length(object.admin)), 0);
                else if (object.admin.length)
                    message.admin = object.admin;
            if (object.recipients) {
                if (!Array.isArray(object.recipients))
                    throw TypeError(".distribution.Revenue.recipients: array expected");
                message.recipients = [];
                for (var i = 0; i < object.recipients.length; ++i) {
                    if (typeof object.recipients[i] !== "object")
                        throw TypeError(".distribution.Revenue.recipients: object expected");
                    message.recipients[i] = $root.distribution.Recipient.fromObject(object.recipients[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Revenue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof distribution.Revenue
         * @static
         * @param {distribution.Revenue} message Revenue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Revenue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recipients = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.admin = "";
                else {
                    object.admin = [];
                    if (options.bytes !== Array)
                        object.admin = $util.newBuffer(object.admin);
                }
            if (message.admin != null && message.hasOwnProperty("admin"))
                object.admin = options.bytes === String ? $util.base64.encode(message.admin, 0, message.admin.length) : options.bytes === Array ? Array.prototype.slice.call(message.admin) : message.admin;
            if (message.recipients && message.recipients.length) {
                object.recipients = [];
                for (var j = 0; j < message.recipients.length; ++j)
                    object.recipients[j] = $root.distribution.Recipient.toObject(message.recipients[j], options);
            }
            return object;
        };

        /**
         * Converts this Revenue to JSON.
         * @function toJSON
         * @memberof distribution.Revenue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Revenue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Revenue;
    })();

    distribution.Recipient = (function() {

        /**
         * Properties of a Recipient.
         * @memberof distribution
         * @interface IRecipient
         * @property {Uint8Array|null} [address] of the validators.
         * @property {number|null} [weight] second one.
         */

        /**
         * Constructs a new Recipient.
         * @memberof distribution
         * @classdesc Represents a Recipient.
         * @implements IRecipient
         * @constructor
         * @param {distribution.IRecipient=} [properties] Properties to set
         */
        function Recipient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * of the validators.
         * @member {Uint8Array} address
         * @memberof distribution.Recipient
         * @instance
         */
        Recipient.prototype.address = $util.newBuffer([]);

        /**
         * second one.
         * @member {number} weight
         * @memberof distribution.Recipient
         * @instance
         */
        Recipient.prototype.weight = 0;

        /**
         * Creates a new Recipient instance using the specified properties.
         * @function create
         * @memberof distribution.Recipient
         * @static
         * @param {distribution.IRecipient=} [properties] Properties to set
         * @returns {distribution.Recipient} Recipient instance
         */
        Recipient.create = function create(properties) {
            return new Recipient(properties);
        };

        /**
         * Encodes the specified Recipient message. Does not implicitly {@link distribution.Recipient.verify|verify} messages.
         * @function encode
         * @memberof distribution.Recipient
         * @static
         * @param {distribution.IRecipient} message Recipient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Recipient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.weight != null && message.hasOwnProperty("weight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.weight);
            return writer;
        };

        /**
         * Encodes the specified Recipient message, length delimited. Does not implicitly {@link distribution.Recipient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof distribution.Recipient
         * @static
         * @param {distribution.IRecipient} message Recipient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Recipient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Recipient message from the specified reader or buffer.
         * @function decode
         * @memberof distribution.Recipient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {distribution.Recipient} Recipient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Recipient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.distribution.Recipient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.weight = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Recipient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof distribution.Recipient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {distribution.Recipient} Recipient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Recipient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Recipient message.
         * @function verify
         * @memberof distribution.Recipient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Recipient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.weight != null && message.hasOwnProperty("weight"))
                if (!$util.isInteger(message.weight))
                    return "weight: integer expected";
            return null;
        };

        /**
         * Creates a Recipient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof distribution.Recipient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {distribution.Recipient} Recipient
         */
        Recipient.fromObject = function fromObject(object) {
            if (object instanceof $root.distribution.Recipient)
                return object;
            var message = new $root.distribution.Recipient();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.weight != null)
                message.weight = object.weight | 0;
            return message;
        };

        /**
         * Creates a plain object from a Recipient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof distribution.Recipient
         * @static
         * @param {distribution.Recipient} message Recipient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Recipient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.weight = 0;
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.weight != null && message.hasOwnProperty("weight"))
                object.weight = message.weight;
            return object;
        };

        /**
         * Converts this Recipient to JSON.
         * @function toJSON
         * @memberof distribution.Recipient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Recipient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Recipient;
    })();

    distribution.NewRevenueMsg = (function() {

        /**
         * Properties of a NewRevenueMsg.
         * @memberof distribution
         * @interface INewRevenueMsg
         * @property {Uint8Array|null} [admin] While not enforced it is best to use a multisig contract here.
         * @property {Array.<distribution.IRecipient>|null} [recipients] distributed to. Must be at least one.
         */

        /**
         * Constructs a new NewRevenueMsg.
         * @memberof distribution
         * @classdesc NewRevenueMsg is issuing the creation of a new revenue stream instance.
         * @implements INewRevenueMsg
         * @constructor
         * @param {distribution.INewRevenueMsg=} [properties] Properties to set
         */
        function NewRevenueMsg(properties) {
            this.recipients = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * While not enforced it is best to use a multisig contract here.
         * @member {Uint8Array} admin
         * @memberof distribution.NewRevenueMsg
         * @instance
         */
        NewRevenueMsg.prototype.admin = $util.newBuffer([]);

        /**
         * distributed to. Must be at least one.
         * @member {Array.<distribution.IRecipient>} recipients
         * @memberof distribution.NewRevenueMsg
         * @instance
         */
        NewRevenueMsg.prototype.recipients = $util.emptyArray;

        /**
         * Creates a new NewRevenueMsg instance using the specified properties.
         * @function create
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {distribution.INewRevenueMsg=} [properties] Properties to set
         * @returns {distribution.NewRevenueMsg} NewRevenueMsg instance
         */
        NewRevenueMsg.create = function create(properties) {
            return new NewRevenueMsg(properties);
        };

        /**
         * Encodes the specified NewRevenueMsg message. Does not implicitly {@link distribution.NewRevenueMsg.verify|verify} messages.
         * @function encode
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {distribution.INewRevenueMsg} message NewRevenueMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewRevenueMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.admin != null && message.hasOwnProperty("admin"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.admin);
            if (message.recipients != null && message.recipients.length)
                for (var i = 0; i < message.recipients.length; ++i)
                    $root.distribution.Recipient.encode(message.recipients[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NewRevenueMsg message, length delimited. Does not implicitly {@link distribution.NewRevenueMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {distribution.INewRevenueMsg} message NewRevenueMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewRevenueMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewRevenueMsg message from the specified reader or buffer.
         * @function decode
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {distribution.NewRevenueMsg} NewRevenueMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewRevenueMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.distribution.NewRevenueMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.admin = reader.bytes();
                    break;
                case 2:
                    if (!(message.recipients && message.recipients.length))
                        message.recipients = [];
                    message.recipients.push($root.distribution.Recipient.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewRevenueMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {distribution.NewRevenueMsg} NewRevenueMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewRevenueMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewRevenueMsg message.
         * @function verify
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewRevenueMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.admin != null && message.hasOwnProperty("admin"))
                if (!(message.admin && typeof message.admin.length === "number" || $util.isString(message.admin)))
                    return "admin: buffer expected";
            if (message.recipients != null && message.hasOwnProperty("recipients")) {
                if (!Array.isArray(message.recipients))
                    return "recipients: array expected";
                for (var i = 0; i < message.recipients.length; ++i) {
                    var error = $root.distribution.Recipient.verify(message.recipients[i]);
                    if (error)
                        return "recipients." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NewRevenueMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {distribution.NewRevenueMsg} NewRevenueMsg
         */
        NewRevenueMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.distribution.NewRevenueMsg)
                return object;
            var message = new $root.distribution.NewRevenueMsg();
            if (object.admin != null)
                if (typeof object.admin === "string")
                    $util.base64.decode(object.admin, message.admin = $util.newBuffer($util.base64.length(object.admin)), 0);
                else if (object.admin.length)
                    message.admin = object.admin;
            if (object.recipients) {
                if (!Array.isArray(object.recipients))
                    throw TypeError(".distribution.NewRevenueMsg.recipients: array expected");
                message.recipients = [];
                for (var i = 0; i < object.recipients.length; ++i) {
                    if (typeof object.recipients[i] !== "object")
                        throw TypeError(".distribution.NewRevenueMsg.recipients: object expected");
                    message.recipients[i] = $root.distribution.Recipient.fromObject(object.recipients[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NewRevenueMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof distribution.NewRevenueMsg
         * @static
         * @param {distribution.NewRevenueMsg} message NewRevenueMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewRevenueMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recipients = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.admin = "";
                else {
                    object.admin = [];
                    if (options.bytes !== Array)
                        object.admin = $util.newBuffer(object.admin);
                }
            if (message.admin != null && message.hasOwnProperty("admin"))
                object.admin = options.bytes === String ? $util.base64.encode(message.admin, 0, message.admin.length) : options.bytes === Array ? Array.prototype.slice.call(message.admin) : message.admin;
            if (message.recipients && message.recipients.length) {
                object.recipients = [];
                for (var j = 0; j < message.recipients.length; ++j)
                    object.recipients[j] = $root.distribution.Recipient.toObject(message.recipients[j], options);
            }
            return object;
        };

        /**
         * Converts this NewRevenueMsg to JSON.
         * @function toJSON
         * @memberof distribution.NewRevenueMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewRevenueMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewRevenueMsg;
    })();

    distribution.DistributeMsg = (function() {

        /**
         * Properties of a DistributeMsg.
         * @memberof distribution
         * @interface IDistributeMsg
         * @property {Uint8Array|null} [revenueId] should be distributed between recipients.
         */

        /**
         * Constructs a new DistributeMsg.
         * @memberof distribution
         * @classdesc signed using admin key.
         * @implements IDistributeMsg
         * @constructor
         * @param {distribution.IDistributeMsg=} [properties] Properties to set
         */
        function DistributeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * should be distributed between recipients.
         * @member {Uint8Array} revenueId
         * @memberof distribution.DistributeMsg
         * @instance
         */
        DistributeMsg.prototype.revenueId = $util.newBuffer([]);

        /**
         * Creates a new DistributeMsg instance using the specified properties.
         * @function create
         * @memberof distribution.DistributeMsg
         * @static
         * @param {distribution.IDistributeMsg=} [properties] Properties to set
         * @returns {distribution.DistributeMsg} DistributeMsg instance
         */
        DistributeMsg.create = function create(properties) {
            return new DistributeMsg(properties);
        };

        /**
         * Encodes the specified DistributeMsg message. Does not implicitly {@link distribution.DistributeMsg.verify|verify} messages.
         * @function encode
         * @memberof distribution.DistributeMsg
         * @static
         * @param {distribution.IDistributeMsg} message DistributeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DistributeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.revenueId);
            return writer;
        };

        /**
         * Encodes the specified DistributeMsg message, length delimited. Does not implicitly {@link distribution.DistributeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof distribution.DistributeMsg
         * @static
         * @param {distribution.IDistributeMsg} message DistributeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DistributeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DistributeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof distribution.DistributeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {distribution.DistributeMsg} DistributeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DistributeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.distribution.DistributeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.revenueId = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DistributeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof distribution.DistributeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {distribution.DistributeMsg} DistributeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DistributeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DistributeMsg message.
         * @function verify
         * @memberof distribution.DistributeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DistributeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                if (!(message.revenueId && typeof message.revenueId.length === "number" || $util.isString(message.revenueId)))
                    return "revenueId: buffer expected";
            return null;
        };

        /**
         * Creates a DistributeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof distribution.DistributeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {distribution.DistributeMsg} DistributeMsg
         */
        DistributeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.distribution.DistributeMsg)
                return object;
            var message = new $root.distribution.DistributeMsg();
            if (object.revenueId != null)
                if (typeof object.revenueId === "string")
                    $util.base64.decode(object.revenueId, message.revenueId = $util.newBuffer($util.base64.length(object.revenueId)), 0);
                else if (object.revenueId.length)
                    message.revenueId = object.revenueId;
            return message;
        };

        /**
         * Creates a plain object from a DistributeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof distribution.DistributeMsg
         * @static
         * @param {distribution.DistributeMsg} message DistributeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DistributeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.revenueId = "";
                else {
                    object.revenueId = [];
                    if (options.bytes !== Array)
                        object.revenueId = $util.newBuffer(object.revenueId);
                }
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                object.revenueId = options.bytes === String ? $util.base64.encode(message.revenueId, 0, message.revenueId.length) : options.bytes === Array ? Array.prototype.slice.call(message.revenueId) : message.revenueId;
            return object;
        };

        /**
         * Converts this DistributeMsg to JSON.
         * @function toJSON
         * @memberof distribution.DistributeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DistributeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DistributeMsg;
    })();

    distribution.ResetRevenueMsg = (function() {

        /**
         * Properties of a ResetRevenueMsg.
         * @memberof distribution
         * @interface IResetRevenueMsg
         * @property {Uint8Array|null} [revenueId] Revenue ID reference an ID of a revenue instance that is updated.
         * @property {Array.<distribution.IRecipient>|null} [recipients] distributed to. Must be at least one.
         */

        /**
         * Constructs a new ResetRevenueMsg.
         * @memberof distribution
         * @classdesc collected revenue amount is equal to zero the change is applied.
         * @implements IResetRevenueMsg
         * @constructor
         * @param {distribution.IResetRevenueMsg=} [properties] Properties to set
         */
        function ResetRevenueMsg(properties) {
            this.recipients = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Revenue ID reference an ID of a revenue instance that is updated.
         * @member {Uint8Array} revenueId
         * @memberof distribution.ResetRevenueMsg
         * @instance
         */
        ResetRevenueMsg.prototype.revenueId = $util.newBuffer([]);

        /**
         * distributed to. Must be at least one.
         * @member {Array.<distribution.IRecipient>} recipients
         * @memberof distribution.ResetRevenueMsg
         * @instance
         */
        ResetRevenueMsg.prototype.recipients = $util.emptyArray;

        /**
         * Creates a new ResetRevenueMsg instance using the specified properties.
         * @function create
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {distribution.IResetRevenueMsg=} [properties] Properties to set
         * @returns {distribution.ResetRevenueMsg} ResetRevenueMsg instance
         */
        ResetRevenueMsg.create = function create(properties) {
            return new ResetRevenueMsg(properties);
        };

        /**
         * Encodes the specified ResetRevenueMsg message. Does not implicitly {@link distribution.ResetRevenueMsg.verify|verify} messages.
         * @function encode
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {distribution.IResetRevenueMsg} message ResetRevenueMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetRevenueMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.revenueId);
            if (message.recipients != null && message.recipients.length)
                for (var i = 0; i < message.recipients.length; ++i)
                    $root.distribution.Recipient.encode(message.recipients[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResetRevenueMsg message, length delimited. Does not implicitly {@link distribution.ResetRevenueMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {distribution.IResetRevenueMsg} message ResetRevenueMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResetRevenueMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResetRevenueMsg message from the specified reader or buffer.
         * @function decode
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {distribution.ResetRevenueMsg} ResetRevenueMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetRevenueMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.distribution.ResetRevenueMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.revenueId = reader.bytes();
                    break;
                case 2:
                    if (!(message.recipients && message.recipients.length))
                        message.recipients = [];
                    message.recipients.push($root.distribution.Recipient.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResetRevenueMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {distribution.ResetRevenueMsg} ResetRevenueMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetRevenueMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResetRevenueMsg message.
         * @function verify
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResetRevenueMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                if (!(message.revenueId && typeof message.revenueId.length === "number" || $util.isString(message.revenueId)))
                    return "revenueId: buffer expected";
            if (message.recipients != null && message.hasOwnProperty("recipients")) {
                if (!Array.isArray(message.recipients))
                    return "recipients: array expected";
                for (var i = 0; i < message.recipients.length; ++i) {
                    var error = $root.distribution.Recipient.verify(message.recipients[i]);
                    if (error)
                        return "recipients." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResetRevenueMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {distribution.ResetRevenueMsg} ResetRevenueMsg
         */
        ResetRevenueMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.distribution.ResetRevenueMsg)
                return object;
            var message = new $root.distribution.ResetRevenueMsg();
            if (object.revenueId != null)
                if (typeof object.revenueId === "string")
                    $util.base64.decode(object.revenueId, message.revenueId = $util.newBuffer($util.base64.length(object.revenueId)), 0);
                else if (object.revenueId.length)
                    message.revenueId = object.revenueId;
            if (object.recipients) {
                if (!Array.isArray(object.recipients))
                    throw TypeError(".distribution.ResetRevenueMsg.recipients: array expected");
                message.recipients = [];
                for (var i = 0; i < object.recipients.length; ++i) {
                    if (typeof object.recipients[i] !== "object")
                        throw TypeError(".distribution.ResetRevenueMsg.recipients: object expected");
                    message.recipients[i] = $root.distribution.Recipient.fromObject(object.recipients[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResetRevenueMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof distribution.ResetRevenueMsg
         * @static
         * @param {distribution.ResetRevenueMsg} message ResetRevenueMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResetRevenueMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recipients = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.revenueId = "";
                else {
                    object.revenueId = [];
                    if (options.bytes !== Array)
                        object.revenueId = $util.newBuffer(object.revenueId);
                }
            if (message.revenueId != null && message.hasOwnProperty("revenueId"))
                object.revenueId = options.bytes === String ? $util.base64.encode(message.revenueId, 0, message.revenueId.length) : options.bytes === Array ? Array.prototype.slice.call(message.revenueId) : message.revenueId;
            if (message.recipients && message.recipients.length) {
                object.recipients = [];
                for (var j = 0; j < message.recipients.length; ++j)
                    object.recipients[j] = $root.distribution.Recipient.toObject(message.recipients[j], options);
            }
            return object;
        };

        /**
         * Converts this ResetRevenueMsg to JSON.
         * @function toJSON
         * @memberof distribution.ResetRevenueMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResetRevenueMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResetRevenueMsg;
    })();

    return distribution;
})();

$root.escrow = (function() {

    /**
     * Namespace escrow.
     * @exports escrow
     * @namespace
     */
    var escrow = {};

    escrow.Escrow = (function() {

        /**
         * Properties of an Escrow.
         * @memberof escrow
         * @interface IEscrow
         * @property {Uint8Array|null} [sender] Sender, Arbiter, Recipient are all weave.Permission
         * @property {Uint8Array|null} [arbiter] Escrow arbiter
         * @property {Uint8Array|null} [recipient] Escrow recipient
         * @property {number|Long|null} [timeout] timeout stored here is absolute block height
         * @property {string|null} [memo] max length 128 character
         */

        /**
         * Constructs a new Escrow.
         * @memberof escrow
         * @classdesc an HTLC ;)
         * @implements IEscrow
         * @constructor
         * @param {escrow.IEscrow=} [properties] Properties to set
         */
        function Escrow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sender, Arbiter, Recipient are all weave.Permission
         * @member {Uint8Array} sender
         * @memberof escrow.Escrow
         * @instance
         */
        Escrow.prototype.sender = $util.newBuffer([]);

        /**
         * Escrow arbiter.
         * @member {Uint8Array} arbiter
         * @memberof escrow.Escrow
         * @instance
         */
        Escrow.prototype.arbiter = $util.newBuffer([]);

        /**
         * Escrow recipient.
         * @member {Uint8Array} recipient
         * @memberof escrow.Escrow
         * @instance
         */
        Escrow.prototype.recipient = $util.newBuffer([]);

        /**
         * timeout stored here is absolute block height
         * @member {number|Long} timeout
         * @memberof escrow.Escrow
         * @instance
         */
        Escrow.prototype.timeout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * max length 128 character
         * @member {string} memo
         * @memberof escrow.Escrow
         * @instance
         */
        Escrow.prototype.memo = "";

        /**
         * Creates a new Escrow instance using the specified properties.
         * @function create
         * @memberof escrow.Escrow
         * @static
         * @param {escrow.IEscrow=} [properties] Properties to set
         * @returns {escrow.Escrow} Escrow instance
         */
        Escrow.create = function create(properties) {
            return new Escrow(properties);
        };

        /**
         * Encodes the specified Escrow message. Does not implicitly {@link escrow.Escrow.verify|verify} messages.
         * @function encode
         * @memberof escrow.Escrow
         * @static
         * @param {escrow.IEscrow} message Escrow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Escrow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sender != null && message.hasOwnProperty("sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sender);
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.arbiter);
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.recipient);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timeout);
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified Escrow message, length delimited. Does not implicitly {@link escrow.Escrow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof escrow.Escrow
         * @static
         * @param {escrow.IEscrow} message Escrow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Escrow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Escrow message from the specified reader or buffer.
         * @function decode
         * @memberof escrow.Escrow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {escrow.Escrow} Escrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Escrow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.escrow.Escrow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.arbiter = reader.bytes();
                    break;
                case 3:
                    message.recipient = reader.bytes();
                    break;
                case 5:
                    message.timeout = reader.int64();
                    break;
                case 6:
                    message.memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Escrow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof escrow.Escrow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {escrow.Escrow} Escrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Escrow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Escrow message.
         * @function verify
         * @memberof escrow.Escrow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Escrow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                    return "sender: buffer expected";
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                if (!(message.arbiter && typeof message.arbiter.length === "number" || $util.isString(message.arbiter)))
                    return "arbiter: buffer expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout) && !(message.timeout && $util.isInteger(message.timeout.low) && $util.isInteger(message.timeout.high)))
                    return "timeout: integer|Long expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates an Escrow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof escrow.Escrow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {escrow.Escrow} Escrow
         */
        Escrow.fromObject = function fromObject(object) {
            if (object instanceof $root.escrow.Escrow)
                return object;
            var message = new $root.escrow.Escrow();
            if (object.sender != null)
                if (typeof object.sender === "string")
                    $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                else if (object.sender.length)
                    message.sender = object.sender;
            if (object.arbiter != null)
                if (typeof object.arbiter === "string")
                    $util.base64.decode(object.arbiter, message.arbiter = $util.newBuffer($util.base64.length(object.arbiter)), 0);
                else if (object.arbiter.length)
                    message.arbiter = object.arbiter;
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.timeout != null)
                if ($util.Long)
                    (message.timeout = $util.Long.fromValue(object.timeout)).unsigned = false;
                else if (typeof object.timeout === "string")
                    message.timeout = parseInt(object.timeout, 10);
                else if (typeof object.timeout === "number")
                    message.timeout = object.timeout;
                else if (typeof object.timeout === "object")
                    message.timeout = new $util.LongBits(object.timeout.low >>> 0, object.timeout.high >>> 0).toNumber();
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from an Escrow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof escrow.Escrow
         * @static
         * @param {escrow.Escrow} message Escrow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Escrow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.sender = "";
                else {
                    object.sender = [];
                    if (options.bytes !== Array)
                        object.sender = $util.newBuffer(object.sender);
                }
                if (options.bytes === String)
                    object.arbiter = "";
                else {
                    object.arbiter = [];
                    if (options.bytes !== Array)
                        object.arbiter = $util.newBuffer(object.arbiter);
                }
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeout = options.longs === String ? "0" : 0;
                object.memo = "";
            }
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                object.arbiter = options.bytes === String ? $util.base64.encode(message.arbiter, 0, message.arbiter.length) : options.bytes === Array ? Array.prototype.slice.call(message.arbiter) : message.arbiter;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (typeof message.timeout === "number")
                    object.timeout = options.longs === String ? String(message.timeout) : message.timeout;
                else
                    object.timeout = options.longs === String ? $util.Long.prototype.toString.call(message.timeout) : options.longs === Number ? new $util.LongBits(message.timeout.low >>> 0, message.timeout.high >>> 0).toNumber() : message.timeout;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this Escrow to JSON.
         * @function toJSON
         * @memberof escrow.Escrow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Escrow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Escrow;
    })();

    escrow.CreateEscrowMsg = (function() {

        /**
         * Properties of a CreateEscrowMsg.
         * @memberof escrow
         * @interface ICreateEscrowMsg
         * @property {Uint8Array|null} [src] Sender, Arbiter, Recipient are all weave.Permission
         * @property {Uint8Array|null} [arbiter] CreateEscrowMsg arbiter
         * @property {Uint8Array|null} [recipient] CreateEscrowMsg recipient
         * @property {Array.<coin.ICoin>|null} [amount] amount may contain multiple token types
         * @property {number|Long|null} [timeout] if unreleased before timeout, will return to sender
         * @property {string|null} [memo] max length 128 character
         */

        /**
         * Constructs a new CreateEscrowMsg.
         * @memberof escrow
         * @classdesc The rest must be defined
         * @implements ICreateEscrowMsg
         * @constructor
         * @param {escrow.ICreateEscrowMsg=} [properties] Properties to set
         */
        function CreateEscrowMsg(properties) {
            this.amount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sender, Arbiter, Recipient are all weave.Permission
         * @member {Uint8Array} src
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.src = $util.newBuffer([]);

        /**
         * CreateEscrowMsg arbiter.
         * @member {Uint8Array} arbiter
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.arbiter = $util.newBuffer([]);

        /**
         * CreateEscrowMsg recipient.
         * @member {Uint8Array} recipient
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.recipient = $util.newBuffer([]);

        /**
         * amount may contain multiple token types
         * @member {Array.<coin.ICoin>} amount
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.amount = $util.emptyArray;

        /**
         * if unreleased before timeout, will return to sender
         * @member {number|Long} timeout
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.timeout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * max length 128 character
         * @member {string} memo
         * @memberof escrow.CreateEscrowMsg
         * @instance
         */
        CreateEscrowMsg.prototype.memo = "";

        /**
         * Creates a new CreateEscrowMsg instance using the specified properties.
         * @function create
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {escrow.ICreateEscrowMsg=} [properties] Properties to set
         * @returns {escrow.CreateEscrowMsg} CreateEscrowMsg instance
         */
        CreateEscrowMsg.create = function create(properties) {
            return new CreateEscrowMsg(properties);
        };

        /**
         * Encodes the specified CreateEscrowMsg message. Does not implicitly {@link escrow.CreateEscrowMsg.verify|verify} messages.
         * @function encode
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {escrow.ICreateEscrowMsg} message CreateEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEscrowMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && message.hasOwnProperty("src"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.src);
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.arbiter);
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.recipient);
            if (message.amount != null && message.amount.length)
                for (var i = 0; i < message.amount.length; ++i)
                    $root.coin.Coin.encode(message.amount[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timeout);
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified CreateEscrowMsg message, length delimited. Does not implicitly {@link escrow.CreateEscrowMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {escrow.ICreateEscrowMsg} message CreateEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateEscrowMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateEscrowMsg message from the specified reader or buffer.
         * @function decode
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {escrow.CreateEscrowMsg} CreateEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEscrowMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.escrow.CreateEscrowMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.src = reader.bytes();
                    break;
                case 2:
                    message.arbiter = reader.bytes();
                    break;
                case 3:
                    message.recipient = reader.bytes();
                    break;
                case 4:
                    if (!(message.amount && message.amount.length))
                        message.amount = [];
                    message.amount.push($root.coin.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.timeout = reader.int64();
                    break;
                case 6:
                    message.memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateEscrowMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {escrow.CreateEscrowMsg} CreateEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateEscrowMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateEscrowMsg message.
         * @function verify
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateEscrowMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!(message.src && typeof message.src.length === "number" || $util.isString(message.src)))
                    return "src: buffer expected";
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                if (!(message.arbiter && typeof message.arbiter.length === "number" || $util.isString(message.arbiter)))
                    return "arbiter: buffer expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount")) {
                if (!Array.isArray(message.amount))
                    return "amount: array expected";
                for (var i = 0; i < message.amount.length; ++i) {
                    var error = $root.coin.Coin.verify(message.amount[i]);
                    if (error)
                        return "amount." + error;
                }
            }
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout) && !(message.timeout && $util.isInteger(message.timeout.low) && $util.isInteger(message.timeout.high)))
                    return "timeout: integer|Long expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates a CreateEscrowMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {escrow.CreateEscrowMsg} CreateEscrowMsg
         */
        CreateEscrowMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.escrow.CreateEscrowMsg)
                return object;
            var message = new $root.escrow.CreateEscrowMsg();
            if (object.src != null)
                if (typeof object.src === "string")
                    $util.base64.decode(object.src, message.src = $util.newBuffer($util.base64.length(object.src)), 0);
                else if (object.src.length)
                    message.src = object.src;
            if (object.arbiter != null)
                if (typeof object.arbiter === "string")
                    $util.base64.decode(object.arbiter, message.arbiter = $util.newBuffer($util.base64.length(object.arbiter)), 0);
                else if (object.arbiter.length)
                    message.arbiter = object.arbiter;
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.amount) {
                if (!Array.isArray(object.amount))
                    throw TypeError(".escrow.CreateEscrowMsg.amount: array expected");
                message.amount = [];
                for (var i = 0; i < object.amount.length; ++i) {
                    if (typeof object.amount[i] !== "object")
                        throw TypeError(".escrow.CreateEscrowMsg.amount: object expected");
                    message.amount[i] = $root.coin.Coin.fromObject(object.amount[i]);
                }
            }
            if (object.timeout != null)
                if ($util.Long)
                    (message.timeout = $util.Long.fromValue(object.timeout)).unsigned = false;
                else if (typeof object.timeout === "string")
                    message.timeout = parseInt(object.timeout, 10);
                else if (typeof object.timeout === "number")
                    message.timeout = object.timeout;
                else if (typeof object.timeout === "object")
                    message.timeout = new $util.LongBits(object.timeout.low >>> 0, object.timeout.high >>> 0).toNumber();
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from a CreateEscrowMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof escrow.CreateEscrowMsg
         * @static
         * @param {escrow.CreateEscrowMsg} message CreateEscrowMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateEscrowMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.amount = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.src = "";
                else {
                    object.src = [];
                    if (options.bytes !== Array)
                        object.src = $util.newBuffer(object.src);
                }
                if (options.bytes === String)
                    object.arbiter = "";
                else {
                    object.arbiter = [];
                    if (options.bytes !== Array)
                        object.arbiter = $util.newBuffer(object.arbiter);
                }
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeout = options.longs === String ? "0" : 0;
                object.memo = "";
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = options.bytes === String ? $util.base64.encode(message.src, 0, message.src.length) : options.bytes === Array ? Array.prototype.slice.call(message.src) : message.src;
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                object.arbiter = options.bytes === String ? $util.base64.encode(message.arbiter, 0, message.arbiter.length) : options.bytes === Array ? Array.prototype.slice.call(message.arbiter) : message.arbiter;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.amount && message.amount.length) {
                object.amount = [];
                for (var j = 0; j < message.amount.length; ++j)
                    object.amount[j] = $root.coin.Coin.toObject(message.amount[j], options);
            }
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (typeof message.timeout === "number")
                    object.timeout = options.longs === String ? String(message.timeout) : message.timeout;
                else
                    object.timeout = options.longs === String ? $util.Long.prototype.toString.call(message.timeout) : options.longs === Number ? new $util.LongBits(message.timeout.low >>> 0, message.timeout.high >>> 0).toNumber() : message.timeout;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this CreateEscrowMsg to JSON.
         * @function toJSON
         * @memberof escrow.CreateEscrowMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateEscrowMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateEscrowMsg;
    })();

    escrow.ReleaseEscrowMsg = (function() {

        /**
         * Properties of a ReleaseEscrowMsg.
         * @memberof escrow
         * @interface IReleaseEscrowMsg
         * @property {Uint8Array|null} [escrowId] ReleaseEscrowMsg escrowId
         * @property {Array.<coin.ICoin>|null} [amount] ReleaseEscrowMsg amount
         */

        /**
         * Constructs a new ReleaseEscrowMsg.
         * @memberof escrow
         * @classdesc May be a subset of the current balance.
         * @implements IReleaseEscrowMsg
         * @constructor
         * @param {escrow.IReleaseEscrowMsg=} [properties] Properties to set
         */
        function ReleaseEscrowMsg(properties) {
            this.amount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReleaseEscrowMsg escrowId.
         * @member {Uint8Array} escrowId
         * @memberof escrow.ReleaseEscrowMsg
         * @instance
         */
        ReleaseEscrowMsg.prototype.escrowId = $util.newBuffer([]);

        /**
         * ReleaseEscrowMsg amount.
         * @member {Array.<coin.ICoin>} amount
         * @memberof escrow.ReleaseEscrowMsg
         * @instance
         */
        ReleaseEscrowMsg.prototype.amount = $util.emptyArray;

        /**
         * Creates a new ReleaseEscrowMsg instance using the specified properties.
         * @function create
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {escrow.IReleaseEscrowMsg=} [properties] Properties to set
         * @returns {escrow.ReleaseEscrowMsg} ReleaseEscrowMsg instance
         */
        ReleaseEscrowMsg.create = function create(properties) {
            return new ReleaseEscrowMsg(properties);
        };

        /**
         * Encodes the specified ReleaseEscrowMsg message. Does not implicitly {@link escrow.ReleaseEscrowMsg.verify|verify} messages.
         * @function encode
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {escrow.IReleaseEscrowMsg} message ReleaseEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseEscrowMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.escrowId);
            if (message.amount != null && message.amount.length)
                for (var i = 0; i < message.amount.length; ++i)
                    $root.coin.Coin.encode(message.amount[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReleaseEscrowMsg message, length delimited. Does not implicitly {@link escrow.ReleaseEscrowMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {escrow.IReleaseEscrowMsg} message ReleaseEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseEscrowMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReleaseEscrowMsg message from the specified reader or buffer.
         * @function decode
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {escrow.ReleaseEscrowMsg} ReleaseEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseEscrowMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.escrow.ReleaseEscrowMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.escrowId = reader.bytes();
                    break;
                case 2:
                    if (!(message.amount && message.amount.length))
                        message.amount = [];
                    message.amount.push($root.coin.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReleaseEscrowMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {escrow.ReleaseEscrowMsg} ReleaseEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseEscrowMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReleaseEscrowMsg message.
         * @function verify
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReleaseEscrowMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                if (!(message.escrowId && typeof message.escrowId.length === "number" || $util.isString(message.escrowId)))
                    return "escrowId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount")) {
                if (!Array.isArray(message.amount))
                    return "amount: array expected";
                for (var i = 0; i < message.amount.length; ++i) {
                    var error = $root.coin.Coin.verify(message.amount[i]);
                    if (error)
                        return "amount." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReleaseEscrowMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {escrow.ReleaseEscrowMsg} ReleaseEscrowMsg
         */
        ReleaseEscrowMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.escrow.ReleaseEscrowMsg)
                return object;
            var message = new $root.escrow.ReleaseEscrowMsg();
            if (object.escrowId != null)
                if (typeof object.escrowId === "string")
                    $util.base64.decode(object.escrowId, message.escrowId = $util.newBuffer($util.base64.length(object.escrowId)), 0);
                else if (object.escrowId.length)
                    message.escrowId = object.escrowId;
            if (object.amount) {
                if (!Array.isArray(object.amount))
                    throw TypeError(".escrow.ReleaseEscrowMsg.amount: array expected");
                message.amount = [];
                for (var i = 0; i < object.amount.length; ++i) {
                    if (typeof object.amount[i] !== "object")
                        throw TypeError(".escrow.ReleaseEscrowMsg.amount: object expected");
                    message.amount[i] = $root.coin.Coin.fromObject(object.amount[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReleaseEscrowMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof escrow.ReleaseEscrowMsg
         * @static
         * @param {escrow.ReleaseEscrowMsg} message ReleaseEscrowMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReleaseEscrowMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.amount = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.escrowId = "";
                else {
                    object.escrowId = [];
                    if (options.bytes !== Array)
                        object.escrowId = $util.newBuffer(object.escrowId);
                }
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                object.escrowId = options.bytes === String ? $util.base64.encode(message.escrowId, 0, message.escrowId.length) : options.bytes === Array ? Array.prototype.slice.call(message.escrowId) : message.escrowId;
            if (message.amount && message.amount.length) {
                object.amount = [];
                for (var j = 0; j < message.amount.length; ++j)
                    object.amount[j] = $root.coin.Coin.toObject(message.amount[j], options);
            }
            return object;
        };

        /**
         * Converts this ReleaseEscrowMsg to JSON.
         * @function toJSON
         * @memberof escrow.ReleaseEscrowMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReleaseEscrowMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReleaseEscrowMsg;
    })();

    escrow.ReturnEscrowMsg = (function() {

        /**
         * Properties of a ReturnEscrowMsg.
         * @memberof escrow
         * @interface IReturnEscrowMsg
         * @property {Uint8Array|null} [escrowId] ReturnEscrowMsg escrowId
         */

        /**
         * Constructs a new ReturnEscrowMsg.
         * @memberof escrow
         * @classdesc Must be authorized by the sender or an expired timeout
         * @implements IReturnEscrowMsg
         * @constructor
         * @param {escrow.IReturnEscrowMsg=} [properties] Properties to set
         */
        function ReturnEscrowMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReturnEscrowMsg escrowId.
         * @member {Uint8Array} escrowId
         * @memberof escrow.ReturnEscrowMsg
         * @instance
         */
        ReturnEscrowMsg.prototype.escrowId = $util.newBuffer([]);

        /**
         * Creates a new ReturnEscrowMsg instance using the specified properties.
         * @function create
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {escrow.IReturnEscrowMsg=} [properties] Properties to set
         * @returns {escrow.ReturnEscrowMsg} ReturnEscrowMsg instance
         */
        ReturnEscrowMsg.create = function create(properties) {
            return new ReturnEscrowMsg(properties);
        };

        /**
         * Encodes the specified ReturnEscrowMsg message. Does not implicitly {@link escrow.ReturnEscrowMsg.verify|verify} messages.
         * @function encode
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {escrow.IReturnEscrowMsg} message ReturnEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReturnEscrowMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.escrowId);
            return writer;
        };

        /**
         * Encodes the specified ReturnEscrowMsg message, length delimited. Does not implicitly {@link escrow.ReturnEscrowMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {escrow.IReturnEscrowMsg} message ReturnEscrowMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReturnEscrowMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReturnEscrowMsg message from the specified reader or buffer.
         * @function decode
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {escrow.ReturnEscrowMsg} ReturnEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReturnEscrowMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.escrow.ReturnEscrowMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.escrowId = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReturnEscrowMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {escrow.ReturnEscrowMsg} ReturnEscrowMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReturnEscrowMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReturnEscrowMsg message.
         * @function verify
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReturnEscrowMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                if (!(message.escrowId && typeof message.escrowId.length === "number" || $util.isString(message.escrowId)))
                    return "escrowId: buffer expected";
            return null;
        };

        /**
         * Creates a ReturnEscrowMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {escrow.ReturnEscrowMsg} ReturnEscrowMsg
         */
        ReturnEscrowMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.escrow.ReturnEscrowMsg)
                return object;
            var message = new $root.escrow.ReturnEscrowMsg();
            if (object.escrowId != null)
                if (typeof object.escrowId === "string")
                    $util.base64.decode(object.escrowId, message.escrowId = $util.newBuffer($util.base64.length(object.escrowId)), 0);
                else if (object.escrowId.length)
                    message.escrowId = object.escrowId;
            return message;
        };

        /**
         * Creates a plain object from a ReturnEscrowMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof escrow.ReturnEscrowMsg
         * @static
         * @param {escrow.ReturnEscrowMsg} message ReturnEscrowMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReturnEscrowMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.escrowId = "";
                else {
                    object.escrowId = [];
                    if (options.bytes !== Array)
                        object.escrowId = $util.newBuffer(object.escrowId);
                }
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                object.escrowId = options.bytes === String ? $util.base64.encode(message.escrowId, 0, message.escrowId.length) : options.bytes === Array ? Array.prototype.slice.call(message.escrowId) : message.escrowId;
            return object;
        };

        /**
         * Converts this ReturnEscrowMsg to JSON.
         * @function toJSON
         * @memberof escrow.ReturnEscrowMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReturnEscrowMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReturnEscrowMsg;
    })();

    escrow.UpdateEscrowPartiesMsg = (function() {

        /**
         * Properties of an UpdateEscrowPartiesMsg.
         * @memberof escrow
         * @interface IUpdateEscrowPartiesMsg
         * @property {Uint8Array|null} [escrowId] UpdateEscrowPartiesMsg escrowId
         * @property {Uint8Array|null} [sender] UpdateEscrowPartiesMsg sender
         * @property {Uint8Array|null} [arbiter] UpdateEscrowPartiesMsg arbiter
         * @property {Uint8Array|null} [recipient] UpdateEscrowPartiesMsg recipient
         */

        /**
         * Constructs a new UpdateEscrowPartiesMsg.
         * @memberof escrow
         * @classdesc Represents delegating responsibility
         * @implements IUpdateEscrowPartiesMsg
         * @constructor
         * @param {escrow.IUpdateEscrowPartiesMsg=} [properties] Properties to set
         */
        function UpdateEscrowPartiesMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateEscrowPartiesMsg escrowId.
         * @member {Uint8Array} escrowId
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @instance
         */
        UpdateEscrowPartiesMsg.prototype.escrowId = $util.newBuffer([]);

        /**
         * UpdateEscrowPartiesMsg sender.
         * @member {Uint8Array} sender
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @instance
         */
        UpdateEscrowPartiesMsg.prototype.sender = $util.newBuffer([]);

        /**
         * UpdateEscrowPartiesMsg arbiter.
         * @member {Uint8Array} arbiter
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @instance
         */
        UpdateEscrowPartiesMsg.prototype.arbiter = $util.newBuffer([]);

        /**
         * UpdateEscrowPartiesMsg recipient.
         * @member {Uint8Array} recipient
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @instance
         */
        UpdateEscrowPartiesMsg.prototype.recipient = $util.newBuffer([]);

        /**
         * Creates a new UpdateEscrowPartiesMsg instance using the specified properties.
         * @function create
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {escrow.IUpdateEscrowPartiesMsg=} [properties] Properties to set
         * @returns {escrow.UpdateEscrowPartiesMsg} UpdateEscrowPartiesMsg instance
         */
        UpdateEscrowPartiesMsg.create = function create(properties) {
            return new UpdateEscrowPartiesMsg(properties);
        };

        /**
         * Encodes the specified UpdateEscrowPartiesMsg message. Does not implicitly {@link escrow.UpdateEscrowPartiesMsg.verify|verify} messages.
         * @function encode
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {escrow.IUpdateEscrowPartiesMsg} message UpdateEscrowPartiesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEscrowPartiesMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.escrowId);
            if (message.sender != null && message.hasOwnProperty("sender"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sender);
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.arbiter);
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.recipient);
            return writer;
        };

        /**
         * Encodes the specified UpdateEscrowPartiesMsg message, length delimited. Does not implicitly {@link escrow.UpdateEscrowPartiesMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {escrow.IUpdateEscrowPartiesMsg} message UpdateEscrowPartiesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateEscrowPartiesMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateEscrowPartiesMsg message from the specified reader or buffer.
         * @function decode
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {escrow.UpdateEscrowPartiesMsg} UpdateEscrowPartiesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEscrowPartiesMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.escrow.UpdateEscrowPartiesMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.escrowId = reader.bytes();
                    break;
                case 2:
                    message.sender = reader.bytes();
                    break;
                case 3:
                    message.arbiter = reader.bytes();
                    break;
                case 4:
                    message.recipient = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateEscrowPartiesMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {escrow.UpdateEscrowPartiesMsg} UpdateEscrowPartiesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateEscrowPartiesMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateEscrowPartiesMsg message.
         * @function verify
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateEscrowPartiesMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                if (!(message.escrowId && typeof message.escrowId.length === "number" || $util.isString(message.escrowId)))
                    return "escrowId: buffer expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!(message.sender && typeof message.sender.length === "number" || $util.isString(message.sender)))
                    return "sender: buffer expected";
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                if (!(message.arbiter && typeof message.arbiter.length === "number" || $util.isString(message.arbiter)))
                    return "arbiter: buffer expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            return null;
        };

        /**
         * Creates an UpdateEscrowPartiesMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {escrow.UpdateEscrowPartiesMsg} UpdateEscrowPartiesMsg
         */
        UpdateEscrowPartiesMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.escrow.UpdateEscrowPartiesMsg)
                return object;
            var message = new $root.escrow.UpdateEscrowPartiesMsg();
            if (object.escrowId != null)
                if (typeof object.escrowId === "string")
                    $util.base64.decode(object.escrowId, message.escrowId = $util.newBuffer($util.base64.length(object.escrowId)), 0);
                else if (object.escrowId.length)
                    message.escrowId = object.escrowId;
            if (object.sender != null)
                if (typeof object.sender === "string")
                    $util.base64.decode(object.sender, message.sender = $util.newBuffer($util.base64.length(object.sender)), 0);
                else if (object.sender.length)
                    message.sender = object.sender;
            if (object.arbiter != null)
                if (typeof object.arbiter === "string")
                    $util.base64.decode(object.arbiter, message.arbiter = $util.newBuffer($util.base64.length(object.arbiter)), 0);
                else if (object.arbiter.length)
                    message.arbiter = object.arbiter;
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            return message;
        };

        /**
         * Creates a plain object from an UpdateEscrowPartiesMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @static
         * @param {escrow.UpdateEscrowPartiesMsg} message UpdateEscrowPartiesMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateEscrowPartiesMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.escrowId = "";
                else {
                    object.escrowId = [];
                    if (options.bytes !== Array)
                        object.escrowId = $util.newBuffer(object.escrowId);
                }
                if (options.bytes === String)
                    object.sender = "";
                else {
                    object.sender = [];
                    if (options.bytes !== Array)
                        object.sender = $util.newBuffer(object.sender);
                }
                if (options.bytes === String)
                    object.arbiter = "";
                else {
                    object.arbiter = [];
                    if (options.bytes !== Array)
                        object.arbiter = $util.newBuffer(object.arbiter);
                }
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
            }
            if (message.escrowId != null && message.hasOwnProperty("escrowId"))
                object.escrowId = options.bytes === String ? $util.base64.encode(message.escrowId, 0, message.escrowId.length) : options.bytes === Array ? Array.prototype.slice.call(message.escrowId) : message.escrowId;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = options.bytes === String ? $util.base64.encode(message.sender, 0, message.sender.length) : options.bytes === Array ? Array.prototype.slice.call(message.sender) : message.sender;
            if (message.arbiter != null && message.hasOwnProperty("arbiter"))
                object.arbiter = options.bytes === String ? $util.base64.encode(message.arbiter, 0, message.arbiter.length) : options.bytes === Array ? Array.prototype.slice.call(message.arbiter) : message.arbiter;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            return object;
        };

        /**
         * Converts this UpdateEscrowPartiesMsg to JSON.
         * @function toJSON
         * @memberof escrow.UpdateEscrowPartiesMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateEscrowPartiesMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateEscrowPartiesMsg;
    })();

    return escrow;
})();

$root.msgfee = (function() {

    /**
     * Namespace msgfee.
     * @exports msgfee
     * @namespace
     */
    var msgfee = {};

    msgfee.MsgFee = (function() {

        /**
         * Properties of a MsgFee.
         * @memberof msgfee
         * @interface IMsgFee
         * @property {string|null} [msgPath] MsgFee msgPath
         * @property {coin.ICoin|null} [fee] MsgFee fee
         */

        /**
         * Constructs a new MsgFee.
         * @memberof msgfee
         * @classdesc the message to be processed.
         * @implements IMsgFee
         * @constructor
         * @param {msgfee.IMsgFee=} [properties] Properties to set
         */
        function MsgFee(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgFee msgPath.
         * @member {string} msgPath
         * @memberof msgfee.MsgFee
         * @instance
         */
        MsgFee.prototype.msgPath = "";

        /**
         * MsgFee fee.
         * @member {coin.ICoin|null|undefined} fee
         * @memberof msgfee.MsgFee
         * @instance
         */
        MsgFee.prototype.fee = null;

        /**
         * Creates a new MsgFee instance using the specified properties.
         * @function create
         * @memberof msgfee.MsgFee
         * @static
         * @param {msgfee.IMsgFee=} [properties] Properties to set
         * @returns {msgfee.MsgFee} MsgFee instance
         */
        MsgFee.create = function create(properties) {
            return new MsgFee(properties);
        };

        /**
         * Encodes the specified MsgFee message. Does not implicitly {@link msgfee.MsgFee.verify|verify} messages.
         * @function encode
         * @memberof msgfee.MsgFee
         * @static
         * @param {msgfee.IMsgFee} message MsgFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgPath != null && message.hasOwnProperty("msgPath"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgPath);
            if (message.fee != null && message.hasOwnProperty("fee"))
                $root.coin.Coin.encode(message.fee, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgFee message, length delimited. Does not implicitly {@link msgfee.MsgFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msgfee.MsgFee
         * @static
         * @param {msgfee.IMsgFee} message MsgFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgFee message from the specified reader or buffer.
         * @function decode
         * @memberof msgfee.MsgFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msgfee.MsgFee} MsgFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgFee.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msgfee.MsgFee();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgPath = reader.string();
                    break;
                case 2:
                    message.fee = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msgfee.MsgFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msgfee.MsgFee} MsgFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgFee message.
         * @function verify
         * @memberof msgfee.MsgFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgPath != null && message.hasOwnProperty("msgPath"))
                if (!$util.isString(message.msgPath))
                    return "msgPath: string expected";
            if (message.fee != null && message.hasOwnProperty("fee")) {
                var error = $root.coin.Coin.verify(message.fee);
                if (error)
                    return "fee." + error;
            }
            return null;
        };

        /**
         * Creates a MsgFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msgfee.MsgFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msgfee.MsgFee} MsgFee
         */
        MsgFee.fromObject = function fromObject(object) {
            if (object instanceof $root.msgfee.MsgFee)
                return object;
            var message = new $root.msgfee.MsgFee();
            if (object.msgPath != null)
                message.msgPath = String(object.msgPath);
            if (object.fee != null) {
                if (typeof object.fee !== "object")
                    throw TypeError(".msgfee.MsgFee.fee: object expected");
                message.fee = $root.coin.Coin.fromObject(object.fee);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msgfee.MsgFee
         * @static
         * @param {msgfee.MsgFee} message MsgFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgPath = "";
                object.fee = null;
            }
            if (message.msgPath != null && message.hasOwnProperty("msgPath"))
                object.msgPath = message.msgPath;
            if (message.fee != null && message.hasOwnProperty("fee"))
                object.fee = $root.coin.Coin.toObject(message.fee, options);
            return object;
        };

        /**
         * Converts this MsgFee to JSON.
         * @function toJSON
         * @memberof msgfee.MsgFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgFee;
    })();

    return msgfee;
})();

$root.multisig = (function() {

    /**
     * Namespace multisig.
     * @exports multisig
     * @namespace
     */
    var multisig = {};

    multisig.Contract = (function() {

        /**
         * Properties of a Contract.
         * @memberof multisig
         * @interface IContract
         * @property {Array.<Uint8Array>|null} [sigs] addresses to control it
         * @property {number|Long|null} [activationThreshold] threshold needed to sign to activate it
         * @property {number|Long|null} [adminThreshold] threshold needed to sign to change it
         */

        /**
         * Constructs a new Contract.
         * @memberof multisig
         * @classdesc Represents a Contract.
         * @implements IContract
         * @constructor
         * @param {multisig.IContract=} [properties] Properties to set
         */
        function Contract(properties) {
            this.sigs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * addresses to control it
         * @member {Array.<Uint8Array>} sigs
         * @memberof multisig.Contract
         * @instance
         */
        Contract.prototype.sigs = $util.emptyArray;

        /**
         * threshold needed to sign to activate it
         * @member {number|Long} activationThreshold
         * @memberof multisig.Contract
         * @instance
         */
        Contract.prototype.activationThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * threshold needed to sign to change it
         * @member {number|Long} adminThreshold
         * @memberof multisig.Contract
         * @instance
         */
        Contract.prototype.adminThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Contract instance using the specified properties.
         * @function create
         * @memberof multisig.Contract
         * @static
         * @param {multisig.IContract=} [properties] Properties to set
         * @returns {multisig.Contract} Contract instance
         */
        Contract.create = function create(properties) {
            return new Contract(properties);
        };

        /**
         * Encodes the specified Contract message. Does not implicitly {@link multisig.Contract.verify|verify} messages.
         * @function encode
         * @memberof multisig.Contract
         * @static
         * @param {multisig.IContract} message Contract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contract.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sigs != null && message.sigs.length)
                for (var i = 0; i < message.sigs.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sigs[i]);
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.activationThreshold);
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.adminThreshold);
            return writer;
        };

        /**
         * Encodes the specified Contract message, length delimited. Does not implicitly {@link multisig.Contract.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multisig.Contract
         * @static
         * @param {multisig.IContract} message Contract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contract.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Contract message from the specified reader or buffer.
         * @function decode
         * @memberof multisig.Contract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multisig.Contract} Contract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contract.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multisig.Contract();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sigs && message.sigs.length))
                        message.sigs = [];
                    message.sigs.push(reader.bytes());
                    break;
                case 2:
                    message.activationThreshold = reader.int64();
                    break;
                case 3:
                    message.adminThreshold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Contract message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multisig.Contract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multisig.Contract} Contract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contract.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Contract message.
         * @function verify
         * @memberof multisig.Contract
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Contract.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sigs != null && message.hasOwnProperty("sigs")) {
                if (!Array.isArray(message.sigs))
                    return "sigs: array expected";
                for (var i = 0; i < message.sigs.length; ++i)
                    if (!(message.sigs[i] && typeof message.sigs[i].length === "number" || $util.isString(message.sigs[i])))
                        return "sigs: buffer[] expected";
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (!$util.isInteger(message.activationThreshold) && !(message.activationThreshold && $util.isInteger(message.activationThreshold.low) && $util.isInteger(message.activationThreshold.high)))
                    return "activationThreshold: integer|Long expected";
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (!$util.isInteger(message.adminThreshold) && !(message.adminThreshold && $util.isInteger(message.adminThreshold.low) && $util.isInteger(message.adminThreshold.high)))
                    return "adminThreshold: integer|Long expected";
            return null;
        };

        /**
         * Creates a Contract message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multisig.Contract
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multisig.Contract} Contract
         */
        Contract.fromObject = function fromObject(object) {
            if (object instanceof $root.multisig.Contract)
                return object;
            var message = new $root.multisig.Contract();
            if (object.sigs) {
                if (!Array.isArray(object.sigs))
                    throw TypeError(".multisig.Contract.sigs: array expected");
                message.sigs = [];
                for (var i = 0; i < object.sigs.length; ++i)
                    if (typeof object.sigs[i] === "string")
                        $util.base64.decode(object.sigs[i], message.sigs[i] = $util.newBuffer($util.base64.length(object.sigs[i])), 0);
                    else if (object.sigs[i].length)
                        message.sigs[i] = object.sigs[i];
            }
            if (object.activationThreshold != null)
                if ($util.Long)
                    (message.activationThreshold = $util.Long.fromValue(object.activationThreshold)).unsigned = false;
                else if (typeof object.activationThreshold === "string")
                    message.activationThreshold = parseInt(object.activationThreshold, 10);
                else if (typeof object.activationThreshold === "number")
                    message.activationThreshold = object.activationThreshold;
                else if (typeof object.activationThreshold === "object")
                    message.activationThreshold = new $util.LongBits(object.activationThreshold.low >>> 0, object.activationThreshold.high >>> 0).toNumber();
            if (object.adminThreshold != null)
                if ($util.Long)
                    (message.adminThreshold = $util.Long.fromValue(object.adminThreshold)).unsigned = false;
                else if (typeof object.adminThreshold === "string")
                    message.adminThreshold = parseInt(object.adminThreshold, 10);
                else if (typeof object.adminThreshold === "number")
                    message.adminThreshold = object.adminThreshold;
                else if (typeof object.adminThreshold === "object")
                    message.adminThreshold = new $util.LongBits(object.adminThreshold.low >>> 0, object.adminThreshold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Contract message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multisig.Contract
         * @static
         * @param {multisig.Contract} message Contract
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Contract.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sigs = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.activationThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activationThreshold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.adminThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.adminThreshold = options.longs === String ? "0" : 0;
            }
            if (message.sigs && message.sigs.length) {
                object.sigs = [];
                for (var j = 0; j < message.sigs.length; ++j)
                    object.sigs[j] = options.bytes === String ? $util.base64.encode(message.sigs[j], 0, message.sigs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.sigs[j]) : message.sigs[j];
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (typeof message.activationThreshold === "number")
                    object.activationThreshold = options.longs === String ? String(message.activationThreshold) : message.activationThreshold;
                else
                    object.activationThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.activationThreshold) : options.longs === Number ? new $util.LongBits(message.activationThreshold.low >>> 0, message.activationThreshold.high >>> 0).toNumber() : message.activationThreshold;
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (typeof message.adminThreshold === "number")
                    object.adminThreshold = options.longs === String ? String(message.adminThreshold) : message.adminThreshold;
                else
                    object.adminThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.adminThreshold) : options.longs === Number ? new $util.LongBits(message.adminThreshold.low >>> 0, message.adminThreshold.high >>> 0).toNumber() : message.adminThreshold;
            return object;
        };

        /**
         * Converts this Contract to JSON.
         * @function toJSON
         * @memberof multisig.Contract
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Contract.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Contract;
    })();

    multisig.CreateContractMsg = (function() {

        /**
         * Properties of a CreateContractMsg.
         * @memberof multisig
         * @interface ICreateContractMsg
         * @property {Array.<Uint8Array>|null} [sigs] addresses to control it
         * @property {number|Long|null} [activationThreshold] threshold needed to sign to activate it
         * @property {number|Long|null} [adminThreshold] threshold needed to sign to change it
         */

        /**
         * Constructs a new CreateContractMsg.
         * @memberof multisig
         * @classdesc Represents a CreateContractMsg.
         * @implements ICreateContractMsg
         * @constructor
         * @param {multisig.ICreateContractMsg=} [properties] Properties to set
         */
        function CreateContractMsg(properties) {
            this.sigs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * addresses to control it
         * @member {Array.<Uint8Array>} sigs
         * @memberof multisig.CreateContractMsg
         * @instance
         */
        CreateContractMsg.prototype.sigs = $util.emptyArray;

        /**
         * threshold needed to sign to activate it
         * @member {number|Long} activationThreshold
         * @memberof multisig.CreateContractMsg
         * @instance
         */
        CreateContractMsg.prototype.activationThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * threshold needed to sign to change it
         * @member {number|Long} adminThreshold
         * @memberof multisig.CreateContractMsg
         * @instance
         */
        CreateContractMsg.prototype.adminThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CreateContractMsg instance using the specified properties.
         * @function create
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {multisig.ICreateContractMsg=} [properties] Properties to set
         * @returns {multisig.CreateContractMsg} CreateContractMsg instance
         */
        CreateContractMsg.create = function create(properties) {
            return new CreateContractMsg(properties);
        };

        /**
         * Encodes the specified CreateContractMsg message. Does not implicitly {@link multisig.CreateContractMsg.verify|verify} messages.
         * @function encode
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {multisig.ICreateContractMsg} message CreateContractMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContractMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sigs != null && message.sigs.length)
                for (var i = 0; i < message.sigs.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sigs[i]);
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.activationThreshold);
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.adminThreshold);
            return writer;
        };

        /**
         * Encodes the specified CreateContractMsg message, length delimited. Does not implicitly {@link multisig.CreateContractMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {multisig.ICreateContractMsg} message CreateContractMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContractMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateContractMsg message from the specified reader or buffer.
         * @function decode
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multisig.CreateContractMsg} CreateContractMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContractMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multisig.CreateContractMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sigs && message.sigs.length))
                        message.sigs = [];
                    message.sigs.push(reader.bytes());
                    break;
                case 2:
                    message.activationThreshold = reader.int64();
                    break;
                case 3:
                    message.adminThreshold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateContractMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multisig.CreateContractMsg} CreateContractMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContractMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateContractMsg message.
         * @function verify
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateContractMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sigs != null && message.hasOwnProperty("sigs")) {
                if (!Array.isArray(message.sigs))
                    return "sigs: array expected";
                for (var i = 0; i < message.sigs.length; ++i)
                    if (!(message.sigs[i] && typeof message.sigs[i].length === "number" || $util.isString(message.sigs[i])))
                        return "sigs: buffer[] expected";
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (!$util.isInteger(message.activationThreshold) && !(message.activationThreshold && $util.isInteger(message.activationThreshold.low) && $util.isInteger(message.activationThreshold.high)))
                    return "activationThreshold: integer|Long expected";
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (!$util.isInteger(message.adminThreshold) && !(message.adminThreshold && $util.isInteger(message.adminThreshold.low) && $util.isInteger(message.adminThreshold.high)))
                    return "adminThreshold: integer|Long expected";
            return null;
        };

        /**
         * Creates a CreateContractMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multisig.CreateContractMsg} CreateContractMsg
         */
        CreateContractMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.multisig.CreateContractMsg)
                return object;
            var message = new $root.multisig.CreateContractMsg();
            if (object.sigs) {
                if (!Array.isArray(object.sigs))
                    throw TypeError(".multisig.CreateContractMsg.sigs: array expected");
                message.sigs = [];
                for (var i = 0; i < object.sigs.length; ++i)
                    if (typeof object.sigs[i] === "string")
                        $util.base64.decode(object.sigs[i], message.sigs[i] = $util.newBuffer($util.base64.length(object.sigs[i])), 0);
                    else if (object.sigs[i].length)
                        message.sigs[i] = object.sigs[i];
            }
            if (object.activationThreshold != null)
                if ($util.Long)
                    (message.activationThreshold = $util.Long.fromValue(object.activationThreshold)).unsigned = false;
                else if (typeof object.activationThreshold === "string")
                    message.activationThreshold = parseInt(object.activationThreshold, 10);
                else if (typeof object.activationThreshold === "number")
                    message.activationThreshold = object.activationThreshold;
                else if (typeof object.activationThreshold === "object")
                    message.activationThreshold = new $util.LongBits(object.activationThreshold.low >>> 0, object.activationThreshold.high >>> 0).toNumber();
            if (object.adminThreshold != null)
                if ($util.Long)
                    (message.adminThreshold = $util.Long.fromValue(object.adminThreshold)).unsigned = false;
                else if (typeof object.adminThreshold === "string")
                    message.adminThreshold = parseInt(object.adminThreshold, 10);
                else if (typeof object.adminThreshold === "number")
                    message.adminThreshold = object.adminThreshold;
                else if (typeof object.adminThreshold === "object")
                    message.adminThreshold = new $util.LongBits(object.adminThreshold.low >>> 0, object.adminThreshold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CreateContractMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multisig.CreateContractMsg
         * @static
         * @param {multisig.CreateContractMsg} message CreateContractMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateContractMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sigs = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.activationThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activationThreshold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.adminThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.adminThreshold = options.longs === String ? "0" : 0;
            }
            if (message.sigs && message.sigs.length) {
                object.sigs = [];
                for (var j = 0; j < message.sigs.length; ++j)
                    object.sigs[j] = options.bytes === String ? $util.base64.encode(message.sigs[j], 0, message.sigs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.sigs[j]) : message.sigs[j];
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (typeof message.activationThreshold === "number")
                    object.activationThreshold = options.longs === String ? String(message.activationThreshold) : message.activationThreshold;
                else
                    object.activationThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.activationThreshold) : options.longs === Number ? new $util.LongBits(message.activationThreshold.low >>> 0, message.activationThreshold.high >>> 0).toNumber() : message.activationThreshold;
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (typeof message.adminThreshold === "number")
                    object.adminThreshold = options.longs === String ? String(message.adminThreshold) : message.adminThreshold;
                else
                    object.adminThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.adminThreshold) : options.longs === Number ? new $util.LongBits(message.adminThreshold.low >>> 0, message.adminThreshold.high >>> 0).toNumber() : message.adminThreshold;
            return object;
        };

        /**
         * Converts this CreateContractMsg to JSON.
         * @function toJSON
         * @memberof multisig.CreateContractMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateContractMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateContractMsg;
    })();

    multisig.UpdateContractMsg = (function() {

        /**
         * Properties of an UpdateContractMsg.
         * @memberof multisig
         * @interface IUpdateContractMsg
         * @property {Uint8Array|null} [id] contract id
         * @property {Array.<Uint8Array>|null} [sigs] addresses to control it
         * @property {number|Long|null} [activationThreshold] threshold needed to sign to activate it
         * @property {number|Long|null} [adminThreshold] threshold needed to sign to change it
         */

        /**
         * Constructs a new UpdateContractMsg.
         * @memberof multisig
         * @classdesc Represents an UpdateContractMsg.
         * @implements IUpdateContractMsg
         * @constructor
         * @param {multisig.IUpdateContractMsg=} [properties] Properties to set
         */
        function UpdateContractMsg(properties) {
            this.sigs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * contract id
         * @member {Uint8Array} id
         * @memberof multisig.UpdateContractMsg
         * @instance
         */
        UpdateContractMsg.prototype.id = $util.newBuffer([]);

        /**
         * addresses to control it
         * @member {Array.<Uint8Array>} sigs
         * @memberof multisig.UpdateContractMsg
         * @instance
         */
        UpdateContractMsg.prototype.sigs = $util.emptyArray;

        /**
         * threshold needed to sign to activate it
         * @member {number|Long} activationThreshold
         * @memberof multisig.UpdateContractMsg
         * @instance
         */
        UpdateContractMsg.prototype.activationThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * threshold needed to sign to change it
         * @member {number|Long} adminThreshold
         * @memberof multisig.UpdateContractMsg
         * @instance
         */
        UpdateContractMsg.prototype.adminThreshold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateContractMsg instance using the specified properties.
         * @function create
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {multisig.IUpdateContractMsg=} [properties] Properties to set
         * @returns {multisig.UpdateContractMsg} UpdateContractMsg instance
         */
        UpdateContractMsg.create = function create(properties) {
            return new UpdateContractMsg(properties);
        };

        /**
         * Encodes the specified UpdateContractMsg message. Does not implicitly {@link multisig.UpdateContractMsg.verify|verify} messages.
         * @function encode
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {multisig.IUpdateContractMsg} message UpdateContractMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateContractMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.sigs != null && message.sigs.length)
                for (var i = 0; i < message.sigs.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.sigs[i]);
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.activationThreshold);
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.adminThreshold);
            return writer;
        };

        /**
         * Encodes the specified UpdateContractMsg message, length delimited. Does not implicitly {@link multisig.UpdateContractMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {multisig.IUpdateContractMsg} message UpdateContractMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateContractMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateContractMsg message from the specified reader or buffer.
         * @function decode
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {multisig.UpdateContractMsg} UpdateContractMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateContractMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.multisig.UpdateContractMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    if (!(message.sigs && message.sigs.length))
                        message.sigs = [];
                    message.sigs.push(reader.bytes());
                    break;
                case 3:
                    message.activationThreshold = reader.int64();
                    break;
                case 4:
                    message.adminThreshold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateContractMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {multisig.UpdateContractMsg} UpdateContractMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateContractMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateContractMsg message.
         * @function verify
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateContractMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.sigs != null && message.hasOwnProperty("sigs")) {
                if (!Array.isArray(message.sigs))
                    return "sigs: array expected";
                for (var i = 0; i < message.sigs.length; ++i)
                    if (!(message.sigs[i] && typeof message.sigs[i].length === "number" || $util.isString(message.sigs[i])))
                        return "sigs: buffer[] expected";
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (!$util.isInteger(message.activationThreshold) && !(message.activationThreshold && $util.isInteger(message.activationThreshold.low) && $util.isInteger(message.activationThreshold.high)))
                    return "activationThreshold: integer|Long expected";
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (!$util.isInteger(message.adminThreshold) && !(message.adminThreshold && $util.isInteger(message.adminThreshold.low) && $util.isInteger(message.adminThreshold.high)))
                    return "adminThreshold: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateContractMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {multisig.UpdateContractMsg} UpdateContractMsg
         */
        UpdateContractMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.multisig.UpdateContractMsg)
                return object;
            var message = new $root.multisig.UpdateContractMsg();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.sigs) {
                if (!Array.isArray(object.sigs))
                    throw TypeError(".multisig.UpdateContractMsg.sigs: array expected");
                message.sigs = [];
                for (var i = 0; i < object.sigs.length; ++i)
                    if (typeof object.sigs[i] === "string")
                        $util.base64.decode(object.sigs[i], message.sigs[i] = $util.newBuffer($util.base64.length(object.sigs[i])), 0);
                    else if (object.sigs[i].length)
                        message.sigs[i] = object.sigs[i];
            }
            if (object.activationThreshold != null)
                if ($util.Long)
                    (message.activationThreshold = $util.Long.fromValue(object.activationThreshold)).unsigned = false;
                else if (typeof object.activationThreshold === "string")
                    message.activationThreshold = parseInt(object.activationThreshold, 10);
                else if (typeof object.activationThreshold === "number")
                    message.activationThreshold = object.activationThreshold;
                else if (typeof object.activationThreshold === "object")
                    message.activationThreshold = new $util.LongBits(object.activationThreshold.low >>> 0, object.activationThreshold.high >>> 0).toNumber();
            if (object.adminThreshold != null)
                if ($util.Long)
                    (message.adminThreshold = $util.Long.fromValue(object.adminThreshold)).unsigned = false;
                else if (typeof object.adminThreshold === "string")
                    message.adminThreshold = parseInt(object.adminThreshold, 10);
                else if (typeof object.adminThreshold === "number")
                    message.adminThreshold = object.adminThreshold;
                else if (typeof object.adminThreshold === "object")
                    message.adminThreshold = new $util.LongBits(object.adminThreshold.low >>> 0, object.adminThreshold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateContractMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof multisig.UpdateContractMsg
         * @static
         * @param {multisig.UpdateContractMsg} message UpdateContractMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateContractMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sigs = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.activationThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.activationThreshold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.adminThreshold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.adminThreshold = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.sigs && message.sigs.length) {
                object.sigs = [];
                for (var j = 0; j < message.sigs.length; ++j)
                    object.sigs[j] = options.bytes === String ? $util.base64.encode(message.sigs[j], 0, message.sigs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.sigs[j]) : message.sigs[j];
            }
            if (message.activationThreshold != null && message.hasOwnProperty("activationThreshold"))
                if (typeof message.activationThreshold === "number")
                    object.activationThreshold = options.longs === String ? String(message.activationThreshold) : message.activationThreshold;
                else
                    object.activationThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.activationThreshold) : options.longs === Number ? new $util.LongBits(message.activationThreshold.low >>> 0, message.activationThreshold.high >>> 0).toNumber() : message.activationThreshold;
            if (message.adminThreshold != null && message.hasOwnProperty("adminThreshold"))
                if (typeof message.adminThreshold === "number")
                    object.adminThreshold = options.longs === String ? String(message.adminThreshold) : message.adminThreshold;
                else
                    object.adminThreshold = options.longs === String ? $util.Long.prototype.toString.call(message.adminThreshold) : options.longs === Number ? new $util.LongBits(message.adminThreshold.low >>> 0, message.adminThreshold.high >>> 0).toNumber() : message.adminThreshold;
            return object;
        };

        /**
         * Converts this UpdateContractMsg to JSON.
         * @function toJSON
         * @memberof multisig.UpdateContractMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateContractMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateContractMsg;
    })();

    return multisig;
})();

$root.namecoin = (function() {

    /**
     * Namespace namecoin.
     * @exports namecoin
     * @namespace
     */
    var namecoin = {};

    namecoin.Wallet = (function() {

        /**
         * Properties of a Wallet.
         * @memberof namecoin
         * @interface IWallet
         * @property {Array.<coin.ICoin>|null} [coins] Wallet coins
         * @property {string|null} [name] Wallet name
         */

        /**
         * Constructs a new Wallet.
         * @memberof namecoin
         * @classdesc Wallet has a name and a set of coins
         * @implements IWallet
         * @constructor
         * @param {namecoin.IWallet=} [properties] Properties to set
         */
        function Wallet(properties) {
            this.coins = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Wallet coins.
         * @member {Array.<coin.ICoin>} coins
         * @memberof namecoin.Wallet
         * @instance
         */
        Wallet.prototype.coins = $util.emptyArray;

        /**
         * Wallet name.
         * @member {string} name
         * @memberof namecoin.Wallet
         * @instance
         */
        Wallet.prototype.name = "";

        /**
         * Creates a new Wallet instance using the specified properties.
         * @function create
         * @memberof namecoin.Wallet
         * @static
         * @param {namecoin.IWallet=} [properties] Properties to set
         * @returns {namecoin.Wallet} Wallet instance
         */
        Wallet.create = function create(properties) {
            return new Wallet(properties);
        };

        /**
         * Encodes the specified Wallet message. Does not implicitly {@link namecoin.Wallet.verify|verify} messages.
         * @function encode
         * @memberof namecoin.Wallet
         * @static
         * @param {namecoin.IWallet} message Wallet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wallet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coins != null && message.coins.length)
                for (var i = 0; i < message.coins.length; ++i)
                    $root.coin.Coin.encode(message.coins[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Wallet message, length delimited. Does not implicitly {@link namecoin.Wallet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof namecoin.Wallet
         * @static
         * @param {namecoin.IWallet} message Wallet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wallet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Wallet message from the specified reader or buffer.
         * @function decode
         * @memberof namecoin.Wallet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {namecoin.Wallet} Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wallet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.namecoin.Wallet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.coins && message.coins.length))
                        message.coins = [];
                    message.coins.push($root.coin.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Wallet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof namecoin.Wallet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {namecoin.Wallet} Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wallet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Wallet message.
         * @function verify
         * @memberof namecoin.Wallet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Wallet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coins != null && message.hasOwnProperty("coins")) {
                if (!Array.isArray(message.coins))
                    return "coins: array expected";
                for (var i = 0; i < message.coins.length; ++i) {
                    var error = $root.coin.Coin.verify(message.coins[i]);
                    if (error)
                        return "coins." + error;
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Wallet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof namecoin.Wallet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {namecoin.Wallet} Wallet
         */
        Wallet.fromObject = function fromObject(object) {
            if (object instanceof $root.namecoin.Wallet)
                return object;
            var message = new $root.namecoin.Wallet();
            if (object.coins) {
                if (!Array.isArray(object.coins))
                    throw TypeError(".namecoin.Wallet.coins: array expected");
                message.coins = [];
                for (var i = 0; i < object.coins.length; ++i) {
                    if (typeof object.coins[i] !== "object")
                        throw TypeError(".namecoin.Wallet.coins: object expected");
                    message.coins[i] = $root.coin.Coin.fromObject(object.coins[i]);
                }
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Wallet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof namecoin.Wallet
         * @static
         * @param {namecoin.Wallet} message Wallet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Wallet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.coins = [];
            if (options.defaults)
                object.name = "";
            if (message.coins && message.coins.length) {
                object.coins = [];
                for (var j = 0; j < message.coins.length; ++j)
                    object.coins[j] = $root.coin.Coin.toObject(message.coins[j], options);
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Wallet to JSON.
         * @function toJSON
         * @memberof namecoin.Wallet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Wallet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Wallet;
    })();

    namecoin.Token = (function() {

        /**
         * Properties of a Token.
         * @memberof namecoin
         * @interface IToken
         * @property {string|null} [name] Token name
         * @property {number|null} [sigFigs] Token sigFigs
         */

        /**
         * Constructs a new Token.
         * @memberof namecoin
         * @classdesc Token contains information about a registered currency
         * @implements IToken
         * @constructor
         * @param {namecoin.IToken=} [properties] Properties to set
         */
        function Token(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Token name.
         * @member {string} name
         * @memberof namecoin.Token
         * @instance
         */
        Token.prototype.name = "";

        /**
         * Token sigFigs.
         * @member {number} sigFigs
         * @memberof namecoin.Token
         * @instance
         */
        Token.prototype.sigFigs = 0;

        /**
         * Creates a new Token instance using the specified properties.
         * @function create
         * @memberof namecoin.Token
         * @static
         * @param {namecoin.IToken=} [properties] Properties to set
         * @returns {namecoin.Token} Token instance
         */
        Token.create = function create(properties) {
            return new Token(properties);
        };

        /**
         * Encodes the specified Token message. Does not implicitly {@link namecoin.Token.verify|verify} messages.
         * @function encode
         * @memberof namecoin.Token
         * @static
         * @param {namecoin.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sigFigs);
            return writer;
        };

        /**
         * Encodes the specified Token message, length delimited. Does not implicitly {@link namecoin.Token.verify|verify} messages.
         * @function encodeDelimited
         * @memberof namecoin.Token
         * @static
         * @param {namecoin.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Token message from the specified reader or buffer.
         * @function decode
         * @memberof namecoin.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {namecoin.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.namecoin.Token();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.sigFigs = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Token message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof namecoin.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {namecoin.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Token message.
         * @function verify
         * @memberof namecoin.Token
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Token.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                if (!$util.isInteger(message.sigFigs))
                    return "sigFigs: integer expected";
            return null;
        };

        /**
         * Creates a Token message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof namecoin.Token
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {namecoin.Token} Token
         */
        Token.fromObject = function fromObject(object) {
            if (object instanceof $root.namecoin.Token)
                return object;
            var message = new $root.namecoin.Token();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sigFigs != null)
                message.sigFigs = object.sigFigs | 0;
            return message;
        };

        /**
         * Creates a plain object from a Token message. Also converts values to other types if specified.
         * @function toObject
         * @memberof namecoin.Token
         * @static
         * @param {namecoin.Token} message Token
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Token.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.sigFigs = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                object.sigFigs = message.sigFigs;
            return object;
        };

        /**
         * Converts this Token to JSON.
         * @function toJSON
         * @memberof namecoin.Token
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Token.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Token;
    })();

    namecoin.NewTokenMsg = (function() {

        /**
         * Properties of a NewTokenMsg.
         * @memberof namecoin
         * @interface INewTokenMsg
         * @property {string|null} [ticker] NewTokenMsg ticker
         * @property {string|null} [name] NewTokenMsg name
         * @property {number|null} [sigFigs] NewTokenMsg sigFigs
         */

        /**
         * Constructs a new NewTokenMsg.
         * @memberof namecoin
         * @classdesc and should be limited to privledged users.
         * @implements INewTokenMsg
         * @constructor
         * @param {namecoin.INewTokenMsg=} [properties] Properties to set
         */
        function NewTokenMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewTokenMsg ticker.
         * @member {string} ticker
         * @memberof namecoin.NewTokenMsg
         * @instance
         */
        NewTokenMsg.prototype.ticker = "";

        /**
         * NewTokenMsg name.
         * @member {string} name
         * @memberof namecoin.NewTokenMsg
         * @instance
         */
        NewTokenMsg.prototype.name = "";

        /**
         * NewTokenMsg sigFigs.
         * @member {number} sigFigs
         * @memberof namecoin.NewTokenMsg
         * @instance
         */
        NewTokenMsg.prototype.sigFigs = 0;

        /**
         * Creates a new NewTokenMsg instance using the specified properties.
         * @function create
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {namecoin.INewTokenMsg=} [properties] Properties to set
         * @returns {namecoin.NewTokenMsg} NewTokenMsg instance
         */
        NewTokenMsg.create = function create(properties) {
            return new NewTokenMsg(properties);
        };

        /**
         * Encodes the specified NewTokenMsg message. Does not implicitly {@link namecoin.NewTokenMsg.verify|verify} messages.
         * @function encode
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {namecoin.INewTokenMsg} message NewTokenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTokenMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ticker);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sigFigs);
            return writer;
        };

        /**
         * Encodes the specified NewTokenMsg message, length delimited. Does not implicitly {@link namecoin.NewTokenMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {namecoin.INewTokenMsg} message NewTokenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewTokenMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewTokenMsg message from the specified reader or buffer.
         * @function decode
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {namecoin.NewTokenMsg} NewTokenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTokenMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.namecoin.NewTokenMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ticker = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.sigFigs = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewTokenMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {namecoin.NewTokenMsg} NewTokenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewTokenMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewTokenMsg message.
         * @function verify
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewTokenMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                if (!$util.isString(message.ticker))
                    return "ticker: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                if (!$util.isInteger(message.sigFigs))
                    return "sigFigs: integer expected";
            return null;
        };

        /**
         * Creates a NewTokenMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {namecoin.NewTokenMsg} NewTokenMsg
         */
        NewTokenMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.namecoin.NewTokenMsg)
                return object;
            var message = new $root.namecoin.NewTokenMsg();
            if (object.ticker != null)
                message.ticker = String(object.ticker);
            if (object.name != null)
                message.name = String(object.name);
            if (object.sigFigs != null)
                message.sigFigs = object.sigFigs | 0;
            return message;
        };

        /**
         * Creates a plain object from a NewTokenMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof namecoin.NewTokenMsg
         * @static
         * @param {namecoin.NewTokenMsg} message NewTokenMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewTokenMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ticker = "";
                object.name = "";
                object.sigFigs = 0;
            }
            if (message.ticker != null && message.hasOwnProperty("ticker"))
                object.ticker = message.ticker;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sigFigs != null && message.hasOwnProperty("sigFigs"))
                object.sigFigs = message.sigFigs;
            return object;
        };

        /**
         * Converts this NewTokenMsg to JSON.
         * @function toJSON
         * @memberof namecoin.NewTokenMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewTokenMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewTokenMsg;
    })();

    namecoin.SetWalletNameMsg = (function() {

        /**
         * Properties of a SetWalletNameMsg.
         * @memberof namecoin
         * @interface ISetWalletNameMsg
         * @property {Uint8Array|null} [address] SetWalletNameMsg address
         * @property {string|null} [name] SetWalletNameMsg name
         */

        /**
         * Constructs a new SetWalletNameMsg.
         * @memberof namecoin
         * @classdesc wallet. Can only be performed if the wallet name is empty.
         * @implements ISetWalletNameMsg
         * @constructor
         * @param {namecoin.ISetWalletNameMsg=} [properties] Properties to set
         */
        function SetWalletNameMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetWalletNameMsg address.
         * @member {Uint8Array} address
         * @memberof namecoin.SetWalletNameMsg
         * @instance
         */
        SetWalletNameMsg.prototype.address = $util.newBuffer([]);

        /**
         * SetWalletNameMsg name.
         * @member {string} name
         * @memberof namecoin.SetWalletNameMsg
         * @instance
         */
        SetWalletNameMsg.prototype.name = "";

        /**
         * Creates a new SetWalletNameMsg instance using the specified properties.
         * @function create
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {namecoin.ISetWalletNameMsg=} [properties] Properties to set
         * @returns {namecoin.SetWalletNameMsg} SetWalletNameMsg instance
         */
        SetWalletNameMsg.create = function create(properties) {
            return new SetWalletNameMsg(properties);
        };

        /**
         * Encodes the specified SetWalletNameMsg message. Does not implicitly {@link namecoin.SetWalletNameMsg.verify|verify} messages.
         * @function encode
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {namecoin.ISetWalletNameMsg} message SetWalletNameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetWalletNameMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified SetWalletNameMsg message, length delimited. Does not implicitly {@link namecoin.SetWalletNameMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {namecoin.ISetWalletNameMsg} message SetWalletNameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetWalletNameMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetWalletNameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {namecoin.SetWalletNameMsg} SetWalletNameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetWalletNameMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.namecoin.SetWalletNameMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetWalletNameMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {namecoin.SetWalletNameMsg} SetWalletNameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetWalletNameMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetWalletNameMsg message.
         * @function verify
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetWalletNameMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a SetWalletNameMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {namecoin.SetWalletNameMsg} SetWalletNameMsg
         */
        SetWalletNameMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.namecoin.SetWalletNameMsg)
                return object;
            var message = new $root.namecoin.SetWalletNameMsg();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a SetWalletNameMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof namecoin.SetWalletNameMsg
         * @static
         * @param {namecoin.SetWalletNameMsg} message SetWalletNameMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetWalletNameMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.name = "";
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this SetWalletNameMsg to JSON.
         * @function toJSON
         * @memberof namecoin.SetWalletNameMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetWalletNameMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetWalletNameMsg;
    })();

    return namecoin;
})();

$root.nft = (function() {

    /**
     * Namespace nft.
     * @exports nft
     * @namespace
     */
    var nft = {};

    nft.NonFungibleToken = (function() {

        /**
         * Properties of a NonFungibleToken.
         * @memberof nft
         * @interface INonFungibleToken
         * @property {Uint8Array|null} [id] ID is the address of this token.
         * @property {Uint8Array|null} [owner] Owner is the address of the token owner.
         * @property {Array.<nft.IActionApprovals>|null} [actionApprovals] succeed, all action approvals validation must pass.
         */

        /**
         * Constructs a new NonFungibleToken.
         * @memberof nft
         * @classdesc implementation. Usually it is the first attirbute called `base`.
         * @implements INonFungibleToken
         * @constructor
         * @param {nft.INonFungibleToken=} [properties] Properties to set
         */
        function NonFungibleToken(properties) {
            this.actionApprovals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ID is the address of this token.
         * @member {Uint8Array} id
         * @memberof nft.NonFungibleToken
         * @instance
         */
        NonFungibleToken.prototype.id = $util.newBuffer([]);

        /**
         * Owner is the address of the token owner.
         * @member {Uint8Array} owner
         * @memberof nft.NonFungibleToken
         * @instance
         */
        NonFungibleToken.prototype.owner = $util.newBuffer([]);

        /**
         * succeed, all action approvals validation must pass.
         * @member {Array.<nft.IActionApprovals>} actionApprovals
         * @memberof nft.NonFungibleToken
         * @instance
         */
        NonFungibleToken.prototype.actionApprovals = $util.emptyArray;

        /**
         * Creates a new NonFungibleToken instance using the specified properties.
         * @function create
         * @memberof nft.NonFungibleToken
         * @static
         * @param {nft.INonFungibleToken=} [properties] Properties to set
         * @returns {nft.NonFungibleToken} NonFungibleToken instance
         */
        NonFungibleToken.create = function create(properties) {
            return new NonFungibleToken(properties);
        };

        /**
         * Encodes the specified NonFungibleToken message. Does not implicitly {@link nft.NonFungibleToken.verify|verify} messages.
         * @function encode
         * @memberof nft.NonFungibleToken
         * @static
         * @param {nft.INonFungibleToken} message NonFungibleToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonFungibleToken.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.owner);
            if (message.actionApprovals != null && message.actionApprovals.length)
                for (var i = 0; i < message.actionApprovals.length; ++i)
                    $root.nft.ActionApprovals.encode(message.actionApprovals[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NonFungibleToken message, length delimited. Does not implicitly {@link nft.NonFungibleToken.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.NonFungibleToken
         * @static
         * @param {nft.INonFungibleToken} message NonFungibleToken message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonFungibleToken.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NonFungibleToken message from the specified reader or buffer.
         * @function decode
         * @memberof nft.NonFungibleToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.NonFungibleToken} NonFungibleToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonFungibleToken.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.NonFungibleToken();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.owner = reader.bytes();
                    break;
                case 3:
                    if (!(message.actionApprovals && message.actionApprovals.length))
                        message.actionApprovals = [];
                    message.actionApprovals.push($root.nft.ActionApprovals.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NonFungibleToken message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.NonFungibleToken
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.NonFungibleToken} NonFungibleToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonFungibleToken.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NonFungibleToken message.
         * @function verify
         * @memberof nft.NonFungibleToken
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NonFungibleToken.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!(message.owner && typeof message.owner.length === "number" || $util.isString(message.owner)))
                    return "owner: buffer expected";
            if (message.actionApprovals != null && message.hasOwnProperty("actionApprovals")) {
                if (!Array.isArray(message.actionApprovals))
                    return "actionApprovals: array expected";
                for (var i = 0; i < message.actionApprovals.length; ++i) {
                    var error = $root.nft.ActionApprovals.verify(message.actionApprovals[i]);
                    if (error)
                        return "actionApprovals." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NonFungibleToken message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.NonFungibleToken
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.NonFungibleToken} NonFungibleToken
         */
        NonFungibleToken.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.NonFungibleToken)
                return object;
            var message = new $root.nft.NonFungibleToken();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.owner != null)
                if (typeof object.owner === "string")
                    $util.base64.decode(object.owner, message.owner = $util.newBuffer($util.base64.length(object.owner)), 0);
                else if (object.owner.length)
                    message.owner = object.owner;
            if (object.actionApprovals) {
                if (!Array.isArray(object.actionApprovals))
                    throw TypeError(".nft.NonFungibleToken.actionApprovals: array expected");
                message.actionApprovals = [];
                for (var i = 0; i < object.actionApprovals.length; ++i) {
                    if (typeof object.actionApprovals[i] !== "object")
                        throw TypeError(".nft.NonFungibleToken.actionApprovals: object expected");
                    message.actionApprovals[i] = $root.nft.ActionApprovals.fromObject(object.actionApprovals[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NonFungibleToken message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.NonFungibleToken
         * @static
         * @param {nft.NonFungibleToken} message NonFungibleToken
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NonFungibleToken.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.actionApprovals = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.owner = "";
                else {
                    object.owner = [];
                    if (options.bytes !== Array)
                        object.owner = $util.newBuffer(object.owner);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = options.bytes === String ? $util.base64.encode(message.owner, 0, message.owner.length) : options.bytes === Array ? Array.prototype.slice.call(message.owner) : message.owner;
            if (message.actionApprovals && message.actionApprovals.length) {
                object.actionApprovals = [];
                for (var j = 0; j < message.actionApprovals.length; ++j)
                    object.actionApprovals[j] = $root.nft.ActionApprovals.toObject(message.actionApprovals[j], options);
            }
            return object;
        };

        /**
         * Converts this NonFungibleToken to JSON.
         * @function toJSON
         * @memberof nft.NonFungibleToken
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NonFungibleToken.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NonFungibleToken;
    })();

    nft.ActionApprovals = (function() {

        /**
         * Properties of an ActionApprovals.
         * @memberof nft
         * @interface IActionApprovals
         * @property {string|null} [action] ActionApprovals action
         * @property {Array.<nft.IApproval>|null} [approvals] ActionApprovals approvals
         */

        /**
         * Constructs a new ActionApprovals.
         * @memberof nft
         * @classdesc execute given operation.
         * @implements IActionApprovals
         * @constructor
         * @param {nft.IActionApprovals=} [properties] Properties to set
         */
        function ActionApprovals(properties) {
            this.approvals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActionApprovals action.
         * @member {string} action
         * @memberof nft.ActionApprovals
         * @instance
         */
        ActionApprovals.prototype.action = "";

        /**
         * ActionApprovals approvals.
         * @member {Array.<nft.IApproval>} approvals
         * @memberof nft.ActionApprovals
         * @instance
         */
        ActionApprovals.prototype.approvals = $util.emptyArray;

        /**
         * Creates a new ActionApprovals instance using the specified properties.
         * @function create
         * @memberof nft.ActionApprovals
         * @static
         * @param {nft.IActionApprovals=} [properties] Properties to set
         * @returns {nft.ActionApprovals} ActionApprovals instance
         */
        ActionApprovals.create = function create(properties) {
            return new ActionApprovals(properties);
        };

        /**
         * Encodes the specified ActionApprovals message. Does not implicitly {@link nft.ActionApprovals.verify|verify} messages.
         * @function encode
         * @memberof nft.ActionApprovals
         * @static
         * @param {nft.IActionApprovals} message ActionApprovals message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionApprovals.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
            if (message.approvals != null && message.approvals.length)
                for (var i = 0; i < message.approvals.length; ++i)
                    $root.nft.Approval.encode(message.approvals[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActionApprovals message, length delimited. Does not implicitly {@link nft.ActionApprovals.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.ActionApprovals
         * @static
         * @param {nft.IActionApprovals} message ActionApprovals message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionApprovals.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActionApprovals message from the specified reader or buffer.
         * @function decode
         * @memberof nft.ActionApprovals
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.ActionApprovals} ActionApprovals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionApprovals.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.ActionApprovals();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.string();
                    break;
                case 2:
                    if (!(message.approvals && message.approvals.length))
                        message.approvals = [];
                    message.approvals.push($root.nft.Approval.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActionApprovals message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.ActionApprovals
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.ActionApprovals} ActionApprovals
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionApprovals.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActionApprovals message.
         * @function verify
         * @memberof nft.ActionApprovals
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionApprovals.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.approvals != null && message.hasOwnProperty("approvals")) {
                if (!Array.isArray(message.approvals))
                    return "approvals: array expected";
                for (var i = 0; i < message.approvals.length; ++i) {
                    var error = $root.nft.Approval.verify(message.approvals[i]);
                    if (error)
                        return "approvals." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ActionApprovals message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.ActionApprovals
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.ActionApprovals} ActionApprovals
         */
        ActionApprovals.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.ActionApprovals)
                return object;
            var message = new $root.nft.ActionApprovals();
            if (object.action != null)
                message.action = String(object.action);
            if (object.approvals) {
                if (!Array.isArray(object.approvals))
                    throw TypeError(".nft.ActionApprovals.approvals: array expected");
                message.approvals = [];
                for (var i = 0; i < object.approvals.length; ++i) {
                    if (typeof object.approvals[i] !== "object")
                        throw TypeError(".nft.ActionApprovals.approvals: object expected");
                    message.approvals[i] = $root.nft.Approval.fromObject(object.approvals[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ActionApprovals message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.ActionApprovals
         * @static
         * @param {nft.ActionApprovals} message ActionApprovals
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActionApprovals.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.approvals = [];
            if (options.defaults)
                object.action = "";
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.approvals && message.approvals.length) {
                object.approvals = [];
                for (var j = 0; j < message.approvals.length; ++j)
                    object.approvals[j] = $root.nft.Approval.toObject(message.approvals[j], options);
            }
            return object;
        };

        /**
         * Converts this ActionApprovals to JSON.
         * @function toJSON
         * @memberof nft.ActionApprovals
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActionApprovals.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActionApprovals;
    })();

    nft.Approval = (function() {

        /**
         * Properties of an Approval.
         * @memberof nft
         * @interface IApproval
         * @property {Uint8Array|null} [address] Approval address
         * @property {nft.IApprovalOptions|null} [options] Approval options
         */

        /**
         * Constructs a new Approval.
         * @memberof nft
         * @classdesc Represents an Approval.
         * @implements IApproval
         * @constructor
         * @param {nft.IApproval=} [properties] Properties to set
         */
        function Approval(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Approval address.
         * @member {Uint8Array} address
         * @memberof nft.Approval
         * @instance
         */
        Approval.prototype.address = $util.newBuffer([]);

        /**
         * Approval options.
         * @member {nft.IApprovalOptions|null|undefined} options
         * @memberof nft.Approval
         * @instance
         */
        Approval.prototype.options = null;

        /**
         * Creates a new Approval instance using the specified properties.
         * @function create
         * @memberof nft.Approval
         * @static
         * @param {nft.IApproval=} [properties] Properties to set
         * @returns {nft.Approval} Approval instance
         */
        Approval.create = function create(properties) {
            return new Approval(properties);
        };

        /**
         * Encodes the specified Approval message. Does not implicitly {@link nft.Approval.verify|verify} messages.
         * @function encode
         * @memberof nft.Approval
         * @static
         * @param {nft.IApproval} message Approval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Approval.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
            if (message.options != null && message.hasOwnProperty("options"))
                $root.nft.ApprovalOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Approval message, length delimited. Does not implicitly {@link nft.Approval.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.Approval
         * @static
         * @param {nft.IApproval} message Approval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Approval.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Approval message from the specified reader or buffer.
         * @function decode
         * @memberof nft.Approval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.Approval} Approval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Approval.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.Approval();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.options = $root.nft.ApprovalOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Approval message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.Approval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.Approval} Approval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Approval.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Approval message.
         * @function verify
         * @memberof nft.Approval
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Approval.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = $root.nft.ApprovalOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        };

        /**
         * Creates an Approval message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.Approval
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.Approval} Approval
         */
        Approval.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.Approval)
                return object;
            var message = new $root.nft.Approval();
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".nft.Approval.options: object expected");
                message.options = $root.nft.ApprovalOptions.fromObject(object.options);
            }
            return message;
        };

        /**
         * Creates a plain object from an Approval message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.Approval
         * @static
         * @param {nft.Approval} message Approval
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Approval.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.options = null;
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = $root.nft.ApprovalOptions.toObject(message.options, options);
            return object;
        };

        /**
         * Converts this Approval to JSON.
         * @function toJSON
         * @memberof nft.Approval
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Approval.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Approval;
    })();

    nft.ApprovalOptions = (function() {

        /**
         * Properties of an ApprovalOptions.
         * @memberof nft
         * @interface IApprovalOptions
         * @property {number|Long|null} [untilBlockHeight] approval is valid. This can be used to define an approval expiration.
         * @property {number|Long|null} [count] Use -1 to bypass count expiration.
         * @property {boolean|null} [immutable] changed.
         */

        /**
         * Constructs a new ApprovalOptions.
         * @memberof nft
         * @classdesc Represents an ApprovalOptions.
         * @implements IApprovalOptions
         * @constructor
         * @param {nft.IApprovalOptions=} [properties] Properties to set
         */
        function ApprovalOptions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * approval is valid. This can be used to define an approval expiration.
         * @member {number|Long} untilBlockHeight
         * @memberof nft.ApprovalOptions
         * @instance
         */
        ApprovalOptions.prototype.untilBlockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Use -1 to bypass count expiration.
         * @member {number|Long} count
         * @memberof nft.ApprovalOptions
         * @instance
         */
        ApprovalOptions.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * changed.
         * @member {boolean} immutable
         * @memberof nft.ApprovalOptions
         * @instance
         */
        ApprovalOptions.prototype.immutable = false;

        /**
         * Creates a new ApprovalOptions instance using the specified properties.
         * @function create
         * @memberof nft.ApprovalOptions
         * @static
         * @param {nft.IApprovalOptions=} [properties] Properties to set
         * @returns {nft.ApprovalOptions} ApprovalOptions instance
         */
        ApprovalOptions.create = function create(properties) {
            return new ApprovalOptions(properties);
        };

        /**
         * Encodes the specified ApprovalOptions message. Does not implicitly {@link nft.ApprovalOptions.verify|verify} messages.
         * @function encode
         * @memberof nft.ApprovalOptions
         * @static
         * @param {nft.IApprovalOptions} message ApprovalOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.untilBlockHeight != null && message.hasOwnProperty("untilBlockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.untilBlockHeight);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
            if (message.immutable != null && message.hasOwnProperty("immutable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.immutable);
            return writer;
        };

        /**
         * Encodes the specified ApprovalOptions message, length delimited. Does not implicitly {@link nft.ApprovalOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.ApprovalOptions
         * @static
         * @param {nft.IApprovalOptions} message ApprovalOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApprovalOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApprovalOptions message from the specified reader or buffer.
         * @function decode
         * @memberof nft.ApprovalOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.ApprovalOptions} ApprovalOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.ApprovalOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.untilBlockHeight = reader.int64();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                case 3:
                    message.immutable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApprovalOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.ApprovalOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.ApprovalOptions} ApprovalOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApprovalOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApprovalOptions message.
         * @function verify
         * @memberof nft.ApprovalOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApprovalOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.untilBlockHeight != null && message.hasOwnProperty("untilBlockHeight"))
                if (!$util.isInteger(message.untilBlockHeight) && !(message.untilBlockHeight && $util.isInteger(message.untilBlockHeight.low) && $util.isInteger(message.untilBlockHeight.high)))
                    return "untilBlockHeight: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            if (message.immutable != null && message.hasOwnProperty("immutable"))
                if (typeof message.immutable !== "boolean")
                    return "immutable: boolean expected";
            return null;
        };

        /**
         * Creates an ApprovalOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.ApprovalOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.ApprovalOptions} ApprovalOptions
         */
        ApprovalOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.ApprovalOptions)
                return object;
            var message = new $root.nft.ApprovalOptions();
            if (object.untilBlockHeight != null)
                if ($util.Long)
                    (message.untilBlockHeight = $util.Long.fromValue(object.untilBlockHeight)).unsigned = false;
                else if (typeof object.untilBlockHeight === "string")
                    message.untilBlockHeight = parseInt(object.untilBlockHeight, 10);
                else if (typeof object.untilBlockHeight === "number")
                    message.untilBlockHeight = object.untilBlockHeight;
                else if (typeof object.untilBlockHeight === "object")
                    message.untilBlockHeight = new $util.LongBits(object.untilBlockHeight.low >>> 0, object.untilBlockHeight.high >>> 0).toNumber();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            if (object.immutable != null)
                message.immutable = Boolean(object.immutable);
            return message;
        };

        /**
         * Creates a plain object from an ApprovalOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.ApprovalOptions
         * @static
         * @param {nft.ApprovalOptions} message ApprovalOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApprovalOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.untilBlockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.untilBlockHeight = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
                object.immutable = false;
            }
            if (message.untilBlockHeight != null && message.hasOwnProperty("untilBlockHeight"))
                if (typeof message.untilBlockHeight === "number")
                    object.untilBlockHeight = options.longs === String ? String(message.untilBlockHeight) : message.untilBlockHeight;
                else
                    object.untilBlockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.untilBlockHeight) : options.longs === Number ? new $util.LongBits(message.untilBlockHeight.low >>> 0, message.untilBlockHeight.high >>> 0).toNumber() : message.untilBlockHeight;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            if (message.immutable != null && message.hasOwnProperty("immutable"))
                object.immutable = message.immutable;
            return object;
        };

        /**
         * Converts this ApprovalOptions to JSON.
         * @function toJSON
         * @memberof nft.ApprovalOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApprovalOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApprovalOptions;
    })();

    nft.AddApprovalMsg = (function() {

        /**
         * Properties of an AddApprovalMsg.
         * @memberof nft
         * @interface IAddApprovalMsg
         * @property {Uint8Array|null} [id] AddApprovalMsg id
         * @property {Uint8Array|null} [address] AddApprovalMsg address
         * @property {string|null} [action] AddApprovalMsg action
         * @property {nft.IApprovalOptions|null} [options] AddApprovalMsg options
         * @property {string|null} [t] AddApprovalMsg t
         */

        /**
         * Constructs a new AddApprovalMsg.
         * @memberof nft
         * @classdesc Represents an AddApprovalMsg.
         * @implements IAddApprovalMsg
         * @constructor
         * @param {nft.IAddApprovalMsg=} [properties] Properties to set
         */
        function AddApprovalMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddApprovalMsg id.
         * @member {Uint8Array} id
         * @memberof nft.AddApprovalMsg
         * @instance
         */
        AddApprovalMsg.prototype.id = $util.newBuffer([]);

        /**
         * AddApprovalMsg address.
         * @member {Uint8Array} address
         * @memberof nft.AddApprovalMsg
         * @instance
         */
        AddApprovalMsg.prototype.address = $util.newBuffer([]);

        /**
         * AddApprovalMsg action.
         * @member {string} action
         * @memberof nft.AddApprovalMsg
         * @instance
         */
        AddApprovalMsg.prototype.action = "";

        /**
         * AddApprovalMsg options.
         * @member {nft.IApprovalOptions|null|undefined} options
         * @memberof nft.AddApprovalMsg
         * @instance
         */
        AddApprovalMsg.prototype.options = null;

        /**
         * AddApprovalMsg t.
         * @member {string} t
         * @memberof nft.AddApprovalMsg
         * @instance
         */
        AddApprovalMsg.prototype.t = "";

        /**
         * Creates a new AddApprovalMsg instance using the specified properties.
         * @function create
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {nft.IAddApprovalMsg=} [properties] Properties to set
         * @returns {nft.AddApprovalMsg} AddApprovalMsg instance
         */
        AddApprovalMsg.create = function create(properties) {
            return new AddApprovalMsg(properties);
        };

        /**
         * Encodes the specified AddApprovalMsg message. Does not implicitly {@link nft.AddApprovalMsg.verify|verify} messages.
         * @function encode
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {nft.IAddApprovalMsg} message AddApprovalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddApprovalMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.address);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.action);
            if (message.options != null && message.hasOwnProperty("options"))
                $root.nft.ApprovalOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.t != null && message.hasOwnProperty("t"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.t);
            return writer;
        };

        /**
         * Encodes the specified AddApprovalMsg message, length delimited. Does not implicitly {@link nft.AddApprovalMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {nft.IAddApprovalMsg} message AddApprovalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddApprovalMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddApprovalMsg message from the specified reader or buffer.
         * @function decode
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.AddApprovalMsg} AddApprovalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddApprovalMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.AddApprovalMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.action = reader.string();
                    break;
                case 4:
                    message.options = $root.nft.ApprovalOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.t = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddApprovalMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.AddApprovalMsg} AddApprovalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddApprovalMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddApprovalMsg message.
         * @function verify
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddApprovalMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = $root.nft.ApprovalOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isString(message.t))
                    return "t: string expected";
            return null;
        };

        /**
         * Creates an AddApprovalMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.AddApprovalMsg} AddApprovalMsg
         */
        AddApprovalMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.AddApprovalMsg)
                return object;
            var message = new $root.nft.AddApprovalMsg();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.action != null)
                message.action = String(object.action);
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".nft.AddApprovalMsg.options: object expected");
                message.options = $root.nft.ApprovalOptions.fromObject(object.options);
            }
            if (object.t != null)
                message.t = String(object.t);
            return message;
        };

        /**
         * Creates a plain object from an AddApprovalMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.AddApprovalMsg
         * @static
         * @param {nft.AddApprovalMsg} message AddApprovalMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddApprovalMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.action = "";
                object.options = null;
                object.t = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = $root.nft.ApprovalOptions.toObject(message.options, options);
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this AddApprovalMsg to JSON.
         * @function toJSON
         * @memberof nft.AddApprovalMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddApprovalMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddApprovalMsg;
    })();

    nft.RemoveApprovalMsg = (function() {

        /**
         * Properties of a RemoveApprovalMsg.
         * @memberof nft
         * @interface IRemoveApprovalMsg
         * @property {Uint8Array|null} [id] RemoveApprovalMsg id
         * @property {Uint8Array|null} [address] RemoveApprovalMsg address
         * @property {string|null} [action] RemoveApprovalMsg action
         * @property {string|null} [t] RemoveApprovalMsg t
         */

        /**
         * Constructs a new RemoveApprovalMsg.
         * @memberof nft
         * @classdesc Represents a RemoveApprovalMsg.
         * @implements IRemoveApprovalMsg
         * @constructor
         * @param {nft.IRemoveApprovalMsg=} [properties] Properties to set
         */
        function RemoveApprovalMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveApprovalMsg id.
         * @member {Uint8Array} id
         * @memberof nft.RemoveApprovalMsg
         * @instance
         */
        RemoveApprovalMsg.prototype.id = $util.newBuffer([]);

        /**
         * RemoveApprovalMsg address.
         * @member {Uint8Array} address
         * @memberof nft.RemoveApprovalMsg
         * @instance
         */
        RemoveApprovalMsg.prototype.address = $util.newBuffer([]);

        /**
         * RemoveApprovalMsg action.
         * @member {string} action
         * @memberof nft.RemoveApprovalMsg
         * @instance
         */
        RemoveApprovalMsg.prototype.action = "";

        /**
         * RemoveApprovalMsg t.
         * @member {string} t
         * @memberof nft.RemoveApprovalMsg
         * @instance
         */
        RemoveApprovalMsg.prototype.t = "";

        /**
         * Creates a new RemoveApprovalMsg instance using the specified properties.
         * @function create
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {nft.IRemoveApprovalMsg=} [properties] Properties to set
         * @returns {nft.RemoveApprovalMsg} RemoveApprovalMsg instance
         */
        RemoveApprovalMsg.create = function create(properties) {
            return new RemoveApprovalMsg(properties);
        };

        /**
         * Encodes the specified RemoveApprovalMsg message. Does not implicitly {@link nft.RemoveApprovalMsg.verify|verify} messages.
         * @function encode
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {nft.IRemoveApprovalMsg} message RemoveApprovalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveApprovalMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.address);
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.action);
            if (message.t != null && message.hasOwnProperty("t"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.t);
            return writer;
        };

        /**
         * Encodes the specified RemoveApprovalMsg message, length delimited. Does not implicitly {@link nft.RemoveApprovalMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {nft.IRemoveApprovalMsg} message RemoveApprovalMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveApprovalMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveApprovalMsg message from the specified reader or buffer.
         * @function decode
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {nft.RemoveApprovalMsg} RemoveApprovalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveApprovalMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.nft.RemoveApprovalMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.bytes();
                    break;
                case 2:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.action = reader.string();
                    break;
                case 4:
                    message.t = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RemoveApprovalMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {nft.RemoveApprovalMsg} RemoveApprovalMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveApprovalMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveApprovalMsg message.
         * @function verify
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveApprovalMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                    return "address: buffer expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.t != null && message.hasOwnProperty("t"))
                if (!$util.isString(message.t))
                    return "t: string expected";
            return null;
        };

        /**
         * Creates a RemoveApprovalMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {nft.RemoveApprovalMsg} RemoveApprovalMsg
         */
        RemoveApprovalMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.nft.RemoveApprovalMsg)
                return object;
            var message = new $root.nft.RemoveApprovalMsg();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length)
                    message.id = object.id;
            if (object.address != null)
                if (typeof object.address === "string")
                    $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
                else if (object.address.length)
                    message.address = object.address;
            if (object.action != null)
                message.action = String(object.action);
            if (object.t != null)
                message.t = String(object.t);
            return message;
        };

        /**
         * Creates a plain object from a RemoveApprovalMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof nft.RemoveApprovalMsg
         * @static
         * @param {nft.RemoveApprovalMsg} message RemoveApprovalMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveApprovalMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.id = "";
                else {
                    object.id = [];
                    if (options.bytes !== Array)
                        object.id = $util.newBuffer(object.id);
                }
                if (options.bytes === String)
                    object.address = "";
                else {
                    object.address = [];
                    if (options.bytes !== Array)
                        object.address = $util.newBuffer(object.address);
                }
                object.action = "";
                object.t = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.t != null && message.hasOwnProperty("t"))
                object.t = message.t;
            return object;
        };

        /**
         * Converts this RemoveApprovalMsg to JSON.
         * @function toJSON
         * @memberof nft.RemoveApprovalMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveApprovalMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RemoveApprovalMsg;
    })();

    return nft;
})();

$root.paychan = (function() {

    /**
     * Namespace paychan.
     * @exports paychan
     * @namespace
     */
    var paychan = {};

    paychan.PaymentChannel = (function() {

        /**
         * Properties of a PaymentChannel.
         * @memberof paychan
         * @interface IPaymentChannel
         * @property {Uint8Array|null} [src] Sender is the source that the founds are allocated from (weave.Address).
         * @property {crypto.IPublicKey|null} [senderPubkey] to the recipient. Signature prevents from altering transfer message.
         * @property {Uint8Array|null} [recipient] (weave.Address).
         * @property {coin.ICoin|null} [total] payment channel.
         * @property {number|Long|null} [timeout] sender.
         * @property {string|null} [memo] Max length 128 character.
         * @property {coin.ICoin|null} [transferred] (total) value. Transferred must never exceed total value.
         */

        /**
         * Constructs a new PaymentChannel.
         * @memberof paychan
         * @classdesc PaymentChannel holds the state of a payment channel during its lifetime.
         * @implements IPaymentChannel
         * @constructor
         * @param {paychan.IPaymentChannel=} [properties] Properties to set
         */
        function PaymentChannel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sender is the source that the founds are allocated from (weave.Address).
         * @member {Uint8Array} src
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.src = $util.newBuffer([]);

        /**
         * to the recipient. Signature prevents from altering transfer message.
         * @member {crypto.IPublicKey|null|undefined} senderPubkey
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.senderPubkey = null;

        /**
         * (weave.Address).
         * @member {Uint8Array} recipient
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.recipient = $util.newBuffer([]);

        /**
         * payment channel.
         * @member {coin.ICoin|null|undefined} total
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.total = null;

        /**
         * sender.
         * @member {number|Long} timeout
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.timeout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Max length 128 character.
         * @member {string} memo
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.memo = "";

        /**
         * (total) value. Transferred must never exceed total value.
         * @member {coin.ICoin|null|undefined} transferred
         * @memberof paychan.PaymentChannel
         * @instance
         */
        PaymentChannel.prototype.transferred = null;

        /**
         * Creates a new PaymentChannel instance using the specified properties.
         * @function create
         * @memberof paychan.PaymentChannel
         * @static
         * @param {paychan.IPaymentChannel=} [properties] Properties to set
         * @returns {paychan.PaymentChannel} PaymentChannel instance
         */
        PaymentChannel.create = function create(properties) {
            return new PaymentChannel(properties);
        };

        /**
         * Encodes the specified PaymentChannel message. Does not implicitly {@link paychan.PaymentChannel.verify|verify} messages.
         * @function encode
         * @memberof paychan.PaymentChannel
         * @static
         * @param {paychan.IPaymentChannel} message PaymentChannel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentChannel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && message.hasOwnProperty("src"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.src);
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey"))
                $root.crypto.PublicKey.encode(message.senderPubkey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.recipient);
            if (message.total != null && message.hasOwnProperty("total"))
                $root.coin.Coin.encode(message.total, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timeout);
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            if (message.transferred != null && message.hasOwnProperty("transferred"))
                $root.coin.Coin.encode(message.transferred, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PaymentChannel message, length delimited. Does not implicitly {@link paychan.PaymentChannel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof paychan.PaymentChannel
         * @static
         * @param {paychan.IPaymentChannel} message PaymentChannel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymentChannel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaymentChannel message from the specified reader or buffer.
         * @function decode
         * @memberof paychan.PaymentChannel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {paychan.PaymentChannel} PaymentChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentChannel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.paychan.PaymentChannel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.src = reader.bytes();
                    break;
                case 2:
                    message.senderPubkey = $root.crypto.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.recipient = reader.bytes();
                    break;
                case 4:
                    message.total = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timeout = reader.int64();
                    break;
                case 6:
                    message.memo = reader.string();
                    break;
                case 7:
                    message.transferred = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaymentChannel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof paychan.PaymentChannel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {paychan.PaymentChannel} PaymentChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymentChannel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaymentChannel message.
         * @function verify
         * @memberof paychan.PaymentChannel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaymentChannel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!(message.src && typeof message.src.length === "number" || $util.isString(message.src)))
                    return "src: buffer expected";
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey")) {
                var error = $root.crypto.PublicKey.verify(message.senderPubkey);
                if (error)
                    return "senderPubkey." + error;
            }
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.total != null && message.hasOwnProperty("total")) {
                var error = $root.coin.Coin.verify(message.total);
                if (error)
                    return "total." + error;
            }
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout) && !(message.timeout && $util.isInteger(message.timeout.low) && $util.isInteger(message.timeout.high)))
                    return "timeout: integer|Long expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.transferred != null && message.hasOwnProperty("transferred")) {
                var error = $root.coin.Coin.verify(message.transferred);
                if (error)
                    return "transferred." + error;
            }
            return null;
        };

        /**
         * Creates a PaymentChannel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof paychan.PaymentChannel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {paychan.PaymentChannel} PaymentChannel
         */
        PaymentChannel.fromObject = function fromObject(object) {
            if (object instanceof $root.paychan.PaymentChannel)
                return object;
            var message = new $root.paychan.PaymentChannel();
            if (object.src != null)
                if (typeof object.src === "string")
                    $util.base64.decode(object.src, message.src = $util.newBuffer($util.base64.length(object.src)), 0);
                else if (object.src.length)
                    message.src = object.src;
            if (object.senderPubkey != null) {
                if (typeof object.senderPubkey !== "object")
                    throw TypeError(".paychan.PaymentChannel.senderPubkey: object expected");
                message.senderPubkey = $root.crypto.PublicKey.fromObject(object.senderPubkey);
            }
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.total != null) {
                if (typeof object.total !== "object")
                    throw TypeError(".paychan.PaymentChannel.total: object expected");
                message.total = $root.coin.Coin.fromObject(object.total);
            }
            if (object.timeout != null)
                if ($util.Long)
                    (message.timeout = $util.Long.fromValue(object.timeout)).unsigned = false;
                else if (typeof object.timeout === "string")
                    message.timeout = parseInt(object.timeout, 10);
                else if (typeof object.timeout === "number")
                    message.timeout = object.timeout;
                else if (typeof object.timeout === "object")
                    message.timeout = new $util.LongBits(object.timeout.low >>> 0, object.timeout.high >>> 0).toNumber();
            if (object.memo != null)
                message.memo = String(object.memo);
            if (object.transferred != null) {
                if (typeof object.transferred !== "object")
                    throw TypeError(".paychan.PaymentChannel.transferred: object expected");
                message.transferred = $root.coin.Coin.fromObject(object.transferred);
            }
            return message;
        };

        /**
         * Creates a plain object from a PaymentChannel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof paychan.PaymentChannel
         * @static
         * @param {paychan.PaymentChannel} message PaymentChannel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaymentChannel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.src = "";
                else {
                    object.src = [];
                    if (options.bytes !== Array)
                        object.src = $util.newBuffer(object.src);
                }
                object.senderPubkey = null;
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                object.total = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeout = options.longs === String ? "0" : 0;
                object.memo = "";
                object.transferred = null;
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = options.bytes === String ? $util.base64.encode(message.src, 0, message.src.length) : options.bytes === Array ? Array.prototype.slice.call(message.src) : message.src;
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey"))
                object.senderPubkey = $root.crypto.PublicKey.toObject(message.senderPubkey, options);
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = $root.coin.Coin.toObject(message.total, options);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (typeof message.timeout === "number")
                    object.timeout = options.longs === String ? String(message.timeout) : message.timeout;
                else
                    object.timeout = options.longs === String ? $util.Long.prototype.toString.call(message.timeout) : options.longs === Number ? new $util.LongBits(message.timeout.low >>> 0, message.timeout.high >>> 0).toNumber() : message.timeout;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.transferred != null && message.hasOwnProperty("transferred"))
                object.transferred = $root.coin.Coin.toObject(message.transferred, options);
            return object;
        };

        /**
         * Converts this PaymentChannel to JSON.
         * @function toJSON
         * @memberof paychan.PaymentChannel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaymentChannel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PaymentChannel;
    })();

    paychan.CreatePaymentChannelMsg = (function() {

        /**
         * Properties of a CreatePaymentChannelMsg.
         * @memberof paychan
         * @interface ICreatePaymentChannelMsg
         * @property {Uint8Array|null} [src] Sender address (weave.Address).
         * @property {crypto.IPublicKey|null} [senderPubkey] Sender public key is for validating transfer message signature.
         * @property {Uint8Array|null} [recipient] Recipient address  (weave.Address).
         * @property {coin.ICoin|null} [total] Maximum amount that can be transferred via this channel.
         * @property {number|Long|null} [timeout] anyone.
         * @property {string|null} [memo] Max length 128 character.
         */

        /**
         * Constructs a new CreatePaymentChannelMsg.
         * @memberof paychan
         * @classdesc in the transactions done via created payment channel.
         * @implements ICreatePaymentChannelMsg
         * @constructor
         * @param {paychan.ICreatePaymentChannelMsg=} [properties] Properties to set
         */
        function CreatePaymentChannelMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sender address (weave.Address).
         * @member {Uint8Array} src
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.src = $util.newBuffer([]);

        /**
         * Sender public key is for validating transfer message signature.
         * @member {crypto.IPublicKey|null|undefined} senderPubkey
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.senderPubkey = null;

        /**
         * Recipient address  (weave.Address).
         * @member {Uint8Array} recipient
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.recipient = $util.newBuffer([]);

        /**
         * Maximum amount that can be transferred via this channel.
         * @member {coin.ICoin|null|undefined} total
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.total = null;

        /**
         * anyone.
         * @member {number|Long} timeout
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.timeout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Max length 128 character.
         * @member {string} memo
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         */
        CreatePaymentChannelMsg.prototype.memo = "";

        /**
         * Creates a new CreatePaymentChannelMsg instance using the specified properties.
         * @function create
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {paychan.ICreatePaymentChannelMsg=} [properties] Properties to set
         * @returns {paychan.CreatePaymentChannelMsg} CreatePaymentChannelMsg instance
         */
        CreatePaymentChannelMsg.create = function create(properties) {
            return new CreatePaymentChannelMsg(properties);
        };

        /**
         * Encodes the specified CreatePaymentChannelMsg message. Does not implicitly {@link paychan.CreatePaymentChannelMsg.verify|verify} messages.
         * @function encode
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {paychan.ICreatePaymentChannelMsg} message CreatePaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePaymentChannelMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && message.hasOwnProperty("src"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.src);
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey"))
                $root.crypto.PublicKey.encode(message.senderPubkey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.recipient);
            if (message.total != null && message.hasOwnProperty("total"))
                $root.coin.Coin.encode(message.total, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timeout);
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified CreatePaymentChannelMsg message, length delimited. Does not implicitly {@link paychan.CreatePaymentChannelMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {paychan.ICreatePaymentChannelMsg} message CreatePaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePaymentChannelMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePaymentChannelMsg message from the specified reader or buffer.
         * @function decode
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {paychan.CreatePaymentChannelMsg} CreatePaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePaymentChannelMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.paychan.CreatePaymentChannelMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.src = reader.bytes();
                    break;
                case 2:
                    message.senderPubkey = $root.crypto.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.recipient = reader.bytes();
                    break;
                case 4:
                    message.total = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timeout = reader.int64();
                    break;
                case 6:
                    message.memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreatePaymentChannelMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {paychan.CreatePaymentChannelMsg} CreatePaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePaymentChannelMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePaymentChannelMsg message.
         * @function verify
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePaymentChannelMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!(message.src && typeof message.src.length === "number" || $util.isString(message.src)))
                    return "src: buffer expected";
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey")) {
                var error = $root.crypto.PublicKey.verify(message.senderPubkey);
                if (error)
                    return "senderPubkey." + error;
            }
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!(message.recipient && typeof message.recipient.length === "number" || $util.isString(message.recipient)))
                    return "recipient: buffer expected";
            if (message.total != null && message.hasOwnProperty("total")) {
                var error = $root.coin.Coin.verify(message.total);
                if (error)
                    return "total." + error;
            }
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout) && !(message.timeout && $util.isInteger(message.timeout.low) && $util.isInteger(message.timeout.high)))
                    return "timeout: integer|Long expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates a CreatePaymentChannelMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {paychan.CreatePaymentChannelMsg} CreatePaymentChannelMsg
         */
        CreatePaymentChannelMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.paychan.CreatePaymentChannelMsg)
                return object;
            var message = new $root.paychan.CreatePaymentChannelMsg();
            if (object.src != null)
                if (typeof object.src === "string")
                    $util.base64.decode(object.src, message.src = $util.newBuffer($util.base64.length(object.src)), 0);
                else if (object.src.length)
                    message.src = object.src;
            if (object.senderPubkey != null) {
                if (typeof object.senderPubkey !== "object")
                    throw TypeError(".paychan.CreatePaymentChannelMsg.senderPubkey: object expected");
                message.senderPubkey = $root.crypto.PublicKey.fromObject(object.senderPubkey);
            }
            if (object.recipient != null)
                if (typeof object.recipient === "string")
                    $util.base64.decode(object.recipient, message.recipient = $util.newBuffer($util.base64.length(object.recipient)), 0);
                else if (object.recipient.length)
                    message.recipient = object.recipient;
            if (object.total != null) {
                if (typeof object.total !== "object")
                    throw TypeError(".paychan.CreatePaymentChannelMsg.total: object expected");
                message.total = $root.coin.Coin.fromObject(object.total);
            }
            if (object.timeout != null)
                if ($util.Long)
                    (message.timeout = $util.Long.fromValue(object.timeout)).unsigned = false;
                else if (typeof object.timeout === "string")
                    message.timeout = parseInt(object.timeout, 10);
                else if (typeof object.timeout === "number")
                    message.timeout = object.timeout;
                else if (typeof object.timeout === "object")
                    message.timeout = new $util.LongBits(object.timeout.low >>> 0, object.timeout.high >>> 0).toNumber();
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from a CreatePaymentChannelMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof paychan.CreatePaymentChannelMsg
         * @static
         * @param {paychan.CreatePaymentChannelMsg} message CreatePaymentChannelMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePaymentChannelMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.src = "";
                else {
                    object.src = [];
                    if (options.bytes !== Array)
                        object.src = $util.newBuffer(object.src);
                }
                object.senderPubkey = null;
                if (options.bytes === String)
                    object.recipient = "";
                else {
                    object.recipient = [];
                    if (options.bytes !== Array)
                        object.recipient = $util.newBuffer(object.recipient);
                }
                object.total = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeout = options.longs === String ? "0" : 0;
                object.memo = "";
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = options.bytes === String ? $util.base64.encode(message.src, 0, message.src.length) : options.bytes === Array ? Array.prototype.slice.call(message.src) : message.src;
            if (message.senderPubkey != null && message.hasOwnProperty("senderPubkey"))
                object.senderPubkey = $root.crypto.PublicKey.toObject(message.senderPubkey, options);
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = options.bytes === String ? $util.base64.encode(message.recipient, 0, message.recipient.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipient) : message.recipient;
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = $root.coin.Coin.toObject(message.total, options);
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (typeof message.timeout === "number")
                    object.timeout = options.longs === String ? String(message.timeout) : message.timeout;
                else
                    object.timeout = options.longs === String ? $util.Long.prototype.toString.call(message.timeout) : options.longs === Number ? new $util.LongBits(message.timeout.low >>> 0, message.timeout.high >>> 0).toNumber() : message.timeout;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this CreatePaymentChannelMsg to JSON.
         * @function toJSON
         * @memberof paychan.CreatePaymentChannelMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePaymentChannelMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePaymentChannelMsg;
    })();

    paychan.Payment = (function() {

        /**
         * Properties of a Payment.
         * @memberof paychan
         * @interface IPayment
         * @property {string|null} [chainId] Payment chainId
         * @property {Uint8Array|null} [channelId] Payment channelId
         * @property {coin.ICoin|null} [amount] Payment amount
         * @property {string|null} [memo] Max length 128 character.
         */

        /**
         * Constructs a new Payment.
         * @memberof paychan
         * @classdesc Each Payment should be created with amount greater than the previous one.
         * @implements IPayment
         * @constructor
         * @param {paychan.IPayment=} [properties] Properties to set
         */
        function Payment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Payment chainId.
         * @member {string} chainId
         * @memberof paychan.Payment
         * @instance
         */
        Payment.prototype.chainId = "";

        /**
         * Payment channelId.
         * @member {Uint8Array} channelId
         * @memberof paychan.Payment
         * @instance
         */
        Payment.prototype.channelId = $util.newBuffer([]);

        /**
         * Payment amount.
         * @member {coin.ICoin|null|undefined} amount
         * @memberof paychan.Payment
         * @instance
         */
        Payment.prototype.amount = null;

        /**
         * Max length 128 character.
         * @member {string} memo
         * @memberof paychan.Payment
         * @instance
         */
        Payment.prototype.memo = "";

        /**
         * Creates a new Payment instance using the specified properties.
         * @function create
         * @memberof paychan.Payment
         * @static
         * @param {paychan.IPayment=} [properties] Properties to set
         * @returns {paychan.Payment} Payment instance
         */
        Payment.create = function create(properties) {
            return new Payment(properties);
        };

        /**
         * Encodes the specified Payment message. Does not implicitly {@link paychan.Payment.verify|verify} messages.
         * @function encode
         * @memberof paychan.Payment
         * @static
         * @param {paychan.IPayment} message Payment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chainId);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.channelId);
            if (message.amount != null && message.hasOwnProperty("amount"))
                $root.coin.Coin.encode(message.amount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified Payment message, length delimited. Does not implicitly {@link paychan.Payment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof paychan.Payment
         * @static
         * @param {paychan.IPayment} message Payment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Payment message from the specified reader or buffer.
         * @function decode
         * @memberof paychan.Payment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {paychan.Payment} Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.paychan.Payment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.bytes();
                    break;
                case 3:
                    message.amount = $root.coin.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Payment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof paychan.Payment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {paychan.Payment} Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Payment message.
         * @function verify
         * @memberof paychan.Payment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Payment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isString(message.chainId))
                    return "chainId: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!(message.channelId && typeof message.channelId.length === "number" || $util.isString(message.channelId)))
                    return "channelId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount")) {
                var error = $root.coin.Coin.verify(message.amount);
                if (error)
                    return "amount." + error;
            }
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates a Payment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof paychan.Payment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {paychan.Payment} Payment
         */
        Payment.fromObject = function fromObject(object) {
            if (object instanceof $root.paychan.Payment)
                return object;
            var message = new $root.paychan.Payment();
            if (object.chainId != null)
                message.chainId = String(object.chainId);
            if (object.channelId != null)
                if (typeof object.channelId === "string")
                    $util.base64.decode(object.channelId, message.channelId = $util.newBuffer($util.base64.length(object.channelId)), 0);
                else if (object.channelId.length)
                    message.channelId = object.channelId;
            if (object.amount != null) {
                if (typeof object.amount !== "object")
                    throw TypeError(".paychan.Payment.amount: object expected");
                message.amount = $root.coin.Coin.fromObject(object.amount);
            }
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from a Payment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof paychan.Payment
         * @static
         * @param {paychan.Payment} message Payment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Payment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chainId = "";
                if (options.bytes === String)
                    object.channelId = "";
                else {
                    object.channelId = [];
                    if (options.bytes !== Array)
                        object.channelId = $util.newBuffer(object.channelId);
                }
                object.amount = null;
                object.memo = "";
            }
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = options.bytes === String ? $util.base64.encode(message.channelId, 0, message.channelId.length) : options.bytes === Array ? Array.prototype.slice.call(message.channelId) : message.channelId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = $root.coin.Coin.toObject(message.amount, options);
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this Payment to JSON.
         * @function toJSON
         * @memberof paychan.Payment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Payment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Payment;
    })();

    paychan.TransferPaymentChannelMsg = (function() {

        /**
         * Properties of a TransferPaymentChannelMsg.
         * @memberof paychan
         * @interface ITransferPaymentChannelMsg
         * @property {paychan.IPayment|null} [payment] TransferPaymentChannelMsg payment
         * @property {crypto.ISignature|null} [signature] TransferPaymentChannelMsg signature
         */

        /**
         * Constructs a new TransferPaymentChannelMsg.
         * @memberof paychan
         * @classdesc Signature is there to ensure that payment message was not altered.
         * @implements ITransferPaymentChannelMsg
         * @constructor
         * @param {paychan.ITransferPaymentChannelMsg=} [properties] Properties to set
         */
        function TransferPaymentChannelMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransferPaymentChannelMsg payment.
         * @member {paychan.IPayment|null|undefined} payment
         * @memberof paychan.TransferPaymentChannelMsg
         * @instance
         */
        TransferPaymentChannelMsg.prototype.payment = null;

        /**
         * TransferPaymentChannelMsg signature.
         * @member {crypto.ISignature|null|undefined} signature
         * @memberof paychan.TransferPaymentChannelMsg
         * @instance
         */
        TransferPaymentChannelMsg.prototype.signature = null;

        /**
         * Creates a new TransferPaymentChannelMsg instance using the specified properties.
         * @function create
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {paychan.ITransferPaymentChannelMsg=} [properties] Properties to set
         * @returns {paychan.TransferPaymentChannelMsg} TransferPaymentChannelMsg instance
         */
        TransferPaymentChannelMsg.create = function create(properties) {
            return new TransferPaymentChannelMsg(properties);
        };

        /**
         * Encodes the specified TransferPaymentChannelMsg message. Does not implicitly {@link paychan.TransferPaymentChannelMsg.verify|verify} messages.
         * @function encode
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {paychan.ITransferPaymentChannelMsg} message TransferPaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPaymentChannelMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payment != null && message.hasOwnProperty("payment"))
                $root.paychan.Payment.encode(message.payment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.signature != null && message.hasOwnProperty("signature"))
                $root.crypto.Signature.encode(message.signature, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TransferPaymentChannelMsg message, length delimited. Does not implicitly {@link paychan.TransferPaymentChannelMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {paychan.ITransferPaymentChannelMsg} message TransferPaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferPaymentChannelMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferPaymentChannelMsg message from the specified reader or buffer.
         * @function decode
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {paychan.TransferPaymentChannelMsg} TransferPaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPaymentChannelMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.paychan.TransferPaymentChannelMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.payment = $root.paychan.Payment.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = $root.crypto.Signature.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransferPaymentChannelMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {paychan.TransferPaymentChannelMsg} TransferPaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferPaymentChannelMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferPaymentChannelMsg message.
         * @function verify
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferPaymentChannelMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payment != null && message.hasOwnProperty("payment")) {
                var error = $root.paychan.Payment.verify(message.payment);
                if (error)
                    return "payment." + error;
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                var error = $root.crypto.Signature.verify(message.signature);
                if (error)
                    return "signature." + error;
            }
            return null;
        };

        /**
         * Creates a TransferPaymentChannelMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {paychan.TransferPaymentChannelMsg} TransferPaymentChannelMsg
         */
        TransferPaymentChannelMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.paychan.TransferPaymentChannelMsg)
                return object;
            var message = new $root.paychan.TransferPaymentChannelMsg();
            if (object.payment != null) {
                if (typeof object.payment !== "object")
                    throw TypeError(".paychan.TransferPaymentChannelMsg.payment: object expected");
                message.payment = $root.paychan.Payment.fromObject(object.payment);
            }
            if (object.signature != null) {
                if (typeof object.signature !== "object")
                    throw TypeError(".paychan.TransferPaymentChannelMsg.signature: object expected");
                message.signature = $root.crypto.Signature.fromObject(object.signature);
            }
            return message;
        };

        /**
         * Creates a plain object from a TransferPaymentChannelMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof paychan.TransferPaymentChannelMsg
         * @static
         * @param {paychan.TransferPaymentChannelMsg} message TransferPaymentChannelMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferPaymentChannelMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.payment = null;
                object.signature = null;
            }
            if (message.payment != null && message.hasOwnProperty("payment"))
                object.payment = $root.paychan.Payment.toObject(message.payment, options);
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = $root.crypto.Signature.toObject(message.signature, options);
            return object;
        };

        /**
         * Converts this TransferPaymentChannelMsg to JSON.
         * @function toJSON
         * @memberof paychan.TransferPaymentChannelMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferPaymentChannelMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TransferPaymentChannelMsg;
    })();

    paychan.ClosePaymentChannelMsg = (function() {

        /**
         * Properties of a ClosePaymentChannelMsg.
         * @memberof paychan
         * @interface IClosePaymentChannelMsg
         * @property {Uint8Array|null} [channelId] ClosePaymentChannelMsg channelId
         * @property {string|null} [memo] Max length 128 character.
         */

        /**
         * Constructs a new ClosePaymentChannelMsg.
         * @memberof paychan
         * @classdesc Sender can close channel only if the timeout chain height was reached.
         * @implements IClosePaymentChannelMsg
         * @constructor
         * @param {paychan.IClosePaymentChannelMsg=} [properties] Properties to set
         */
        function ClosePaymentChannelMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClosePaymentChannelMsg channelId.
         * @member {Uint8Array} channelId
         * @memberof paychan.ClosePaymentChannelMsg
         * @instance
         */
        ClosePaymentChannelMsg.prototype.channelId = $util.newBuffer([]);

        /**
         * Max length 128 character.
         * @member {string} memo
         * @memberof paychan.ClosePaymentChannelMsg
         * @instance
         */
        ClosePaymentChannelMsg.prototype.memo = "";

        /**
         * Creates a new ClosePaymentChannelMsg instance using the specified properties.
         * @function create
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {paychan.IClosePaymentChannelMsg=} [properties] Properties to set
         * @returns {paychan.ClosePaymentChannelMsg} ClosePaymentChannelMsg instance
         */
        ClosePaymentChannelMsg.create = function create(properties) {
            return new ClosePaymentChannelMsg(properties);
        };

        /**
         * Encodes the specified ClosePaymentChannelMsg message. Does not implicitly {@link paychan.ClosePaymentChannelMsg.verify|verify} messages.
         * @function encode
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {paychan.IClosePaymentChannelMsg} message ClosePaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClosePaymentChannelMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.channelId);
            if (message.memo != null && message.hasOwnProperty("memo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.memo);
            return writer;
        };

        /**
         * Encodes the specified ClosePaymentChannelMsg message, length delimited. Does not implicitly {@link paychan.ClosePaymentChannelMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {paychan.IClosePaymentChannelMsg} message ClosePaymentChannelMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClosePaymentChannelMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClosePaymentChannelMsg message from the specified reader or buffer.
         * @function decode
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {paychan.ClosePaymentChannelMsg} ClosePaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClosePaymentChannelMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.paychan.ClosePaymentChannelMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.bytes();
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClosePaymentChannelMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {paychan.ClosePaymentChannelMsg} ClosePaymentChannelMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClosePaymentChannelMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClosePaymentChannelMsg message.
         * @function verify
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClosePaymentChannelMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!(message.channelId && typeof message.channelId.length === "number" || $util.isString(message.channelId)))
                    return "channelId: buffer expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            return null;
        };

        /**
         * Creates a ClosePaymentChannelMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {paychan.ClosePaymentChannelMsg} ClosePaymentChannelMsg
         */
        ClosePaymentChannelMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.paychan.ClosePaymentChannelMsg)
                return object;
            var message = new $root.paychan.ClosePaymentChannelMsg();
            if (object.channelId != null)
                if (typeof object.channelId === "string")
                    $util.base64.decode(object.channelId, message.channelId = $util.newBuffer($util.base64.length(object.channelId)), 0);
                else if (object.channelId.length)
                    message.channelId = object.channelId;
            if (object.memo != null)
                message.memo = String(object.memo);
            return message;
        };

        /**
         * Creates a plain object from a ClosePaymentChannelMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof paychan.ClosePaymentChannelMsg
         * @static
         * @param {paychan.ClosePaymentChannelMsg} message ClosePaymentChannelMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClosePaymentChannelMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.channelId = "";
                else {
                    object.channelId = [];
                    if (options.bytes !== Array)
                        object.channelId = $util.newBuffer(object.channelId);
                }
                object.memo = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = options.bytes === String ? $util.base64.encode(message.channelId, 0, message.channelId.length) : options.bytes === Array ? Array.prototype.slice.call(message.channelId) : message.channelId;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            return object;
        };

        /**
         * Converts this ClosePaymentChannelMsg to JSON.
         * @function toJSON
         * @memberof paychan.ClosePaymentChannelMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClosePaymentChannelMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClosePaymentChannelMsg;
    })();

    return paychan;
})();

$root.sigs = (function() {

    /**
     * Namespace sigs.
     * @exports sigs
     * @namespace
     */
    var sigs = {};

    sigs.UserData = (function() {

        /**
         * Properties of a UserData.
         * @memberof sigs
         * @interface IUserData
         * @property {crypto.IPublicKey|null} [pubkey] UserData pubkey
         * @property {number|Long|null} [sequence] UserData sequence
         */

        /**
         * Constructs a new UserData.
         * @memberof sigs
         * @classdesc User is the entry point you want
         * @implements IUserData
         * @constructor
         * @param {sigs.IUserData=} [properties] Properties to set
         */
        function UserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserData pubkey.
         * @member {crypto.IPublicKey|null|undefined} pubkey
         * @memberof sigs.UserData
         * @instance
         */
        UserData.prototype.pubkey = null;

        /**
         * UserData sequence.
         * @member {number|Long} sequence
         * @memberof sigs.UserData
         * @instance
         */
        UserData.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserData instance using the specified properties.
         * @function create
         * @memberof sigs.UserData
         * @static
         * @param {sigs.IUserData=} [properties] Properties to set
         * @returns {sigs.UserData} UserData instance
         */
        UserData.create = function create(properties) {
            return new UserData(properties);
        };

        /**
         * Encodes the specified UserData message. Does not implicitly {@link sigs.UserData.verify|verify} messages.
         * @function encode
         * @memberof sigs.UserData
         * @static
         * @param {sigs.IUserData} message UserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                $root.crypto.PublicKey.encode(message.pubkey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sequence);
            return writer;
        };

        /**
         * Encodes the specified UserData message, length delimited. Does not implicitly {@link sigs.UserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sigs.UserData
         * @static
         * @param {sigs.IUserData} message UserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @function decode
         * @memberof sigs.UserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sigs.UserData} UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sigs.UserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pubkey = $root.crypto.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sequence = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sigs.UserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sigs.UserData} UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserData message.
         * @function verify
         * @memberof sigs.UserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pubkey != null && message.hasOwnProperty("pubkey")) {
                var error = $root.crypto.PublicKey.verify(message.pubkey);
                if (error)
                    return "pubkey." + error;
            }
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
                    return "sequence: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sigs.UserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sigs.UserData} UserData
         */
        UserData.fromObject = function fromObject(object) {
            if (object instanceof $root.sigs.UserData)
                return object;
            var message = new $root.sigs.UserData();
            if (object.pubkey != null) {
                if (typeof object.pubkey !== "object")
                    throw TypeError(".sigs.UserData.pubkey: object expected");
                message.pubkey = $root.crypto.PublicKey.fromObject(object.pubkey);
            }
            if (object.sequence != null)
                if ($util.Long)
                    (message.sequence = $util.Long.fromValue(object.sequence)).unsigned = false;
                else if (typeof object.sequence === "string")
                    message.sequence = parseInt(object.sequence, 10);
                else if (typeof object.sequence === "number")
                    message.sequence = object.sequence;
                else if (typeof object.sequence === "object")
                    message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sigs.UserData
         * @static
         * @param {sigs.UserData} message UserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pubkey = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequence = options.longs === String ? "0" : 0;
            }
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                object.pubkey = $root.crypto.PublicKey.toObject(message.pubkey, options);
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (typeof message.sequence === "number")
                    object.sequence = options.longs === String ? String(message.sequence) : message.sequence;
                else
                    object.sequence = options.longs === String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber() : message.sequence;
            return object;
        };

        /**
         * Converts this UserData to JSON.
         * @function toJSON
         * @memberof sigs.UserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserData;
    })();

    sigs.StdSignature = (function() {

        /**
         * Properties of a StdSignature.
         * @memberof sigs
         * @interface IStdSignature
         * @property {number|Long|null} [sequence] StdSignature sequence
         * @property {crypto.IPublicKey|null} [pubkey] StdSignature pubkey
         * @property {crypto.ISignature|null} [signature] Removed Address, Pubkey is more powerful
         */

        /**
         * Constructs a new StdSignature.
         * @memberof sigs
         * @classdesc increasing by 1 each time (starting at 0)
         * @implements IStdSignature
         * @constructor
         * @param {sigs.IStdSignature=} [properties] Properties to set
         */
        function StdSignature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StdSignature sequence.
         * @member {number|Long} sequence
         * @memberof sigs.StdSignature
         * @instance
         */
        StdSignature.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StdSignature pubkey.
         * @member {crypto.IPublicKey|null|undefined} pubkey
         * @memberof sigs.StdSignature
         * @instance
         */
        StdSignature.prototype.pubkey = null;

        /**
         * Removed Address, Pubkey is more powerful
         * @member {crypto.ISignature|null|undefined} signature
         * @memberof sigs.StdSignature
         * @instance
         */
        StdSignature.prototype.signature = null;

        /**
         * Creates a new StdSignature instance using the specified properties.
         * @function create
         * @memberof sigs.StdSignature
         * @static
         * @param {sigs.IStdSignature=} [properties] Properties to set
         * @returns {sigs.StdSignature} StdSignature instance
         */
        StdSignature.create = function create(properties) {
            return new StdSignature(properties);
        };

        /**
         * Encodes the specified StdSignature message. Does not implicitly {@link sigs.StdSignature.verify|verify} messages.
         * @function encode
         * @memberof sigs.StdSignature
         * @static
         * @param {sigs.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdSignature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sequence);
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                $root.crypto.PublicKey.encode(message.pubkey, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.signature != null && message.hasOwnProperty("signature"))
                $root.crypto.Signature.encode(message.signature, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StdSignature message, length delimited. Does not implicitly {@link sigs.StdSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sigs.StdSignature
         * @static
         * @param {sigs.IStdSignature} message StdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StdSignature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StdSignature message from the specified reader or buffer.
         * @function decode
         * @memberof sigs.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sigs.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdSignature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sigs.StdSignature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    message.pubkey = $root.crypto.PublicKey.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signature = $root.crypto.Signature.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StdSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sigs.StdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sigs.StdSignature} StdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StdSignature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StdSignature message.
         * @function verify
         * @memberof sigs.StdSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StdSignature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence) && !(message.sequence && $util.isInteger(message.sequence.low) && $util.isInteger(message.sequence.high)))
                    return "sequence: integer|Long expected";
            if (message.pubkey != null && message.hasOwnProperty("pubkey")) {
                var error = $root.crypto.PublicKey.verify(message.pubkey);
                if (error)
                    return "pubkey." + error;
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                var error = $root.crypto.Signature.verify(message.signature);
                if (error)
                    return "signature." + error;
            }
            return null;
        };

        /**
         * Creates a StdSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sigs.StdSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sigs.StdSignature} StdSignature
         */
        StdSignature.fromObject = function fromObject(object) {
            if (object instanceof $root.sigs.StdSignature)
                return object;
            var message = new $root.sigs.StdSignature();
            if (object.sequence != null)
                if ($util.Long)
                    (message.sequence = $util.Long.fromValue(object.sequence)).unsigned = false;
                else if (typeof object.sequence === "string")
                    message.sequence = parseInt(object.sequence, 10);
                else if (typeof object.sequence === "number")
                    message.sequence = object.sequence;
                else if (typeof object.sequence === "object")
                    message.sequence = new $util.LongBits(object.sequence.low >>> 0, object.sequence.high >>> 0).toNumber();
            if (object.pubkey != null) {
                if (typeof object.pubkey !== "object")
                    throw TypeError(".sigs.StdSignature.pubkey: object expected");
                message.pubkey = $root.crypto.PublicKey.fromObject(object.pubkey);
            }
            if (object.signature != null) {
                if (typeof object.signature !== "object")
                    throw TypeError(".sigs.StdSignature.signature: object expected");
                message.signature = $root.crypto.Signature.fromObject(object.signature);
            }
            return message;
        };

        /**
         * Creates a plain object from a StdSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sigs.StdSignature
         * @static
         * @param {sigs.StdSignature} message StdSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StdSignature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sequence = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequence = options.longs === String ? "0" : 0;
                object.pubkey = null;
                object.signature = null;
            }
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (typeof message.sequence === "number")
                    object.sequence = options.longs === String ? String(message.sequence) : message.sequence;
                else
                    object.sequence = options.longs === String ? $util.Long.prototype.toString.call(message.sequence) : options.longs === Number ? new $util.LongBits(message.sequence.low >>> 0, message.sequence.high >>> 0).toNumber() : message.sequence;
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                object.pubkey = $root.crypto.PublicKey.toObject(message.pubkey, options);
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = $root.crypto.Signature.toObject(message.signature, options);
            return object;
        };

        /**
         * Converts this StdSignature to JSON.
         * @function toJSON
         * @memberof sigs.StdSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StdSignature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StdSignature;
    })();

    return sigs;
})();

$root.validators = (function() {

    /**
     * Namespace validators.
     * @exports validators
     * @namespace
     */
    var validators = {};

    validators.ValidatorUpdate = (function() {

        /**
         * Properties of a ValidatorUpdate.
         * @memberof validators
         * @interface IValidatorUpdate
         * @property {validators.IPubkey|null} [pubkey] ValidatorUpdate pubkey
         * @property {number|Long|null} [power] ValidatorUpdate power
         */

        /**
         * Constructs a new ValidatorUpdate.
         * @memberof validators
         * @classdesc ValidatorUpdate
         * @implements IValidatorUpdate
         * @constructor
         * @param {validators.IValidatorUpdate=} [properties] Properties to set
         */
        function ValidatorUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidatorUpdate pubkey.
         * @member {validators.IPubkey|null|undefined} pubkey
         * @memberof validators.ValidatorUpdate
         * @instance
         */
        ValidatorUpdate.prototype.pubkey = null;

        /**
         * ValidatorUpdate power.
         * @member {number|Long} power
         * @memberof validators.ValidatorUpdate
         * @instance
         */
        ValidatorUpdate.prototype.power = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ValidatorUpdate instance using the specified properties.
         * @function create
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {validators.IValidatorUpdate=} [properties] Properties to set
         * @returns {validators.ValidatorUpdate} ValidatorUpdate instance
         */
        ValidatorUpdate.create = function create(properties) {
            return new ValidatorUpdate(properties);
        };

        /**
         * Encodes the specified ValidatorUpdate message. Does not implicitly {@link validators.ValidatorUpdate.verify|verify} messages.
         * @function encode
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {validators.IValidatorUpdate} message ValidatorUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                $root.validators.Pubkey.encode(message.pubkey, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.power != null && message.hasOwnProperty("power"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.power);
            return writer;
        };

        /**
         * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link validators.ValidatorUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {validators.IValidatorUpdate} message ValidatorUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidatorUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {validators.ValidatorUpdate} ValidatorUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.validators.ValidatorUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pubkey = $root.validators.Pubkey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {validators.ValidatorUpdate} ValidatorUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidatorUpdate message.
         * @function verify
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidatorUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pubkey != null && message.hasOwnProperty("pubkey")) {
                var error = $root.validators.Pubkey.verify(message.pubkey);
                if (error)
                    return "pubkey." + error;
            }
            if (message.power != null && message.hasOwnProperty("power"))
                if (!$util.isInteger(message.power) && !(message.power && $util.isInteger(message.power.low) && $util.isInteger(message.power.high)))
                    return "power: integer|Long expected";
            return null;
        };

        /**
         * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {validators.ValidatorUpdate} ValidatorUpdate
         */
        ValidatorUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.validators.ValidatorUpdate)
                return object;
            var message = new $root.validators.ValidatorUpdate();
            if (object.pubkey != null) {
                if (typeof object.pubkey !== "object")
                    throw TypeError(".validators.ValidatorUpdate.pubkey: object expected");
                message.pubkey = $root.validators.Pubkey.fromObject(object.pubkey);
            }
            if (object.power != null)
                if ($util.Long)
                    (message.power = $util.Long.fromValue(object.power)).unsigned = false;
                else if (typeof object.power === "string")
                    message.power = parseInt(object.power, 10);
                else if (typeof object.power === "number")
                    message.power = object.power;
                else if (typeof object.power === "object")
                    message.power = new $util.LongBits(object.power.low >>> 0, object.power.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof validators.ValidatorUpdate
         * @static
         * @param {validators.ValidatorUpdate} message ValidatorUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidatorUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pubkey = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.power = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.power = options.longs === String ? "0" : 0;
            }
            if (message.pubkey != null && message.hasOwnProperty("pubkey"))
                object.pubkey = $root.validators.Pubkey.toObject(message.pubkey, options);
            if (message.power != null && message.hasOwnProperty("power"))
                if (typeof message.power === "number")
                    object.power = options.longs === String ? String(message.power) : message.power;
                else
                    object.power = options.longs === String ? $util.Long.prototype.toString.call(message.power) : options.longs === Number ? new $util.LongBits(message.power.low >>> 0, message.power.high >>> 0).toNumber() : message.power;
            return object;
        };

        /**
         * Converts this ValidatorUpdate to JSON.
         * @function toJSON
         * @memberof validators.ValidatorUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidatorUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidatorUpdate;
    })();

    validators.Pubkey = (function() {

        /**
         * Properties of a Pubkey.
         * @memberof validators
         * @interface IPubkey
         * @property {string|null} [type] Pubkey type
         * @property {Uint8Array|null} [data] Pubkey data
         */

        /**
         * Constructs a new Pubkey.
         * @memberof validators
         * @classdesc Represents a Pubkey.
         * @implements IPubkey
         * @constructor
         * @param {validators.IPubkey=} [properties] Properties to set
         */
        function Pubkey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pubkey type.
         * @member {string} type
         * @memberof validators.Pubkey
         * @instance
         */
        Pubkey.prototype.type = "";

        /**
         * Pubkey data.
         * @member {Uint8Array} data
         * @memberof validators.Pubkey
         * @instance
         */
        Pubkey.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Pubkey instance using the specified properties.
         * @function create
         * @memberof validators.Pubkey
         * @static
         * @param {validators.IPubkey=} [properties] Properties to set
         * @returns {validators.Pubkey} Pubkey instance
         */
        Pubkey.create = function create(properties) {
            return new Pubkey(properties);
        };

        /**
         * Encodes the specified Pubkey message. Does not implicitly {@link validators.Pubkey.verify|verify} messages.
         * @function encode
         * @memberof validators.Pubkey
         * @static
         * @param {validators.IPubkey} message Pubkey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pubkey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Pubkey message, length delimited. Does not implicitly {@link validators.Pubkey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof validators.Pubkey
         * @static
         * @param {validators.IPubkey} message Pubkey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pubkey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pubkey message from the specified reader or buffer.
         * @function decode
         * @memberof validators.Pubkey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {validators.Pubkey} Pubkey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pubkey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.validators.Pubkey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pubkey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof validators.Pubkey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {validators.Pubkey} Pubkey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pubkey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pubkey message.
         * @function verify
         * @memberof validators.Pubkey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pubkey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Pubkey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof validators.Pubkey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {validators.Pubkey} Pubkey
         */
        Pubkey.fromObject = function fromObject(object) {
            if (object instanceof $root.validators.Pubkey)
                return object;
            var message = new $root.validators.Pubkey();
            if (object.type != null)
                message.type = String(object.type);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Pubkey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof validators.Pubkey
         * @static
         * @param {validators.Pubkey} message Pubkey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pubkey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Pubkey to JSON.
         * @function toJSON
         * @memberof validators.Pubkey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pubkey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pubkey;
    })();

    validators.SetValidatorsMsg = (function() {

        /**
         * Properties of a SetValidatorsMsg.
         * @memberof validators
         * @interface ISetValidatorsMsg
         * @property {Array.<validators.IValidatorUpdate>|null} [validatorUpdates] SetValidatorsMsg validatorUpdates
         */

        /**
         * Constructs a new SetValidatorsMsg.
         * @memberof validators
         * @classdesc This message is designed to update validator power
         * @implements ISetValidatorsMsg
         * @constructor
         * @param {validators.ISetValidatorsMsg=} [properties] Properties to set
         */
        function SetValidatorsMsg(properties) {
            this.validatorUpdates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetValidatorsMsg validatorUpdates.
         * @member {Array.<validators.IValidatorUpdate>} validatorUpdates
         * @memberof validators.SetValidatorsMsg
         * @instance
         */
        SetValidatorsMsg.prototype.validatorUpdates = $util.emptyArray;

        /**
         * Creates a new SetValidatorsMsg instance using the specified properties.
         * @function create
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {validators.ISetValidatorsMsg=} [properties] Properties to set
         * @returns {validators.SetValidatorsMsg} SetValidatorsMsg instance
         */
        SetValidatorsMsg.create = function create(properties) {
            return new SetValidatorsMsg(properties);
        };

        /**
         * Encodes the specified SetValidatorsMsg message. Does not implicitly {@link validators.SetValidatorsMsg.verify|verify} messages.
         * @function encode
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {validators.ISetValidatorsMsg} message SetValidatorsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetValidatorsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validatorUpdates != null && message.validatorUpdates.length)
                for (var i = 0; i < message.validatorUpdates.length; ++i)
                    $root.validators.ValidatorUpdate.encode(message.validatorUpdates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetValidatorsMsg message, length delimited. Does not implicitly {@link validators.SetValidatorsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {validators.ISetValidatorsMsg} message SetValidatorsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetValidatorsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetValidatorsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {validators.SetValidatorsMsg} SetValidatorsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetValidatorsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.validators.SetValidatorsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.validatorUpdates && message.validatorUpdates.length))
                        message.validatorUpdates = [];
                    message.validatorUpdates.push($root.validators.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetValidatorsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {validators.SetValidatorsMsg} SetValidatorsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetValidatorsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetValidatorsMsg message.
         * @function verify
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetValidatorsMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.validatorUpdates != null && message.hasOwnProperty("validatorUpdates")) {
                if (!Array.isArray(message.validatorUpdates))
                    return "validatorUpdates: array expected";
                for (var i = 0; i < message.validatorUpdates.length; ++i) {
                    var error = $root.validators.ValidatorUpdate.verify(message.validatorUpdates[i]);
                    if (error)
                        return "validatorUpdates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SetValidatorsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {validators.SetValidatorsMsg} SetValidatorsMsg
         */
        SetValidatorsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.validators.SetValidatorsMsg)
                return object;
            var message = new $root.validators.SetValidatorsMsg();
            if (object.validatorUpdates) {
                if (!Array.isArray(object.validatorUpdates))
                    throw TypeError(".validators.SetValidatorsMsg.validatorUpdates: array expected");
                message.validatorUpdates = [];
                for (var i = 0; i < object.validatorUpdates.length; ++i) {
                    if (typeof object.validatorUpdates[i] !== "object")
                        throw TypeError(".validators.SetValidatorsMsg.validatorUpdates: object expected");
                    message.validatorUpdates[i] = $root.validators.ValidatorUpdate.fromObject(object.validatorUpdates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SetValidatorsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof validators.SetValidatorsMsg
         * @static
         * @param {validators.SetValidatorsMsg} message SetValidatorsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetValidatorsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.validatorUpdates = [];
            if (message.validatorUpdates && message.validatorUpdates.length) {
                object.validatorUpdates = [];
                for (var j = 0; j < message.validatorUpdates.length; ++j)
                    object.validatorUpdates[j] = $root.validators.ValidatorUpdate.toObject(message.validatorUpdates[j], options);
            }
            return object;
        };

        /**
         * Converts this SetValidatorsMsg to JSON.
         * @function toJSON
         * @memberof validators.SetValidatorsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetValidatorsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SetValidatorsMsg;
    })();

    validators.Accounts = (function() {

        /**
         * Properties of an Accounts.
         * @memberof validators
         * @interface IAccounts
         * @property {Array.<Uint8Array>|null} [addresses] Accounts addresses
         */

        /**
         * Constructs a new Accounts.
         * @memberof validators
         * @classdesc Accounts is a list of accounts allowed to update validators
         * @implements IAccounts
         * @constructor
         * @param {validators.IAccounts=} [properties] Properties to set
         */
        function Accounts(properties) {
            this.addresses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Accounts addresses.
         * @member {Array.<Uint8Array>} addresses
         * @memberof validators.Accounts
         * @instance
         */
        Accounts.prototype.addresses = $util.emptyArray;

        /**
         * Creates a new Accounts instance using the specified properties.
         * @function create
         * @memberof validators.Accounts
         * @static
         * @param {validators.IAccounts=} [properties] Properties to set
         * @returns {validators.Accounts} Accounts instance
         */
        Accounts.create = function create(properties) {
            return new Accounts(properties);
        };

        /**
         * Encodes the specified Accounts message. Does not implicitly {@link validators.Accounts.verify|verify} messages.
         * @function encode
         * @memberof validators.Accounts
         * @static
         * @param {validators.IAccounts} message Accounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Accounts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addresses != null && message.addresses.length)
                for (var i = 0; i < message.addresses.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.addresses[i]);
            return writer;
        };

        /**
         * Encodes the specified Accounts message, length delimited. Does not implicitly {@link validators.Accounts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof validators.Accounts
         * @static
         * @param {validators.IAccounts} message Accounts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Accounts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Accounts message from the specified reader or buffer.
         * @function decode
         * @memberof validators.Accounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {validators.Accounts} Accounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Accounts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.validators.Accounts();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.addresses && message.addresses.length))
                        message.addresses = [];
                    message.addresses.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Accounts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof validators.Accounts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {validators.Accounts} Accounts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Accounts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Accounts message.
         * @function verify
         * @memberof validators.Accounts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Accounts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addresses != null && message.hasOwnProperty("addresses")) {
                if (!Array.isArray(message.addresses))
                    return "addresses: array expected";
                for (var i = 0; i < message.addresses.length; ++i)
                    if (!(message.addresses[i] && typeof message.addresses[i].length === "number" || $util.isString(message.addresses[i])))
                        return "addresses: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an Accounts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof validators.Accounts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {validators.Accounts} Accounts
         */
        Accounts.fromObject = function fromObject(object) {
            if (object instanceof $root.validators.Accounts)
                return object;
            var message = new $root.validators.Accounts();
            if (object.addresses) {
                if (!Array.isArray(object.addresses))
                    throw TypeError(".validators.Accounts.addresses: array expected");
                message.addresses = [];
                for (var i = 0; i < object.addresses.length; ++i)
                    if (typeof object.addresses[i] === "string")
                        $util.base64.decode(object.addresses[i], message.addresses[i] = $util.newBuffer($util.base64.length(object.addresses[i])), 0);
                    else if (object.addresses[i].length)
                        message.addresses[i] = object.addresses[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an Accounts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof validators.Accounts
         * @static
         * @param {validators.Accounts} message Accounts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Accounts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.addresses = [];
            if (message.addresses && message.addresses.length) {
                object.addresses = [];
                for (var j = 0; j < message.addresses.length; ++j)
                    object.addresses[j] = options.bytes === String ? $util.base64.encode(message.addresses[j], 0, message.addresses[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.addresses[j]) : message.addresses[j];
            }
            return object;
        };

        /**
         * Converts this Accounts to JSON.
         * @function toJSON
         * @memberof validators.Accounts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Accounts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Accounts;
    })();

    return validators;
})();

module.exports = $root;
