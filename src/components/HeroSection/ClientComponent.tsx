'use client';

import React, { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {

    const {heading1, section2} = props;

    return (<section className="flex px-4 items-center gap-12 container mx-auto">

    <div className="py-10 h-full">
        {/* Heading 1 */}
        {heading1}

        {/* Room Description */}
        <div className="flex justify-between mt-12">
            <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Basic Room</p>
                <CountUpNumber duration={1000} endValue={250} />
            </div>

            <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                <CountUpNumber duration={1000} endValue={150} />
            </div>

            <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Suite</p>
                <CountUpNumber duration={1000} endValue={100} />
            </div>
        </div>
    </div>
    
    {/* Section 2 */}
    {section2}
   
</section>);
};

export default ClientComponent;
