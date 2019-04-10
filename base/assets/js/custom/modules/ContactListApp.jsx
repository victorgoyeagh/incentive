import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class ContactsListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }
    componentDidMount() {
        this.state = {
            data: this.props.data
        }
    }
    componentWillUnmount() {
        this.state = {
            data: ''
        }
    }
    updateContact(editContactObj) {
        var tmpStateData = this.state.data;
        var newStateData = Array.prototype.map.call(tmpStateData, function (contact, index) {

            if (contact.id == editContactObj.id) {
                contact = editContactObj;
            }
            return contact;
        });

        this.setState({
            data: newStateData
        })
    }
    addContact(newContactObj) {
        var tmpStateData = this.state.data;
        tmpStateData.push(newContactObj);

        this.setState({
            data: tmpStateData
        });
    }
    deleteContact(contactId) {
        const tmpStateData = this.state.data;
        var newContactsData = tmpStateData.filter(function (contact, index) {
            return contact.id != contactId;
        });

        this.setState({
            data: newContactsData
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <h3>
                        <i className="fa fa-address-book" aria-hidden="true"></i>
                        Contact List
                    </h3>
                    <div className="contact-container">
                        <a href="#" data-toggle="modal" data-target="#private-policy" title="Private Policy">Private Policy</a>

                        <AddContactPanel addNewContact={this.addContact.bind(this)} />
                        <ContactListPanel contacts={this.state.data} deleteContact={this.deleteContact.bind(this)} updateContact={this.updateContact.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}



class ContactListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var delCont = this.props.deleteContact;
        var updCont = this.props.updateContact;
        var items = Array.prototype.map.call(this.props.contacts, function (contact, index) {

            return <ContactItem
                key={index}
                id={contact.id}
                name={contact.name}
                occupation={contact.occupation}
                email={contact.email}
                telephone={contact.telephone}
                deleteContact={delCont.bind(this)}
                updateContact={updCont.bind(this)}
                />
        });

        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive">
                        <table className="contact-list" summary="This table lists contacts added via the form above">
                            <thead className="contact-list__head">
                                <tr>
                                    <th className="col-sm-2">
                                        <h4>Fullname</h4>
                                    </th>
                                    <th className="col-sm-2">
                                        <h4>Occupation</h4>
                                    </th>
                                    <th className="col-sm-2">
                                        <h4>Email</h4>
                                    </th>
                                    <th className="col-sm-2">
                                        <h4>Telephone</h4>
                                    </th>
                                    <th className="col-sm-4">
                                        &nbsp;
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                            <tfoot>
                                {/*sort params*/}
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

ContactListPanel.propTypes,
    ContactsListApp.propTypes = {
        data: React.PropTypes.array.isRequired
    }


class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            inputValues: this.initialInputStates()
        };
    }
    initialInputStates() {
        return {
            "id": this.props.id,
            "name": this.props.name,
            "occupation": this.props.occupation,
            "email": this.props.email,
            "telephone": this.props.telephone
        }
    }
    componentDidMount() {
        this.cancelEditContactMode();
        this.state = {
            editMode: false,
            inputValues: this.initialInputStates()
        };
    }
    componentWillUnMount() {
        this.cancelEditContactMode();
        this.state = {
            editMode: false,
            inputValues: {}
        };
    }
    handleUpdateData(e) {
        var updateObj = {
            "id": this.state.inputValues.id,
            "name": this.state.inputValues.name,
            "occupation": this.state.inputValues.occupation,
            "email": this.state.inputValues.email,
            "telephone": this.state.inputValues.telephone
        }
        this.props.updateContact(updateObj);

        this.cancelEditContactMode();
        e.preventDefault();
    }
    handleDeleteContact(e) {
        var contactId = this.refs.contactId.value;
        this.props.deleteContact(contactId);

        e.preventDefault();
    }
    cancelEditContactMode() {
        this.setState({
            editMode: false,
            inputValues: this.initialInputStates()
        });
    }
    applyEditContactMode() {
        this.setState({
            editMode: true,
            inputValues: this.initialInputStates()
        });
    }
    handleChange(e) {
        this.setState({
            editMode: true,
            inputValues: {
                "id": this.props.id,
                "name": (event.target === this.refs.emContactName) ? event.target.value : this.refs.emContactName.value,
                "occupation": (event.target === this.refs.emContactOccupation) ? event.target.value : this.refs.emContactOccupation.value,
                "email": (event.target === this.refs.emContactEmail) ? event.target.value : this.refs.emContactEmail.value,
                "telephone": (event.target === this.refs.emContactTelephone) ? event.target.value : this.refs.emContactTelephone.value
            }
        });
    }
    render() {
        var styles = {
            showEditDisplay: {
                "display": this.state.editMode ? 'block' : 'none'
            },
            hideEditDisplay: {
                "display": !this.state.editMode ? 'block' : 'none'
            }
        }
        return (
            <tr className="contact-list__item">
                <td className="col-sm-3">
                    <input onChange={this.handleChange.bind(this)} style={styles.showEditDisplay} className="form-control" ref="emContactName" type="text" value={this.state.inputValues.name} />
                    <label style={styles.hideEditDisplay}>{this.props.name}</label>
                </td>
                <td className="col-sm-2">
                    <input onChange={this.handleChange.bind(this)} style={styles.showEditDisplay} className="form-control" ref="emContactOccupation" type="text" value={this.state.inputValues.occupation} />
                    <label style={styles.hideEditDisplay}>{this.props.occupation}</label>
                </td>
                <td className="col-sm-2">
                    <input onChange={this.handleChange.bind(this)} style={styles.showEditDisplay} className="form-control" ref="emContactEmail" type="text" value={this.state.inputValues.email} />
                    <label style={styles.hideEditDisplay}>{this.props.email}</label>
                </td>
                <td className="col-sm-2">
                    <input onChange={this.handleChange.bind(this)} style={styles.showEditDisplay} className="form-control" ref="emContactTelephone" type="text" value={this.state.inputValues.telephone} />
                    <label style={styles.hideEditDisplay}>{this.props.telephone}</label>
                </td>
                <td className="col-sm-3">
                    <input type="hidden" name="contactId" ref="contactId" value={this.state.inputValues.id} />

                    <div className="editMode" style={styles.showEditDisplay}>
                        <button className="btn btn-default icon btn-info" onClick={this.handleUpdateData.bind(this)} >
                            <i className="fa fa-check" aria-hidden="true"></i>
                            Update
                        </button>
                        <button className="btn btn-default icon btn-info" onClick={this.cancelEditContactMode.bind(this)}>
                            <i className="fa fa-ban" aria-hidden="true"></i>
                            Cancel
                        </button>
                    </div>
                    <div className="nonEditMode" style={styles.hideEditDisplay}>
                        <button className="btn btn-default icon btn-danger" onClick={this.handleDeleteContact.bind(this)} >
                            <i className="fa fa-times" aria-hidden="true"></i>
                            Delete
                        </button>
                        <button className="btn btn-default icon btn-warning" onClick={this.applyEditContactMode.bind(this)}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            Edit
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}


class AddContactPanel extends React.Component {
    handleAddContact(e) {
        var contactItem = this.refs.newContactName,
            r = this.refs;

        var cn = r.newContactName,
            co = r.newContactOccupation,
            ce = r.newContactEmail,
            ct = r.newContactTelephone;

        this.props.addNewContact({
            "id": (Math.random(1000 * 10) + 1),
            "name": cn.value,
            "occupation": co.value,
            "email": ce.value,
            "telephone": ct.value
        });

        cn.value = '',
            co.value = '',
            ce.value = '',
            ct.value = '';

        e.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <form>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Fullname" ref="newContactName" type="text" name="newContactName" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Occupation" ref="newContactOccupation" type="text" name="newContactOccupation" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Email address" ref="newContactEmail" type="text" name="newContactEmail" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Telephone" ref="newContactTelephone" type="text" name="newContactTelephone" />
                    </div>
                    <div className="col-xs-12 text-right">
                        <button type="submit" className="btn btn-default icon btn-success btn-incentive btn-incentive--full-width" name="submit" onClick={this.handleAddContact.bind(this)} >
                            <i className="fa fa-plus"></i>
                            Add Contact
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

module.exports = {
    contactListApp: ContactsListApp
}