import React from "react";
import { Container, Button } from "reactstrap";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Container>
			<Head>
				<title>BrideMeetsGuide</title>
				<meta name="description" content="BrideMeetsGuide" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
				/>
			</Head>

			<main className={styles.main}>
				<header>
					<nav>
						<h1 className={styles.title}>BrideMeetsGuide</h1>
					</nav>
				</header>
				<div>
					<Button color="danger">Danger!</Button>
				</div>
			</main>

			<footer className={styles.footer}>footer</footer>
		</Container>
	);
}
