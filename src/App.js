import React, {Component} from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: '',
            data_test: {
                person: [],
                business: [],
                gst: []
            }
        }
    }

    onChangePersonName(e) {
        this.setState({
            person_name: e.target.value
        });
    }

    onChangeBusinessName(e) {
        this.setState({
            business_name: e.target.value
        })
    }

    onChangeGstNumber(e) {
        this.setState({
            business_gst_number: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        var collection_temp = this.state.data_test;
        collection_temp.person.push(this.state.person_name);
        collection_temp.business.push(this.state.business_name);
        collection_temp.gst.push(this.state.business_gst_number);
        this.setState({
            person_name: '',
            business_name: '',
            business_gst_number: '',
            data_test: collection_temp
        })
    }

    delete_item(index) {
        // var item = this.state
        // item.splice(index, 1);
        // console.log(this.state.data_test.person)
        console.log('hey')
        var item = this.state.data_test.person.filter((name) => {
            return name != this.state.data_test.person[index]
        })
        // this.setState({
        //     data_test: item
        // });
    }

    update_item(e) {
        // var item = this.state.data_test;
        // this.setState({
        //     data_test: item
        // })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.person_name}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Business Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.business_name}
                               onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>GST Number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.business_gst_number}
                               onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
                <NewComponent params_new={this.state.data_test} deleteVal={this.delete_item.bind(this)}
                              editVal={this.update_item.bind(this)}/>
            </div>
        )
    }
}

class NewComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.params_new != null) {
            return (
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Business</th>
                            <th>GST</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>


                        {Object.keys(this.props.params_new).map((item, index) => {
                                return (
                                    <tr>
                                        <td>{this.props.params_new.person[index]}</td>
                                        <td>{this.props.params_new.business[index]}</td>
                                        <td>{this.props.params_new.gst[index]}</td>
                                        <td><input type="button"
                                                   className="btn btn-warning"
                                                   value="Edit"
                                                   onClick={this.props.editVal(index)}
                                        /></td>
                                        <td><input type="button"
                                                   className="btn btn-danger"
                                                   value="Remove"
                                                   method="delete"
                                                   onClick={this.props.deleteVal(index)}
                                        /></td>
                                    </tr>
                                )
                            }
                        )}

                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>Void</div>
            )
        }

    }
}
