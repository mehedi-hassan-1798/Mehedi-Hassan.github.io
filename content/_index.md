---
title: ""
summary: "Academic website of Mehedi Hassan"
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ""
      button:
        text: Download CV
        url: uploads/Mehedi_Hassan_CV.pdf
    design:
      background:
        gradient_mesh:
          enable: false
      name:
        size: md
      avatar:
        size: medium
        shape: rounded

  - block: markdown
    id: research
    content:
      title: Research
      text: |-
        My research focuses on machine learning methods that identify
        suspicious behaviors in evolving networked systems.

        **Dynamic Network Anomaly Detection**  
        Detecting anomalous links and communication patterns as
        network structures change over time.

        **Machine Learning for Cybersecurity**  
        Developing representation learning and intrusion detection
        methods for malicious network activity.

        **Graph Learning and Explainability**  
        Investigating graph-based models and interpretable approaches
        for understanding emerging cyber threats.
    design:
      columns: "1"

  - block: collection
    id: papers
    content:
      title: Publications
      filters:
        folders:
          - publications
    design:
      view: citation

  - block: markdown
    id: contact
    content:
      title: Contact
      text: |-
        **Mehedi Hassan, Ph.D.**  
        Department of Electrical Engineering and Computer Science  
        University of Arkansas  
        Office: JBHT 419  
        Fayetteville, Arkansas, USA

        [Email me](mailto:mehedi1798@gmail.com)
    design:
      columns: "1"
---
