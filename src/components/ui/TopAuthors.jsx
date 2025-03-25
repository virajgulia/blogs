import React from 'react'
import { Title } from './Title'
import { AuthorCard } from './AuthorCard'

export const TopAuthors = () => {
    return (
        <div>
            <Title title={"Top"} subtitle={"Authors"} />
            <br />
            <div className="d-flex flex-column gap-3">
                <AuthorCard name={"Jenny kia"} description={"Fashion designer, Blogger, activist"} />
                <AuthorCard name={"Andress rasel"} description={"Blogger, activist, content creator, part time designer at: www.gethugothemes.com"} />
                <AuthorCard name={"Jenny kia"} description={"Fashion designer, Blogger, activist"} />
            </div>

        </div>
    )
}
