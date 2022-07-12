import React from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
import Banner from '../Banner/Banner'
import Row from "../../components/Row/Row";

function HomePage() {
  return (
    <div>
        <Navbar showSignInButton={false} logOut={true} />
        <Banner />
        <Row
        title="HMOVIES HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=fdedfef3a4a4520a9412a99ce4494ad1&language=en-US"
        isLargeRow
      />
      <Row
        title="TV SHOWS"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_networks=123&language=en-US"
        isLargeRow
      />
      <Row
        title="ACTION MOVIES"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_genres=28&language=en-US"
        isLargeRow
      />
      <Row
        title="COMEDY MOVIES"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_genres=35&language=en-US"
        isLargeRow
      />
      <Row
        title="HORROR MOVIES"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_genres=27&language=en-US"
        isLargeRow
      />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_genres=10749&language=en-US"
        isLargeRow
      />
      <Row
        title="DOCUMENTARIES"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=fdedfef3a4a4520a9412a99ce4494ad1&with_genres=99&language=en-US"
        isLargeRow
      />
    </div>
  );
}

export default HomePage