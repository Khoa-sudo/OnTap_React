import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { dtModal } = this.props;
    return (

      <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary btn-lg">
          Launch
        </button>
        {/* Modal */}
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" >{dtModal.tenSP}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={dtModal.hinhAnh} width={500} height={500} alt="" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
