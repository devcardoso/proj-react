import React, { Component } from 'react';
import TabPanel from './tab/TabPanel'
import { faHome, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Row from './ui/Row'
import Column from './ui/Column'
import Label from './ui/Label'
import TextField from './ui/TextField'

class View extends Component {
    render() {
        return (
            <TabPanel style={{ height: '400px', width: '600px' }}>
                <div tabtext="Dados Pessoais" icon={faAddressCard}>
                    Content for the first panel
                </div>
                <div tabtext="Dados Bancários" icon={faHome} className="">
                    <div className="form-row">
                        <div className="col-5">
                            <label>Data Nascimento</label>
                            <input type="text" className="form-control form-control-sm"
                                name="datanascimento"
                                maxLength={10} />
                        </div>
                        <div className="col-5">
                            <input type="radio" name="es" id="es"
                                 className="ace"/>
                            <label htmlFor="es"
                                   className="lbl mlabel">Estado Civil</label>
                        </div>
                        <div className="col-2">
                            <label >
                                <input type="checkbox" name="ss" id="ss"
                                    className="ace" />
                                <span className="lbl mlabel">Select</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div tabtext="Dados Clínicos" icon={faAddressCard}>
                    Content for the first panel
                    <div className="container">
                        <Row>
                            <Column cols={10}>
                                <Label text="Nome"/>
                                <TextField type="text" maxLength={40}
                                        id="demo"/>
                            </Column>
                        </Row>
                    </div>
                </div>
            </TabPanel>
        );
    }
}

export default View;