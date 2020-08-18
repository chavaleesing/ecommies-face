import React from 'react';
import Sidebar from '../../components/sidebar'
import './style.scss';


const newItem = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <div className="container container-newitem">
                <form>
                    <div class="form-group row">
                        <label for="input" class="col-sm-1 col-form-label">Food</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="input" placeholder="text" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="input" class="col-sm-1 col-form-label">Type</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="input" placeholder="text" />
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};


export default newItem;
