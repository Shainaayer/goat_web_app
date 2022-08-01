import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const [userInfo, setUserInfo] = useState({
    token: null,
    user: null,
  })

  useEffect(() => {
    const loginToken = localStorage.getItem("login-token") ?? null
    const userData = localStorage.getItem("user-data") ?? null

    if (loginToken && userData) {
      setUserInfo({ token: loginToken, user: userData })
    }
  }, [])

  const login = (loginToken, userData) => {
    setUserInfo({
      token: loginToken,
      user: userData,
    })

    localStorage.setItem("login-token", loginToken)
    localStorage.setItem("user-data", JSON.stringify(userData))
  }

  const logout = () => {
    setUserInfo({
      token: null,
      user: null,
    })

    localStorage.removeItem("login-token")
    localStorage.removeItem("user-data")
    router.push("/")
  }

  return (
    <Fragment>
      <Head>
        <title>Goat</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <NavBar logout={logout} user={userInfo.user} />
      <div className="dynamic-data" style={{ minHeight: "calc(100vh - 200px)" }}>
        <Component login={login} token={userInfo.token} logout={logout} user={userInfo.user} {...pageProps} />
      </div>
    </Fragment>
  )
}

export default MyApp
