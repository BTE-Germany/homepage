/*
 * map.js
 *
 * Copyright (c) 2023 BuildTheEarth Germany e.V.
 * https://bte-germany.de
 * This project is released under the MIT license.
 */

export default function Map() {
    return <>You&apos;re being redirected...</>
}
export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: 'https://map.bte-germany.de',
            permanent: true,
        },
    }

}