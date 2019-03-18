import React, {Component} from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this); // bind(this) for using this inside that method
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.delete_item = this.delete_item.bind(this);
        this.update_item = this.update_item.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: '',
            current_state: '',
            index_test: '',
            // data_test: {
            //     person: [],
            //     business: [],
            //     gst: []
            // }
            data_test: [
                {person: "", business: "", gst: ""}
            ]
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
        e.preventDefault(); // read about it -- overwrites default methods like onClick
        if (this.state.current_state == "Update") {
            var tempArr = this.state.data_test
            tempArr[this.state.index_test].person = this.state.person_name
            tempArr[this.state.index_test].business = this.state.business_name
            tempArr[this.state.index_test].gst = this.state.business_gst_number
            this.setState({
                person_name: '',
                business_name: '',
                business_gst_number: '',
                data_test: tempArr
            })
        } else {
            var collection_temp = this.state.data_test;
            var tempHash = {
                person: this.state.person_name,
                business: this.state.business_name,
                gst: this.state.business_gst_number
            }
            collection_temp.push(tempHash)

            // array method:
            // collection_temp.person.push(this.state.person_name);
            // collection_temp.business.push(this.state.business_name);
            // collection_temp.gst.push(this.state.business_gst_number);
            this.setState({
                person_name: '',
                business_name: '',
                business_gst_number: '',
                data_test: collection_temp
            })
        }
    }

    delete_item(index) {
        console.log('hey')

        var tempArr = this.state.data_test
        if (index > -1)
            tempArr.splice(index, 1)


        // var test_var = this.state.data_test
        // test_var.person = this.state.data_test.person.filter((name) => name != this.state.data_test.person[index])
        // test_var.business = this.state.data_test.business.filter((name) => name != this.state.data_test.business[index])
        // test_var.gst = this.state.data_test.gst.filter((name) => name != this.state.data_test.gst[index])
        this.setState({
            // data_test: test_var
            data_test: tempArr
        });
    }

    update_item(index) {
        if (index > -1) {
            this.state.current_state = "Update"
            this.state.index_test = index
            var tempArr = this.state.data_test
            this.state.person_name = tempArr[index].person
            this.state.business_name = tempArr[index].business
            this.state.business_gst_number = tempArr[index].gst
            this.setState({
                data_test: tempArr
            })
        }
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
                        {(this.state.current_state === "Update") ?
                            <input type="submit" value="Update Business" className="btn btn-warning"/> :
                            <input type="submit" value="Register Business" className="btn btn-primary"/>}
                    </div>
                </form>
                <NewComponent params_new={this.state.data_test} deleteVal={this.delete_item}
                              editVal={this.update_item}/>
            </div>
        )
    }
}

class NewComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.params_new.length > 1) {
            console.log(this.props.params_new)
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

                        {/*{(this.props.params_new.person).map((item, index) => {*/}
                        {/*return (*/}
                        {/*<tr key={index}>*/}
                        {/*<td>{this.props.params_new.person[index]}</td>*/}
                        {/*<td>{this.props.params_new.business[index]}</td>*/}
                        {/*<td>{this.props.params_new.gst[index]}</td>*/}
                        {/*<td><input type="button"*/}
                        {/*className="btn btn-warning"*/}
                        {/*value="Edit"*/}
                        {/*onClick={() => this.props.editVal(index)}*/}
                        {/*/></td>*/}
                        {/*<td><input type="button"*/}
                        {/*className="btn btn-danger"*/}
                        {/*value="Remove"*/}
                        {/*method="delete"*/}
                        {/*onClick={() => this.props.deleteVal(index)}*/}
                        {/*/></td>*/}
                        {/*</tr>*/}
                        {/*)*/}
                        {/*}*/}
                        {/*)}*/}

                        {(this.props.params_new).map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.person}</td>
                                        <td>{item.business}</td>
                                        <td>{item.gst}</td>
                                        <td><input type="button"
                                                   className="btn btn-warning"
                                                   value="Edit"
                                                   onClick={() => this.props.editVal(index)}
                                        /></td>
                                        <td><input type="button"
                                                   className="btn btn-danger"
                                                   value="Remove"
                                                   method="delete"
                                                   onClick={() => this.props.deleteVal(index)}
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
                <div align="center">No Records Available. Add a Business above.</div>
            )
        }

    }
}
