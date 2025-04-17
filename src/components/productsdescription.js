import React from 'react'

export default function Productsdescription(props) {
  return (
    <section id="description">
      <div className="p-4 mb-4 bg-body-tertiary rounded-3">
        <div className="row">
          {props.data.map(section => (
            <div key={section.id} className="col-md-6 p-2">

              <div  className="mb-4">
                <h3>{section.name}</h3>
                <ul className="list-group">
                  {section.data.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between"
                    >
                      <span>{item.name}</span>
                      <span className="text-end">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
