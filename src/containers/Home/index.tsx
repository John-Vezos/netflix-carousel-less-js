import { ReactNode, useMemo } from 'react';

import SvgNext from '@src/assets/icons/Next';
import SvgPrevious from '@src/assets/icons/Previous';

import styled, { css } from '@styles/styled-components';

import useAxios from './../../hooks/useAxios';

const BASE_URL = 'https://api.themoviedb.org/3';
const OPTION = 'movie';
const CATEGORY = 'popular';
const API_KEY = '6de482bc8c5768aa3648618b9c3cc98a';
const QUERY_API_KEY = `api_key=${API_KEY}`;
// https://api.themoviedb.org/3/movie/popular?api_key=6de482bc8c5768aa3648618b9c3cc98a
// https://image.tmdb.org/t/p/w500//fkWiJN08Y9eWl0RIurUSIOn88kr.jpg

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface ResultsType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface DataType {
  page: number;
  results: ResultsType[];
  total_pages: number;
  total_results: number;
}

const Index = () => {
  const { response, loading } = useAxios({
    method: 'GeT',
    url: `${BASE_URL}/${OPTION}/${CATEGORY}?${QUERY_API_KEY}`,
    headers: {
      accept: '*/*',
    },
  });

  const movies = useMemo(() => {
    return response?.data as DataType;
  }, [response]);

  const renderMoviesSection = (start = 0, end = 100) => (
    <>
      {movies.results.slice(start, end).map(movie => (
        <MediaElement key={movie.id}>
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={`name: ${movie.id}`}
          />
        </MediaElement>
      ))}
    </>
  );

  const Group = ({
    children,
    groupId,
  }: {
    children: ReactNode;
    groupId: number;
  }) => {
    return (
      <Grouped id={`group-${groupId}`}>
        <AnchorPrevious href={`#group-${groupId - 1}`}>
          <SvgPrevious />
        </AnchorPrevious>

        {children}

        <AnchorNext href={`#group-${groupId + 1}`}>
          <SvgNext />
        </AnchorNext>
      </Grouped>
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <MediaWrapper>
      <Wrapper>
        {/* ! Group 1 */}
        <Group groupId={0}>{renderMoviesSection(0, 6)}</Group>
        {/* ! Group 2 */}
        <Group groupId={1}>{renderMoviesSection(6, 12)}</Group>
        {/* ! Group 3 */}
        <Group groupId={2}>{renderMoviesSection(12, 18)}</Group>
        {/* ! Group 4 */}
        <Group groupId={3}>{renderMoviesSection(6, 12)}</Group>
        {/* ! Group 5 */}
        <Group groupId={4}>{renderMoviesSection(12, 18)}</Group>

        <NavigationIndicators>
          <div />
          <div />
          <div />
          <div />
          <div />
        </NavigationIndicators>
      </Wrapper>
    </MediaWrapper>
  );
};

export default Index;

const styles = css`
  display: grid;
  grid-auto-flow: column;
  gap: 0.125rem;
`;
const MediaWrapper = styled.div`
  position: relative;
`;

const MediaElement = styled.div`
  border-radius: 0.25rem;
  overflow: hidden;

  & img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`;

const Anchor = styled.a`
  color: ${props => props.theme.primary};
  position: absolute;
  z-index: 1;
  padding: 0 1rem;
  background: rgb(0 0 0 / 0);
  opacity: 0;

  width: 3rem;
  top: 0;
  bottom: 0;

  display: none;
  align-items: center;

  &:hover {
    background: rgb(0 0 0 / 0.3);
  }

  svg {
    transition: transform 75ms linear;
    transform: scale(1);
  }

  svg:hover {
    transform: scale(1.2);
  }
`;

const AnchorPrevious = styled(Anchor)`
  left: 0;
`;
const AnchorNext = styled(Anchor)`
  right: 0;
`;

// Navigation Indicators
const NavigationIndicators = styled.div`
  opacity: 0;
  position: absolute;
  top: -1rem;
  right: 3rem;
  display: flex;
  gap: 3px;

  & > * {
    width: 1rem;
    height: 2px;
    background-color: ${props => props.theme.primary};
    opacity: 0.5;
  }

  & > *:nth-child(1) {
    opacity: 1;
  }
`;

const Grouped = styled.section`
  ${styles};
  grid-auto-columns: 1fr;

  &:nth-child(1):target ~ ${NavigationIndicators} > *:nth-child(1),
  &:nth-child(2):target ~ ${NavigationIndicators} > *:nth-child(2),
  &:nth-child(3):target ~ ${NavigationIndicators} > *:nth-child(3),
  &:nth-child(4):target ~ ${NavigationIndicators} > *:nth-child(4),
  &:nth-child(5):target ~ ${NavigationIndicators} > *:nth-child(5) {
    opacity: 1 !important;
  }

  &:target :where(${AnchorPrevious}, ${AnchorNext}) {
    display: flex;
  }

  &:first-child :where(${AnchorPrevious}, ${AnchorNext}) {
    display: flex;
  }

  &:last-of-type ${AnchorNext} {
    display: none;
  }

  &:first-of-type ${AnchorPrevious} {
    display: none;
  }
`;

const Wrapper = styled.div`
  ${styles};
  grid-auto-columns: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  padding: 0 3rem;
  scroll-padding-inline: 3rem;

  &:hover :where(${AnchorPrevious}, ${AnchorNext}),
  &:hover ${NavigationIndicators} {
    opacity: 1;
  }

  &:has(:target:not(:first-child)) ${Grouped}:first-of-type ${AnchorNext} {
    display: none;
  }

  &:has(${Grouped}:target) ${NavigationIndicators} > *:first-child {
    opacity: 0.5;
  }
`;
