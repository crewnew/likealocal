import { connect } from "react-redux";
import styled from "styled-components";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Snippet,
} from "react-instantsearch-dom";
import searchImg from "../../assets/search.png";

const searchClient = instantMeiliSearch("http://164.90.235.228/", "");

function Search(props) {
  return (
    <div>
      <StyledResults>
        <StyledTitle>
          Search results for: {props.query.query} in Berlin
        </StyledTitle>
        <h3>
          35 tips and 2 tours by <span style={{ color: "red" }}>13 locals</span>
        </h3>
      </StyledResults>
      <StyledContent>
        <InstantSearch
          indexName="places"
          searchClient={searchClient}
          // searchState={props?.query}
        >
          <StyledPanels>
            <StyledLeftPanel>
              <ClearRefinements />
              <h2>Place Style</h2>
              <RefinementList attribute="place_style" />
              <h2>Place Style Type</h2>
              <RefinementList attribute="place_style_type" />
              <Configure
                hitsPerPage={20}
                attributesToSnippet={["description:50"]}
                snippetEllipsisText={"..."}
              />
            </StyledLeftPanel>

            <StyledRightPanel>
              <div style={{ display: "none" }}>
                <SearchBox defaultRefinement={props?.query.query} />
              </div>
              <Hits hitComponent={Hit} />
            </StyledRightPanel>
          </StyledPanels>
        </InstantSearch>
      </StyledContent>
    </div>
  );
}

function Hit(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        background: "white",
        marginBottom: '20px',
        boxShadow: "2px 3px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        border: '3px solid blue',
      }}
    >
      <StyledImg src={searchImg} alt="Search"/>
      <div style={{ border: '1px solid green', position: 'relative', }}>
        
        <StyledHighlight key={props.hit} attribute="name" hit={props.hit} />
        <Snippet attribute="description" hit={props.hit} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    query: state.searchReducer,
  };
};

export default connect(mapStateToProps)(Search);

const StyledResults = styled.div`
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 65px;
  line-height: 1.05;
  font-family: "ProbaPro", sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StyledContent = styled.div`
  background-color: white;
`;

const StyledPanels = styled.div`
  border: 1px solid green;
  display: flex;
  padding: 0 14%;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const StyledLeftPanel = styled.div`
  border: 1px solid red;
  width: 25%;
  padding-right: 12px;

  .ais-RefinementList-label {
    position: relative;
    width: 100%;
    padding: 6px;
  }
  .ais-RefinementList-item {
    height: 40px;
    margin: 1px 0;
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
  }
  .ais-RefinementList-labelText {
    margin-left: 4px;
  }
  .ais-RefinementList-count {
    color: #00000050;
    position: absolute;
    right: 20px;
  }
  h2 {
    font-size: 18px;
    margin: 10px;
  }
  .ais-ClearRefinements-button {
    width: 100%;
    height: 40px;
  }
`;

const StyledRightPanel = styled.div`
  border: 1px solid red;
  width: 75%;
`;

const StyledHighlight = styled(Highlight)`
  border: 1px solid red;
  height: auto;
`;

const StyledHighlightWrapper = styled(Highlight)`
  border: 1px solid green;
`;

const StyledImg = styled.img`
  border: 1px solid green;
  width: 30%;
  height: 100%;
  object-fit: cover;
`;
