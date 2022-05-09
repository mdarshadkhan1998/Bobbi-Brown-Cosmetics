import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Signin } from './Signin';
import { Line } from './midLine';
import { Login } from './Login';
import { Bottom } from './Bottom';

import styles from './Login.modules.css';

import { Location } from './Location';

export const Verify = () => {
    return (
        <>
            <div >
                <div className="Head">
                    <Login />
                    <Line />
                    <Signin />
                </div>
                <div>
                    <Bottom />
                </div>
            </div>

            {/* <Location /> */}
        </>
    )
}