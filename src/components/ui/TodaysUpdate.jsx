import React from 'react'
import { Title } from './Title'
import { UpdateCard } from '../cards/UpdateCard'

export const TodaysUpdate = () => {
    return (
        <div>
            <Title title={"Today's"} subtitle={"Update"} />
            <br />
            <div className="row m-0">
                <div className="col-6 p-2">
                    <UpdateCard title={"Blog Read"} value={30} />
                </div>

                <div className="col-6 p-2">
                    <UpdateCard title={"New Post"} value={29} />
                </div>

                <div className="col-6 p-2">
                    <UpdateCard title={"New subscribers"} value={20} />
                </div>

                <div className="col-6 p-2">
                    <UpdateCard title={"total visitors"} value={60} />
                </div>

            </div>
        </div>
    )
}
